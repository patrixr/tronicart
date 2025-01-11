import type P5 from 'p5';

export interface Path {
    nodes: P5.Vector[];
    static?: boolean;
    speed?: number;
    minSeparation?: number;
}

export interface DGOptions {
    minSeparation?: number;
    maxNodes?: number;
}

export class DifferentialGrowth {
    public paths: Path[] = [];
    private nodeCount: number;

    constructor(
        private p5: P5,
        private opts: DGOptions
        ) {}

    addNodes(nodes: P5.Vector[]) {
        this.addPath({
            nodes: nodes,
            static: false,
            speed: 0.05
        })
    }

    addPath(path: Path) {
        this.nodeCount += path.nodes.length;
        this.paths.push(path);
    }

    update() {
        const { minSeparation = 16 } = this.opts;

        // Move points
        for (let path of this.paths) {
            if (path.static) return;

            for (let node of path.nodes) {
                for (let otherPaths of this.paths) {
                    for (let otherNode of otherPaths.nodes) {
                        if (node === otherNode) continue;

                        const dist = node.copy().sub(otherNode).mag();
                        if (dist < minSeparation) {
                            const diff = minSeparation - dist;

                            const force = node
                .copy()
                .sub(otherNode)
                .setMag(diff * path.speed);

                            node.add(force);
                        }
                    }
                }
            }
        }

        const { maxNodes = 3000 } = this.opts;

        // Spawn points
        for (let path of this.paths) {
            if (this.nodeCount >= maxNodes) break;
            if (path.static) continue;

            for (let i = 0; i < path.nodes.length; ++i) {
                if (this.nodeCount >= maxNodes) break;

                const node = path.nodes[i];
                const prevNode = i === 0 ? path.nodes[path.nodes.length - 1] : path.nodes[i - 1];
                const dist = node.copy().sub(prevNode).mag();
                if (dist > minSeparation) {
                    let newPos = node.copy().add(prevNode).mult(0.5);
                    path.nodes.splice(i, 0, newPos);
                    this.nodeCount++;
                }
            }
        }
    }
}
