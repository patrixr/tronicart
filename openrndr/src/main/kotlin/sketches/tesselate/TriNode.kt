package sketches.tesselate

import org.openrndr.math.Vector3
import org.openrndr.shape.Segment3D
import kotlin.math.cos
import kotlin.math.sin

class TriNode {
    val centroid : Vector3
    val points : List<Vector3>
    val radius : Double
    val children: List<TriNode>
    val segments: List<Segment3D>
    val ready = true

    constructor(x: Double, y: Double, radius: Double) : this(Vector3(x, y, 0.0), radius)

    constructor(centroid: Vector3, radius: Double) : this(
        centroid + Vector3(radius * cos(0.0), radius * sin(0.0), 0.0),
        centroid + Vector3(radius * cos(2 * Math.PI / 3), radius * sin(2 * Math.PI / 3), 0.0),
        centroid + Vector3(radius * cos(4 * Math.PI / 3), radius * sin(4 * Math.PI / 3), 0.0)
    )

    constructor(p1: Vector3, p2: Vector3, p3: Vector3) {
        centroid = (p1 + p2 + p3) / 3.0
        points = listOf(p1, p2, p3)
        radius = centroid.distanceTo(p1);
        segments = listOf(
            Segment3D(p1, p2),
            Segment3D(p2, p3),
            Segment3D(p3, p1)
        )

        println(radius)
        children = if (radius <= 50) listOf() else
            listOf(
                TriNode(centroid, p1, p2),
                TriNode(centroid, p2, p3),
                TriNode(centroid, p3, p1)
            )
    }

    fun each(callback: (TriNode) -> Unit) {
        callback(this)
        if (ready) children.forEach {
            ch -> ch.each(callback)
        }
    }

    override fun toString() : String {
        return "TriNode (${centroid.x}, ${centroid.y}) r:${radius}";
    }
}