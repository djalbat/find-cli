"use strict";

const { retrieveIgnoredFilePathMatchers,
        retrievePermittedFilePathMatchers,
        retrieveIgnoredDirectoryPathMatchers,
        retrievePermittedDirectoryPathMatchers } = require("../configuration");

function readConfigurationOperation(proceed, abort, context) {
  const ignoredFilePathMatchers = retrieveIgnoredFilePathMatchers(),
        permittedFilePathMatchers = retrievePermittedFilePathMatchers(),
        ignoredDirectoryPathMatchers = retrieveIgnoredDirectoryPathMatchers(),
        permittedDirectoryPathMatchers = retrievePermittedDirectoryPathMatchers();

  Object.assign(context, {
    ignoredFilePathMatchers,
    permittedFilePathMatchers,
    ignoredDirectoryPathMatchers,
    permittedDirectoryPathMatchers
  });

  proceed();
}

module.exports = readConfigurationOperation;
