const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }

  let finalArray = [...arr]

  for (let i = 0; i < finalArray.length; i++) {
      if (finalArray[i] === '--discard-next') {
        if(i === finalArray.length - 1){
          continue
        } else{
          finalArray.splice(i, 2)
        }
      }
      if (finalArray[i] === '--discard-prev') {
        if(i===0){
          continue
        } else{
          finalArray.splice(i-1, 2)
        }
      }
      if (finalArray[i] === '--double-next') {
/*         let temp = finalArray[i+1];
        finalArray.splice(i, 1, temp) */
        finalArray[i] = finalArray[i+1]
      }
      if (finalArray[i] === '--double-prev') {
/*         let temp2 = finalArray[i-1];
        finalArray.splice(i, 1, temp2) */
        finalArray[i] = finalArray[i-1]
      }
  }
  return finalArray.filter((el) => el !== '--discard-next' && el !== '--discard-prev' && el !== undefined)
}

module.exports = {
  transform
};
