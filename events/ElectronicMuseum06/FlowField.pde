public class FlowField {
  public float tileSize;
  private int cols;
  private int rows;
  private ArrayList<PVector> vectors;
  private PVector center;
  private float inc;
  private float tick = 0; 
  private PVector baseVector = new PVector(0, -1);
  public float colorRand = random(360);
  public boolean repulse = false;
  public float deathDistance = 5;

  public FlowField(float width, float height, float tileSize) {
    this.tileSize = tileSize;
    this.cols = (int) (width / tileSize);
    this.rows = (int) (height / tileSize);
    this.center = null;
    this.vectors = new ArrayList();
    this.inc = 0.1;
    this.center = null;
    this.vectors = new ArrayList(cols * rows);
    
    for (int i = 0; i < cols * rows; ++i) {
      this.vectors.add(null);
    }
  }

  public void setAttractor(PVector center, boolean repulse) {
    this.repulse = repulse;
    this.center = center != null ? center.copy() : center;
  }
  
  public void setAttractor(PVector center) {
    setAttractor(center, false);
  }
  
  public boolean hasAttractor() {
    return center != null; 
  }

  private int index(int x, int y) {    
    return x + y * this.cols;
  }

  public PVector get(int x, int y) {
    var idx = index(x, y);
    
    if (idx >= this.vectors.size()) {
      var vx = x > width ? 1 : -1;
      var vy = x > height ? 1 : -1;
      return new PVector(vx, vy);
    }
    
    return this.vectors.get(index(x, y));
  }

  public void update() {      
      colorRand = (colorRand + 0.1) % 360;
    
      float yoff = 0;
      for (int y = 0; y < this.rows; y++) {
        float xoff = 0;
        for (int x = 0; x < this.cols; x++) {
          PVector v;
  
          if (this.center != null) {
            v = this.center
              .copy()
              .sub(new PVector(x * tileSize, y * tileSize))
              .mult(repulse ? -1 : 1)
              .rotate(noise(xoff, yoff, tick) * TWO_PI);
          } else {
            v = baseVector.copy().rotate(noise(xoff, yoff, tick) * TWO_PI);
          }
          
          v.setMag(-1);
          this.vectors.set(index(x, y), v);
          xoff += this.inc;
          
          if (DEBUG && DEBUG_LEVEL >= 3) {    
            var realX = x * tileSize;
            var realY = y * tileSize;
            push();
            stroke(255);
            translate(realX, realY);
            line(0, 0, v.x * 10, v.y * 10);
            pop();
          }
        }
        yoff += this.inc;
      }
        
    tick += 0.01;
  }
}
