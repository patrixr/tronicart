package io.tronica.sketches.space_invaders.interfaces

import processing.core.PVector

interface Sized {
    fun size(): PVector

    val width get() = size().x
    val height get() = size().y
    val w get() = width
    val h get() = height
}