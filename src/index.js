function deleteDigit(num) {
    let stringNum = num.toString();
    let modified = [];
    let compareValue = 0;
    for (let i = 0; i < stringNum.length; i++) {
      let numArray = num.toString().split('')
      let modifiedNum = numArray.splice(i, 1);
      console.log(modifiedNum);
      if(modifiedNum > compareValue){
        compareValue = modifiedNum;
      }
      console.log(compareValue);
    }
    return compareValue;
  }

let result = deleteDigit(152)
console.log(result);