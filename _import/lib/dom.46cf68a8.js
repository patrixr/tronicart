export function onElementRemoved(element, callback) {
  const observer = new MutationObserver(() => {
    if (!element.isConnected) {
      callback();
      observer.disconnect();
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
export function removeChildrenBySelector(element, selector) {
  const els = element.querySelectorAll(selector);
  els.forEach((el) => {
    el.parentNode?.removeChild(el);
  });
}
export function onElementInView(element, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  });
  observer.observe(element);
}
