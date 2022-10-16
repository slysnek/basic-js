function getDNSStats(domains) {
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
console.log(result);