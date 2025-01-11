(ns io.tronica.core.colors
  (:require [quil.core :as q :include-macros true]))

(def SAGE           "#c9cba3")
(def PEACH_YELLOW   "#ffe1a8")
(def BITTER_SWEET   "#e26d5c")
(def WINE           "#723d46")
(def VAN_DYKE       "#472d30")

(defn with-opacity
  "Returns a copy of a color but with a different opacity"
  [color opacity]
  (q/color (q/red color) (q/green color) (q/blue color) opacity))

(defn equalize-brightness
  "Equalizes the brightness of a color towards 50% brightness."
  [color factor]
  (let [middle-gray (q/color 127.5 127.5 127.5)
        equalized-color (q/lerp-color color middle-gray factor)]
    equalized-color))

(defn random-color
  "Returns a random Quil color"
  []
  (q/color
   (q/random 0 255)
   (q/random 0 255)
   (q/random 0 255)))
