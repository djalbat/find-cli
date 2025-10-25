"use strict";

import { VERSION_1_7 } from "../versions";
import { ROOT_DIRECTORY_PATH } from "../constants";

export function migrateConfigurationToVersion_1_7(configuration) {
  const version = VERSION_1_7,
        previousRules = [];

  Object.assign(configuration, {
    version,
    previousRules
  });

  return configuration;
}

export function createConfiguration() {
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
