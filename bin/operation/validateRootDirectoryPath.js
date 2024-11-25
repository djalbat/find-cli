"use strict";

const { validateRootDirectoryPath } = require("../utilities/validate"),
      { INVALID_ROOT_DIRECTORY_PATH_MESSAGE } = require("../messages");

function validateRootDirectoryPathOperation(proceed, abort, context) {
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

module.exports = validateRootDirectoryPathOperation;
