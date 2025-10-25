"use strict";

import { retrieveRootDirectoryPaths, updateRootDirectoryPaths } from "../configuration";

export default function addRootDirectoryPathOperation(proceed, abort, context) {
  const { rootDirectoryPath } = context,
        rootDirectoryPaths = retrieveRootDirectoryPaths();

  rootDirectoryPaths.push(rootDirectoryPath);

  updateRootDirectoryPaths(rootDirectoryPaths);

  proceed();
}
