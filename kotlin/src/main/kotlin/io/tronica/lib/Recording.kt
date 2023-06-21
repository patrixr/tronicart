package io.tronica.lib

import com.hamoid.VideoExport
import processing.core.PApplet
import java.time.Instant

class Recording(
    private val sketch: PApplet,
    private val duration: Int = 30000,
    private val enabled: Boolean = true,
    private val autoStart: Boolean = true,
    private val autoStop: Boolean = true,
    private val name: String = "video_export"
) {
    private var isRecording = false;
    private lateinit var videoExport: VideoExport

    fun setup() {
        if (enabled && autoStart) {
            start()
        }
    }

    fun start() {
        if (isRecording) return
        videoExport = VideoExport(sketch, "${name}_${Instant.now()}.mp4")
        videoExport.startMovie()
        isRecording = true;
    }

    fun update() {
        if (!isRecording) return;

        if (autoStop && sketch.millis() >= duration) {
            videoExport.endMovie();
            isRecording = false;
            return;
        } else {
            videoExport.saveFrame()
        }
    }
}