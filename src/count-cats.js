const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countCat = 0
  matrix.forEach((element) => {
    let pos = element.indexOf('^^')
    while (pos !== -1) {
      countCat++
      pos = element.indexOf('^^', pos + 1)
    }
  })
  return countCat
}

module.exports = {
  countCats,
}
