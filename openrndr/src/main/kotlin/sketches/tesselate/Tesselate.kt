package sketches.tesselate

import org.openrndr.application
import org.openrndr.color.ColorRGBa
import org.openrndr.draw.DrawPrimitive
import org.openrndr.draw.vertexBuffer
import org.openrndr.draw.vertexFormat
import org.openrndr.extra.olive.oliveProgram
import org.openrndr.math.Vector2
import org.openrndr.math.Vector3
import org.openrndr.shape.Circle

val scale = 0.5

fun main() = application {
    configure {
        width = (720 * scale).toInt()
        height = (1280 * scale).toInt()
    }

    program {
        //val tree = TriNode(width / 2.0, height / 2.0, maxOf(width, height) / 2.0)
        val tree = TriNode(
            Vector3(0.0, 0.0, 0.0),
            Vector3(0.0, height.toDouble(), 0.0),
            Vector3(width.toDouble(), height / 2.0, 0.0)
        )

        extend {
            drawer.clear(ColorRGBa.BLACK)
            drawer.fill = ColorRGBa.WHITE.opacify(0.7)
            drawer.stroke = ColorRGBa.WHITE
            drawer.strokeWeight = 1.0

             tree.each { tri ->
                 tri.segments.forEach {
                     drawer.segment(it)
                 }
            }
        }
    }
}
