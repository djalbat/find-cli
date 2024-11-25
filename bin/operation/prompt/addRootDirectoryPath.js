"use strict";

const { shellUtilities } = require("necessary");

const { validateRootDirectoryPath } = require("../../utilities/validate"),
      { INVALID_ROOT_DIRECTORY_PATH_MESSAGE } = require("../../messages"),
      { ADD_ROOT_DIRECTORY_PATH_DESCRIPTION } = require("../../descriptions");

const { prompt } = shellUtilities;

function addRootDirectoryPathPromptOperation(proceed, abort, context) {
  const { rootDirectoryPath } = context;

  if (rootDirectoryPath !== null) {
    proceed();

    return;
  }

  const description = ADD_ROOT_DIRECTORY_PATH_DESCRIPTION,
        errorMessage = INVALID_ROOT_DIRECTORY_PATH_MESSAGE,
        validationFunction = validateRootDirectoryPath, ///
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
