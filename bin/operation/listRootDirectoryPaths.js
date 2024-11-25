"use strict";

const { retrieveRootDirectoryPaths } = require("../configuration"),
      { NO_ROOT_DIRECTORY_PATHS_MESSAGE } = require("../messages");

function listRootDirectoryPathsOperation(proceed, abort, context) {
  listRootDirectoryPaths()

  proceed();
}

function listRootDirectoryPaths() {
  const rootDirectoryPaths = retrieveRootDirectoryPaths(),
        rootDirectoryPathsLength = rootDirectoryPaths.length,
        lastIndex = rootDirectoryPathsLength - 1;

  if (lastIndex === 0) {
    console.log(NO_ROOT_DIRECTORY_PATHS_MESSAGE);
  }

  rootDirectoryPaths.forEach((rootDirectoryPath, index) => {
    if (index > 0) {
      console.log(index, rootDirectoryPath);
    }
  });

  return lastIndex;
}

module.exports = listRootDirectoryPathsOperation;

Object.assign(module.exports, {
  listRootDirectoryPaths
});
