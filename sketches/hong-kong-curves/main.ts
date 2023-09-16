import P5, { Vector } from 'p5';
import { circlePoints } from '@tronicart/p5-fest/angles';
import { Palette } from '@tronicart/p5-fest/palette';
import { CanvasCapture } from 'canvas-capture';

interface Node extends P5.Vector {}

interface Curve {
  nodes: Node[];
  id: number;
  centerX: number;
  centerY: number;
  growing: boolean;
  closed: boolean;
  opacity: number;
  speed: number;
}

const sketch = (p5: P5) => {
  const curves: Curve[] = [];
  const minSeparation = 36;
  const maxNodeCount = 2000;

  let font: P5.Font;
  let lastCurveId = 0;
  let nodeCount = 0;

  // -----------------------------------------

  const drawCurve = (curve: Curve) => {
    const c = p5.color(Palette.intToColor(curve.id));
    c.setAlpha(curve.opacity);

    p5.push();
    p5.curveTightness(0);
    p5.beginShape();
    p5.noFill();
    p5.stroke(c);
    p5.strokeWeight(2);
    p5.translate(curve.centerX, curve.centerY);
    for (let i = 1; i < curve.nodes.length; ++i) {
      const node = curve.nodes[i];
      const prevNode = curve.nodes[i - 1];
      p5.curveVertex(node.x, node.y);
    }
    p5.endShape(curve.closed ? p5.CLOSE : p5.OPEN);
    p5.pop();
  };

  const createNode = (x: number, y: number) => {
    nodeCount++;
    return p5.createVector(x, y);
  };

  // -----------------------------------------

  const updateCurve = (curve: Curve) => {
    if (!curve.growing) return;

    for (let node of curve.nodes) {
      updateNode(curve, node);
    }
  };

  // -----------------------------------------

  const updateNode = (curve: Curve, node: Node) => {
    for (let otherCurve of curves) {
      if (!otherCurve.growing) continue;

      for (let otherNode of otherCurve.nodes) {
        if (otherNode === node) continue;

        const dist = Vector.sub(node, otherNode).mag();
        if (dist < minSeparation) {
          const diff = minSeparation - dist;
          const force = Vector.sub(node, otherNode).setMag(diff * curve.speed);
          node.add(force);
        }
      }
    }
  };

  // -----------------------------------------

  const spawnPoints = (curve: Curve) => {
    if (!curve.growing || nodeCount >= maxNodeCount) return;

    for (let i = 1; i < curve.nodes.length; ++i) {
      if (nodeCount >= maxNodeCount) return;

      const node = curve.nodes[i];
      const prevNode = curve.nodes[i - 1];
      const dist = Vector.sub(node, prevNode).mag();
      if (dist > minSeparation) {
        let newPos = Vector.add(node, prevNode).mult(0.5);
        curve.nodes.splice(i, 0, createNode(newPos.x, newPos.y));
      }
    }
  };

  // -----------------------------------------

  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
    font = p5.loadFont('assets/noto.ttf');
  };

  // -----------------------------------------

  p5.setup = (): void => {
    Palette.configure({ p5 });
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);
    p5.stroke(255);
    p5.noFill();

    curves.push(generateRandomCurve());
    curves.push(generateRandomCurve());
    curves.push(generateRandomCurve());
    curves.push(generateRandomCurve());
    curves.push(generateRandomCurve());
    curves.push(generateRandomCurve());
    curves.push(...textToCurves('香港'));

    CanvasCapture.init(window.document.getElementById('defaultCanvas0'));
    CanvasCapture.bindKeyToVideoRecord('v', {
      format: 'webm',
      name: 'sketch-capture',
      quality: 1
    });
  };

  const textToCurves = (
    text: string,
    fontSize = p5.height / 5,
    x = p5.width / 2,
    y = p5.height / 2
  ): Curve[] => {
    const letterCurves: Curve[] = [];
    const leftMostX = -(text.length / 2) * fontSize;

    for (const i in text) {
      const char = text[i];
      let curve: Curve = {
        nodes: [],
        centerX: x,
        centerY: y,
        id: ++lastCurveId,
        growing: false,
        closed: false,
        opacity: 255,
        speed: 0
      };

      p5.textSize(fontSize);
      p5.textAlign(p5.CENTER);
      let points = font.textToPoints(char, leftMostX + i * fontSize, fontSize / 2, fontSize, {
        sampleFactor: 0.2, // Play around with this for more/less points
        simplifyThreshold: 0 // Set to a non-zero value to simplify the shape
      });

      for (let point of points) {
        let node: Node = p5.createVector(point.x, point.y);
        curve.nodes.push(node);
      }

      letterCurves.push(curve);
    }

    return letterCurves;
  };

  const generateRandomCurve = (numNodes = 10, noiseScale = 2): Curve => {
    const rangeIndicator = p5.width / 8;
    const curve: Curve = {
      nodes: [],
      centerX: p5.random(p5.width),
      centerY: p5.random(p5.height),
      id: ++lastCurveId,
      growing: true,
      closed: false,
      opacity: p5.random(40, 130),
      speed: p5.random(0.01, 0.05)
    };
    let xoff = Math.random() * 10000; // random offset to make each curve different
    let yoff = Math.random() * 10000; // random offset to make each curve different

    for (let i = 0; i < numNodes; i++) {
      // Use Perlin noise to generate x and y coordinates
      let x = p5.map(p5.noise(xoff), 0, 1, -rangeIndicator, rangeIndicator);
      let y = p5.map(p5.noise(yoff), 0, 1, -rangeIndicator, rangeIndicator);

      // Create a new Node (Vector) with the generated coordinates
      let node: Node = p5.createVector(x, y);

      // Push the new Node to the nodes array of the curve
      curve.nodes.push(node);

      // Increment the noise offset to get the next value
      xoff += noiseScale;
      yoff += noiseScale;
    }

    return curve;
  };

  // -----------------------------------------

  p5.draw = (): void => {
    p5.background(0);

    p5.push();

    curves.forEach(updateCurve);
    curves.forEach(spawnPoints);
    curves.forEach(drawCurve);

    p5.pop();

    if (CanvasCapture.isRecording()) {
      CanvasCapture.recordFrame();
    }
  };
};

new P5(sketch);
