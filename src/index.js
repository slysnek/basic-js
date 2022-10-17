function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
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
      if (i === 0) {
        continue
      } else {
        finalArray.splice(i - 1, 1)
      }
    }
    if (finalArray[i] === '--double-next') {
      let temp = finalArray[i + 1];
      finalArray.splice(i, 1, temp)
    }
    if (finalArray[i] === '--double-prev') {
      let temp2 = finalArray[i - 1];
      finalArray.splice(i, 1, temp2)
    }
  }
  return finalArray.filter((el) => el !== '--discard-next' && el !== '--discard-prev')
}

let result = transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])
console.log(result);