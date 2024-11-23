"use strict";

const { retrieveRootDirectoryPaths,
        retrieveIgnoredFilePathMatchers,
        retrievePermittedFilePathMatchers,
        retrieveIgnoredDirectoryPathMatchers,
        retrievePermittedDirectoryPathMatchers } = require("../configuration");

function readConfigurationOperation(proceed, abort, context) {
  const rootDirectoryPaths = retrieveRootDirectoryPaths(),
        ignoredFilePathMatchers = retrieveIgnoredFilePathMatchers(),
        permittedFilePathMatchers = retrievePermittedFilePathMatchers(),
        ignoredDirectoryPathMatchers = retrieveIgnoredDirectoryPathMatchers(),
        permittedDirectoryPathMatchers = retrievePermittedDirectoryPathMatchers();

  Object.assign(context, {
    rootDirectoryPaths,
    ignoredFilePathMatchers,
    permittedFilePathMatchers,
    ignoredDirectoryPathMatchers,
    permittedDirectoryPathMatchers
  });

  proceed();
}

module.exports = readConfigurationOperation;
