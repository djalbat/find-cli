"use strict";

import { validateRootDirectoryPath } from "../utilities/validate";
import { INVALID_ROOT_DIRECTORY_PATH_MESSAGE } from "../messages";

export default function validateRootDirectoryPathOperation(proceed, abort, context) {
  const { rootDirectoryPath } = context;

  if (rootDirectoryPath === null) {
    proceed();

    return;
  }

  const valid = validateRootDirectoryPath(rootDirectoryPath);

  if (!valid) {
    console.log(INVALID_ROOT_DIRECTORY_PATH_MESSAGE);

    const rootDirectoryPath = null;

    Object.assign(context, {
      rootDirectoryPath
    });
  }

  proceed();
}
