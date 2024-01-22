(ns io.tronica.creative-core.math)

(defrecord Vec2D [x y])

(defn vec2
  ([] (->Vec2D 0 0))
  ([x y] (->Vec2D x y)))

(defn random
  "Returns a random number between min and max"
  [min max]
  (+ min (* (rand) (- max min))))

(defn dist
  "Distance between two Vec2D points"
  [v1 v2]
  (let [dx (- (:x v2) (:x v1))
        dy (- (:y v2) (:y v1))]
    (Math/sqrt (+ (* dx dx) (* dy dy)))))

(defn magnitude [v]
  (Math/sqrt (+ (* (:x v) (:x v)) (* (:y v) (:y v)))))

(defn normalize [v]
  (let [mag (magnitude v)]
    (if (zero? mag)
      v
      (->Vec2D (/ (:x v) mag) (/ (:y v) mag)))))

(defn scale [v scalar]
  (->Vec2D (* (:x v) scalar) (* (:y v) scalar)))

(defn sub
  "Subtract either two Vec2D points or a Vec2D point by a scalar"
  [v1 v2]
  (if (number? v2)
    (let [dx (- (:x v1) v2)
          dy (- (:y v1) v2)]
      (vec2 dx dy))
    (let [dx (- (:x v1) (:x v2))
          dy (- (:y v1) (:y v2))]
      (vec2 dx dy))))

(defn add
  "Add either two Vec2D points or a Vec2D point to a scalar"
  [v1 v2]
  (if (number? v2)
    (let [dx (+ (:x v1) v2)
          dy (+ (:y v1) v2)]
      (vec2 dx dy))
    (let [dx (+ (:x v1) (:x v2))
          dy (+ (:y v1) (:y v2))]
      (vec2 dx dy))))

(defn mul
  "Multiply either two Vec2D points or a Vec2D point by a scalar"
  [v1 v2]
  (if (number? v2)
    (let [dx (* (:x v1) v2)
          dy (* (:y v1) v2)]
      (vec2 dx dy))
    (let [dx (* (:x v1) (:x v2))
          dy (* (:y v1) (:y v2))]
      (vec2 dx dy))))

(defn div
  "Divide a Vec2D point by a scalar"
  [v1 d]
  (let [dx (/ (:x v1) d)
        dy (/ (:y v1) d)]
    (vec2 dx dy)))

(defn limit [v max]
  (let [mag (magnitude v)]
    (if (> mag max)
      (scale (normalize v) max)
      v)))
