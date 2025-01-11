import type { Fx, NoState } from "../composer.js"
import { P5 } from "../../components/p5.js"

const DEFAULT_MP3 = "/_file/data/samples/sample.mp3"

export type AudioExt = {
  song: P5.SoundFile
  amplitude: P5.Amplitude
  fft: P5.FFT
  spectrum: number[]
}

/**
 * Initializes and loads an audio file into the context state.
 * If a file is provided, it loads the sound file and sets up looping.
 * Also initializes the sound metrics for audio visualizations.
 */
const audio = (file = DEFAULT_MP3): Fx<NoState, AudioExt> => {
  return (ctx, next) => {
    if (!file || ctx.state.song) {
      ctx.state.spectrum = ctx.state.fft.analyze()
      return next(ctx as any)
    }

    console.info("Loading music file " + file)

    const song = ctx.p5.loadSound(file, () => {
      song.loop()
    })

    ctx.state.song = song
    ctx.state.amplitude = new P5.Amplitude()
    ctx.state.fft = new P5.FFT(0.8, 256)
    ctx.state.spectrum = ctx.state.fft.analyze()

    next(ctx as any)
  }
}

export const fx = {
  audio,
}
