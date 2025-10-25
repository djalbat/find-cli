"use strict";

import removeRootDirectoryPathOperation from "../operation/removeRootDirectoryPath";
import removeRootDirectoryPathPromptOperation from "../operation/prompt/removeRootDirectoryPath";
import removeRootDirectoryPathByIndexOperation from "../operation/removeRootDirectoryPathByIndex";

import { executeOperations } from "../utilities/operation";
import { FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE, SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE } from "../messages";

export default function removeRootDirectoryPathAction(rootDirectoryPath) {
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
