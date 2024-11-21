"use strict";

const { VERSION_1_1 } = require("../versions");

function migrateConfigurationToVersion_1_1(configuration) {
  const version = VERSION_1_1;

  const ignoredFilePaths = [],
        permittedFilePaths = [],
        ignoredDirectoryPaths = [],
        permittedDirectoryPaths = [];

  configuration = Object.assign(configuration, {
    version,
    ignoredFilePaths,
    permittedFilePaths,
    ignoredDirectoryPaths,
    permittedDirectoryPaths
  });

  return configuration;
}

module.exports = {
  migrateConfigurationToVersion_1_1
};
