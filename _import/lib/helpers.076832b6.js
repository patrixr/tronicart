export function present(obj) {
  return obj !== null && obj !== undefined
}

export function debounce(func, wait = 500) {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}
