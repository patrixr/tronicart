(ns io.tronica.core.recording)

;; Recording

(defn init-canvas-capture []
  (let [canvas-element (.getElementById js/document "defaultCanvas0")
        options (clj->js {:showRecDot true})]
    (js/CanvasCaptureLib.CanvasCapture.init canvas-element options)))

(defn begin-video-record []
  (prn "RECORDING STARTED")
  (js/CanvasCaptureLib.CanvasCapture.beginVideoRecord (clj->js {:format (.-WEBM js/CanvasCaptureLib.CanvasCapture)})))

(defn is-recording []
  (js/CanvasCaptureLib.CanvasCapture.isRecording))

(defn end-recording []
  (when (is-recording)
    (js/CanvasCaptureLib.CanvasCapture.stopRecord)))

(defn record-frame []
  (when (is-recording)
    (js/CanvasCaptureLib.CanvasCapture.recordFrame)))
