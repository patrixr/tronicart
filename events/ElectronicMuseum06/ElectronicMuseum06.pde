import com.hamoid.*;
import org.openkinect.freenect.*;
import org.openkinect.processing.*;

Kinect kinect;
VideoExport videoExport;

boolean recording = false;
float[] depthLookUp = new float[2048];
float minDepth =  496;
float maxDepth = 850;
int angle = 15;
int frameChunkCount = 0;

// ------------------------------------
// STEUP
// ------------------------------------

void settings() {
  
  if (FULLSCREEN) {
    fullScreen(P2D, FULLSCREEN_DISPLAY);  
  } else {
    size(WINDOW_WIDTH, WINDOW_HEIGHT, P2D);
  }
  
  pixelDensity(1);
}

void setup() {
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  
  $.init();
  
  if (ALLOW_RECORDING) {
    videoExport = new VideoExport(this); 
  }
  
  if (KINECT_ENABLED) {
    kinect = new Kinect(this);
    kinect.initDepth();
    
    for (int i = 0; i < depthLookUp.length; i++) {
      depthLookUp[i] = rawDepthToMeters(i);
    }
  }
  
  if (LOADED_VERTICES_FROM_SOURCE_IMAGES) {
    loadVerticesFromSourceImage();  
  }
}

// ------------------------------------
// LOOP
// ------------------------------------

void draw() {
  try {
    drawInternals();
  } catch (Exception e) {
     e.printStackTrace();
     exit();
  }
}

void drawInternals() {
  transparentOverlay();
  
  backgroundBlinking();
  
  updateAttractor();
  
  updateMesh();
  
  $.orchestrator.draw();
    
  drawVertices();
  
  $.field.update();
  
  var max = $.currentState == State.PARKED ? MAX_PARTICLES / 2 : MAX_PARTICLES;
  
  applyKinectMode();  
  
  if ($.currentState == State.KINECT) {
    for (int i = 0; $.orchestrator.particleCount() < max && i < MAX_SPAWN_PARTICLES; ++i) {
      var point = $.kinectPoints.get(floor(random($.kinectPointsDetected)));
      $.orchestrator.spawnParticle(point.x, point.y);
    }
  }
  else if ($.orchestrator.particleCount() < max) {
    // Outside of kinect mode, we just regularly spawn particles
    $.orchestrator.spawnParticles(
      constrain(MAX_SPAWN_PARTICLES, 0, MAX_PARTICLES - $.orchestrator.particleCount())
    );
  }
  
  $.ticksSpentInCurrentState++;
  
  debugLogs();
 
  autoToggleBetweenStates();
  
  if (recording) {
    videoExport.saveFrame(); 
  }
  
  if (frameCount % 200 == 0) {
    frameChunkCount++;
  }
}

// ------------------------------------
// DEBUG
// ------------------------------------

void debugLogs() {
  if (!DEBUG) return;
  push();
  fill(0);
  stroke(360);
  rect(0, 0, 200, 150);
  fill(260, 100, 100, 100);
  textSize(18);
  text((int) frameRate + " fps\n"
    + $.orchestrator.particleCount() + " particles\n"
    + "State: " + $.currentState + "\n"
    + "Kinect points: " + $.kinectPointsDetected
  , 20, 30);
  pop();
}

void drawVertices() {
   if (DEBUG_LEVEL <= 2) return;
   
   push();  
   stroke(0, 0, 100);
   noFill();
   $.vertices().forEach(v -> {
     circle(v.x, v.y, 3);
   });
   pop();
}

// ------------------------------------
// EFFECTS
// ------------------------------------

void transparentOverlay() {
  push();
  if ($.currentState == State.PARKED) {
    fill(0,0,0,40);
  } else {
    fill(0,0,0, /*$.currentState == State.KINECT ? map(cos(frameCount / 50), -1, 1, 2, 5) : */8);
  }
  rect(0, 0, width, height);
  pop();
}

void backgroundBlinking() {
  if (random(1) < 0.25) return;
  
  push();
  noStroke();
  fill(($.field.colorRand) % 360, random(30, 100), random(30, 100), 50);
  circle(random(width), random(height), random(2, 10));
  pop(); 
}

void updateAttractor() {
  if ($.currentState == State.FLOWING && frameCount % 200 == 0) {
    $.field.setAttractor(
      new PVector(random(-200, width + 200), random(-200, height + 200)),
      random(1) < 0.5 // 
    );
  }
  else if ($.currentState == State.PARKED) {
      $.field.setAttractor(
      new PVector(width/2, height/2) 
    );
  }
}

void updateMesh() {
  if (frameCount % CHANGE_MESH_VERY_N_FRAMES == 0) {
    $.currentMeshIndex++;
    if ($.currentState == State.PARKED) {
       $.orchestrator.parkParticles(); // force repark
    }
  }
}

void autoToggleBetweenStates() {
  if ($.currentState == State.KINECT || $.ticksSpentInCurrentState < ALTERNATE_STATES_EVERY_N_FRAMES) {
    // we don't interrupt kinect mode and we don't switch unless we should
    return;
  }
  
  if ($.currentState == State.PARKED) {
    setStateToFlowing();  
  } else if ($.currentState == State.FLOWING) {
    setStateToParked();
  }
}


// ------------------------------------
// BEHAVIOURS
// ------------------------------------

void setStateToParked() {
  $.orchestrator.parkParticles();
  $.currentState = State.PARKED;
  $.ticksSpentInCurrentState = 0;
}

void setStateToFlowing() {
  $.field.setAttractor(new PVector(width/2, height/2), true); // repulse
  $.orchestrator.flowParticles();
  $.currentState = State.FLOWING;
  $.ticksSpentInCurrentState = 0;
}

void setStateToKinect() {
  if ($.currentState != State.KINECT) {
    background(0); // quick black 
  }
  
  $.field.setAttractor($.kinectPointsAverage, true); // repulse
  $.orchestrator.flowParticles();
  $.currentState = State.KINECT;
  $.ticksSpentInCurrentState = 0;
}


void applyKinectMode() {
  if (!KINECT_ENABLED) {
    return;
  }
  
  int skip = 8;

  // Get the raw depth as array of integers
  int[] depth = kinect.getRawDepth();

  // Translate and rotate
  push();
  //translate(width/2, height/2);

  $.kinectPointsDetected = 0;
  $.kinectPoints = new ArrayList(1000);
  $.kinectPointsAverage = new PVector();

  var hue = $.field.colorRand % 360;
  
  for (int x = 0; x < kinect.width; x += skip) {
    for (int y = 0; y < kinect.height; y += skip) {
      int offset = x + y*kinect.width;

      // Convert kinect data to world xyz coordinate
      int rawDepth = depth[offset];
      PVector v = depthToWorld(x, y, rawDepth);
      
      if (v.z <= 0) {
        continue;
      }
      
      $.kinectPointsDetected++;
      
      var canvasX = width - (width/2 + v.x * KINECT_SCALE_FACTOR);
      var canvasY = height/2 + v.y * KINECT_SCALE_FACTOR;
      
      $.kinectPoints.add(new PVector(canvasX, canvasY));
      $.kinectPointsAverage.add(canvasX, canvasY);

      if (DEBUG_LEVEL >= 1) {
        // draw points for debugging
        //stroke(255);
        //pushMatrix();
        //translate(canvasX, canvasY);
        //circle(0, 0, 2);
        //popMatrix();
      }
      
      if ($.currentState == State.KINECT) {
        stroke(hue, 100, 100, 5);//map(cos(frameCount / 50), -1, 1, 0, 5));
        fill(0, 0, 0, 20);
        rect(canvasX, canvasY, 20, 20);
      }
    }
  }
  
  $.kinectPointsAverage.div($.kinectPointsDetected);
  pop();
  
  if ($.kinectPointsDetected >= KINECT_STATE_POINT_THRESHHOLD) {
     setStateToKinect();
  } else if ($.currentState == State.KINECT) {
     setStateToParked(); 
  }
}

// ------------------------------------
// INPUT
// ------------------------------------

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      angle++;
    } else if (keyCode == DOWN) {
      angle--;
    }
    angle = constrain(angle, 0, 30);
    kinect.setTilt(angle);
  }
  else if (key == 'p') {
    setStateToParked();
  } else if (key == 'f') {
    setStateToFlowing();
  } else if (key == 'k') {
    setStateToKinect();
  } else if (key == 'r' && ALLOW_RECORDING) {
    if (!recording) {
       println("RECORDING");
       videoExport.startMovie();
    } else {
       println("END OF RECORDING");
       videoExport.endMovie();
       exit();
    }
    recording = !recording;
  }
}

// ------------------------------------
// KINECT UTILS
// ------------------------------------

// These functions come from: http://graphics.stanford.edu/~mdfisher/Kinect.html
float rawDepthToMeters(int depthValue) {
  if (depthValue < maxDepth) {
    return (float)(1.0 / ((double)(depthValue) * -0.0030711016 + 3.3309495161));
  }
  return 0.0f;
}

// Only needed to make sense of the ouput depth values from the kinect
PVector depthToWorld(int x, int y, int depthValue) {
  final double fx_d = 1.0 / 5.9421434211923247e+02;
  final double fy_d = 1.0 / 5.9104053696870778e+02;
  final double cx_d = 3.3930780975300314e+02;
  final double cy_d = 2.4273913761751615e+02;

  // Drawing the result vector to give each point its three-dimensional space
  PVector result = new PVector();
  double depth =  depthLookUp[depthValue];//rawDepthToMeters(depthValue);
  result.x = (float)((x - cx_d) * depth * fx_d);
  result.y = (float)((y - cy_d) * depth * fy_d);
  result.z = (float)(depth);
  return result;
}

// ------------------------------------
// OTHER
// ------------------------------------

void loadVerticesFromSourceImage() {
  SOURCE_IMAGE_NAMES.forEach(fileName -> {
    
    PImage sourceImage = loadImage(fileName);
    sourceImage.resize((int) TARGET_IMAGE_WIDTH, (int) (sourceImage.height * TARGET_IMAGE_WIDTH) / sourceImage.width);
    
    ArrayList<PVector> vertices = new ArrayList(1000);
    
    sourceImage.loadPixels();
    
    for (int x = 0; x < sourceImage.width; x += MESH_PIXEL_GAP) {
      for (int y = 0; y < sourceImage.height; y += MESH_PIXEL_GAP) {
        int offset = y * sourceImage.width + x;
        color c = sourceImage.pixels[offset];
        
        if (alpha(c) > 0) {
          vertices.add(new PVector(
            x + width / 2 - sourceImage.width / 2,
            y + height / 2 - sourceImage.height / 2
           ));  
        }
      }
    }
    
    $.meshes.add(vertices);
  });
}
