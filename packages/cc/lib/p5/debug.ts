import { getGlobalP5 } from './configure';
import { KeybindManager } from '../input/keybinds';
import { CanvasCapture } from 'canvas-capture';

interface DebugOpts {
    sketchName?: string,
    commands?: string[]
}

export function bootstrapDebug(p5 = getGlobalP5(), opts: DebugOpts = {}) {
    const { sketchName = "sketch", commands = [] } = opts;
    
    CanvasCapture.init((window as any).document.getElementById('defaultCanvas0'));
    CanvasCapture.bindKeyToVideoRecord('r', {
        format: 'webm',
        name: `${sketchName}-capture`,
        quality: 1
    });
    
    const defaultCommands = ['pause', 'record'];
    const allCommands = new Set([...defaultCommands, ...commands])
    
    const keybinds = new KeybindManager([...allCommands]);
    
    keybinds.on('pause', () => p5.isLooping() ? p5.noLoop() : p5.loop())
    keybinds.on('record', () => { /* record managed by CanvasCapture */ })

    const update = () => {
        if (CanvasCapture.isRecording()) {
            CanvasCapture.recordFrame();
            console.log(`Frame captured (${p5.frameCount})`);
        }
    }
    
    return { keybinds, update };
}

export type DebugControls = ReturnType<typeof bootstrapDebug>