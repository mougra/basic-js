const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  let mount
  if (date instanceof Date && !isNaN(date.valueOf())) {
    mount = date.getMonth()
  } else throw Error('Invalid date!')

  let season
  // switch (mount) {
  //   case (11, 0, 1):
  //     season = 'winter'
  //   case (2, 3, 4):
  //     season = 'spring'
  //   case (5, 6, 7):
  //     season = 'summer'
  //   case (8, 9, 10):
  //     season = 'autumn'
  // }
  if (mount == 0 || mount == 1 || mount == 11) {
    season = 'winter'
  } else {
    if (mount == 2 || mount == 3 || mount == 4) {
      season = 'spring'
    } else {
      if (mount == 5 || mount == 6 || mount == 7) {
        season = 'summer'
      } else {
        if (mount == 8 || mount == 9 || mount == 10) {
          season = 'autumn'
        } else throw Error('Invalid date!')
      }
    }
  }

  return season
}

module.exports = {
  getSeason,
}
