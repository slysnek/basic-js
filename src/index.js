class DepthCalculator {
  calculateDepth(array, count = 1) {
    if (array.some(function(element) {
      return Array.isArray(element);
    })) {
      count++;
      return this.calculateDepth(array.flat(1), count);
    }
    return count;
  }
}


let b = new DepthCalculator;
let result = b.calculateDepth([1,2,3,4,5,[]])
console.log(result);