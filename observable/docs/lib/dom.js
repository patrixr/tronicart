/**
 * Observes the DOM for the removal of a specific element and executes a callback when the element is removed.
 *
 * @param {Element} element The DOM element to observe for removal.
 * @param {Function} callback The callback function to execute once the element is removed.
 */
export function onElementRemoved(element, callback) {
  const observer = new MutationObserver(() => {
    if (!element.isConnected) {
      callback()
      observer.disconnect()
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

/**
 * Removes all child elements that match a given CSS selector from a specified parent element.
 *
 * @param {Element} element The parent DOM element from which child elements will be removed.
 * @param {string} selector The CSS selector used to find matching child elements to remove.
 */
export function removeChildrenBySelector(element, selector) {
  const els = element.querySelectorAll(selector)
  els.forEach((el) => {
    el.parentNode.removeChild(el)
  })
}

/**
 * Observes a DOM element and executes a callback when the element comes into view.
 *
 * This function uses the Intersection Observer API to monitor when the specified
 * element enters the viewport. Once the element is in view, the callback function
 * is executed, and the observer is disconnected to prevent further observation.
 *
 * @param {Element} element The DOM element to observe for entering the viewport.
 * @param {Function} callback The callback function to execute once the element is in view.
 */
export function onElementInView(element, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
        observer.disconnect()
      }
    })
  })

  observer.observe(element)
}
