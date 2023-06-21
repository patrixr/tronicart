package io.tronica.sketches.waves

import processing.core.PApplet
import processing.core.PConstants
import processing.sound.SoundFile

class Waves : PApplet() {

    private lateinit var audio: SoundFile
    private lateinit var waveform: FloatArray
    private var bufferSize: Int = 1024

    override fun settings() {
        size(720, 720, PConstants.JAVA2D)
    }

    override fun setup() {
        audio = SoundFile(this, "sample.mp3")
        audio.cue(bufferSize.toFloat())
        waveform = FloatArray(bufferSize)  // Double the size to accommodate stereo audio data
        audio.play()

        colorMode(PConstants.HSB, 360f, 100f, 100f)
        pixelDensity(1)
    }

    override fun draw() {
        background(0)

        // Analyze the audio and store the waveform data
        audio.read(waveform)

        // Draw the waveform
        stroke(255)
        noFill()
        beginShape()
        for (i in 0 until waveform.size step 2) {  // Iterate through the waveform array with a step of 2
            val x = map(i.toFloat(), 0f, waveform.size.toFloat(), 0f, width.toFloat())
            val y = map(waveform[i], -1f, 1f, height.toFloat() - 50f, 50f)  // Using left channel data (even indices)
            vertex(x, y)
        }
        endShape()
    }
}

fun main(args: Array<String>) {
    PApplet.main(Waves::class.java)
}