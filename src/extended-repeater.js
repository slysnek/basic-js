const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS **
 *     STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let separator = '+'
  let additionSeparator = '|'
  let addition = ''
  let repeatTimes = 0;
  let additionRepeatTimes = 1;

  if(options.addition){
    addition = options.addition
  }
  if(options.addition === false){
    addition = 'false'
  }
  if(options.addition === null){
    addition = 'null'
  }
  if(options.separator){
      separator = options.separator
  }
  if(options.additionSeparator){
      additionSeparator = options.additionSeparator
  }
  if(options.repeatTimes){
      repeatTimes = options.repeatTimes;
  }
  if(options.additionRepeatTimes){
      additionRepeatTimes = options.additionRepeatTimes;
  }

  let stringToMultiply = str;
  let finalString = str;

  for (let i = 0; i < additionRepeatTimes; i++) { //making a string
    if(repeatTimes === 1 && additionRepeatTimes < 2){
      stringToMultiply = str;
      break;
    }
    if(i === additionRepeatTimes){
      stringToMultiply += addition + separator;
        break;
    }
    if(additionRepeatTimes > 1 && i !==  additionRepeatTimes-1){
      stringToMultiply += addition + additionSeparator;
    } else if (i === repeatTimes-1){
      stringToMultiply += addition;
    } else{
      stringToMultiply += addition;
    }
  }

  finalString = stringToMultiply;
  console.log('string to multiply:' + stringToMultiply);

  for (let i = 0; i < repeatTimes-1; i++) { //multiply the string
    finalString += separator + stringToMultiply;
  }

  return finalString
}

module.exports = {
  repeater
};
