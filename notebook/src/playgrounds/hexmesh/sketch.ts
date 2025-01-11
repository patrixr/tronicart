import type P5 from "p5"
import { Tile } from "./tile.js"

export default (p5: P5) => {
  const rowCount = 10
  const colCount = 50
  const hexSize = 30
  const spacing = hexSize * 2

  let tiles: Tile[] = []

  // Camera variables
  let cameraAngleX = 0
  let cameraAngleY = p5.PI * (3 / 4)
  let cameraDistance = 1000
  let targetPoint = p5.createVector(0, -300, 0)

  p5.setup = () => {
    p5.createCanvas(800, 600, p5.WEBGL)
    p5.angleMode(p5.RADIANS)

    // Create tiles
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        const x = (col - rowCount / 2) * spacing
        const y = -300 + (row - rowCount / 2) * spacing * 0.866
        const offsetX = (row % 2 ? spacing / 2 : 0) - (colCount / 2) * hexSize

        const t = new Tile(p5, x + offsetX, y, -200, hexSize)
        t.setTarget(targetPoint)
        tiles.push(t)
      }
    }
  }

  p5.draw = () => {
    p5.background(20)
    p5.lights()
    diffuseLight(p5)

    skybox(p5)
    // floor(p5)

    p5.push()
    p5.fill(255, 0, 0)
    p5.noStroke()
    p5.translate(targetPoint.x, targetPoint.y, targetPoint.z)
    p5.sphere(40)
    p5.pop()

    if (p5.mouseIsPressed) {
      cameraAngleY += (p5.mouseX - p5.pmouseX) * 0.01
      // cameraAngleX += (p5.mouseY - p5.pmouseY) * 0.01
      // cameraAngleX = p5.constrain(cameraAngleX, -p5.PI / 3, p5.PI / 3)
    }

    p5.mouseWheel = (event: WheelEvent) => {
      cameraDistance += (event as any).delta ?? 0
      cameraDistance = p5.constrain(cameraDistance, 200, 1500)
      return false
    }

    const camX =
      targetPoint.x +
      cameraDistance * p5.cos(cameraAngleY) * p5.cos(cameraAngleX)
    const camY = targetPoint.y + cameraDistance * p5.sin(cameraAngleX)
    const camZ =
      targetPoint.z +
      cameraDistance * p5.sin(cameraAngleY) * p5.cos(cameraAngleX)

    p5.camera(camX, camY, camZ, targetPoint.x, -300, 0, 0, 1, 0)

    tiles.forEach((tile) => tile.draw(p5))

    targetPoint.x += 0.3
  }
}

const floor = (p5: P5) => {
  p5.push()
  p5.rotateX(p5.HALF_PI)
  p5.fill(50)
  p5.plane(5000, 5000)
  p5.pop()
}

function skybox(p5: P5, size = 2000) {
  p5.push()
  p5.noStroke()
  ;(p5 as any)._renderer.GL.disable((p5 as any)._renderer.GL.DEPTH_TEST)

  p5.push()
  p5.fill(0)
  // p5.fill(135, 206, 235)
  p5.scale(-1, 1, 1)
  p5.box(size * 2)
  p5.pop()
  ;(p5 as any)._renderer.GL.enable((p5 as any)._renderer.GL.DEPTH_TEST)
  p5.pop()
}

function diffuseLight(p5: P5, options: any = {}) {
  const {
    x = 0,
    y = -300,
    z = 300,
    r = 255, // red
    g = 255, // green
    b = 255, // blue
  } = options

  // Create the green light
  p5.pointLight(r, g, b, x, y, z)
}
