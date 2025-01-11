import type { Maybe } from '../types'

// ---------------------------------------------
// TYPES
// ---------------------------------------------

export type Tile = {
  id: string;
  connections: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
};

export type TruchetStrategy = 'bestfit' | 'firstmatch';

export type ConnectionMatcher = (s1?: string, s2?: string) => number;

export type TruchetOptions = {
  /* Strategy when selecting tles */
  strategy?: TruchetStrategy;
  /* Function used for comparing tiles (optional) */
  connectionMatcher?: ConnectionMatcher;
};

// ---------------------------------------------
// HELPERS
// ---------------------------------------------

type Direction = 'top' | 'bottom' | 'right' | 'left';

type Neighbour = {
  dx: number;
  dy: number;
  dir: Direction;
};

const NEIGHBOURS: Neighbour[] = [
  {
    dx: -1,
    dy: 0,
    dir: 'left'
  },
  {
    dx: 1,
    dy: 0,
    dir: 'right'
  },
  {
    dx: 0,
    dy: 1,
    dir: 'bottom'
  },
  {
    dx: 0,
    dy: -1,
    dir: 'top'
  }
];

const OPPOSITES: Record<Direction, Direction> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left'
};

function spiralTraversal(
  width: number,
  height: number,
  callback: (x: number, y: number) => void,
  x = Math.floor(width / 2),
  y = Math.floor(height / 2),
  visited = new Set<string>()
): void {
  const cacheKey = `${x}-${y}`;

  if (x < 0 || x >= width || y < 0 || y >= height || visited.has(cacheKey)) return;

  callback(x, y);

  visited.add(cacheKey);

  NEIGHBOURS.forEach(({ dx, dy }) => {
    spiralTraversal(width, height, callback, x + dx, y + dy, visited);
  });
}

const defaultConnectionMatcher: ConnectionMatcher = (s1, s2) => {
  if (s1 !== s2) return 0;
  if (s1 === undefined) return 0.5;
  return 1;
};

function getRandomItem<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// ---------------------------------------------
// IMPLEMENTATION
// ---------------------------------------------

export const Truchet = {

  createTiling<T extends Tile>(
    /* The width of the grid */
    colCount: number,
    /* The height of the grid */
    rowCount: number,
    /* The usable tiles for the algorithm */
    tiles: T[],
    /* Some options */
    opts: TruchetOptions = {}
  ): Maybe<T>[][] {
    const width = colCount;
    const height = rowCount;
    const grid: Maybe<T>[][] = Array.from({ length: width }, () => Array(height).fill(null));

    const { strategy = 'bestfit', connectionMatcher = defaultConnectionMatcher } = opts;

    /*
     * Given a location and a tile we wish to place there,
     * this function will return a score between 0 and 1 of how well it fits there
     */
    const getPlacementScore = (x: number, y: number, tile: T): number => {
      let score = 0;

      for (const { dx, dy, dir } of NEIGHBOURS) {
        const nx = x + dx;
        const ny = y + dy;
        const outOfBounds = ny < 0 || ny >= height || nx < 0 || nx >= width;
        const neighbourTile = outOfBounds ? null : grid[x + dx][y + dy];
        const oppositeDir = OPPOSITES[dir];
        if (!neighbourTile) {
          score += tile.connections[dir] ? 0.5 : 1;
        } else {
          const localScore = connectionMatcher(
            neighbourTile.connections[oppositeDir],
            tile.connections[dir]
          );
          if (strategy === 'firstmatch' && localScore === 1) return 1;
          score += localScore;
        }
      }

      return score;
    };

    const groupItemsByScore = (x: number, y: number, tiles: T[]) => {
      const groups = new Map();

      tiles.forEach((tile) => {
        const score = getPlacementScore(x, y, tile);
        if (groups.has(score)) {
          groups.get(score).push(tile);
        } else {
          groups.set(score, [tile]);
        }
      });

      return Array.from(groups.entries())
        .sort(([scoreA], [scoreB]) => scoreB - scoreA)
        .map(([, group]) => group);
    };

    spiralTraversal(width, height, (x, y) => {
      const scoreGroups = groupItemsByScore(x, y, tiles);
      grid[x][y] = getRandomItem<T>(scoreGroups[0]);
    });

    return grid;
  }
}