"use strict";

import findOperation from "../operation/find";
import ruleOperation from "../operation/rule";
import rulePromptOperation from "../operation/prompt/rule";
import previousRuleOperation from "../operation/previousRule";
import previousRulePromptOperation from "../operation/prompt/previousRule";

import { S, EMPTY_STRING } from "../constants";
import { executeOperations } from "../utilities/operation";

export default function findAction(string, dryRun, format, quietly, previous, interactive) {
  const operations = [
          ruleOperation,
          previousRulePromptOperation,
          rulePromptOperation,
          previousRuleOperation,
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
          format,
          quietly,
          previous,
          interactive,
          rule,
          lines,
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
