package io.tronica.sketches.space_invaders.interfaces

import processing.core.PVector

interface Geometry {
    fun position(): PVector
    fun rotation(): Float
    fun rotation(r: Float): Float
    fun size(): PVector

    val width get() = size().x
    val height get() = size().y
    val w get() = width
    val h get() = height
    val x get() = position().x
    val y get() = position().y
}