"use strict";

const { pathUtilities } = require("necessary");

const { CURRENT_DIRECTORY_PATH } = require("../constants");

const { concatenatePaths } = pathUtilities;

function stripRootDirectoryFromPath(path, context) {
  const { rootDirectoryPaths } = context;

  rootDirectoryPaths.some((rootDirectoryPath) => {
    const pathStartsWithRootDirectoryPath = path.startsWith(rootDirectoryPath);

    if (pathStartsWithRootDirectoryPath) {
      const length = rootDirectoryPath.length,
            start = length;

      path = path.substring(start);  ///

      return true;
    }
  });

  return path;
}

function subEntryPathsFromSubEntryNamesAndDirectoryPath(subEntryNames, directoryPath) {
  const subEntryPaths = subEntryNames.map((subEntryName) => {
    const subEntryPath = subEntryPathFromSubEntryNameAndDirectoryPath(subEntryName, directoryPath);

    return subEntryPath
  });

  return subEntryPaths;
}

module.exports = {
  stripRootDirectoryFromPath,
  subEntryPathsFromSubEntryNamesAndDirectoryPath
};

function subEntryPathFromSubEntryNameAndDirectoryPath(subEntryName, directoryPath) {
  const subEntryPath = (directoryPath === CURRENT_DIRECTORY_PATH) ?
                         subEntryName : ///
                           concatenatePaths(directoryPath, subEntryName);

  return subEntryPath;
}
