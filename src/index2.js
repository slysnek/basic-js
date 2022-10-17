const chainMaker = {
    chain: [],
    
    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      this.chain.push(`( ${value} )`);
      return this;
    },
    removeLink(position) {
      if ((position-1) < 0 || (position-1) >= this.chain.length || typeof position !== 'number') {
        this.chain = [];
        throw new Error('You can\'t remove incorrect link!');
      }
        
      this.chain.splice(position-1, 1);
      return this;
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {
      const finishedChain = this.chain.join('~~');
      this.chain = [];
      return finishedChain;
    }
  };