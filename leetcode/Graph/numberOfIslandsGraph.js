/**
 * https://www.youtube.com/watch?v=pV2kpPD66nE&ab_channel=NeetCode
 * 
 */


function numIslands(grid) {
  if (!grid) {
    return 0
  }

  let rows = grid.length
  let cols = grid[0].length

  let visit = new Set()
  let islands = 0

  function bfs(r, c) {
    // iterative
    let queue = []
    visit.add([r, c])
    queue.push([r, c])

    while (queue.length > 0) {
      let [row, col] = queue.shift()
      let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

      for (let [dr, dc] of directions) {
        if (0 <= (r + dr) < rows.length &&
          0 <= (c + dc) < cols.length &&
          grid[r + dr][c + dc] == "1" &&
          !visit.has([r + dr, c + dc])
        ) {
          queue.push([r + dr, c + dc])
          visit.add([r + dr, c + dc])
        }
      }
    }
  }


  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] == "1" && !visit.has([r, c])) {
        bfs(r, c)
        islands += 1
      }
    }
  }

  return islands
}

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]
console.log(numIslands(grid));