package io.tronica.sketches.space_invaders.interfaces

import io.tronica.sketches.space_invaders.Alignment

interface Entity : Geometry, Drawable, Killable {
    fun alignment(): Alignment
}