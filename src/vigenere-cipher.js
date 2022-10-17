const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.upperBorderZ = 90
    this.lowerBorderA = 65
    this.numberOfLetters = this.alphabet.length;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error("Incorrect arguments!");
    }

    let upperMessage = message.toUpperCase();
    let upperKey = key.toUpperCase();
    let cypher = '';
    let count = 0;
  
    while (upperKey.length < upperMessage.length) {
      upperKey += upperKey;
    }

    for (let i = 0; i < upperMessage.length; i++) {
      if (this.alphabet.includes(upperMessage[i])) {
        let letterWithCypher = upperMessage.charCodeAt(i) + upperKey.charCodeAt(count) - this.lowerBorderA;
        console.log(letterWithCypher);
        if (letterWithCypher > this.upperBorderZ) {
          letterWithCypher = letterWithCypher - this.numberOfLetters;
        }
        cypher = cypher + String.fromCharCode(letterWithCypher);
        count++;
      }
  
      else {
        cypher = cypher + upperMessage[i];
      }
    }
    
    if (this.direction === true ||
       this.direction === undefined) {
      return cypher;
    }

    let cryptedMessage = cypher.split('').reverse().join('');
    return cryptedMessage;
  }
    
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw Error("Incorrect arguments!");
    }

    let upperMessage = encryptedMessage.toUpperCase();
    let upperKey = key.toUpperCase();
  
    while (upperKey.length < upperMessage.length) {
      upperKey += upperKey;
    }

    let cypher = '';
    let count = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      if (this.alphabet.includes(upperMessage[i])) {
        let letterWithoutCipher = upperMessage.charCodeAt(i) - upperKey.charCodeAt(count) + this.lowerBorderA;
        console.log(letterWithoutCipher);
        if (letterWithoutCipher < this.lowerBorderA) {
          letterWithoutCipher = letterWithoutCipher + this.numberOfLetters;
        }
        cypher = cypher + String.fromCharCode(letterWithoutCipher);
        count++;
      }
        else {
        cypher = cypher + upperMessage[i];
      }
    }
        
    if (this.direction === true ||
       this.direction === undefined) {
      return cypher;
    }
     
    let decryptedMessage = cypher.split('').reverse().join('');
    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
