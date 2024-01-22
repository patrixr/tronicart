(ns io.tronica.bootstrap.launcher
  (:require
   [io.tronica.sketches.zareen :as zareen]
   [io.tronica.sketches.watercolors :as watercolors]))

(def sketch-list
  {:zareen zareen/run-sketch
   :watercolors watercolors/run-sketch})

(defn- invoke [fn] (fn))

(defn- js-array [arr]
  (clj->js arr))

(defn start-sketch [name]
  (prn (str "Starting sketch: " name))
  (invoke (get sketch-list (keyword name))))

(defn list-sketches []
  (js-array (map #(name %) (keys sketch-list))))
