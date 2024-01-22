(ns pastel-flows.core
  (:require [quil.core :as q :include-macros true]
            [io.tronica.creative-core.vector :as v]
            [io.tronica.creative-core.core :as cc :refer [mutable mget mset!]]))

(defrecord Grid [data w h])

(defn create-grid [w h]
  (->Grid (mutable (vec (repeat (* w h) nil))) w h))

(def noise-scale 500)
(def scale 0.5)
(def w (* 1080 scale))
(def h (* 1920 scale))
(def cell-size (/ w 20))
(def trail-weight (* scale 10))
(def collision-radius (* 1 trail-weight))
(def vector-grid-rows (Math/floor (/ h cell-size)))
(def vector-grid-cols (Math/floor (/ w cell-size)))
(def vector-grid (create-grid vector-grid-cols vector-grid-rows))
(def debug false)
(def particle-count 1)
(def particle-ttl 100)
(def particles (mutable []))
(def gfx (delay (q/create-graphics w h)))

;; Helpers

(def palette
  (delay
    [
     { :r 38 :g 70 :b 83 }
     { :r 42 :g 157 :b 143 }
     { :r 233 :g 196 :b 70 }
     { :r 244 :g 162 :b 97 }
     { :r 231 :g 111 :b 81 }
     ]))

(defn get-color [i]
  (let [c (nth @palette (mod i (count @palette)))
        alpha (+ 5 (mod i 50))]
    (q/color (:r c) (:g c) (:b c) alpha)))

(defn oob? [pos]
  (or (<= (:x pos) 0)
      (<= (:y pos) 0)
      (>= (:x pos) w)
      (>= (:y pos) h)))

(defn circles-intersect?
  "Determines if two circles intersect.
  The arguments are the x, y coordinates and radius for each of the two circles."
  [pos1 r1 pos2 r2]
  (let [dx (- (:x pos2) (:x pos1))
        dy (- (:y pos2) (:y pos1))
        distance (Math/sqrt (+ (* dx dx) (* dy dy)))]
    (<= distance (+ r1 r2))))

;; Particle

(defrecord Particle [pos t trail alive])

(defn create-particle
  ([x y, trail] (->Particle (v/create-vector x y) (q/frame-count) trail true))
  ([x y] (create-particle x y [])))

(defn particle-dead? [p]
  (not (:alive p)))

;; Grid

(defn grid-idx [x y cols] (+ x (* y cols)))

(defn grid-get
  "Get an element from the grid using xy coordinates"
  [grid x y]
  (mget (:data grid) (grid-idx x y (:w grid))))

(defn grid-set!
  "Sets an element in the grid using xy coordinates"
  [grid x y val]
  (mset! (:data grid) (grid-idx x y (:w grid)) val))

;; Fields

(defn compute-vector
  "Given an x and a y, will compute a vector for the flow field"
  [x y]
  (let [noise (q/noise (/ x noise-scale) (/ y noise-scale))
        angle (* noise q/TWO-PI)]
    (v/create-vector (q/cos angle) (q/sin angle))))

(defn init-vectors
  "Goes through every x/y combination and assigns a vector to the location in the grid"
  []
  (doseq [x (range vector-grid-cols)
          y (range vector-grid-rows)]
    (grid-set! vector-grid x y (compute-vector x y))))

(defn closest-vector
  "Given coordinates, find the vector that'll define their direction"
  [x y]
  (let [i (q/floor (/ x cell-size))
        j (q/floor (/ y cell-size))]
    (grid-get vector-grid i j)))

;; Sketch

(defn draw-vectors []
  (q/stroke 255 50)
  (doseq [x (range vector-grid-cols)
          y (range vector-grid-rows)]
    (let [vector (grid-get vector-grid x y)
          scaled-vector (v/scale vector 5)]
      (q/push-matrix)
      (q/translate (* x cell-size) (* y cell-size))
      (q/line 0 0 (:x scaled-vector) (:y scaled-vector))
      (q/pop-matrix))))

(defn draw-particles []
  (q/no-fill)
  (q/stroke-weight trail-weight)
  (doseq [p @particles]
    (when (and p (not (:alive p)))
      (q/stroke (get-color (:t p)))
      (q/begin-shape)
      (doseq [pt (:trail p)]
        (q/curve-vertex (:x pt) (:y pt)))
      (q/end-shape))))


(defn collision? [p other]
  (cond
    (instance? Particle other) (and (not= p other) (first (filter #(collision? p %) (:trail other))))
    (instance? v/Vector3D other) (circles-intersect? (:pos p) collision-radius other collision-radius)
    (vector? other) (first (filter #(collision? p %) other))
    :else false))

(defn update-particle [p]
  (cond
    (particle-dead? p) p
    (or (oob? (:pos p)) (collision? p @particles) (assoc p :alive false)
    :else
    (let [pos (:pos p)
          vector (compute-vector (:x pos) (:y pos))
          new-x (+ (:x pos) (* 3 (:x vector)))
          new-y (+ (:y pos) (* 3 (:y vector)))]
      (assoc p
             :pos (v/create-vector new-x new-y)
             :trail (conj (:trail p)
                          (v/create-vector new-x new-y))))))

(defn spawn-particles [particles]
  (if (= 0 (mod (q/frame-count) 1))
    (conj particles (create-particle (q/random w) (q/random h)))
    particles))

(defn setup []
  (init-vectors)
  (q/smooth)
  (q/background 0)
  (q/frame-rate 30))

(defn draw []
  (q/background 0)
  (when debug (draw-vectors))
  (when (= 0 (mod (q/frame-count) 100)) (prn (q/frame-count)))
  (when (= (q/frame-count) 1000) (q/no-loop))
  (q/with-graphics @gfx
    (draw-particles))
  (q/image @gfx 0 0)
  (mset! particles (->> @particles
                        (mapv update-particle)
                        (spawn-particles))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch pastel-flows
    :host "pastel-flows"
    :size [w h]
    :setup setup
    :draw draw))

; uncomment this line to reset the sketch:
; (run-sketch)
