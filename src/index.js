/* function getDNSStats(domains) {
    let changedDomains = []
    for (const domain in domains) {
        let newEL = domains[domain].split('.')
        newEL.reverse();
        changedDomains.push(newEL)
    }
    let domainCount = {}
    console.log(changedDomains);
    for (let arr of changedDomains){
        for(let word of arr){
            domainCount[word] = 0;
        }
    }
    console.log(domainCount);
}

let result = getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])
console.log(result); */

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
      if(/*i ===  repeatTimes-1 ||*/ i === additionRepeatTimes){
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
/*       if(i+1 === repeatTimes-1 && stringToMultiply.includes(additionSeparator)){
        stringToMultiply = stringToMultiply.slice(0, -(additionSeparator.length));
        console.log('last string to add: ' + stringToMultiply);
        finalString += separator + stringToMultiply;
        break;
      } */
      finalString += separator + stringToMultiply;
    }

    return finalString
  }
  

  //STRING PLUS 00 PLUS 00 PLUS **
  //STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'


 let result =  repeater('q62Q1BUHzT', { repeatTimes: 1, separator: 'kntiUBYlD8',
   addition: 'NJlyh2T5Ff', additionRepeatTimes: 5,
    additionSeparator: 'F8qlqGevyf' })
  //q62Q1BUHzTNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5Ff


 //let result = repeater(true, { repeatTimes: 3, separator: '??? ',
 // addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })

 //truefalse!!!false??? truefalse!!!false??? truefalse!!!false');




//let result = repeater('аГуСиК ', { repeatTimes: 3, separator: '♥♥♥  ',
// addition: ' пОкАкУнЬкАл ', additionRepeatTimes: 5, additionSeparator: '( ͡° ͜ʖ ͡°)' })
 //аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥
 //аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  
 //аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл
 
 //аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  
 //аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  
 //аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл 


//let result = repeater('my test string', { repeatTimes: 5, separator: '?!',
//addition: 'PLUS', additionRepeatTimes: 4, additionSeparator: '))' })
//my test stringPLUS))PLUS))PLUS))PLUS?!
//my test stringPLUS))PLUS))PLUS))PLUS?!
//my test stringPLUS))PLUS))PLUS))PLUS?!
//my test stringPLUS))PLUS))PLUS))PLUS?!
//my test stringPLUS))PLUS))PLUS))PLUS

//my test stringPLUS))PLUS))PLUS))PLUS))?!
//my test stringPLUS))PLUS))PLUS))PLUS))?!
//my test stringPLUS))PLUS))PLUS))PLUS))?!
//my test stringPLUS))PLUS))PLUS))PLUS))?!
//my test stringPLUS))PLUS))PLUS))PLUS

//et result = repeater('la', { repeatTimes: 3 })
//la+la+la
//assert.equal(repeater('single', { repeatTimes: 1 }), 'single');

console.log(result);