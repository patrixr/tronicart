(ns io.tronica.creative-core.runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [io.tronica.creative-core.test-core]))

(doo-tests
 'io.tronica.creative-core.test-core)
