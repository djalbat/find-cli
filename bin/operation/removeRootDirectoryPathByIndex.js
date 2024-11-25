"use strict";

const { retrieveRootDirectoryPaths, updateRootDirectoryPaths } = require("../configuration");

function removeRootDirectoryPathByIndexOperation(proceed, abort, context) {
  const { index } = context;

  if (index === null) {
    proceed();

    return;
  }

  removeRootDirectoryPathByIndex(index);

  proceed();
}

function removeRootDirectoryPathByIndex(index) {
  const start = index,  ///
        deleteCount = 1,
        rootDirectoryPaths = retrieveRootDirectoryPaths()

  rootDirectoryPaths.splice(start, deleteCount);

  updateRootDirectoryPaths(rootDirectoryPaths);

}

module.exports = removeRootDirectoryPathByIndexOperation;

Object.assign(module.exports, {
  removeRootDirectoryPathByIndex
});
