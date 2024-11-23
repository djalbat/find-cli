"use strict";

const { asynchronousUtilities } = require("necessary");

const { whilst } = asynchronousUtilities;

function executeOperations(operations, callback, context) {
  let completed = true;

  const operationsLength = operations.length,
        lastIndex = operationsLength - 1;

  whilst((next, done, context, index) => {
    if (index > lastIndex) {
      done();

      return;
    }

    const operation = operations[index],
          proceed = next, ///
          abort = () => {
            completed = false;

            done();
          };

    operation(proceed, abort, context);
  }, done, context);

  function done() {
    callback(completed);
  }
}

module.exports = {
	executeOperations
};
