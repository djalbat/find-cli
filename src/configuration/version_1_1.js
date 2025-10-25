"use strict";

import { VERSION_1_1 } from "../versions";

export default function migrateConfigurationToVersion_1_1(configuration) {
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
