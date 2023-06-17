package io.tronica.sketches.space_invaders.interfaces

interface Killable {
    fun alive(): Boolean
    fun kill(): Unit
    fun dead() = !alive()
}