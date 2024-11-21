"use strict";

const { updateIgnoredFilePaths,
        updatePermittedFilePaths,
        updateIgnoredDirectoryPaths,
        updatePermittedDirectoryPaths } = require("../configuration");

function writeConfigurationOperation(proceed, abort, context) {
  const { ignoredFilePaths, permittedFilePaths, ignoredDirectoryPaths, permittedDirectoryPaths } = context;

  updateIgnoredFilePaths(ignoredFilePaths);

  updatePermittedFilePaths(permittedFilePaths);

  updateIgnoredDirectoryPaths(ignoredDirectoryPaths);

  updatePermittedDirectoryPaths(permittedDirectoryPaths);

  proceed();
}

module.exports = writeConfigurationOperation;
