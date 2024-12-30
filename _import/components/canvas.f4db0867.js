export function canvas(width, height, id = "defaultCanvas0") {
  const containerDiv = document.createElement("div");
  const canvas2 = document.createElement("canvas");
  canvas2.id = id;
  canvas2.width = width;
  canvas2.height = height;
  canvas2.style.maxWidth = "960px";
  canvas2.style.maxHeight = "540px";
  canvas2.style.outline = "1px dashed lightgray";
  canvas2.style.margin = "10px";
  containerDiv.appendChild(canvas2);
  return containerDiv;
}
