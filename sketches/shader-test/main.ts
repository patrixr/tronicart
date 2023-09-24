import P5 from 'p5';


interface Node extends P5.Vector {
  id: number
}

interface Light {
  id?: number,
  name?: string,
  pos: P5.Vector,
  color?: P5.Color,
  intensity?: number,
  range?: number
}

class MultiLightShader {
  private p5: P5;
  private vertShaderSource: string;
  private fragShaderSource: string;
  private shader: P5.Shader;
  private lights: Light[];

  constructor(p5: P5, lights: Light[]) {
    this.p5 = p5;
    this.lights = lights;
    this.vertShaderSource = `
      precision mediump float;
      
      attribute vec3 aPosition;
      attribute vec2 aTexCoord;
      
      varying vec2 vTexCoord;
      
      void main() {
        vec4 positionVec4 = vec4(aPosition, 1.0);
        positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
        gl_Position = positionVec4;
      
        // Pass the texture coordinate to the fragment shader
        vTexCoord = aTexCoord;
      }
    `;
    this.fragShaderSource = this.buildFragShaderSource(lights.length);
    this.shader = this.p5.createShader(this.vertShaderSource, this.fragShaderSource);
  }

  private buildFragShaderSource(lightCount: number): string {
    let lightCalculations = '';
    for (let i = 0; i < lightCount; i++) {
      lightCalculations += `
      // Calculate the distance to light ${i}
      float distance${i} = length(uLightPos[${i}] - vTexCoord);

      // Clamp the distance to the range of light ${i}
      distance${i} = clamp(distance${i}, 0.0, uLightRange[${i}]);

      // Calculate a tint based on the distance to light ${i}
      float tint${i} = uLightIntensity[${i}] * (1.0 - distance${i} / uLightRange[${i}]);

      // Accumulate the effect of each light
      vec4 lightEffect${i} = vec4(uLightColor[${i}], 1.0) * tint${i};
                                                                                     
      totalLightEffect += lightEffect${i};
    `;
    }

    // Apply the accumulated light effect onto the original color
    return `
    precision mediump float;

    uniform sampler2D uSampler;
    uniform vec2 uLightPos[${lightCount}];
    uniform vec3 uLightColor[${lightCount}];
    uniform float uLightRange[${lightCount}];
    uniform float uLightIntensity[${lightCount}];
    varying vec2 vTexCoord;

    void main() {
      vec4 color = texture2D(uSampler, vTexCoord);
      vec4 totalLightEffect = vec4(0.0, 0.0, 0.0, 0.0);
      ${lightCalculations}
      color = mix(color, totalLightEffect, totalLightEffect.a);
      gl_FragColor = color;
    }
  `;
  }
  
  private glslColor(color: P5.Color): number[] {
    const { p5 } = this;
    return [
      p5.red(color) / 255.0,
      p5.green(color) / 255.0,
      p5.blue(color) / 255.0
    ];
  }

  public begin() {
    this.p5.shader(this.shader);
    this.shader.setUniform('uSampler', this.p5.get());
    
    for (const i in this.lights) {
      const { intensity = 1, range = 1, pos, color = this.p5.color(255) } = this.lights[i];
      this.shader.setUniform(`uLightPos[${i}]`, [0.5 + pos.x / this.p5.width, 0.5 - pos.y / this.p5.height]);
      this.shader.setUniform(`uLightColor[${i}]`, this.glslColor(color));
      this.shader.setUniform(`uLightRange[${i}]`, range);
      this.shader.setUniform(`uLightIntensity[${i}]`, intensity);
    }
  }
  
  public end() {
    this.p5.resetShader();
  }
  
  public getLights() {
    return this.lights;
  }
}

const sketch = (p5: P5) => {
  let rotation = 0;
  let theShader: MultiLightShader;
  const nodes: P5.Vector[] = [];
  
  const createNode = (x: number, y: number) => {
    return p5.createVector(x, y)
  }
  
  p5.preload = () => {
    const seed = (window as any).fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    p5.rectMode(p5.CENTER);
    
    theShader = new MultiLightShader(p5, [
      {
        pos: p5.createVector(0, 0),
        color: p5.color(255, 0, 0)
      },
      {
        pos: p5.createVector(300, 300),
        color: p5.color(0, 255, 0)
      }
    ]);
    


    const pointCount = 30;
    const step = p5.width / pointCount;
    for (let i = 0; i < pointCount; ++i) {
      nodes.push(
        createNode(i * step - p5.width / 2, p5.random(-10, 10))
        )
    }
  };

  p5.draw = (): void => {
    p5.clear(255,255,255, 255);
    p5.stroke(0);
    p5.noFill();
    p5.rotate(rotation);

    theShader.begin();
    p5.fill(30, 120, 80);
    nodes.forEach((n : Node) => {
      p5.rect(n.x, n.y, 10, 10);
    });
    p5.fill(255, 0, 255);
    p5.noStroke();
    p5.rect(0, 0, p5.width, p5.height);
    theShader.end();


    if (p5.frameCount >= 700) {
      p5.noLoop();
    }
    
  };
};

new P5(sketch);
