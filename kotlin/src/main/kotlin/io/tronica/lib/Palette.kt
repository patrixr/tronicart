package io.tronica.lib

import processing.core.PApplet

class Palette(private val pApplet: PApplet, private val mode: String) {
    private val colors = mutableListOf<Int>()
    private var currentIndex = 0

    init {
        generateColors()
    }

    private fun generateColors() {
        when (mode) {
            "mono" -> {
                val hue = pApplet.random(0f, 361f)
                for (i in 0..4) {
                    colors.add(pApplet.color(hue, pApplet.random(50f, 101f), pApplet.random(0f, 101f)))
                }
            }

            "random" -> {
                for (i in 0..4) {
                    colors.add(
                        pApplet.color(
                            pApplet.random(0f, 361f),
                            pApplet.random(0f, 101f),
                            pApplet.random(0f, 101f)
                        )
                    )
                }
            }
        }
    }

    fun nextColor(): Int {
        if (currentIndex >= colors.size) {
            currentIndex = 0
        }
        return colors[currentIndex++]
    }

    fun randomColor(): Int {
        return colors[PApplet.floor(pApplet.random(0F, colors.size.toFloat()))]
    }
}