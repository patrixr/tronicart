const TWO_PI = Math.PI * 2

/**
 * Generates points on the circumference of a circle.
 * @param {number} radius - The radius of the circle.
 * @param {number} resolution - The number of points to generate.
 * @param {number} [centerX=0] - The x-coordinate of the circle's center.
 * @param {number} [centerY=0] - The y-coordinate of the circle's center.
 * @returns {Object[]} An array of points on the circumference of the circle.
 */
export function circlePoints(radius, resolution, centerX = 0, centerY = 0) {
  const step = TWO_PI / resolution
  const points = []

  for (let i = 0; i < resolution; ++i) {
    const angle = i * step
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    points.push({ x, y })
  }

  return points
}
