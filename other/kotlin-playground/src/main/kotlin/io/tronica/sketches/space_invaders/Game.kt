import io.tronica.lib.Palette
import io.tronica.lib.Recording
import io.tronica.lib.throttle
import io.tronica.sketches.space_invaders.entities.Invader
import io.tronica.sketches.space_invaders.entities.Player
import io.tronica.sketches.space_invaders.entities.Projectile
import processing.core.PApplet
import processing.core.PConstants
import processing.core.PGraphics
import java.awt.event.KeyEvent
import java.util.*

class Game : PApplet() {
    private lateinit var overlay: PGraphics
    private lateinit var player: Player
    private var invaders: LinkedList<Invader> = LinkedList()
    private var projectiles: LinkedList<Projectile> = LinkedList()
    private var recording = Recording(this)
    private val pressedKeys = HashSet<Int>()
    private var invadersOffsetCols = 0;
    private var invadersOffsetDir = -1;
    private val invadersOffsetMaxAbs = 3;
    private val invaderGridCols = 10
    private val invaderGridRows = 6
    lateinit var palette: Palette

    private val updateInvaderPositions = throttle(1000) {
        if (abs(invadersOffsetCols) == invadersOffsetMaxAbs) {
            invadersOffsetDir *= -1
        }

        invadersOffsetCols += invadersOffsetDir
        invaders.forEach { i -> i.position().add(i.w * invadersOffsetDir, 0f) }
    }

    override fun settings() {
        size(800, 800, PConstants.JAVA2D)
        pixelDensity(2)
    }

    override fun setup() {
        overlay = createGraphics(width, height, PConstants.JAVA2D)
        palette = Palette(this, mode = "random")
        recording.setup()
        player = Player(this, width.toFloat() / 2, height.toFloat() * .75f)

        val refInvader = Invader(this, 0f, 0f)
        val iw = refInvader.width
        val ih = refInvader.height
        val spacing = 30;
        val centerX = width / 2
        val totalWidth = (iw + spacing) * invaderGridCols
        val offsetX = centerX - totalWidth / 2
        val offsetY = min(((ih + spacing) * invaderGridRows) / 2, 100f)

        for (x in 0 until invaderGridCols) {
            for (y in 0 until invaderGridRows) {
                val invader =
                    Invader(this, offsetX + x.toFloat() * (iw + spacing), offsetY + y.toFloat() * (ih + spacing))
                invaders.add(invader)
            }
        }
    }

    override fun draw() {
        background(0)
        image(overlay, 0f, 0f)

        // Perform actions based on the currently pressed keys
        if (KeyEvent.VK_SPACE in pressedKeys) player.shoot()
        if (KeyEvent.VK_LEFT in pressedKeys) player.move(-1)
        if (KeyEvent.VK_RIGHT in pressedKeys) player.move(1)

        projectiles.filter { p ->
            p.draw()
            p.alive()
        }

        updateInvaderPositions()

        invaders.filter { p ->
            p.draw()
            p.alive()
        }

        player.draw()

        recording.update()
    }

    fun spawn(projectile: Projectile) {
        projectiles.add(projectile)
    }

    override fun keyPressed(event: processing.event.KeyEvent?) {
        if (event == null) return
        pressedKeys.add(event.keyCode)
    }

    override fun keyReleased(event: processing.event.KeyEvent?) {
        if (event == null) return
        pressedKeys.remove(event.keyCode)
    }
}
