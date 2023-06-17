package io.tronica.sketches.space_invaders.data

import Game
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import java.io.InputStreamReader
import java.lang.reflect.Type
import kotlin.random.Random

data class Shape(
    val type: String,
    val uid: String,
    val frames: List<Array<Array<Int>>>,
    val rows: Int,
    val cols: Int
) {
    companion object {
        private var shapes: List<Shape> = loadShapesFromFile()
        private var invaderShapes = shapes.filter { s -> s.type == "invader" }
        private var spaceshipShapes = shapes.filter { s -> s.type == "spaceship" }

        private fun loadShapesFromFile(): List<Shape> {
            val gson = Gson()
            val inputStream = Game::class.java.getResourceAsStream("/space_invaders/invaders.json")
            val reader = InputStreamReader(inputStream!!)
            val type: Type = object : TypeToken<List<Shape>>() {}.type
            return gson.fromJson(reader, type)
        }

        fun getRandomSpaceInvader(): Shape = invaderShapes[Random.nextInt(0, invaderShapes.size)]
        fun getRandomSpaceship(): Shape = spaceshipShapes[Random.nextInt(0, spaceshipShapes.size)]
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        return (other as Shape).uid == uid;
    }

    override fun hashCode(): Int {
        var result = type.hashCode()
        result = 31 * result + uid.hashCode()
        result = 31 * result + frames.hashCode()
        result = 31 * result + rows
        result = 31 * result + cols
        return result
    }
}