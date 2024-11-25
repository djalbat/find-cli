"use strict";

const { retrieveRootDirectoryPaths, updateRootDirectoryPaths } = require("../configuration");

function addRootDirectoryPathOperation(proceed, abort, context) {
  const { rootDirectoryPath } = context,
        rootDirectoryPaths = retrieveRootDirectoryPaths();

  rootDirectoryPaths.push(rootDirectoryPath);

  updateRootDirectoryPaths(rootDirectoryPaths);

  proceed();
}

module.exports = addRootDirectoryPathOperation;
