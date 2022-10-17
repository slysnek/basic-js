const { NotImplementedError } = require('../extensions/index.js');

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
    return 'Unable to determine the time of year!';
  } else if ((date instanceof Date === false)) {
    throw new Error('Invalid date!');
  } else if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let currentMonth = date.getMonth();
  if ((currentMonth > -1 && currentMonth < 2) || currentMonth === 11) {
    return 'winter'
  }else if (currentMonth > 1 && currentMonth < 5) {
    return 'spring'
  }else if (currentMonth > 4 && currentMonth < 8) {
    return 'summer'
  }else if (currentMonth > 7 && currentMonth < 11) {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
