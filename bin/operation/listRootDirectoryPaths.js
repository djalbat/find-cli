"use strict";

const { retrieveRootDirectoryPaths } = require("../configuration");

function listRootDirectoryPathsOperation(proceed, abort, context) {
  const rootDirectoryPaths = retrieveRootDirectoryPaths();

  rootDirectoryPaths.forEach((rootDirectoryPath, index) => {
    console.log(index, rootDirectoryPath);
  });

  proceed();
}

module.exports = listRootDirectoryPathsOperation;
