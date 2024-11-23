"use strict";

const { VERSION_1_3 } = require("../versions"),
      { ROOT_DIRECTORY_PATH } = require("../constants");

function migrateConfigurationToVersion_1_3(configuration) {
  const version = VERSION_1_3,
        rootDirectoryPaths = [
          ROOT_DIRECTORY_PATH
        ];

  Object.assign(configuration, {
    version,
    rootDirectoryPaths
  });

  return configuration;
}

function createConfiguration() {
  const version = VERSION_1_3,  ///
        rootDirectoryPaths = [
          ROOT_DIRECTORY_PATH
        ],
        ignoredFilePathMatchers = [],
        permittedFilePathMatchers = [],
        ignoredDirectoryPathMatchers = [],
        permittedDirectoryPathMatchers = [],
        configuration = {
          version,
          rootDirectoryPaths,
          ignoredFilePathMatchers,
          permittedFilePathMatchers,
          ignoredDirectoryPathMatchers,
          permittedDirectoryPathMatchers
        };

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_1_3
};
