(ns io.tronica.core.data)

(defn in-array? [array obj]
  (not= nil (some #(= % obj) array)))

(defn mutable [obj]
  (volatile! obj))

(defn mset!
  ;; If only a value is provided, reset the whole volatile.
  ([v val]
   (vreset! v val)
   v)
  ;; If a key and value are provided, update the map inside the volatile by associating the new value with the key.
  ([v k val]
   (vswap! v assoc k val)
   v))

(defn mget
  ;; If just the volatile is provided, return its value.
  ([v] @v)
  ;; If a key is provided, return the value associated with the key.
  ([v k] (get @v k)))
