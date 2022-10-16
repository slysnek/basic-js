const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(num) {
  let stringNum = num.toString();
  let compareValue = 0;
  for (let i = 0; i < stringNum.length; i++) {
    let numArray = num.toString().split('')
    numArray.splice(i, 1);
    let modifiedNum = parseInt(numArray.join(''));
    if(modifiedNum > compareValue){
      compareValue = modifiedNum;
    }
  }
  return compareValue;
}

module.exports = {
  deleteDigit
};
