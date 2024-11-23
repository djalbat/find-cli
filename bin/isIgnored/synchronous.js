"use strict";

const { EMPTY_STRING } = require("../constants"),
      { stripRootDirectoryFromPath } = require("../utilities/path");

function synchronousIsFilePathIgnored(filePath, context) {
  let filePathIgnored = null;

  filePath = stripRootDirectoryFromPath(filePath, context);  ///

  const { ignoredFilePathMatchers, permittedFilePathMatchers } = context,
        string = filePath;  ///

  ignoredFilePathMatchers.some((ignoredFilePathMatcher) => {
    const matches = ignoredFilePathMatcher.match(string);

    if (matches) {
      filePathIgnored = true;

      return true;
    }
  });

  permittedFilePathMatchers.some((permittedFilePathMatcher) => {
    const matches = permittedFilePathMatcher.match(string);

    if (matches) {
      filePathIgnored = false;

      return true;
    }
  });

  return filePathIgnored;
}

function synchronousIsDirectoryPathIgnored(directoryPath, context) {
  let directoryPathIgnored = null;

  directoryPath = stripRootDirectoryFromPath(directoryPath, context);  ///

  if (directoryPath === EMPTY_STRING) {
    directoryPathIgnored = false;
  } else {
    const { ignoredDirectoryPathMatchers, permittedDirectoryPathMatchers } = context,
          string = directoryPath;  ///

    ignoredDirectoryPathMatchers.some((ignoredDirectoryPathMatcher) => {
      const matches = ignoredDirectoryPathMatcher.match(string);

      if (matches) {
        directoryPathIgnored = true;

        return true;
      }
    });

    permittedDirectoryPathMatchers.some((permittedDirectoryPathMatcher) => {
      const matches = permittedDirectoryPathMatcher.match(string);

      if (matches) {
        directoryPathIgnored = false;

        return true;
      }
    });
  }

  return directoryPathIgnored;
}

module.exports = {
  synchronousIsFilePathIgnored,
  synchronousIsDirectoryPathIgnored
};
