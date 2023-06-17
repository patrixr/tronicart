package io.tronica.lib

fun <T> throttle(delayMillis: Long, action: (T) -> Unit): (T) -> Unit {
    var lastExecuted = 0L

    return { param: T ->
        val currentTime = System.currentTimeMillis()
        if (currentTime - lastExecuted >= delayMillis) {
            action(param)
            lastExecuted = currentTime
        }
    }
}

fun throttle(delayMillis: Long, action: () -> Unit): () -> Unit {
    var lastExecuted = 0L

    return {
        val currentTime = System.currentTimeMillis()
        if (currentTime - lastExecuted >= delayMillis) {
            action()
            lastExecuted = currentTime
        }
    }
}