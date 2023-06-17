package io.tronica.sketches.space_invaders.composition

import Game
import io.tronica.sketches.space_invaders.data.Shape
import io.tronica.sketches.space_invaders.interfaces.Drawable

class ShapeDrawing(private val game: Game, private val shape: Shape, val cellSize: Float = 5f) : Drawable {
    private var frameIdx = 0;
    private val msPerFrame = 1000;
    private var lastTick = game.millis();

    val width = (shape.cols * cellSize)
    val height = (shape.rows * cellSize)

    private fun currentFrame(): Array<Array<Int>> {
        return shape.frames[frameIdx]
    }

    private fun nextFrame() {
        lastTick = game.millis()
        if (++frameIdx >= shape.frames.size) frameIdx = 0
    }

    override fun draw() {
        game.run {
            if (millis() - lastTick >= msPerFrame) nextFrame()

            val data = currentFrame()
            for (rowIndex in data.indices) {
                for (colIndex in data[rowIndex].indices) {
                    if (data[rowIndex][colIndex] == 1) {
                        rect(
                            (colIndex * cellSize + colIndex),
                            (rowIndex * cellSize + rowIndex),
                            cellSize,
                            cellSize
                        )
                    }
                }
            }
        }
    }
}
