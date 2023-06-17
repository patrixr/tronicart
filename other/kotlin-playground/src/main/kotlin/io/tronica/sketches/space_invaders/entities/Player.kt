package io.tronica.sketches.space_invaders.entities

import Game
import io.tronica.lib.throttle
import io.tronica.sketches.space_invaders.Alignment
import io.tronica.sketches.space_invaders.composition.Geometry2D
import io.tronica.sketches.space_invaders.composition.Lifeline
import io.tronica.sketches.space_invaders.composition.ShapeDrawing
import io.tronica.sketches.space_invaders.data.Shape
import io.tronica.sketches.space_invaders.interfaces.Entity
import io.tronica.sketches.space_invaders.interfaces.Killable
import processing.core.PVector

class Player(private val game: Game, x: Float, y: Float, shape: Shape = Shape.getRandomSpaceship()) : Entity,
    Killable by Lifeline() {

    private val drawing = ShapeDrawing(game, shape, 7f)
    private val geometry = Geometry2D(x, y, drawing.width, drawing.height)

    override fun alignment() = Alignment.GOOD;
    override fun position(): PVector = geometry.position()
    override fun rotation(): Float = geometry.rotation()
    override fun rotation(r: Float): Float = geometry.rotation(r)
    override fun size(): PVector = geometry.size()

    override fun draw() {
        geometry.transform(game) {
            stroke(255)
            drawing.draw()
        }
    }

    private fun newProjectile() = Projectile(
        game,
        Alignment.GOOD,
        x = x + w / 2,
        y = (y - 10f) + h / 2,
        velocity = PVector(0f, -1f),
        speed = 3f,
        trailLen = 20
    )

    val throttledShoot = throttle(500) {
        game.spawn(newProjectile())
    }

    fun shoot() = throttledShoot()

    fun move(steps: Int) {
        position().add(drawing.cellSize.toFloat() * steps, 0f)
    }
}