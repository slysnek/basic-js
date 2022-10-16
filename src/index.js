function createDreamTeam(members) {
    let letters = []
    members.forEach(element => {
      if(typeof element === 'string'){
        letters.push(element.slice(0,1).toUpperCase())
        console.log(element);
        console.log(letters);
      }
    });
    return letters.sort(function(a,b){
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }).join('')
  }

let result = createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
console.log(result);