import P5 from 'p5';

const sketch = (p5: P5) => {
  let rotationY = 0;
  
  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB, 360, 100, 100);
    
    p5.stroke(27, 42, 97);
    p5.strokeWeight(4);
  };

  p5.draw = (): void => {
    p5.clear(0, 0, 0, 255)
    p5.orbitControl(4, 4);
    p5.rotateY(rotationY);
    
    const radius = 400;
    p5.drawingContext.shadowBlur = 120;
    p5.drawingContext.shadowColor = p5.color(207, 7, 99);
    p5.beginShape(p5.POINTS);
    for (let theta = 0; theta < 180; theta += 4) {
      for (let phi = 0; phi < 180; phi += 4) {
        p5.vertex(
          radius * p5.sin(theta) * p5.cos(phi),
          radius * p5.cos(theta),
          radius * p5.sin(theta) * p5.sin(phi)
        );
      }
    }
    p5.endShape();
    
    rotationY += 0.05;
  };
};

new P5(sketch);
