(ns io.tronica.sketches.zareen
  (:require [quil.core :as q :include-macros true]
            [io.tronica.core.vector :as v]
            [quil.middleware :as m]))

(def w 720)
(def h 1080)

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
  (let [pos (v/create-vector (q/random 0 w) (q/random 0 h))]
    (->Particle
     pos
     pos
     (zero-vector)
     (q/random 2 8))))

(defn- oob? [pos]
  (or
   (> (:x pos) w)
   (< (:x pos) 0)
   (> (:y pos) h)
   (< (:y pos) 0)))

(defn- loop-edges [pos]
  (v/create-vector
   (cond
     (< (:x pos) 0) w
     (> (:x pos) w) 0
     :else (:x pos))
   (cond
     (< (:y pos) 0) h
     (> (:y pos) h) 0
     :else (:y pos))))

(defn- compute-flow-vector [pos]
  (let [x (:x pos)
        y (:y pos)
        div 1500
        angle (* (* (q/noise (/ x div) (/ y div)) q/TWO-PI) 2)]
    (polar-to-cartesian 1 angle)))

(defn- apply-forces [p]
  (let [cur-pos (:pos p)
        velocity (:vel p)
        force (compute-flow-vector cur-pos)
        next-pos (v/add cur-pos velocity)
        final-pos (loop-edges next-pos)]
    (->Particle
     final-pos
     (if (oob? next-pos) final-pos cur-pos)
     (v/add force (v/limit (:vel p) (:max-velocity p)))
     (:max-velocity p))))

(defn- init-particles [n]
  (->> (range)
       (take n)
       (map spawn-particle)))

(def img-url "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

(defn- setup []
  (q/frame-rate 30)
  (q/blend-mode :blend)
  (let [img (q/load-image img-url)]
    {
     :img img
     :particles (init-particles 2000) }))

(defn- update-state [state]
  ; Update sketch state by changing circle color and position.
  {
   :img (:img state)
   :particles (map apply-forces (:particles state))
  })

(defn- draw-state [state]
  (when (> (q/frame-count) 400)
    (prn "ending")
    (q/no-loop))
  (when (= (q/frame-count) 10)
    (q/resize (:img state) w h))
  (q/image (:img state) 0 0)
  (doseq [p (:particles state)]
    (q/line
     (:x (:prev-pos p))
     (:y (:prev-pos p))
     (:x (:pos p))
     (:y (:pos p)))))

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
