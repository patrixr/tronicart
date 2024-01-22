(ns ^:figwheel-no-load io.tronica.creative-core.dev
  (:require
    [io.tronica.creative-core.test-page :as test-page]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(test-page/init!)
