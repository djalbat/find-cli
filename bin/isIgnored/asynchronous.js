"use strict";

const updatePathMatchersOperation = require("../operation/updatePatMatchers"),
      globRegexOrStringPromptOperation = require("../operation/prompt/globRegexOrString"),
      ignoreOrPermitPathPromptOperation = require("../operation/prompt/ignoreOrPermitPath");

const { executeOperations } = require("../utilities/operation"),
      { stripRootDirectoryFromPath } = require("../utilities/path");

function asynchronousIsFilePathIgnored(filePath, context, callback) {
  filePath = stripRootDirectoryFromPath(filePath, context); ///

  const path = filePath,  ///
        directory = false;

  asynchronousIsPathIgnored(path, directory, context, callback);
}

function asynchronousIsDirectoryPathIgnored(directoryPath, context, callback) {
  directoryPath = stripRootDirectoryFromPath(directoryPath, context);  ///

  const path = directoryPath,  ///
        directory = true;

  asynchronousIsPathIgnored(path, directory, context, callback);
}

module.exports = {
  asynchronousIsFilePathIgnored,
  asynchronousIsDirectoryPathIgnored
};

function asynchronousIsPathIgnored(path, directory, context, callback) {
  const operations = [
          ignoreOrPermitPathPromptOperation,
          globRegexOrStringPromptOperation,
          updatePathMatchersOperation
        ],
        glob = null,
        regex = null,
        string = null,
        pathIgnored = null;

  Object.assign(context, {
    path,
    directory,
    glob,
    regex,
    string,
    pathIgnored
  });

  executeOperations(operations, (completed) => {
    const { pathIgnored } = context;

    delete context.path;
    delete context.directory;
    delete context.glob;
    delete context.regex;
    delete context.string;
    delete context.pathIgnored;

    callback(pathIgnored);
  }, context);
}
