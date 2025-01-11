(ns io.tronica.core.vector)

(defrecord Vector3D [x y z])

(defn create-vector
  ([] (->Vector3D 0 0 0))
  ([n] (->Vector3D n n n))
  ([x y] (->Vector3D x y 0))
  ([x y z] (->Vector3D x y z)))

(defn dist
  "Distance between two Vector3D points"
  [v1 v2]
  (let [dx (- (:x v2) (:x v1))
        dy (- (:y v2) (:y v1))
        dz (- (:z v2) (:z v1))]
    (Math/sqrt (+ (* dx dx) (* dy dy) (* dz dz)))))

(defn magnitude [v]
  (Math/sqrt (+ (* (:x v) (:x v))
                (* (:y v) (:y v))
                (* (:z v) (:z v)))))

(defn normalize [v]
  (let [mag (magnitude v)]
    (if (zero? mag)
      v
      (->Vector3D (/ (:x v) mag) (/ (:y v) mag) (/ (:z v) mag)))))

(defn scale [v scalar]
  (->Vector3D (* (:x v) scalar) (* (:y v) scalar) (* (:z v) scalar)))

(defn sub
  "Subtract two Vector3D points"
  [v1 v2]
  (->Vector3D (- (:x v1) (:x v2))
              (- (:y v1) (:y v2))
              (- (:z v1) (:z v2))))

(defn add
  "Add two Vector3D points"
  [v1 v2]
  (->Vector3D (+ (:x v1) (:x v2))
              (+ (:y v1) (:y v2))
              (+ (:z v1) (:z v2))))

(defn mul
  "Multiply two Vector3D points"
  [v1 v2]
  (->Vector3D (* (:x v1) (:x v2))
              (* (:y v1) (:y v2))
              (* (:z v1) (:z v2))))

(defn div
  "Divide a Vector3D point by a scalar"
  [v1 d]
  (->Vector3D (/ (:x v1) d)
              (/ (:y v1) d)
              (/ (:z v1) d)))

(defn limit [v max]
  (let [mag (magnitude v)]
    (if (> mag max)
      (scale (normalize v) max)
      v)))
