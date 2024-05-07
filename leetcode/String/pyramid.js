// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

/** 
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 * 
 * Tips: give row and col index to make a table of each pyramid
 * 
 * start from: create n rows
 * Then: how to get the last row's numbers of # -> given n row, the last row will have (2n - 1) #
 * Then: the middle column always has # -> use Math.floor() to find the middle column
 * Then: the # only appears from (col >= mid - row) to (col <= mid + row)
*/
function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2) // Math.floor(): if 5 / 2 = 2.5 -> 2

  for (let row = 0; row < n; row++) {
    let line = ""

    for (let col = 0; col < (2 * n - 1); col++) {
      if (col >= mid - row && col <= mid + row) {
        line += "#"
      } else {
        line += " "
      }
    }

    console.log(line)
  }
}

pyramid(3)
/*
  #
 ###
#####
*/