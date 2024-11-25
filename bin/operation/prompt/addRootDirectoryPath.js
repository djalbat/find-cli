"use strict";

const { shellUtilities } = require("necessary");

const { validateRootDirectory } = require("../../utilities/validate"),
      { INVALID_ROOT_DIRECTORY } = require("../../messages"),
      { ADD_ROOT_DIRECTORY_PATH_DESCRIPTION } = require("../../descriptions");

const { prompt } = shellUtilities;

function addRootDirectoryPathPromptOperation(proceed, abort, context) {
  const description = ADD_ROOT_DIRECTORY_PATH_DESCRIPTION,
        errorMessage = INVALID_ROOT_DIRECTORY,
        validationFunction = validateRootDirectory, ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const valid = (answer !== null);

    if(!valid) {
      abort();

      return;
    }

    const rootDirectoryPath = answer; ///

    Object.assign(context, {
      rootDirectoryPath
    });

    proceed();
  });
}

module.exports = addRootDirectoryPathPromptOperation;
