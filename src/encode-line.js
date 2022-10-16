const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let currentLetter;
  let stringArray = [];
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if(i !== 0){
      if(str[i] === str[i-1]){
          count++;
        }
        if(str[i] !== str[i-1]){
          if(count > 1){
            stringArray.push(count);
          }
          stringArray.push(str[i-1]);
          count = 0;
          count++
        }
    } else {
      currentLetter = str[i];
      count++;
    }
  }
  return stringArray.join('')
}

module.exports = {
  encodeLine
};
