"use strict";

const { fileSystemUtilities } = require("necessary");

const synchronousIsIgnored = require("../isIgnored/synchronous"),
      asynchronousIsIgnored = require("../isIgnored/asynchronous");

const { CURRENT_DIRECTORY_PATH } = require("../constants"),
      { pathFromSubEntryNameAndDirectoryPath } = require("../utilities/path");

const { readDirectory, isEntryDirectory } = fileSystemUtilities;

function processPathsOperation(proceed, abort, context) {
  const directoryPath = CURRENT_DIRECTORY_PATH,
        done = proceed, ///
        synchronous = processDirectoryPath(directoryPath, done, context);

  if (synchronous) {
    done();
  }
}

module.exports = processPathsOperation;

function processDirectoryPath(directoryPath, done, context) {
  const subEntryNames = readDirectory(directoryPath),
        synchronous = processSubEntryNames(subEntryNames, directoryPath, done, context);

  return synchronous;
}

function processSubEntryNames(subEntryNames, directoryPath, done, context) {
  let synchronous = true;

  let subEntryNamesLength;

  subEntryNamesLength = subEntryNames.length;

  while (subEntryNamesLength > 0) {
    const subEntryName = subEntryNames.shift();

    synchronous = processSubEntryName(subEntryName, subEntryNames, directoryPath, done, context);

    if (!synchronous) {
      break;
    }

    subEntryNamesLength = subEntryNames.length;
  }

  return synchronous;
}

function processSubEntryName(subEntryName, subEntryNames, directoryPath, done, context) {
  let synchronous;

  const path = pathFromSubEntryNameAndDirectoryPath(subEntryName, directoryPath),
        directory = isEntryDirectory(path),
        ignored = synchronousIsIgnored(path, directory, context);

  if (ignored !== null) {
    synchronous = true;

    if (!ignored) {
      if (directory) {
        const directoryPath = path; ///

        synchronous = processDirectoryPath(directoryPath, done, context);
      } else {
        const filePath = path;  ///

        processFilePath(filePath, context);
      }
    }
  } else {
    synchronous = false;

    asynchronousIsIgnored(path, directory, context, (ignored) => {
      if (ignored === null) {
        done();

        return;
      }

      let synchronous;

      synchronous = processSubEntryName(subEntryName, subEntryNames, directoryPath, done, context);

      if (synchronous) {
        synchronous = processSubEntryNames(subEntryNames, directoryPath, done, context);
      }

      if (synchronous) {
        done();
      }
    });
  }

  return synchronous;
}

function processFilePath(filePath, context) {
  console.log(`Processed the '${filePath}' file.`)
}
