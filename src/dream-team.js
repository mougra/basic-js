const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (
    members.filter(
      (e) =>
        typeof e === 'string' &&
        e !== '' &&
        /^[a-zA-Z_]/.test(members) == true &&
        /^\d+\.\d/.test(members) == false
    )
  ) {
    let team = []
    members.forEach((element) => {
      team.push(element.trim().slice(0, 1))
    })
    return team.sort().join('').toUpperCase()
  } else return false
}

module.exports = {
  createDreamTeam,
}
