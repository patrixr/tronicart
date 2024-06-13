/**
 * Creates a canvas element with the given width and height.
 * @param width The width of the canvas.
 * @param height The height of the canvas.
 * @param id The id of the canvas. Default is "".
 * @returns {HTMLDivElement} The canvas element.
 */
export function canvas(width, height, id = "defaultCanvas0") {
  const containerDiv = document.createElement("div")
  const canvas = document.createElement("canvas")
  canvas.id = id
  canvas.width = width
  canvas.height = height
  canvas.style.maxWidth = "960px"
  canvas.style.maxHeight = "540px"
  canvas.style.outline = "1px dashed lightgray"
  canvas.style.margin = "10px"
  containerDiv.appendChild(canvas)
  return containerDiv
}
