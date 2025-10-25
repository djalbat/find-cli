"use strict";

import StringRule from "../rule/string";

import { VERSION_1_2 } from "../versions";

export default function migrateConfigurationToVersion_1_2(configuration) {
  const version = VERSION_1_2;

  const { ignoredFilePaths, permittedFilePaths, ignoredDirectoryPaths, permittedDirectoryPaths } = configuration,
        ignoredFilePathMatchers = matchersFromPaths(ignoredFilePaths),
        permittedFilePathMatchers = matchersFromPaths(permittedFilePaths),
        ignoredDirectoryPathMatchers = matchersFromPaths(ignoredDirectoryPaths),
        permittedDirectoryPathMatchers = matchersFromPaths(permittedDirectoryPaths);

  configuration = {
    version,
    ignoredFilePathMatchers,
    permittedFilePathMatchers,
    ignoredDirectoryPathMatchers,
    permittedDirectoryPathMatchers
  };

  return configuration;
}

function matchersFromPaths(paths) {
  const matchers = paths.map((path) => {
    let matcher;

    const string = path,  ///
          stringRule = StringRule.fromString(string);

    matcher = stringRule;  ///

    const json = matcher.toJSON();

    matcher = json; ///

    return matcher;
  });

  return matchers;
}