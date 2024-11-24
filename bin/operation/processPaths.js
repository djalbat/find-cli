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
        synchronous = processEntryPaths(entryPaths, (pathIgnored) => {
          if (pathIgnored === null) {
            abort();
          }
        }, context);

  if (synchronous) {
    proceed();
  }
}

module.exports = processPathsOperation;

function processEntryPaths(entryPaths, callback, context) {
  let synchronous = true;

  let entryNamesLength;

  entryNamesLength = entryPaths.length;

  while (entryNamesLength > 0) {
    const entryPath = entryPaths.shift();

    synchronous = processEntryPath(entryPath, entryPaths, callback, context);

    if (!synchronous) {
      break;
    }

    entryNamesLength = entryPaths.length;
  }

  return synchronous;
}

function processEntryPath(entryPath, entryPaths, callback, context) {
  let synchronous;

  const path = entryPath,
        directory = isEntryDirectory(path);

  if (directory) {
    const directoryPath = entryPath; ///

    synchronous = processDirectoryPath(directoryPath, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            processEntryPaths(entryPaths, callback, context) :
                              true;

      if (synchronous) {
        callback(pathIgnored);
      }
    }, context);
  } else {
    const filePath = entryPath;  ///

    synchronous = processFilePath(filePath, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            processEntryPaths(entryPaths, callback, context) :
                              true;
      if (synchronous) {
        callback(pathIgnored);
      }
    }, context);
  }

  if (synchronous) {
    synchronous = processEntryPaths(entryPaths, callback, context);
  }

  return synchronous;
}

function processFilePath(filePath, callback, context) {
  let synchronous;

  const filePathIgnored = synchronousIsFilePathIgnored(filePath, context);

  if (filePathIgnored !== null) {
    synchronous = true;

    const { quietly } = context;

    if (!quietly) {
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
    }

    if (!filePathIgnored) {
      let { totalFiles } = context;

      totalFiles++;

      Object.assign(context, {
        totalFiles
      });

      ///
    }
  } else {
    synchronous = false;

    asynchronousIsFilePathIgnored(filePath, context, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            processFilePath(filePath, callback, context) :
                              true;

      if (synchronous) {
        callback(pathIgnored);
      }
    });
  }

  return synchronous;
}

function processDirectoryPath(directoryPath, callback, context) {
  let synchronous;

  const directoryPathIgnored = synchronousIsDirectoryPathIgnored(directoryPath, context);

  if (directoryPathIgnored !== null) {
    synchronous = true;

    const directoryPathRootDirectoryPath = isDirectoryPathRootDirectoryPath(directoryPath, context);

    if (!directoryPathRootDirectoryPath) {
      const { quietly } = context;

      if (!quietly) {
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
    }

    if (!directoryPathIgnored) {
      let { totalDirectories } = context;

      totalDirectories++;

      Object.assign(context, {
        totalDirectories
      });

      const entryNames = readDirectory(directoryPath),
            entryPaths = entryPathsFromEntryNamesAndDirectoryPath(entryNames, directoryPath);

      synchronous = processEntryPaths(entryPaths, callback, context);
    }
  } else {
    synchronous = false;

    asynchronousIsDirectoryPathIgnored(directoryPath, context, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            processDirectoryPath(directoryPath, callback, context) :
                              true;

      if (synchronous) {
        callback(pathIgnored);
      }
    });
  }

  return synchronous;
}
