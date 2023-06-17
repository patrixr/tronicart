package io.tronica.sketches.space_invaders.composition

import io.tronica.sketches.space_invaders.interfaces.Killable

class Lifeline : Killable {
    private var alive = true

    override fun alive(): Boolean = alive
    override fun kill() {
        alive = false
    }
}