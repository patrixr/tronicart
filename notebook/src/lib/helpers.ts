export function present<T>(obj: T | null | undefined): obj is T {
  return obj !== null && obj !== undefined
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 500,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}
