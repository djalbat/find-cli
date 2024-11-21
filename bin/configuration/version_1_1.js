"use strict";

const { VERSION_1_1 } = require("../versions");

function migrateConfigurationToVersion_1_1(configuration) {
  const version = VERSION_1_1;

  const ignoredFileNames = [],
        ignoredFilePaths = [],
        permittedFileNames = [],
        permittedFilePaths = [],
        ignoredDirectoryNames = [],
        ignoredDirectoryPaths = [],
        permittedDirectoryNames = [],
        permittedDirectoryPaths = [];

  configuration = Object.assign(configuration, {
    version,
    ignoredFileNames,
    ignoredFilePaths,
    permittedFileNames,
    permittedFilePaths,
    ignoredDirectoryNames,
    ignoredDirectoryPaths,
    permittedDirectoryNames,
    permittedDirectoryPaths
  });

  return configuration;
}

function createConfiguration() {
  const version = VERSION_1_1,  ///
        ignoredFileNames = [],
        ignoredFilePaths = [],
        permittedFileNames = [],
        permittedFilePaths = [],
        ignoredDirectoryNames = [],
        ignoredDirectoryPaths = [],
        permittedDirectoryNames = [],
        permittedDirectoryPaths = [],
        configuration = {
          version,
          ignoredFileNames,
          ignoredFilePaths,
          permittedFileNames,
          permittedFilePaths,
          ignoredDirectoryNames,
          ignoredDirectoryPaths,
          permittedDirectoryNames,
          permittedDirectoryPaths
        };

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_1_1
};
