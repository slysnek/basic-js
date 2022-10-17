const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
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
    let domain = ''
    for(let word of arr){
      domain += '.' + word;
      if(domainCount[domain]){
        domainCount[domain]+=1;
      }else{
        domainCount[domain] = 1;
      }
  }
  }
  console.log(domainCount);
  return domainCount

}

module.exports = {
  getDNSStats
};
