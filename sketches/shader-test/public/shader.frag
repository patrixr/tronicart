precision mediump float;

uniform sampler2D uSampler;
uniform vec2 uLightPos; // The position of the light source
uniform vec3 uLightColor; // The color of the light source
uniform float uLightRange; // The range of the light source
uniform float uLightIntensity; // The intensity of the light source
varying vec2 vTexCoord;

void main() {
  vec4 color = texture2D(uSampler, vTexCoord);

  // Calculate the distance to the light source
  float distance = length(uLightPos - vTexCoord);

  // Clamp the distance to the range of the light source
  distance = clamp(distance, 0.0, uLightRange);

  // Calculate a tint based on the distance
  float tint = uLightIntensity * (1.0 - distance / uLightRange); // Normalize the distance

  // Apply the tint and the light color to the pixel
  color.rgb = mix(color.rgb, uLightColor, tint);

  gl_FragColor = color;
}