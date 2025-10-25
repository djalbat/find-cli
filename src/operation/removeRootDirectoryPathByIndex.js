"use strict";

import { retrieveRootDirectoryPaths, updateRootDirectoryPaths } from "../configuration";

export default function removeRootDirectoryPathByIndexOperation(proceed, abort, context) {
  const { index } = context;

  if (index === null) {
    proceed();

    return;
  }

  removeRootDirectoryPathByIndex(index);

  proceed();
}

export function removeRootDirectoryPathByIndex(index) {
  const start = index,  ///
        deleteCount = 1,
        rootDirectoryPaths = retrieveRootDirectoryPaths()

  rootDirectoryPaths.splice(start, deleteCount);

  updateRootDirectoryPaths(rootDirectoryPaths);

}
