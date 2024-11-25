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

module.exports = {
  migrateConfigurationToVersion_1_3
};
