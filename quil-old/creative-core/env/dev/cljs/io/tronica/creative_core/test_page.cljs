(ns io.tronica.creative-core.test-page
  (:require [io.tronica.creative-core.core :as core]
            [reagent.core :as r]))

(defn home-page []
  [:p "Hello World!"])

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
