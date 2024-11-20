"use strict";

const { VERSION_1_1 } = require("../versions");

function migrateConfigurationToVersion_1_1(configuration) {
  const version = VERSION_1_1;

  const permittedFileNames = [],
        permittedFilePaths = [],
        ignoredDirectoryNames = [],
        ignoredDirectoryPaths = [];

  configuration = Object.assign(configuration, {
    version,
    permittedFileNames,
    permittedFilePaths,
    ignoredDirectoryNames,
    ignoredDirectoryPaths
  });

  return configuration;
}

function createConfiguration() {
  const version = VERSION_1_1,  ///
        permittedFileNames = [],
        permittedFilePaths = [],
        ignoredDirectoryNames = [],
        ignoredDirectoryPaths = [],
        configuration = {
          version,
          permittedFileNames,
          permittedFilePaths,
          ignoredDirectoryNames,
          ignoredDirectoryPaths
        };

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_1_1
};
