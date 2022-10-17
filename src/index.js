function getSumOfDigits(num) {
  if(num.toString().length === 1){
    return num
  } else{
    let numArr = num.toString().split('');
    let result = numArr.reduce((total, el) => {
      return total + parseInt(el);
    }, 0)
    return getSumOfDigits(result)
  }
}

let result = getSumOfDigits(10)
console.log(result);