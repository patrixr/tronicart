import test from 'ava';
import { tilingBuilder, Tile, ConnectionMatcher } from './truchet';

test('tilingBuilder generates an empty grid with no tiles', (t) => {
    const colCount = 4;
    const rowCount = 4;
    const tiles: Tile[] = [];

    t.throws(() => {
        tilingBuilder(colCount, rowCount, tiles);
    }, { instanceOf: Error }, "Should throw if no tiles are provided");
});

test('tilingBuilder generates a grid with a single tile', (t) => {
    const colCount = 3;
    const rowCount = 3;
    const tiles: Tile[] = [
        {
            id: '1',
            connections: {
                top: 'a',
                left: 'a',
                right: 'a',
                bottom: 'a',
            },
        },
    ];

    const result = tilingBuilder(colCount, rowCount, tiles);

    t.is(result.length, rowCount, 'Generated grid should have the correct number of rows');
    result.forEach((row) => {
        t.is(row.length, colCount, 'Generated grid should have the correct number of columns');
        row.forEach((tile) => {
            t.deepEqual(tile, tiles[0], 'Each cell in the generated grid should be the single provided tile');
        });
    });
});

test('tilingBuilder generates a grid with custom connectionMatcher', (t) => {
    const colCount = 2;
    const rowCount = 2;
    const tiles: Tile[] = [
        {
            id: '1',
            connections: {
                top: 'a',
                left: 'a',
                right: 'b',
                bottom: 'b',
            },
        },
        {
            id: '2',
            connections: {
                top: 'b',
                left: 'b',
                right: 'a',
                bottom: 'a',
            },
        },
    ];
    const customConnectionMatcher: ConnectionMatcher = (s1, s2) => s1 !== s2;

    const result = tilingBuilder(colCount, rowCount, tiles, customConnectionMatcher);

    t.is(result.length, rowCount, 'Generated grid should have the correct number of rows');
    result.forEach((row) => {
        t.is(row.length, colCount, 'Generated grid should have the correct number of columns');
    });

    // Check if the custom connectionMatcher is applied correctly
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            const tile = result[i][j];
            if (i > 0) {
                const topTile = result[i - 1][j];
                t.true(customConnectionMatcher(tile!.connections.top, topTile!.connections.bottom));
            }
            if (j > 0) {
                const leftTile = result[i][j - 1];
                t.true(customConnectionMatcher(tile!.connections.left, leftTile!.connections.right));
            }
        }
    }
});
