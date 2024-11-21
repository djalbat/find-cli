"use strict";

const { pathUtilities } = require("necessary");

const { CURRENT_DIRECTORY_PATH } = require("../constants");

const { concatenatePaths } = pathUtilities;

function pathFromNameAndDirectoryPath(name, directoryPath) {
  const path = (directoryPath === CURRENT_DIRECTORY_PATH) ?
                 name : ///
                   concatenatePaths(directoryPath, name);

  return path;
}

module.exports = {
  pathFromNameAndDirectoryPath
};
