"use strict";

const { VERSION_1_4 } = require("../versions");

function migrateConfigurationToVersion_1_4(configuration) {
  const { ignoredFilePathMatchers,
          permittedFilePathMatchers,
          ignoredDirectoryPathMatchers,
          permittedDirectoryPathMatchers } = configuration;

  delete configuration.ignoredFilePathMatchers;
  delete configuration.permittedFilePathMatchers;
  delete configuration.ignoredDirectoryPathMatchers;
  delete configuration.permittedDirectoryPathMatchers;

  const version = VERSION_1_4,
        ignoredFilePathRules = ignoredFilePathMatchers, ///
        permittedFilePathRules = permittedFilePathMatchers, ///
        ignoredDirectoryPathRules = ignoredDirectoryPathMatchers, ///
        permittedDirectoryPathRules = permittedDirectoryPathMatchers; ///

  Object.assign(configuration, {
    version,
    ignoredFilePathRules,
    permittedFilePathRules,
    ignoredDirectoryPathRules,
    permittedDirectoryPathRules
  });

  return configuration;
}

module.exports = {
  migrateConfigurationToVersion_1_4
};
