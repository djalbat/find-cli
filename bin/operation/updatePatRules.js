"use strict";

const { updateIgnoredFilePathRules,
        updatePermittedFilePathRules,
        updateIgnoredDirectoryPathRules,
        updatePermittedDirectoryPathRules } = require("../configuration");

function updatePathRulesOperation(proceed, abort, context) {
  const { rule, directory, pathIgnored } = context;

  pathIgnored ?
    addIgnoreRule(rule, directory, context) :
      addPermitRule(rule, directory, context);

  proceed();
}

module.exports = updatePathRulesOperation;

function addIgnoreRule(rule, directory, context) {
  if (directory) {
    const { ignoredDirectoryPathRules } = context,
          ignoredDirectoryPathRule = rule;  ///

    ignoredDirectoryPathRules.push(ignoredDirectoryPathRule);

    updateIgnoredDirectoryPathRules(ignoredDirectoryPathRules);
  } else {
    const { ignoredFilePathRules } = context,
          ignoredFilePathRule = rule;  ///

    ignoredFilePathRules.push(ignoredFilePathRule);

    updateIgnoredFilePathRules(ignoredFilePathRules);
  }
}

function addPermitRule(rule, directory, context) {
  if (directory) {
    const { permittedDirectoryPathRules } = context,
          permittedDirectoryPathRule = rule;  ///

    permittedDirectoryPathRules.push(permittedDirectoryPathRule);

    updatePermittedDirectoryPathRules(permittedDirectoryPathRules);
  } else {
    const { permittedFilePathRules } = context,
          permittedFilePathRule = rule;  ///

    permittedFilePathRules.push(permittedFilePathRule);

    updatePermittedFilePathRules(permittedFilePathRules);
  }
}
