"use strict";

const processPathsOperation = require("../operation/processPaths"),
      readConfigurationOperation = require("../operation/readConfiguration");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_FIND_MESSAGE, SUCCESSFUL_FIND_MESSAGE } = require("../messages");

function findAction(string, quietly) {
  const operations = [
          readConfigurationOperation,
          processPathsOperation
        ],
        context = {
          string,
          quietly
        };

  executeOperations(operations, (completed) => {
    if (!completed) {
      console.log(FAILED_FIND_MESSAGE);

      return;
    }

    console.log(SUCCESSFUL_FIND_MESSAGE);
  }, context);
}

module.exports = findAction;
