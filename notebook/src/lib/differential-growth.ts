import P5 from "p5"

interface DGOptions {
  minSeparation?: number
  maxNodes?: number
  p5?: P5
}

interface PathOptions {
  static?: boolean
  speed?: number
  allowSpawn?: boolean
}

interface Path {
  nodes: P5.Vector[]
  static: boolean
  speed: number
  allowSpawn: boolean
}

export class DifferentialGrowth {
  private paths: Path[] = []
  private nodeCount: number = 0
  private p5: P5
  private opts: DGOptions

  /**
   * Creates a new DifferentialGrowth instance.
   * @param opts - Options for differential growth.
   * @param opts.minSeparation - The minimum separation between nodes.
   * @param opts.maxNodes - The maximum number of nodes allowed.
   * @param opts.p5 - An optional instance of the P5 library.
   */
  constructor(opts: DGOptions) {
    this.p5 = opts.p5 ?? (window as unknown as P5)
    this.opts = opts
  }

  /**
   * Adds a path to the differential growth system.
   * @param nodes - An array of P5.Vector objects representing the nodes of the path.
   * @param pathOpts - Options for the path.
   * @param pathOpts.static - A boolean indicating if the path is static.
   * @param pathOpts.speed - The speed at which the nodes move.
   * @param pathOpts.allowSpawn - A boolean indicating if new nodes can be spawned.
   */
  public addPath(nodes: P5.Vector[], pathOpts: PathOptions = {}): void {
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
  public update(): void {
    const { minSeparation = 16 } = this.opts

    // Move points
    for (const path of this.paths) {
      if (path.static) continue

      for (const node of path.nodes) {
        for (const otherPath of this.paths) {
          const sep: number = minSeparation

          for (const otherNode of otherPath.nodes) {
            if (node === otherNode) continue

            const delta: P5.Vector = node.copy().sub(otherNode)
            const dist: number = delta.mag()

            if (dist < sep) {
              const diff: number = sep - dist

              const force: P5.Vector = node
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
    for (const path of this.paths) {
      if (this.nodeCount >= maxNodes) break
      if (path.static || !path.allowSpawn) continue

      for (let i = 0; i < path.nodes.length; ++i) {
        if (this.nodeCount >= maxNodes) break

        const node = path.nodes[i]
        const prevNode: P5.Vector =
          i === 0 ? path.nodes[path.nodes.length - 1] : path.nodes[i - 1]
        const dist: number = node.copy().sub(prevNode).mag()

        if (dist > minSeparation) {
          const newPos: P5.Vector = node.copy().add(prevNode).mult(0.5)
          path.nodes.splice(i, 0, newPos)
          this.nodeCount++

          if (this.nodeCount >= maxNodes) {
            console.log("Max nodes reached")
          }
        }
      }
    }
  }

  /**
   * Gets the current number of nodes in the system.
   */
  public getNodeCount(): number {
    return this.nodeCount
  }

  /**
   * Gets all paths in the system.
   */
  public getPaths(): ReadonlyArray<Path> {
    return this.paths
  }
}
