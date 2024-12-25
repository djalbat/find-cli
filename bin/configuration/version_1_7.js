"use strict";

const { VERSION_1_7 } = require("../versions"),
      { ROOT_DIRECTORY_PATH } = require("../constants");

function migrateConfigurationToVersion_1_7(configuration) {
  const version = VERSION_1_7,
        previousRules = [];

  Object.assign(configuration, {
    version,
    previousRules
  });

  return configuration;
}

function createConfiguration() {
  const version = VERSION_1_7,  ///
        rootDirectoryPaths = [
          ROOT_DIRECTORY_PATH
        ],
        previousRules = [],
        ignoredFilePathRules = [],
        permittedFilePathRules = [],
        ignoredDirectoryPathRules = [],
        permittedDirectoryPathRules = [],
        configuration = {
          version,
          previousRules,
          rootDirectoryPaths,
          ignoredFilePathRules,
          permittedFilePathRules,
          ignoredDirectoryPathRules,
          permittedDirectoryPathRules
        };

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_1_7
};
