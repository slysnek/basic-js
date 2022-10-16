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

function isMAC48Address(str) {
    let pattern = /\b[A-F0-9]+-[A-F0-9]+-[A-F0-9]+-[A-F0-9]+-[A-F0-9]+-[A-F0-9]+/g;
    return pattern.test(str)
  }

let result = isMAC48Address('A1-1B-63-84-45-E6')

//'00-1B-63-84-45-E6'
//'Z1-1B-63-84-45-E6'


console.log(result);