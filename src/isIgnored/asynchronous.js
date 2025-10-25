"use strict";

import pathRulePromptOperation from "../operation/prompt/pathRule";
import updatePathRulesOperation from "../operation/updatePatRules";
import ignoreOrPermitPathPromptOperation from "../operation/prompt/ignoreOrPermitPath";

import { executeOperations } from "../utilities/operation";
import { stripRootDirectoryFromPath } from "../utilities/path";

export function asynchronousIsFilePathIgnored(filePath, context, callback) {
  filePath = stripRootDirectoryFromPath(filePath, context); ///

  const path = filePath,  ///
        directory = false;

  asynchronousIsPathIgnored(path, directory, context, callback);
}

export function asynchronousIsDirectoryPathIgnored(directoryPath, context, callback) {
  directoryPath = stripRootDirectoryFromPath(directoryPath, context);  ///

  const path = directoryPath,  ///
        directory = true;

  asynchronousIsPathIgnored(path, directory, context, callback);
}

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
