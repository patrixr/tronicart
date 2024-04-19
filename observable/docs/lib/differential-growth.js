export class DifferentialGrowth {
  paths = []
  nodeCount

  /**
   * Creates a new DifferentialGrowth instance.
   * @param {DGOptions} opts - Options for differential growth.
   * @param {number} [opts.minSeparation] - The minimum separation between nodes.
   * @param {number} [opts.maxNodes] - The maximum number of nodes allowed.
   * @param {P5} [opts.p5] - An optional instance of the P5 library.
   */
  constructor(opts) {
    this.p5 = opts.p5 ?? window
    this.opts = opts
  }

  /**
   * Adds a path to the differential growth system.
   * @param {P5.Vector[]} nodes - An array of P5.Vector objects representing the nodes of the path.
   * @param {PathOptions} [pathOpts={}] - Options for the path.
   * @param {boolean} [pathOpts.static=false] - A boolean indicating if the path is static.
   * @param {number} [pathOpts.speed=0.05] - The speed at which the nodes move.
   * @param {boolean} [pathOpts.allowSpawn=true] - A boolean indicating if new nodes can be spawned.
   */
  addPath(nodes, pathOpts = {}) {
    this.nodeCount += nodes.length
    this.paths.push({
      nodes: nodes,
      static: pathOpts.static ?? false,
      speed: pathOpts.speed ?? 0.05,
      allowSpawn: pathOpts.allowSpawn ?? true,
    })
  }

  /**
   * Updates the differential growth system by moving and spawning nodes.
   * Nodes within each path will be moved away from each other if they are closer than a specified minimum separation.
   * New nodes will be spawned between existing nodes if the distance between them is greater than the minimum separation,
   * until the maximum number of nodes is reached.
   */
  update() {
    const { minSeparation = 16 } = this.opts

    // Move points
    for (let path of this.paths) {
      if (path.static) return

      for (let node of path.nodes) {
        for (let otherPath of this.paths) {
          const sep = minSeparation // === path ? minSeparation : minSeparation * 2

          for (let otherNode of otherPath.nodes) {
            if (node === otherNode) continue

            const delta = node.copy().sub(otherNode)
            const dist = delta.mag()

            if (dist < sep) {
              const diff = sep - dist

              const force = node
                .copy()
                .sub(otherNode)
                .setMag(diff * path.speed)

              node.add(force)
            }
          }
        }
      }
    }

    const { maxNodes = 3000 } = this.opts

    // Spawn points
    for (let path of this.paths) {
      if (this.nodeCount >= maxNodes) break
      if (path.static || !path.allowSpawn) continue

      for (let i = 0; i < path.nodes.length; ++i) {
        if (this.nodeCount >= maxNodes) break

        const node = path.nodes[i]
        const prevNode =
          i === 0 ? path.nodes[path.nodes.length - 1] : path.nodes[i - 1]
        const dist = node.copy().sub(prevNode).mag()
        if (dist > minSeparation) {
          let newPos = node.copy().add(prevNode).mult(0.5)
          path.nodes.splice(i, 0, newPos)
          this.nodeCount++

          if (this.nodeCount >= maxNodes) {
            console.log("Max nodes reached")
          }
        }
      }
    }
  }
}
