"use strict";

const addMatcherOperation = require("../operation/addMatcher"),
      ignoreOrPermitPromptOperation = require("../operation/prompt/ignoreOrPermit"),
      globRegexOrStringPromptOperation = require("../operation/prompt/globRegexOrString");

const { executeOperations } = require("../utilities/operation");

function asynchronousIsIgnored(path, directory, context, callback) {
  const operations = [
          ignoreOrPermitPromptOperation,
          globRegexOrStringPromptOperation,
          addMatcherOperation
        ],
        glob = null,
        regex = null,
        string = null,
        ignored = null;

  Object.assign(context, {
    path,
    glob,
    regex,
    string,
    ignored,
    directory
  });

  executeOperations(operations, (completed) => {
    const { ignored } = context;

    delete context.path;
    delete context.glob;
    delete context.regex;
    delete context.string;
    delete context.ignored;
    delete context.directory;

    callback(ignored);
  }, context);
}

module.exports = asynchronousIsIgnored;
