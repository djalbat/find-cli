"use strict";

const ruleOperation = require("../operation/rule"),
      findOperation = require("../operation/find"),
      rulePromptOperation = require("../operation/prompt/rule"),
      readConfigurationOperation = require("../operation/readConfiguration");

const { S, EMPTY_STRING } = require("../constants"),
      { executeOperations } = require("../utilities/operation");

function findAction(string, dryRun, format, quietly, interactive) {
  const operations = [
          ruleOperation,
          rulePromptOperation,
          readConfigurationOperation,
          findOperation
        ],
        rule = null,
        lines = [],
        anchored = false,
        directory = false,
        linesTotal = 0,
        filesTotal = 0,
        directoriesTotal = 0,
        occurrencesTotal = 0,
        context = {
          string,
          dryRun,
          format,
          quietly,
          interactive,
          rule,
          lines,
          anchored,
          directory,
          linesTotal,
          filesTotal,
          directoriesTotal,
          occurrencesTotal
        };

  executeOperations(operations, (completed) => {
    if (format) {
      logLines(context);
    }

    if (!completed) {
      return;
    }

    logTotals(context);
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
    const formattedMessage = line.asFormattedMessage(requiredIndexLength, requiredContentLength);

    console.log(formattedMessage);
  });
}

function logTotals(context) {
  const { linesTotal, filesTotal, directoriesTotal, occurrencesTotal } = context,
        optionalS = (occurrencesTotal === 1) ?
                      EMPTY_STRING :
                        S,
        message = `Found ${occurrencesTotal} occurrence${optionalS} across ${directoriesTotal} directories, ${filesTotal} files and ${linesTotal} lines.`;

  console.log(message);
}
