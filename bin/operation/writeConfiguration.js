"use strict";

const { updateIgnoredFilePathMatchers,
        updatePermittedFilePathMatchers,
        updateIgnoredDirectoryPathMatchers,
        updatePermittedDirectoryPathMatchers } = require("../configuration");

function writeConfigurationOperation(proceed, abort, context) {
  const { ignoredFilePathMatchers, permittedFilePathMatchers, ignoredDirectoryPathMatchers, permittedDirectoryPathMatchers } = context;

  updateIgnoredFilePathMatchers(ignoredFilePathMatchers);

  updatePermittedFilePathMatchers(permittedFilePathMatchers);

  updateIgnoredDirectoryPathMatchers(ignoredDirectoryPathMatchers);

  updatePermittedDirectoryPathMatchers(permittedDirectoryPathMatchers);

  proceed();
}

module.exports = writeConfigurationOperation;
