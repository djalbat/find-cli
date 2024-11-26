"use strict";

const { fileSystemUtilities } = require("necessary");

const find = require("../find");

const { red, green } = require("../utilities/log"),
      { synchronousIsFilePathIgnored, synchronousIsDirectoryPathIgnored } = require("../isIgnored/synchronous"),
      { asynchronousIsFilePathIgnored, asynchronousIsDirectoryPathIgnored } = require("../isIgnored/asynchronous"),
      { isDirectoryPathRootDirectoryPath, entryPathsFromEntryNamesAndDirectoryPath } = require("../utilities/path");

const { readDirectory, isEntryDirectory } = fileSystemUtilities;

function findOperation(proceed, abort, context) {
  const { rootDirectoryPaths } = context,
        entryPaths = [  ///
          ...rootDirectoryPaths
        ],
        synchronous = findInEntries(entryPaths, (pathIgnored) => {
          if (pathIgnored === null) {
            abort();
          }
        }, context);

  if (synchronous) {
    proceed();
  }
}

module.exports = findOperation;

function findInEntries(entryPaths, callback, context) {
  let synchronous = true;

  let entryNamesLength;

  entryNamesLength = entryPaths.length;

  while (entryNamesLength > 0) {
    const entryPath = entryPaths.shift();

    synchronous = findInEntry(entryPath, entryPaths, callback, context);

    if (!synchronous) {
      break;
    }

    entryNamesLength = entryPaths.length;
  }

  return synchronous;
}

function findInEntry(entryPath, entryPaths, callback, context) {
  let synchronous;

  const path = entryPath,
        directory = isEntryDirectory(path);

  if (directory) {
    const directoryPath = entryPath; ///

    synchronous = findInDirectory(directoryPath, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            findInEntries(entryPaths, callback, context) :
                              true;

      if (synchronous) {
        callback(pathIgnored);
      }
    }, context);
  } else {
    const filePath = entryPath;  ///

    synchronous = findInFile(filePath, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            findInEntries(entryPaths, callback, context) :
                              true;
      if (synchronous) {
        callback(pathIgnored);
      }
    }, context);
  }

  if (synchronous) {
    synchronous = findInEntries(entryPaths, callback, context);
  }

  return synchronous;
}

function findInFile(filePath, callback, context) {
  let synchronous;

  const filePathIgnored = synchronousIsFilePathIgnored(filePath, context);

  if (filePathIgnored !== null) {
    synchronous = true;

    const { quietly } = context;

    if (!quietly) {
      const { ruleString } = context;

      let message = filePathIgnored ?
                      red(`Ignore ${filePath}`) :
                        green(`Permit ${filePath}`);

      message = `${message} ${ruleString}`;

      console.log(message);
    }

    if (!filePathIgnored) {
      let { filesTotal } = context;

      filesTotal++;

      Object.assign(context, {
        filesTotal
      });

      const { dryRun } = context;

      if (!dryRun) {
        find(filePath, context);
      }
    }
  } else {
    synchronous = false;

    asynchronousIsFilePathIgnored(filePath, context, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            findInFile(filePath, callback, context) :
                              true;

      if (synchronous) {
        callback(pathIgnored);
      }
    });
  }

  return synchronous;
}

function findInDirectory(directoryPath, callback, context) {
  let synchronous;

  const directoryPathIgnored = synchronousIsDirectoryPathIgnored(directoryPath, context);

  if (directoryPathIgnored !== null) {
    synchronous = true;

    const directoryPathRootDirectoryPath = isDirectoryPathRootDirectoryPath(directoryPath, context);

    if (!directoryPathRootDirectoryPath) {
      const { quietly } = context;

      if (!quietly) {
        const { ruleString } = context;

        let message = directoryPathIgnored ?
                        red(`Ignore ${directoryPath}/`) :
                          green(`Permit ${directoryPath}/`);

        message = `${message} ${ruleString}`;

        console.log(message);
      }
    }

    if (!directoryPathIgnored) {
      let { directoriesTotal } = context;

      directoriesTotal++;

      Object.assign(context, {
        directoriesTotal
      });

      const entryNames = readDirectory(directoryPath),
            entryPaths = entryPathsFromEntryNamesAndDirectoryPath(entryNames, directoryPath);

      synchronous = findInEntries(entryPaths, callback, context);
    }
  } else {
    synchronous = false;

    asynchronousIsDirectoryPathIgnored(directoryPath, context, (pathIgnored) => {
      const synchronous = (pathIgnored !== null) ?
                            findInDirectory(directoryPath, callback, context) :
                              true;

      if (synchronous) {
        callback(pathIgnored);
      }
    });
  }

  return synchronous;
}
