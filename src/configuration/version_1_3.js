"use strict";

import { VERSION_1_3 } from "../versions";
import { ROOT_DIRECTORY_PATH } from "../constants";

export default function migrateConfigurationToVersion_1_3(configuration) {
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
