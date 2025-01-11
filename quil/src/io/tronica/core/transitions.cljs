(ns io.tronica.core.transitions)

(defn create-oscillator
  "Creates an oscillator with a given start value, max amplitude, and increment."
  [start max-amplitude increment]
  {:value start
   :max-amplitude max-amplitude
   :increment increment
   :direction 1})

(defn oscillator-value
  "Returns the current value of the oscillator."
  [oscillator]
  (:value oscillator))

(defn inc-oscillator
  "Increments the oscillator's value, changing direction at the bounds."
  [oscillator]
  (let [value (:value oscillator)
        increment (:increment oscillator)
        direction (:direction oscillator)
        max-amplitude (:max-amplitude oscillator)
        new-value (+ value (* increment direction))]
    (cond
      (and (> new-value max-amplitude) (> direction 0)) (assoc oscillator :value (- max-amplitude increment) :direction -1)
      (and (< new-value 0) (< direction 0)) (assoc oscillator :value increment :direction 1)
      :else (assoc oscillator :value new-value))))

;; Example usage:
;; (def val (create-oscillator 0 25 0.10))
;; (oscillator-value val) ; => 0
;; (def val (inc-oscillator val))
;; (oscillator-value val) ; => 0.1
;; After many increments, assuming val's value reaches 25 or 0 and changes direction:
;; (def val (inc-oscillator val)) ; => new oscillator with value decremented or incremented
;; (oscillator-value val) ; => 24.9 or 0.1 based on direction
