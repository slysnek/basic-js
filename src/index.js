function getCommonCharacterCount(str1, str2) {
    let string1 = str1.split('');
    let string2 = str2.split('');
    let count = 0;
    for (let i = 0; i < string2.length; i++) {
      for (let k = 0; k < string1.length; k++) {
        if(string1[k] === string2[i]){
          string1[k] = '+'
          string2[i] = '-'
          console.log(string1);
          console.log(string2);
          count++;
          console.log(count);
          break;
        }
      }
    }
    return count;
}

let result = getCommonCharacterCount('aabcc', 'adcaa')
console.log(result);