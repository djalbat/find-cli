"use strict";

const addRootDirectoryPathOperation = require("../operation/addRootDirectoryPath"),
      addRootDirectoryPathPromptOperation = require("../operation/prompt/addRootDirectoryPath");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_ADD_ROOT_DIRECTORY_MESSAGE, SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE } = require("../messages");

function addRootDirectoryPathAction(rootDirectory) {
  const operations = [
          addRootDirectoryPathPromptOperation,
          addRootDirectoryPathOperation
        ],
        context = {
          rootDirectory
        };

  executeOperations(operations, (completed) => {
    if (!completed) {
      console.log(FAILED_ADD_ROOT_DIRECTORY_MESSAGE);

      return;
    }

    console.log(SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE);
  }, context);
}

module.exports = addRootDirectoryPathAction;
