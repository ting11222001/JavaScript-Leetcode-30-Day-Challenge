/**
 * https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&ab_channel=NeetCode
 * 
 * https://stackoverflow.com/questions/2966947/dynamically-add-data-to-a-javascript-map
 * 
 * https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
 */

function main(arr, target) {
  let prevMap = {}  // val : index

  for (let i = 0; i < arr.length; i++) { // i: 1, num: 7
    let search = target - arr[i] // 9 - 7 = 2
    if (search in prevMap) {
      return [prevMap[search], i]
    } else {
      prevMap[arr[i]] = i // {2: 0}
    }
  }
}

const inputs = [2, 7, 11, 15]
const target = 9
console.log(main(inputs, target)); // [0, 1]