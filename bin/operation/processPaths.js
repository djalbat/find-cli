"use strict";

const { fileSystemUtilities } = require("necessary");

const { subEntryPathsFromSubEntryNamesAndDirectoryPath } = require("../utilities/path"),
      { synchronousIsFilePathIgnored, synchronousIsDirectoryPathIgnored } = require("../isIgnored/synchronous"),
      { asynchronousIsFilePathIgnored, asynchronousIsDirectoryPathIgnored } = require("../isIgnored/asynchronous");

const { readDirectory, isEntryDirectory } = fileSystemUtilities;

function processPathsOperation(proceed, abort, context) {
  const { rootDirectoryPaths } = context,
        subEntryPaths = [
          ...rootDirectoryPaths
        ],
        done = proceed, ///
        synchronous = processSubEntryPaths(subEntryPaths, done, context);

  if (synchronous) {
    proceed();
  }
}

module.exports = processPathsOperation;

function processSubEntryPaths(subEntryPaths, done, context) {
  let synchronous = true;

  let subEntryNamesLength;

  subEntryNamesLength = subEntryPaths.length;

  while (subEntryNamesLength > 0) {
    const subEntryPath = subEntryPaths.shift();

    synchronous = processSubEntryPath(subEntryPath, subEntryPaths, done, context);

    if (!synchronous) {
      break;
    }

    subEntryNamesLength = subEntryPaths.length;
  }

  return synchronous;
}

function processSubEntryPath(subEntryPath, subEntryPaths, done, context) {
  let synchronous;

  const path = subEntryPath,
        directory = isEntryDirectory(path);

  if (directory) {
    const directoryPath = subEntryPath; ///

    synchronous = processDirectoryPath(directoryPath, () => {
      const synchronous = processSubEntryPaths(subEntryPaths, done, context);

      if (synchronous) {
        done();
      }
    }, context);
  } else {
    const filePath = subEntryPath;  ///

    synchronous = processFilePath(filePath, () => {
      const synchronous = processSubEntryPaths(subEntryPaths, done, context);

      if (synchronous) {
        done();
      }
    }, context);
  }

  if (synchronous) {
    synchronous = processSubEntryPaths(subEntryPaths, done, context);
  }

  return synchronous;
}

function processDirectoryPath(directoryPath, done, context) {
  let synchronous;

  const directoryPathIgnored = synchronousIsDirectoryPathIgnored(directoryPath, context);

  if (directoryPathIgnored !== null) {
    synchronous = true;

    if (!directoryPathIgnored) {
      const subEntryNames = readDirectory(directoryPath),
            subEntryPaths = subEntryPathsFromSubEntryNamesAndDirectoryPath(subEntryNames, directoryPath);

      synchronous = processSubEntryPaths(subEntryPaths, done, context);
    }
  } else {
    synchronous = false;

    asynchronousIsDirectoryPathIgnored(directoryPath, context, (directoryPathIgnored) => {
      let synchronous = true;

      if (!directoryPathIgnored) {
        const subEntryNames = readDirectory(directoryPath),
              subEntryPaths = subEntryPathsFromSubEntryNamesAndDirectoryPath(subEntryNames, directoryPath);

        synchronous = processSubEntryPaths(subEntryPaths, done, context);
      }

      if (synchronous) {
        done();
      }
    });
  }

  return synchronous;
}

function processFilePath(filePath, done, context) {
  let synchronous;

  const filePathIgnored = synchronousIsFilePathIgnored(filePath, context);

  if (filePathIgnored !== null) {
    synchronous = true;

    if (!filePathIgnored) {
      console.log(`Processed the '${filePath}' file.`)
    }
  } else {
    synchronous = false;

    asynchronousIsFilePathIgnored(filePath, context, (filePathIgnored) => {
      if (!filePathIgnored) {
        console.log(`Processed the '${filePath}' file.`)
      }

      done();
    });
  }

  return synchronous;
}
