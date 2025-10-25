"use strict";

import { retrieveRootDirectoryPaths } from "../configuration";
import { removeRootDirectoryPathByIndex } from "./removeRootDirectoryPathByIndex";

export default function removeRootDirectoryPathOperation(proceed, abort, context) {
  const { rootDirectoryPath } = context;

  if (rootDirectoryPath === null) {
    proceed();

    return;
  }

  const rootDirectoryPaths = retrieveRootDirectoryPaths(),
        index = rootDirectoryPaths.indexOf(rootDirectoryPath);

  if (index === -1) {
    abort();

    return;
  }

  removeRootDirectoryPathByIndex(index);

  proceed();
}
