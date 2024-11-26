"use strict";

const ruleOperation = require("../operation/rule"),
      findOperation = require("../operation/find"),
      readConfigurationOperation = require("../operation/readConfiguration");

const { S, EMPTY_STRING } = require("../constants"),
      { executeOperations } = require("../utilities/operation");

function findAction(string, dryRun, quietly) {
  const operations = [
          ruleOperation,
          readConfigurationOperation,
          findOperation
        ],
        rule = null,
        lines = [],
        linesTotal = 0,
        filesTotal = 0,
        directoriesTotal = 0,
        occurrencesTotal = 0,
        context = {
          string,
          dryRun,
          quietly,
          rule,
          lines,
          linesTotal,
          filesTotal,
          directoriesTotal,
          occurrencesTotal
        };

  executeOperations(operations, (completed) => {
    logLines(context);

    if (!completed) {
      return;
    }

    logTottals(context);
  }, context);
}

module.exports = findAction;

function logLines(context) {
  const { lines } = context;

  let maximumIndexLength = 0,
      maximumContentLength = 0;

  lines.forEach((line) => {
    const indexLength = line.getIndexLength(),
          filePathLength = line.getFilePathLength();

    maximumIndexLength = Math.max(indexLength, maximumIndexLength);
    maximumContentLength = Math.max(filePathLength, maximumContentLength);
  });

  const requiredIndexLength = maximumIndexLength, ///
        requiredContentLength = maximumContentLength; ///

  lines.forEach((line) => {
    const message = line.asMessage(requiredIndexLength, requiredContentLength);

    console.log(message);
  });
}

function logTottals(context) {
  const { linesTotal, filesTotal, directoriesTotal, occurrencesTotal } = context,
        optionalS = (occurrencesTotal === 1) ?
                      EMPTY_STRING :
                        S,
        message = `Found ${occurrencesTotal} occurrence${optionalS} across ${directoriesTotal} directories, ${filesTotal} files and ${linesTotal} lines.`;

  console.log(message);
}
