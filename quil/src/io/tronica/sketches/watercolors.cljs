(ns io.tronica.sketches.watercolors
  (:require [quil.core :as q :include-macros true]
            [io.tronica.core.colors :as colors]
            [quil.middleware :as m]))

(def w 500)
(def h 500)

;; ----------------------------------------
;; Coloring
;; ----------------------------------------

(defn jitter-color [color]
  (q/color
   (+ (q/red color) (q/random -25 25))
   (+ (q/green color) (q/random -25 25))
   (+ (q/blue color) (q/random -25 25))
   (q/random 1 6)))

;; ----------------------------------------
;; Geometry
;; ----------------------------------------

(defn polar-to-cartesian
  "Converts and angle and radius to xy coordinates"
  [r theta]
  (let [x (* r (Math/cos theta))
        y (* r (Math/sin theta))]
    [x y]))

(defn polar-vertex
  "Places a vertex using polar coordinates instead of cartesian"
  [r angle]
  (let [[x y] (polar-to-cartesian r angle)]
    (q/vertex x y)))

;; ----------------------------------------
;; Watercolor
;; ----------------------------------------

(defrecord Brush [size])

(defn create-brush [size] (->Brush size))

(defn angle-step [] (q/random 0.7 1.3))

(defn apply-brush
  "Apply a brush at a given spot of the canvas"
  ([x y brush color] (apply-brush x y brush color 0.1))
  ([x y brush color pressure]
   (let [start-angle (q/random 0 q/TWO_PI)
         size (:size brush)]
     (q/push-matrix)
     (q/translate x y)
     (q/no-stroke)
     (dotimes [_ (q/floor (* pressure 10))]
       (q/begin-shape)
       (q/fill (jitter-color color))
       (loop [angle 0]
         (when (< angle q/TWO-PI)
           (polar-vertex (q/random (* size 0.7) (* size 1.1)) (+ start-angle angle))
           (recur (+ angle (angle-step)))))
       (q/end-shape))
     (q/pop-matrix))))

;; ----------------------------------------
;; Textures
;; ----------------------------------------

(defn create-watercolor-bg [color]
  (prn "Generating background of color" color)
  (let [brush (create-brush (/ (q/width) 10))
        stroke-count (/ (* (q/width) (q/height)) (* 1 (:size brush)))
        texture (q/create-graphics w h)]
    (q/with-graphics texture
      (q/background (colors/with-opacity color 100))
      (dotimes [_ stroke-count]
        (let [x (q/random w)
              y (q/random h)]
          (apply-brush x y brush color)))
      (q/display-filter :blur 1))
    texture))


;; ----------------------------------------
;; Sketch
;; ----------------------------------------

(defn- setup []
  (q/frame-rate 30)
  (q/blend-mode :blend)
  (let [bg (create-watercolor-bg (q/color colors/PEACH_YELLOW))]
    {:bg bg}))

(defn- update-state [state]
  ; Update sketch state by changing circle color and position.
  state)

(defn- draw-state [state]
  (q/image (:bg state) 0 0)
  (q/rect 100 100 100 100))

(defn ^:export run-sketch []
  (q/defsketch watercolors
    :host "sketch"
    :size [w h]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))


; Evaluate this line to reload the page
; (run-sketch)
