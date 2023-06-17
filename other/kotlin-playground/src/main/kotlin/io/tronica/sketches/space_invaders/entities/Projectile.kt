package io.tronica.sketches.space_invaders.entities

import Game
import io.tronica.sketches.space_invaders.Alignment
import io.tronica.sketches.space_invaders.composition.Geometry2D
import io.tronica.sketches.space_invaders.composition.Lifeline
import io.tronica.sketches.space_invaders.interfaces.Entity
import io.tronica.sketches.space_invaders.interfaces.Geometry
import io.tronica.sketches.space_invaders.interfaces.Killable
import processing.core.PApplet
import processing.core.PVector
import java.util.*

class Projectile(
    private val game: Game,
    private val alignment: Alignment,
    x: Float,
    y: Float,
    private val velocity: PVector? = null,
    private val trailLen: Int = 100,
    private val speed: Float = 1f,
) : Entity,
    Geometry by Geometry2D(x, y, 3f, 3f),
    Killable by Lifeline() {

    private val trail: LinkedList<PVector> = LinkedList()
    private var distanceTraveled: Float = 0f
    private val noiseAlteration: Float = game.random(10000f)
    private val deathMargin: Int = 150
    private val colorStart = game.palette.nextColor()
    private val colorEnd = game.palette.nextColor()

    override fun alignment() = alignment

    private fun outOfBounds(): Boolean {
        return x > game.width + deathMargin || x < -deathMargin || y > game.height + deathMargin || y < -deathMargin
    }

    override fun draw() {
        if (outOfBounds()) {
            return kill()
        }

        trail.add(PVector(x, y))
        if (trail.size > trailLen) trail.removeFirst()

        game.noFill()
        trail.forEachIndexed { i, p ->
            if (i > 0) {
                val prev = trail[i - 1]
                val progress = (i.toFloat() / trail.size);
                game.stroke(game.lerpColor(colorStart, colorEnd, progress))
                game.strokeWeight(progress * w)
                game.line(p.x, p.y, prev.x, prev.y)
            }
        }

        val updatedVelocity = when (velocity) {
            null -> flowFieldVelocity()
            else -> straightVelocity(velocity)
        }

        position().add(
            PVector.mult(updatedVelocity, speed)
        )

        distanceTraveled += speed
    }

    private fun straightVelocity(velocity: PVector): PVector {
        return velocity.copy()
    }

    private fun flowFieldVelocity(): PVector {
        val angleIncrement = 0.005f
        val noise = game.noise(x * angleIncrement, y * angleIncrement, noiseAlteration)
        val scaledNoise = ((noise - 0.5f) * 2f) + 0.5f
        val angle = scaledNoise * PApplet.TWO_PI
        val newVelocity = PVector.fromAngle(angle)
        newVelocity.normalize()
        newVelocity.mult(speed * 1.5f)
        return newVelocity
    }
}