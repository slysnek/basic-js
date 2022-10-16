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
function sortByHeight(arr) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === -1){
            indexes.push(i)
        }
    }

    
    arr.sort(function (a, b) {
        return a - b
    })

    do{
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === -1){
                arr.splice(i, 1)
            }
        }
    } while (arr.includes(-1))

    for (let i = 0; i < indexes.length; i++) {
        arr.splice(indexes[i], 0, -1)
    }

    return arr;
}

let result = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

console.log(result);