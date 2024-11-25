"use strict";

const findOperation = require("../operation/find"),
      readConfigurationOperation = require("../operation/readConfiguration");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_FIND_MESSAGE, SUCCESSFUL_FIND_MESSAGE } = require("../messages");

function findAction(string, dryRun, quietly) {
  const operations = [
          readConfigurationOperation,
          findOperation
        ],
        totalLines = 0,
        totalFiles = 0,
        totalDirectories = 0,
        context = {
          string,
          dryRun,
          quietly,
          totalLines,
          totalFiles,
          totalDirectories
        };

  executeOperations(operations, (completed) => {
    const { totalLines, totalFiles, totalDirectories } = context,
          message = `A total of ${totalDirectories} directories, ${totalFiles} files and ${totalLines} lines searched.`;

    console.log(message);

    if (!completed) {
      console.log(FAILED_FIND_MESSAGE);

      return;
    }

    console.log(SUCCESSFUL_FIND_MESSAGE);
  }, context);
}

module.exports = findAction;
