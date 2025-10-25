"use strict";

import addRootDirectoryPathOperation from "../operation/addRootDirectoryPath";
import validateRootDirectoryPathOperation from "../operation/validateRootDirectoryPath";
import addRootDirectoryPathPromptOperation  from "../operation/prompt/addRootDirectoryPath";

import { executeOperations } from "../utilities/operation";
import { FAILED_ADD_ROOT_DIRECTORY_MESSAGE, SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE } from "../messages";

export default function addRootDirectoryPathAction(rootDirectoryPath) {
  const operations = [
          validateRootDirectoryPathOperation,
          addRootDirectoryPathPromptOperation,
          addRootDirectoryPathOperation
        ],
        context = {
          rootDirectoryPath
        };

  executeOperations(operations, (completed) => {
    if (!completed) {
      console.log(FAILED_ADD_ROOT_DIRECTORY_MESSAGE);

      return;
    }

    console.log(SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE);
  }, context);
}
