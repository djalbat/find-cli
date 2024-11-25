"use strict";

const { retrieveRootDirectoryPaths,
        retrieveIgnoredFilePathRules,
        retrievePermittedFilePathRules,
        retrieveIgnoredDirectoryPathRules,
        retrievePermittedDirectoryPathRules } = require("../configuration");

function readConfigurationOperation(proceed, abort, context) {
  const rootDirectoryPaths = retrieveRootDirectoryPaths(),
        ignoredFilePathRules = retrieveIgnoredFilePathRules(),
        permittedFilePathRules = retrievePermittedFilePathRules(),
        ignoredDirectoryPathRules = retrieveIgnoredDirectoryPathRules(),
        permittedDirectoryPathRules = retrievePermittedDirectoryPathRules();

  Object.assign(context, {
    rootDirectoryPaths,
    ignoredFilePathRules,
    permittedFilePathRules,
    ignoredDirectoryPathRules,
    permittedDirectoryPathRules
  });

  proceed();
}

module.exports = readConfigurationOperation;
