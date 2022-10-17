const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(array, counter = 1) {
    if (array.some(function(element) {
      return Array.isArray(element);
    })) {
      counter++;
      return this.calculateDepth(array.flat(1), counter);
    }
    return counter;
  }
}

module.exports = {
  DepthCalculator
};
