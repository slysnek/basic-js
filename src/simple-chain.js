const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
      this.chain.push(`( ${value} )`)
      return this
  },
  removeLink(position) {
    if(Number.isInteger(position)){
      if ((position-1) < 0 || (position-1) >= this.chain.length) {
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
      }
      let newPos = position - 1
      this.chain.splice(newPos, 1);
      return this;
    }
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain = this.chain.join('~~');
    this.chain = [];
    return finishChain;
  }
};

module.exports = {
  chainMaker
};
