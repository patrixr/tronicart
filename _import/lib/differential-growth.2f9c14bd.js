import P5 from "../../_node/p5@1.11.2/index.1b9ecc21.js";
export class DifferentialGrowth {
  paths = [];
  nodeCount = 0;
  p5;
  opts;
  /**
   * Creates a new DifferentialGrowth instance.
   * @param opts - Options for differential growth.
   * @param opts.minSeparation - The minimum separation between nodes.
   * @param opts.maxNodes - The maximum number of nodes allowed.
   * @param opts.p5 - An optional instance of the P5 library.
   */
  constructor(opts) {
    this.p5 = opts.p5 ?? window;
    this.opts = opts;
  }
  /**
   * Adds a path to the differential growth system.
   * @param nodes - An array of P5.Vector objects representing the nodes of the path.
   * @param pathOpts - Options for the path.
   * @param pathOpts.static - A boolean indicating if the path is static.
   * @param pathOpts.speed - The speed at which the nodes move.
   * @param pathOpts.allowSpawn - A boolean indicating if new nodes can be spawned.
   */
  addPath(nodes, pathOpts = {}) {
    this.nodeCount += nodes.length;
    this.paths.push({
      nodes,
      static: pathOpts.static ?? false,
      speed: pathOpts.speed ?? 0.05,
      allowSpawn: pathOpts.allowSpawn ?? true
    });
  }
  /**
   * Updates the differential growth system by moving and spawning nodes.
   * Nodes within each path will be moved away from each other if they are closer than a specified minimum separation.
   * New nodes will be spawned between existing nodes if the distance between them is greater than the minimum separation,
   * until the maximum number of nodes is reached.
   */
  update() {
    const { minSeparation = 16 } = this.opts;
    for (const path of this.paths) {
      if (path.static)
        continue;
      for (const node of path.nodes) {
        for (const otherPath of this.paths) {
          const sep = minSeparation;
          for (const otherNode of otherPath.nodes) {
            if (node === otherNode)
              continue;
            const delta = node.copy().sub(otherNode);
            const dist = delta.mag();
            if (dist < sep) {
              const diff = sep - dist;
              const force = node.copy().sub(otherNode).setMag(diff * path.speed);
              node.add(force);
            }
          }
        }
      }
    }
    const { maxNodes = 3e3 } = this.opts;
    for (const path of this.paths) {
      if (this.nodeCount >= maxNodes)
        break;
      if (path.static || !path.allowSpawn)
        continue;
      for (let i = 0; i < path.nodes.length; ++i) {
        if (this.nodeCount >= maxNodes)
          break;
        const node = path.nodes[i];
        const prevNode = i === 0 ? path.nodes[path.nodes.length - 1] : path.nodes[i - 1];
        const dist = node.copy().sub(prevNode).mag();
        if (dist > minSeparation) {
          const newPos = node.copy().add(prevNode).mult(0.5);
          path.nodes.splice(i, 0, newPos);
          this.nodeCount++;
          if (this.nodeCount >= maxNodes) {
            console.log("Max nodes reached");
          }
        }
      }
    }
  }
  /**
   * Gets the current number of nodes in the system.
   */
  getNodeCount() {
    return this.nodeCount;
  }
  /**
   * Gets all paths in the system.
   */
  getPaths() {
    return this.paths;
  }
}
