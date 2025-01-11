(ns io.tronica.core.utils)

(defn once [f]
  (let [result (atom nil)
        has-run (atom false)]
    (fn [& args]
      (if (false? @has-run)
        (do (reset! has-run true)
            (reset! result (apply f args)))
        @result))))
