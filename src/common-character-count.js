const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(str1, str2) {
  let string1 = str1.split('');
  let string2 = str2.split('');
  let count = 0;
  for (let i = 0; i < string2.length; i++) {
    for (let k = 0; k < string1.length; k++) {
      if(string1[k] === string2[i]){
        string1[k] = '.'
        string2[i] = '.'
        count++;
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
