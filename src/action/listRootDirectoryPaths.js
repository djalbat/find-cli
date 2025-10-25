"use strict";

import listRootDirectoryPathsOperation from "../operation/listRootDirectoryPaths";

import { executeOperations } from "../utilities/operation";

export default function listRootDirectoryPathsAction() {
  const operations = [
          listRootDirectoryPathsOperation
        ],
        context = {};

  executeOperations(operations, (completed) => {
    ///
  }, context);
}
