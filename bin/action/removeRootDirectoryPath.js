"use strict";

const removeRootDirectoryPathOperation = require("../operation/removeRootDirectoryPath"),
      removeRootDirectoryPathPromptOperation = require("../operation/prompt/removeRootDirectoryPath"),
      removeRootDirectoryPathByIndexOperation = require("../operation/removeRootDirectoryPathByIndex");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE, SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE } = require("../messages");

function removeRootDirectoryPathAction(rootDirectoryPath) {
  const operations = [
          removeRootDirectoryPathOperation,
          removeRootDirectoryPathPromptOperation,
          removeRootDirectoryPathByIndexOperation
        ],
        index = null,
        context = {
          index,
          rootDirectoryPath
        };

  executeOperations(operations, (completed) => {
    if (!completed) {
      console.log(FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE);

      return;
    }

    console.log(SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE);
  }, context);
}

module.exports = removeRootDirectoryPathAction;
