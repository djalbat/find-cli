"use strict";

import { shellUtilities } from "necessary";

import { validateIndex } from "../../utilities/validate";
import { listRootDirectoryPaths } from "../../operation/listRootDirectoryPaths";
import { REMOVE_ROOT_DIRECTORY_PATH_DESCRIPTION } from "../../descriptions";
import { INVALID_ROOT_DIRECTORY_PATH_INDEX_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function removeRootDirectoryPathPromptOperation(proceed, abort, context) {
  const { rootDirectoryPath } = context;

  if (rootDirectoryPath !== null) {
    proceed();

    return;
  }

  const lastIndex = listRootDirectoryPaths();

  if (lastIndex === 0) {
    abort();

    return;
  }

  const description = REMOVE_ROOT_DIRECTORY_PATH_DESCRIPTION,
        errorMessage = INVALID_ROOT_DIRECTORY_PATH_INDEX_MESSAGE,
        validationFunction = (answer) => {
          const valid = validateIndex(answer, lastIndex);

          return valid;
        }, ///
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

    const index = answer; ///

    Object.assign(context, {
      index
    });

    proceed();
  });
}
