"use strict";

const { retrieveRootDirectoryPaths } = require("../configuration"),
      { removeRootDirectoryPathByIndex } = require("./removeRootDirectoryPathByIndex");

function removeRootDirectoryPathOperation(proceed, abort, context) {
  const { rootDirectoryPath } = context;

  if (rootDirectoryPath === null) {
    proceed();

    return;
  }

  const rootDirectoryPaths = retrieveRootDirectoryPaths(),
        index = rootDirectoryPaths.indexOf(rootDirectoryPath);

  if (index === -1) {
    abort();

    return;
  }

  removeRootDirectoryPathByIndex(index);

  proceed();
}

module.exports = removeRootDirectoryPathOperation;
