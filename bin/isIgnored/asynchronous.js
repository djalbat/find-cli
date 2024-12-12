"use strict";

const pathRulePromptOperation = require("../operation/prompt/pathRule"),
      updatePathRulesOperation = require("../operation/updatePatRules"),
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
          pathRulePromptOperation,
          updatePathRulesOperation
        ],
        pathRule = null,
        pathIgnored = null;

  Object.assign(context, {
    path,
    directory,
    pathRule,
    pathIgnored
  });

  executeOperations(operations, (completed) => {
    const { pathIgnored } = context;

    delete context.path;
    delete context.directory;
    delete context.pathRule;
    delete context.pathIgnored;

    callback(pathIgnored);
  }, context);
}
