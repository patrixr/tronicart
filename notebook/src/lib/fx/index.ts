import * as textures from "./textures.js"
import * as positions from "./positions.js"
import * as shapes from "./shapes.js"
import * as base from "./base.js"
import * as audio from "./audio.js"
import * as input from "./input.js"
import * as mask from "./mask.js"

const Effects = {
  ...positions.fx,
  ...base.fx,
  ...textures.fx,
  ...shapes.fx,
  ...audio.fx,
  ...input.fx,
  ...mask.fx,
}

export default Effects
