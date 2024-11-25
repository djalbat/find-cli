"use strict";

const listRootDirectoryPathsOperation = require("../operation/listRootDirectoryPaths");

const { executeOperations } = require("../utilities/operation");

function listRootDirectoryPathsAction() {
  const operations = [
          listRootDirectoryPathsOperation
        ],
        context = {};

  executeOperations(operations, (completed) => {
    ///
  }, context);
}

module.exports = listRootDirectoryPathsAction;
