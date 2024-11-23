"use strict";

const { fileSystemUtilities } = require("necessary");

const { red, green, yellow } = require("../utilities/log"),
      { synchronousIsFilePathIgnored, synchronousIsDirectoryPathIgnored } = require("../isIgnored/synchronous"),
      { asynchronousIsFilePathIgnored, asynchronousIsDirectoryPathIgnored } = require("../isIgnored/asynchronous"),
      { isDirectoryPathRootDirectoryPath, entryPathsFromEntryNamesAndDirectoryPath } = require("../utilities/path");

const { readDirectory, isEntryDirectory } = fileSystemUtilities;

function processPathsOperation(proceed, abort, context) {
  const { rootDirectoryPaths } = context,
        entryPaths = [  ///
          ...rootDirectoryPaths
        ],
        done = proceed, ///
        synchronous = processEntryPaths(entryPaths, done, context);

  if (synchronous) {
    proceed();
  }
}

module.exports = processPathsOperation;

function processEntryPaths(entryPaths, done, context) {
  let synchronous = true;

  let entryNamesLength;

  entryNamesLength = entryPaths.length;

  while (entryNamesLength > 0) {
    const entryPath = entryPaths.shift();

    synchronous = processEntryPath(entryPath, entryPaths, done, context);

    if (!synchronous) {
      break;
    }

    entryNamesLength = entryPaths.length;
  }

  return synchronous;
}

function processEntryPath(entryPath, entryPaths, done, context) {
  let synchronous;

  const path = entryPath,
        directory = isEntryDirectory(path);

  if (directory) {
    const directoryPath = entryPath; ///

    synchronous = processDirectoryPath(directoryPath, () => {
      const synchronous = processEntryPaths(entryPaths, done, context);

      if (synchronous) {
        done();
      }
    }, context);
  } else {
    const filePath = entryPath;  ///

    synchronous = processFilePath(filePath, () => {
      const synchronous = processEntryPaths(entryPaths, done, context);

      if (synchronous) {
        done();
      }
    }, context);
  }

  if (synchronous) {
    synchronous = processEntryPaths(entryPaths, done, context);
  }

  return synchronous;
}

function processFilePath(filePath, done, context) {
  let synchronous;

  const filePathIgnored = synchronousIsFilePathIgnored(filePath, context);

  if (filePathIgnored !== null) {
    synchronous = true;

    const { matcherString } = context;

    let message = filePathIgnored ?
                    red(`Ignore ${filePath}`) :
                      green(`Permit ${filePath}`);

    message = `${message} ${matcherString}`;

    console.log(message);

    if (!filePathIgnored) {
      console.log(yellow(`Processing the '${filePath}' file...`));

      ///
    }
  } else {
    synchronous = false;

    asynchronousIsFilePathIgnored(filePath, context, (filePathIgnored) => {
      const synchronous = (filePathIgnored === null) ?
                            true :
                              processFilePath(filePath, done, context);

      if (synchronous) {
        done();
      }
    });
  }

  return synchronous;
}

function processDirectoryPath(directoryPath, done, context) {
  let synchronous;

  const directoryPathIgnored = synchronousIsDirectoryPathIgnored(directoryPath, context),
        directoryPathRootDirectoryPath = isDirectoryPathRootDirectoryPath(directoryPath, context);

  if (directoryPathIgnored !== null) {
    synchronous = true;

    if (!directoryPathRootDirectoryPath) {
      const { matcherString } = context;

      let message = directoryPathIgnored ?
                      red(`Ignore ${directoryPath}/`) :
                        green(`Permit ${directoryPath}/`);

      message = `${message} ${matcherString}`;

      console.log(message);

      if (!directoryPathIgnored) {
        console.log(yellow(`Processing the '${directoryPath}' directory...`));
      }
    }

    if (!directoryPathIgnored) {
      const entryNames = readDirectory(directoryPath),
            entryPaths = entryPathsFromEntryNamesAndDirectoryPath(entryNames, directoryPath);

      synchronous = processEntryPaths(entryPaths, done, context);
    }
  } else {
    synchronous = false;

    asynchronousIsDirectoryPathIgnored(directoryPath, context, (directoryPathIgnored) => {
      const synchronous = (directoryPathIgnored === null) ?
                            true :
                              processDirectoryPath(directoryPath, done, context);

      if (synchronous) {
        done();
      }
    });
  }

  return synchronous;
}
