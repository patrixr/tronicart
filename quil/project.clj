(defproject sketch "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [quil "3.1.0"]
                 [org.clojure/clojurescript "1.10.520"]]

  :profiles {:dev {:dependencies [[cider/piggieback "0.5.0"]
                                  [figwheel-sidecar "0.5.19"]]
                   :source-paths ["cljs_src"]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.19"]
            [lein-doo "0.1.11"]]
  :hooks [leiningen.cljsbuild]

  :clean-targets ^{:protect false} ["resources/public/js"]
  :cljsbuild
  {:builds [; development build with figwheel hot swap
            {:id "development"
             :source-paths ["src"]
             :figwheel true
             :compiler
             {:main "io.tronica.bootstrap.launcher"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/development"
              :asset-path "js/development"}}
            ; minified and bundled build for deployment
            {:id "optimized"
             :source-paths ["src"]
             :compiler
             {:main "io.tronica.bootstrap.launcher"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced}}
            {:id "test"
             :source-paths ["src", "test"]
             :compiler
             {:main "io.tronica.runner"
              :output-to "resources/public/js/testable.js"
              :optimizations :none}}]})
