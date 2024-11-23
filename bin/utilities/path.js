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

function isDirectoryPathRootDirectoryPath(directoryPath, context) {
  const { rootDirectoryPaths } = context,
        rootDirectoryPathsIncludesDirectoryPath = rootDirectoryPaths.includes(directoryPath),
        directoryPathRootDirectoryPath = rootDirectoryPathsIncludesDirectoryPath; ///

  return directoryPathRootDirectoryPath;
}

function entryPathsFromEntryNamesAndDirectoryPath(entryNames, directoryPath) {
  const entryPaths = entryNames.map((entryName) => {
    const entryPath = entryPathFromEntryNameAndDirectoryPath(entryName, directoryPath);

    return entryPath
  });

  return entryPaths;
}

module.exports = {
  stripRootDirectoryFromPath,
  isDirectoryPathRootDirectoryPath,
  entryPathsFromEntryNamesAndDirectoryPath
};

function entryPathFromEntryNameAndDirectoryPath(entryName, directoryPath) {
  const entryPath = (directoryPath === CURRENT_DIRECTORY_PATH) ?
                         entryName : ///
                           concatenatePaths(directoryPath, entryName);

  return entryPath;
}
