package io.tronica.sketches.space_invaders.entities

import Game
import io.tronica.sketches.space_invaders.Alignment
import io.tronica.sketches.space_invaders.composition.Geometry2D
import io.tronica.sketches.space_invaders.composition.Lifeline
import io.tronica.sketches.space_invaders.composition.ShapeDrawing
import io.tronica.sketches.space_invaders.data.Shape
import io.tronica.sketches.space_invaders.interfaces.Entity
import io.tronica.sketches.space_invaders.interfaces.Killable
import processing.core.PVector

class Invader(private val game: Game, x: Float, y: Float, shape: Shape = Shape.getRandomSpaceInvader()) : Entity,
    Killable by Lifeline() {

    private val drawing = ShapeDrawing(game, shape, 4f)
    private val geometry = Geometry2D(x, y, drawing.width, drawing.height)
    private val color = game.palette.randomColor()

    override fun alignment() = Alignment.EVIL;
    override fun position(): PVector = geometry.position()
    override fun rotation(): Float = geometry.rotation()
    override fun rotation(r: Float): Float = geometry.rotation(r)
    override fun size(): PVector = geometry.size()

    override fun draw() {
        geometry.transform(game) {
            fill(color)
            stroke(0)
            strokeWeight(1f)
            drawing.draw()
        }
    }
}