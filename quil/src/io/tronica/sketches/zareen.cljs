(ns io.tronica.sketches.zareen
  (:require [quil.core :as q :include-macros true]
            [io.tronica.core.vector :as v]
            [io.tronica.core.colors :as colors]
            [io.tronica.core.transitions
             :refer [create-oscillator oscillator-value inc-oscillator]]
            [io.tronica.core.recording :as rec]
            [quil.middleware :as m]))

(def w 720)
(def h 1080)
(def particle-count 1000)
(def cell-size 1)
(def enable-recording false)
(def final-frame 500)
                                        ;(def noise-seed 41232)
(def noise-seed 1313431251324)

;; ----------------------------------------
;; Geometry
;; ----------------------------------------

(defn polar-to-cartesian
  "Converts and angle and radius to xy coordinates"
  [r theta]
  (let [x (* r (Math/cos theta))
        y (* r (Math/sin theta))]
    (v/create-vector x y)))

;; ----------------------------------------
;; Sketch
;; ----------------------------------------

(defrecord Particle [pos prev-pos vel max-velocity])

(defn- zero-vector []
  (v/create-vector 0 0))

(defn- spawn-particle []
  (let [side (q/random 1 100)
        pos (if (< side 50)
              ; If side < 50, spawn on the left or right 20% of the screen
              (v/create-vector
                (if (< side 25) (q/random 0 (* w 0.2)) ; left side 20%
                              (q/random (* w 0.8) w)) ; right side 20%
                (q/random 0 h))
              ; If side >= 50, spawn on the top or bottom 20% of the screen
              (v/create-vector
                (q/random 0 w)
                (if (< side 75) (q/random 0 (* h 0.2)) ; top side 20%
                              (q/random (* h 0.8) h))))] ; bottom side 20%
    (->Particle pos pos (zero-vector) (q/random 2 8))))

(defn- oob? [pos]
  (or
   (> (:x pos) w)
   (< (:x pos) 0)
   (> (:y pos) h)
   (< (:y pos) 0)))


(def coord-to-flow-vector
  (memoize
   (fn [x y]
      (let [factor 0.5
            angle (* (q/noise (* x factor) (* y factor) (* 0.0005 (q/frame-count))) q/TWO-PI)]
        (polar-to-cartesian 1 angle)))))

(defn locate-cell [x y]
  (let [column-width (/ w cell-size)
        row-height (/ h cell-size)
        col (Math/ceil (/ x column-width))
        row (Math/ceil (/ y row-height))]
    {:x row :y col}))

(defn- compute-flow-vector [pos]
  (let [cell (locate-cell (:x pos) (:y pos))]
    (coord-to-flow-vector (:x cell) (:y cell))))

(defn- apply-forces [p]
  (if (oob? (:pos p))
    (spawn-particle)
    (let [cur-pos (:pos p)
          velocity (:vel p)
          force (compute-flow-vector cur-pos)
          next-pos (v/add cur-pos velocity)]
      (->Particle
       next-pos
       cur-pos
       (v/limit (v/add force (:vel p)) (:max-velocity p))
       (:max-velocity p)))))

(defn- init-particles [n]
  (->> (range)
       (take n)
       (map spawn-particle)))

(def img-url "assets/z.jpg")

(defn- setup []
  (q/pixel-density 1)
  (q/frame-rate 30)
  (q/noise-seed noise-seed)
  (when enable-recording
    (rec/init-canvas-capture)
    (rec/begin-video-record))
  (q/background 0)
  (let [img (q/load-image img-url)]
    {
     :bg-opacity (create-oscillator 15 10 30 0.1)
     :img img
     :particles (init-particles particle-count) }))

(defn- update-state [state]
  {
   :bg-opacity (inc-oscillator (:bg-opacity state))
   :img (:img state)
   :particles (map apply-forces (:particles state))
  })

(defn- draw-state [state]
  (prn (oscillator-value (:bg-opacity state)))
  (q/fill 0 (oscillator-value (:bg-opacity state)))
  (q/rect 0 0 w h)
  (q/stroke-weight 2)
  (when (= (q/frame-count) 1)
    (q/resize (:img state) w 0))
  (doseq [p (:particles state)]
    (let [x (:x (:pos p))
          y (:y (:pos p))
          prev-x (:x (:prev-pos p))
          prev-y (:y (:prev-pos p))]
      (q/stroke (colors/with-opacity
                   (q/color (q/get-pixel (:img state) x y))
                   100))
      (q/line
       prev-x
       prev-y
       x
       y))))

(defn ^:export run-sketch []
  (q/defsketch zareen
    :host "sketch"
    :size [w h]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; Evaluate this line to reload the page
; (run-sketch)
