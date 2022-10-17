function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    for (let k = 0; k < names.length; k++) {
      if(!(i === k )){
        if(names[i]===names[k]){
          names[i]+="(1)"
        }
      }
    }
  }
  return names
}

let result = renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])
console.log(result);