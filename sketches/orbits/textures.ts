import P5 from 'p5';
import { editPixels } from '@tronicart/cc/drawing/pixels';

export function smokeyBackground(
  p5: P5 | P5.Graphics,
  bgColorStart = p5.color('#030C34'),
  bgColorEnd = p5.color('#000000')
) {
  p5.background(0);
  p5.pixelDensity(1);
  editPixels(p5, (editor) => {
    editor.each((x, y) => {
      const noise = p5.noise(x / 300, y / 300);
      const color = p5.lerpColor(bgColorStart, bgColorEnd, p5.map(noise, 0, 1, 0, 0.9));
      editor.setPixel(x, y, color);
    });
  });
}

export function nightSky(p5: P5 | P5.Graphics) {
  const pixelCount = p5.width * p5.height;
  const starCount = p5.random(pixelCount * 0.001, pixelCount * 0.003);

  const colors = [
    p5.color('#9bb0ff'),
    p5.color('#aabfff'),
    p5.color('#cad7ff'),
    p5.color('#f8f7ff'),
    p5.color('#fff4ea'),
    p5.color('#ffd2a1'),
    p5.color('#ffcc6f')
  ];

  smokeyBackground(p5);

  p5.blendMode(p5.BLEND);

  // Stars
  for (let i = 0; i < starCount; ++i) {
    const x = p5.random(p5.width);
    const y = p5.random(p5.height);
    const noise = p5.noise(x / 300, y / 300);
    const color = p5.random(colors);

    color.setAlpha(p5.map(noise, 0, 1, 10, 150));

    p5.strokeWeight(p5.random(0, 3));
    p5.stroke(color);
    p5.point(x, y);
  }
}
