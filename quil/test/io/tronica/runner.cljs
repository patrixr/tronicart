(ns io.tronica.runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [io.tronica.creative-core.test-core]))

(prn "yo")

(doo-tests
 'io.tronica.core.transitions-test)
