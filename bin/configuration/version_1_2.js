"use strict";

const StringMatcher = require("../matcher/string");

const { VERSION_1_2 } = require("../versions");

function migrateConfigurationToVersion_1_2(configuration) {
  const version = VERSION_1_2;

  const { ignoredFilePaths, permittedFilePaths, ignoredDirectoryPaths, permittedDirectoryPaths } = configuration,
        ignoredFilePathMatchers = matchersFromPaths(ignoredFilePaths),
        permittedFilePathMatchers = matchersFromPaths(permittedFilePaths),
        ignoredDirectoryPathMatchers = matchersFromPaths(ignoredDirectoryPaths),
        permittedDirectoryPathMatchers = matchersFromPaths(permittedDirectoryPaths);

  configuration = Object.assign(configuration, {
    version,
    ignoredFilePathMatchers,
    permittedFilePathMatchers,
    ignoredDirectoryPathMatchers,
    permittedDirectoryPathMatchers
  });

  return configuration;
}

function createConfiguration() {
  const version = VERSION_1_2,  ///
        ignoredFilePathMatchers = [],
        permittedFilePathMatchers = [],
        ignoredDirectoryPathMatchers = [],
        permittedDirectoryPathMatchers = [],
        configuration = {
          version,
          ignoredFilePathMatchers,
          permittedFilePathMatchers,
          ignoredDirectoryPathMatchers,
          permittedDirectoryPathMatchers
        };

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_1_2
};

function matchersFromPaths(paths) {
  const matchers = paths.map((path) => {
    let matcher;

    const string = path,  ///
          stringMatcher = StringMatcher.fromString(string);

    matcher = stringMatcher;  ///

    const json = matcher.toJSON();

    matcher = json; ///

    return matcher;
  });

  return matchers;
}