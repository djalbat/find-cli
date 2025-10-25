"use strict";

import { shellUtilities } from "necessary";

import { validateRootDirectoryPath } from "../../utilities/validate";
import { INVALID_ROOT_DIRECTORY_PATH_MESSAGE } from "../../messages";
import { ADD_ROOT_DIRECTORY_PATH_DESCRIPTION } from "../../descriptions";

const { prompt } = shellUtilities;

export default function addRootDirectoryPathPromptOperation(proceed, abort, context) {
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
