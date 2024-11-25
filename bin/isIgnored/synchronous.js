"use strict";

const { EMPTY_STRING } = require("../constants"),
      { addTrailingForwardSlash } = require("../utilities/literal"),
      { stripRootDirectoryFromPath } = require("../utilities/path");

function synchronousIsFilePathIgnored(filePath, context) {
  let filePathIgnored = null;

  filePath = stripRootDirectoryFromPath(filePath, context);  ///

  const { ignoredFilePathRules, permittedFilePathRules } = context,
        string = filePath;  ///

  ignoredFilePathRules.some((ignoredFilePathRule) => {
    const matches = ignoredFilePathRule.match(string);

    if (matches) {
      const rule = ignoredFilePathRule, ///
            ruleString = rule.asString();

      Object.assign(context, {
        ruleString
      });

      filePathIgnored = true;

      return true;
    }
  });

  permittedFilePathRules.some((permittedFilePathRule) => {
    const matches = permittedFilePathRule.match(string);

    if (matches) {
      const rule = permittedFilePathRule, ///
            ruleString = rule.asString();

      Object.assign(context, {
        ruleString
      });

      filePathIgnored = false;

      return true;
    }
  });

  return filePathIgnored;
}

function synchronousIsDirectoryPathIgnored(directoryPath, context) {
  let directoryPathIgnored = null;

  directoryPath = stripRootDirectoryFromPath(directoryPath, context);  ///

  if (directoryPath === EMPTY_STRING) {
    directoryPathIgnored = false;
  } else {
    const { ignoredDirectoryPathRules, permittedDirectoryPathRules } = context,
          string = addTrailingForwardSlash(directoryPath);  ///

    ignoredDirectoryPathRules.some((ignoredDirectoryPathRule) => {
      const matches = ignoredDirectoryPathRule.match(string);

      if (matches) {
        const rule = ignoredDirectoryPathRule, ///
              ruleString = rule.asString();

        Object.assign(context, {
          ruleString
        });

        directoryPathIgnored = true;

        return true;
      }
    });

    permittedDirectoryPathRules.some((permittedDirectoryPathRule) => {
      const matches = permittedDirectoryPathRule.match(string);

      if (matches) {
        const rule = permittedDirectoryPathRule, ///
              ruleString = rule.asString();

        Object.assign(context, {
          ruleString
        });

        directoryPathIgnored = false;

        return true;
      }
    });
  }

  return directoryPathIgnored;
}

module.exports = {
  synchronousIsFilePathIgnored,
  synchronousIsDirectoryPathIgnored
};
