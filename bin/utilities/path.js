"use strict";

const { pathUtilities } = require("necessary");

const { CURRENT_DIRECTORY_PATH } = require("../constants");

const { concatenatePaths } = pathUtilities;

function pathFromSubEntryNameAndDirectoryPath(subEntryName, directoryPath) {
  const path = (directoryPath === CURRENT_DIRECTORY_PATH) ?
                 subEntryName : ///
                   concatenatePaths(directoryPath, subEntryName);

  return path;
}

module.exports = {
  pathFromSubEntryNameAndDirectoryPath
};
