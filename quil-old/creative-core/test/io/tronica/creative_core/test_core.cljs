(ns io.tronica.creative-core.test-core
  (:require
   [io.tronica.creative-core.core :as cc :refer [mutable mset! mget]]
   [cljs.test :refer-macros [is are deftest testing use-fixtures]]))

(deftest in-array?-test
  (is (= false (cc/in-array? [] 1)))
  (is (= false (cc/in-array? [1 2 3] 4)))
  (is (= true (cc/in-array? [1 2 3] 1))))

(deftest mutable-update-by-key
  (let [struct (mutable { :x 0 :y 0 })]
    (is (= 0 (mget struct :x)))
    (is (= struct (mset! struct :x 10)))
    (is (= 10 (mget struct :x)))))

(deftest mutable-update-self
  (let [struct (mutable { :x 0 :y 0 })]
    (is (= 0 (mget struct :x)))
    (is (= struct (mset! struct { :x 100 :y 100 })))
    (is (= 100 (mget struct :x)))))
