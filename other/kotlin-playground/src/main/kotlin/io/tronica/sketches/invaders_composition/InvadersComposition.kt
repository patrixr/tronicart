package io.tronica.sketches.invaders_composition

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.hamoid.VideoExport
import io.tronica.lib.Palette
import processing.core.PApplet
import processing.core.PConstants
import processing.core.PGraphics
import processing.core.PImage
import java.io.InputStreamReader
import java.lang.reflect.Type

data class InvaderShape(val name: String, val data: Array<Array<Int>>);

class InvadersComposition : PApplet() {

    private var invaderCellSize = 10F
    private val spacing = 5
    private lateinit var palette: Palette
    private lateinit var sourceImage: PImage;
    private lateinit var layer: PGraphics
    private var seed: Long = 0L
    private lateinit var videoExport: VideoExport
    private val enableRecording = true;
    private var isRecording = false;
    private var isAnimating = true;
    private var postCompletionTimer = 200;

    override fun settings() {
        size(720, 1080, PConstants.JAVA2D)
    }

    override fun setup() {
        colorMode(PConstants.HSB, 360f, 100f, 100f)
        pixelDensity(1)
        palette = Palette(this, mode = "mono")
        sourceImage = loadImage("invader_composition/img_12.png")
        sourceImage.resize(width, height)
        layer = createGraphics(sourceImage.width, sourceImage.height, PConstants.JAVA2D)
        layer.colorMode(PConstants.HSB, 360f, 100f, 100f)
        seed = random(0F, 1.00000003E16F).toLong()
        videoExport = VideoExport(this, "invaders.mp4")

        if (enableRecording) {
            videoExport.startMovie()
            isRecording = true;
        }
    }

    override fun draw() {
        if (!isAnimating) {
            return applyRecording();
        }

        background(0) // Clear the screen
        randomSeed(seed)
        val shape = getSpaceInvaderShape()
        val shapeWidth = shape[0].size * invaderCellSize + (shape[0].size - 1) * invaderCellSize
        val shapeHeight = shape.size * invaderCellSize + (shape.size - 1) * invaderCellSize
        val black = color(0)

        layer.run {
            beginDraw()
            background(0)
            var y = 0f
            while (y < height) {
                var x = 0f;
                while (x < width) {
                    val c =
                        getAverageColorFromSourceImage(x.toInt(), y.toInt(), shapeWidth.toInt(), shapeHeight.toInt())
                    fill(c)
                    if (invaderCellSize > 2) {
                        stroke(0)
                    } else {
                        stroke(c);
                    }
                    stroke(lerpColor(black, c, map(invaderCellSize, 1F, 10F, 1F, 0F)))
                    drawInvader(x.toFloat(), y.toFloat(), getSpaceInvaderShape())
                    x += shapeWidth + spacing
                }
                y += shapeHeight + spacing;
            }
            endDraw()
        }

        push()
        translate(width.toFloat() / 2 - layer.width.toFloat() / 2, height.toFloat() / 2 - layer.height.toFloat() / 2)
        image(layer, 0F, 0F)
        pop()

        applyRecording();

        invaderCellSize = constrain(invaderCellSize - 0.02F, 1F, Float.POSITIVE_INFINITY);
        if (invaderCellSize == 1F) {
            isAnimating = false;
            println("Animation completed")
        }
    }

    private fun applyRecording() {
        if (isRecording && postCompletionTimer <= 0) {
            videoExport.endMovie();
            isRecording = false;
            return;
        }

        if (isRecording) {
            videoExport.saveFrame()
        }

        if (!isAnimating && postCompletionTimer > 0) {
            postCompletionTimer -= 1;
            println("postCompletionTimer: $postCompletionTimer")
        }
    }

    private fun drawInvader(x: Float, y: Float, shape: Array<Array<Int>>) {
        layer.run {
            push()
            translate(x, y)
            for (rowIndex in shape.indices) {
                for (colIndex in shape[rowIndex].indices) {
                    if (shape[rowIndex][colIndex] == 1) {
                        rect(
                            (colIndex * invaderCellSize + colIndex).toFloat(),
                            (rowIndex * invaderCellSize + rowIndex).toFloat(),
                            invaderCellSize.toFloat(),
                            invaderCellSize.toFloat()
                        )
                    }
                }
            }
            pop()
        }
    }

    private fun getAverageColorFromSourceImage(x: Int, y: Int, w: Int, h: Int): Int {
        var totalHue = 0f
        var totalSaturation = 0f
        var totalBrightness = 0f
        var count = 0

        for (i in x until x + w) {
            for (j in y until y + h) {
                if (i < sourceImage.width && j < sourceImage.height) {
                    val c = sourceImage.get(i, j)
                    val hue = hue(c)
                    val saturation = saturation(c)
                    val brightness = brightness(c)

                    totalHue += hue
                    totalSaturation += saturation
                    totalBrightness += brightness
                    count++
                }
            }
        }

        return color(
            totalHue / count,
            totalSaturation / count,
            totalBrightness / count
        )
    }

    fun readShapesFromFile(): List<InvaderShape> {
        val gson = Gson()
        val inputStream = InvadersComposition::class.java.getResourceAsStream("/invader_composition/invaders.json")
        val reader = InputStreamReader(inputStream!!)
        val type: Type = object : TypeToken<List<InvaderShape>>() {}.type

        return gson.fromJson(reader, type)
    }

    fun getSpaceInvaderShape(): Array<Array<Int>> {
        val shapes = readShapesFromFile()
        val randomShapeIndex = kotlin.math.floor(random(shapes.size.toFloat())).toInt()

        return shapes[randomShapeIndex].data
    }

}