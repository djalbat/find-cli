"use strict";

const updatePathRulesOperation = require("../operation/updatePatRules"),
      ignoreOrPermitPathPromptOperation = require("../operation/prompt/ignoreOrPermitPath"),
      globStringOrPatternPromptOperation = require("../operation/prompt/globStringOrPattern");

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
          globStringOrPatternPromptOperation,
          updatePathRulesOperation
        ],
        glob = null,
        string = null,
        pattern = null,
        pathIgnored = null;

  Object.assign(context, {
    path,
    directory,
    glob,
    string,
    pattern,
    pathIgnored
  });

  executeOperations(operations, (completed) => {
    const { pathIgnored } = context;

    delete context.path;
    delete context.directory;
    delete context.glob;
    delete context.string;
    delete context.pattern;
    delete context.pathIgnored;

    callback(pathIgnored);
  }, context);
}
