"use strict";

const { retrieveIgnoredFilePaths,
        retrievePermittedFilePaths,
        retrieveIgnoredDirectoryPaths,
        retrievePermittedDirectoryPaths } = require("../configuration");

function readConfigurationOperation(proceed, abort, context) {
  const ignoredFilePaths = retrieveIgnoredFilePaths(),
        permittedFilePaths = retrievePermittedFilePaths(),
        ignoredDirectoryPaths = retrieveIgnoredDirectoryPaths(),
        permittedDirectoryPaths = retrievePermittedDirectoryPaths();

  Object.assign(context, {
    ignoredFilePaths,
    permittedFilePaths,
    ignoredDirectoryPaths,
    permittedDirectoryPaths
  });

  proceed();
}

module.exports = readConfigurationOperation;
