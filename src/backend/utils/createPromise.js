// factory function to create a promise
// called like so:
// createPromise((resolve, reject) => // do something with resolve/reject here);
const createPromise = function(exec) {
  return new Promise(exec);
};

module.exports = {
  createPromise
};
