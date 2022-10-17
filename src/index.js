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
    if(!(position<=0 || position>this.chain.length || Number.isInteger(position))){
      let pos = position-1;
      this.chain.splice(pos, 1)
    } else {
      this.chain = []
      throw Error ("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain
  }
};

chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(), '( 3rd )~~( function () { } )');

console.log(chainMaker);