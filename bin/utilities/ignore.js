"use strict";

const { shellUtilities } = require("necessary");

const { isAnswerIgnore } = require("../utilities/prompt"),
      { FILE, DIRECTORY } = require("../constants"),
      { validateIgnoreOrPermit } = require("../utilities/validate"),
      { INVALID_IGNORE_OR_PERMIT_MESSAGE } = require("../messages");

const { prompt } = shellUtilities;

function synchronousIsIgnored(name, path, directory, context) {
  let ignored = null;

  if (directory) {
    const { ignoredDirectoryPaths, permittedDirectoryPaths } = context,
          directoryPath = path, ///
          ignoredDirectoryPathsIncludesDirectoryPath = ignoredDirectoryPaths.includes(directoryPath),
          permittedDirectoryPathsIncludesDirectoryPath = permittedDirectoryPaths.includes(directoryPath);

    if (ignoredDirectoryPathsIncludesDirectoryPath) {
      ignored = true;
    }

    if (permittedDirectoryPathsIncludesDirectoryPath) {
      ignored = false;
    }
  } else {
    const { ignoredFilePaths, permittedFilePaths } = context,
          filePath = path, ///
          ignoredFilePathsIncludesFilePath = ignoredFilePaths.includes(filePath),
          permittedFilePathsIncludesFilePath = permittedFilePaths.includes(filePath);

    if (ignoredFilePathsIncludesFilePath) {
      ignored = true;
    }

    if (permittedFilePathsIncludesFilePath) {
      ignored = false;
    }
  }

  return ignored;
}

function asynchronousIsIgnored(name, path, directory, context, callback) {
  const fileOrDirectory = directory ?
                            DIRECTORY :
                              FILE,
        description = `Ignore or permit the '${path}' ${fileOrDirectory}? (i)gnore (p)ermit: `,
        errorMessage = INVALID_IGNORE_OR_PERMIT_MESSAGE,
        validationFunction = validateIgnoreOrPermit,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    let ignored = null;

    const valid = (answer !== null);

    if (valid) {
      const ignore = isAnswerIgnore(answer);

      ignore ?
        ignorePath(path, directory, context) :
          permitPath(path, directory, context);

      ignored = ignore; ///
    }

    callback(ignored);
  });
}

module.exports = {
  synchronousIsIgnored,
  asynchronousIsIgnored
};

function ignorePath(path, directory, context) {
  if (directory) {
    const { ignoredDirectoryPaths } = context,
          ignoredDirectoryPath = path; ///

    ignoredDirectoryPaths.push(ignoredDirectoryPath);
  } else {
    const { ignoredFilePaths } = context,
          ignoredFilePath = path; ///

    ignoredFilePaths.push(ignoredFilePath);
  }
}

function permitPath(path, directory, context) {
  if (directory) {
    const { permittedDirectoryPaths } = context,
          permittedDirectoryPath = path; ///

    permittedDirectoryPaths.push(permittedDirectoryPath);
  } else {
    const { permittedFilePaths } = context,
          permittedFilePath = path; ///

    permittedFilePaths.push(permittedFilePath);
  }
}
