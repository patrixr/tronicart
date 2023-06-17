package io.tronica.sketches.space_invaders.composition

import io.tronica.sketches.space_invaders.interfaces.Geometry
import processing.core.PApplet
import processing.core.PVector

class Geometry2D(x: Float, y: Float, w: Float, h: Float) : Geometry {
    private val pos: PVector = PVector(x, y)
    private var rotation = 0f;
    private val size = PVector(w, h)

    override fun position(): PVector {
        return pos;
    }

    override fun rotation(): Float {
        return rotation;
    }

    override fun rotation(r: Float): Float {
        rotation = r;
        return r;
    }

    override fun size(): PVector = size

    fun transform(sketch: PApplet, block: PApplet.() -> Unit) {
        sketch.push()
        sketch.translate(x, y)
        sketch.rotate(rotation)
        sketch.block()
        sketch.pop();
    }
}