// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 */

/**
 * Start from:
 * steps(3)
 * '###'
 * '###'
 * '###'
 * 
 * Then think about the space:
 * '#  ' -> c: 1, r: 1, but there's space at c: 2, r: 1, and c: 3, r: 1
 * '## ' -> c: 1, r: 1 and c: 2, r: 2
 * '###' -> c: 1, r: 1 and c: 2, r: 2 and c: 3, r: 3
 */
function steps(n) {
  for (let row = 1; row <= n; row++) {
    let line = ""

    for (let col = 1; col <= n; col++) {
      if (col <= row) { // this is crucial!
        line += "#" // start by only adding this
      } else {
        line += " "
      }
    }

    console.log(line)
  }
}

steps(3)
/*
#
##
###
*/