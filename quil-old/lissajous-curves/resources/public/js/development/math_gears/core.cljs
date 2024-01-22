(ns math-gears.core
  (:require
   [quil.core :as q :include-macros true]
   ))

;; Types

(defrecord Point [x y])
(defrecord Gear [x y radius diameter angle angle-step ctrl-point])
(defrecord Shape [i j points])

;; Settings

(def recording-enabled false)
(def canvas-size 800)
(def w canvas-size)
(def h canvas-size)
(def gear-count 7)
(def rotation-speed 0.0125)
(def gear-size (/ canvas-size (inc gear-count)))
(def gear-diameter (* gear-size 0.8))
(def gear-radius (/ gear-diameter 2))

;; Data

(def stroke-buffer (delay (q/create-graphics w h)))
(def get-shape (memoize (fn [i j] (->Shape i j (atom [])))))

;; Palette

(def background-color (delay (q/color "#000000")))
(def gear-color (delay (q/color "#ffcdb2")))
(def shape-stroke-colors (delay
                           [(q/color "#ffb4a2")
                            (q/color "#e5989b")
                            (q/color "#b5838d")
                            (q/color "#ffffff")]))
;; Helpers

(defn circle
  "Small circle helper"
  [x y r] (q/ellipse x y r r))

(defn rotation-done?
  "If a gear has rotated enough times, we deem it done"
  [gear]
  (> (:angle gear) (* 6 q/TWO-PI)))

(defn polar-to-cartesian
  "Converts and angle and radius to xy coordinates"
  [r theta]
  (let [x (* r (Math/cos theta))
        y (* r (Math/sin theta))]
    [x y]))

(defn inc-shape!
  "Adds a point to the shape"
  [shape x y]
  (swap! (:points shape) #(conj % (->Point x y))))

(defn compute-gear-ctrl-point
  "Finds the control point based on the angle of the gear"
  [gearx geary radius angle]
  (let [[x y] (polar-to-cartesian radius angle)]
    (->Point (+ x gearx)  (+ y geary))))

(defn inc-angle!
  "Bumps the angle of a gear and recomputes the control point. To be used with swap!"
  [gear]
  (as-> gear rec
      (assoc rec :angle (+ (:angle rec) (:angle-step rec)))
      (assoc rec :ctrl-point (compute-gear-ctrl-point (:x rec) (:y rec) (:radius rec) (:angle rec)))))

(defn new-gear
  "Creates a new gear record"
  [x y n]
  (atom (->Gear
         x
         y
         gear-radius
         gear-diameter
         (- (/ q/PI 2))
         (* n rotation-speed)
         (compute-gear-ctrl-point x y gear-radius 0))))

;; Drawing method

(defn draw-shape [shape]
  (q/push-style)
  (q/stroke-weight 2)
  (q/begin-shape)
  (q/no-fill)
  (q/stroke (nth @shape-stroke-colors (mod (:i shape) (count @shape-stroke-colors))))
  (doseq [pt (deref (:points shape))]
    (q/curve-vertex (:x pt) (:y pt)))
  (q/end-shape)
  (q/pop-style))

(defn draw-cross [x y]
  (q/push-style)
  (q/stroke-weight 2)
  (q/stroke 255)
  (let [size (/ gear-size 20)]
    (q/line x (- y size) x (+ y size))
    (q/line (- x size) y (+ x size) y))
  (q/pop-style))

(defn draw-gear [gear guideline-type]
  (q/push-style)
  (q/no-fill)
  (q/stroke @gear-color)
  (swap! gear inc-angle!)
  (circle (:x @gear)
          (:y @gear)
          (:diameter @gear))
  (let [[x y] (polar-to-cartesian (:radius @gear) (:angle @gear))]
    (q/stroke 255 100)
    (q/line (:x @gear)
            (:y @gear)
            (+ x (:x @gear))
            (+ y (:y @gear)))
    (q/stroke-weight 6)
    (q/stroke 255)
    (q/point (+ x (:x @gear)) (+ y (:y @gear)))
    (q/stroke-weight 1)
    (cond
      (= guideline-type :vertical) (q/line (+ x (:x @gear)) 0 (+ x (:x @gear)) (+ y h (:y @gear)))
      (= guideline-type :horizontal) (q/line 0 (+ y (:y @gear)) (+ x w (:x @gear)) (+ y (:y @gear)))))
  (q/pop-style))

(def xgears (mapv #(new-gear (+ (* % gear-size) (* gear-size 1.5))
                             (/ gear-size 2)
                             (+ 1 %))
                  (range gear-count)))

(def ygears (mapv #(new-gear (/ gear-size 2)
                             (+ (* % gear-size) (* gear-size 1.5))
                             (+ 1 %))
                  (range gear-count)))

;; Recording

(defn init-canvas-capture []
  (when recording-enabled (let [canvas-element (.getElementById js/document "defaultCanvas0")
        options (clj->js {:showRecDot true})]
    (js/CanvasCaptureLib.CanvasCapture.init canvas-element options))))

(defn begin-video-record []
  (when recording-enabled
    (js/CanvasCaptureLib.CanvasCapture.beginVideoRecord (clj->js {:format (.-WEBM js/CanvasCaptureLib.CanvasCapture)}))))

(defn is-recording []
  (js/CanvasCaptureLib.CanvasCapture.isRecording))

(defn end-recording []
  (js/CanvasCaptureLib.CanvasCapture.stopRecord))

(defn record-frame []
  (when (= (q/frame-count) 1000) (end-recording))
  (when (is-recording) (js/CanvasCaptureLib.CanvasCapture.recordFrame)))

;; Sketch

(defn setup []
  (init-canvas-capture)
  (begin-video-record)
  (q/pixel-density 2)
  (q/smooth)
  (q/frame-rate 60))

(defn draw []
  (record-frame)
  (q/background @background-color)
  (q/image @stroke-buffer 0 0)
  (doseq [gear xgears] (draw-gear gear :vertical))
  (doseq [gear ygears] (draw-gear gear :horizontal))
  (doseq [i (range gear-count)
          j (range gear-count)]
    (let [xgear @(nth xgears i)
          ygear @(nth ygears j)
          x (:x (:ctrl-point xgear))
          y (:y (:ctrl-point ygear))
          shape (get-shape i j)]
      (when-not (and (rotation-done? xgear) (rotation-done? ygear))
        (draw-cross x y)
        (inc-shape! shape x y))
      (q/with-graphics @stroke-buffer
        (draw-shape shape)))))

(defn ^:export run-sketch []
  (q/defsketch math-gears
    :host "math-gears"
    :renderer :p2d
    :size [w h]
    :setup setup
    :draw draw))

; uncomment this line to reset the sketch:
;(run-sketch)
