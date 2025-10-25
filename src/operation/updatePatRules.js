"use strict";

import { updateIgnoredFilePathRules,
        updatePermittedFilePathRules,
        updateIgnoredDirectoryPathRules,
        updatePermittedDirectoryPathRules } from "../configuration";

export default function updatePathRulesOperation(proceed, abort, context) {
  const { pathRule, directory, pathIgnored } = context;

  pathIgnored ?
    addIgnoreRule(pathRule, directory, context) :
      addPermitRule(pathRule, directory, context);

  proceed();
}

function addIgnoreRule(pathRule, directory, context) {
  if (directory) {
    const { ignoredDirectoryPathRules } = context,
          ignoredDirectoryPathRule = pathRule;  ///

    ignoredDirectoryPathRules.push(ignoredDirectoryPathRule);

    updateIgnoredDirectoryPathRules(ignoredDirectoryPathRules);
  } else {
    const { ignoredFilePathRules } = context,
          ignoredFilePathRule = pathRule;  ///

    ignoredFilePathRules.push(ignoredFilePathRule);

    updateIgnoredFilePathRules(ignoredFilePathRules);
  }
}

function addPermitRule(pathRule, directory, context) {
  if (directory) {
    const { permittedDirectoryPathRules } = context,
          permittedDirectoryPathRule = pathRule;  ///

    permittedDirectoryPathRules.push(permittedDirectoryPathRule);

    updatePermittedDirectoryPathRules(permittedDirectoryPathRules);
  } else {
    const { permittedFilePathRules } = context,
          permittedFilePathRule = pathRule;  ///

    permittedFilePathRules.push(permittedFilePathRule);

    updatePermittedFilePathRules(permittedFilePathRules);
  }
}
