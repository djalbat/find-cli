"use strict";

const GlobRule = require("../rule/glob"),
      RegexRule = require("../rule/regex"),
      StringRule = require("../rule/string");

const { updateIgnoredFilePathRules,
        updatePermittedFilePathRules,
        updateIgnoredDirectoryPathRules,
        updatePermittedDirectoryPathRules } = require("../configuration");

function updatePathRulesOperation(proceed, abort, context) {
  const { glob, string, pattern, directory, pathIgnored } = context;

  pathIgnored ?
    addIgnoreRule(glob, string, pattern, directory, context) :
      addPermitRule(glob, string, pattern, directory, context);

  proceed();
}

module.exports = updatePathRulesOperation;

function addIgnoreRule(glob, string, pattern, directory, context) {
  if (directory) {
    const { ignoredDirectoryPathRules } = context,
          rule = ruleFromGlobRegexOrString(glob, string, pattern),
          ignoredDirectoryPathRule = rule;  ///

    ignoredDirectoryPathRules.push(ignoredDirectoryPathRule);

    updateIgnoredDirectoryPathRules(ignoredDirectoryPathRules);
  } else {
    const { ignoredFilePathRules } = context,
          rule = ruleFromGlobRegexOrString(glob, string, pattern),
          ignoredFilePathRule = rule;  ///

    ignoredFilePathRules.push(ignoredFilePathRule);

    updateIgnoredFilePathRules(ignoredFilePathRules);
  }
}

function addPermitRule(glob, string, pattern, directory, context) {
  if (directory) {
    const { permittedDirectoryPathRules } = context,
          rule = ruleFromGlobRegexOrString(glob, string, pattern),
          permittedDirectoryPathRule = rule;  ///

    permittedDirectoryPathRules.push(permittedDirectoryPathRule);

    updatePermittedDirectoryPathRules(permittedDirectoryPathRules);
  } else {
    const { permittedFilePathRules } = context,
          rule = ruleFromGlobRegexOrString(glob, string, pattern),
          permittedFilePathRule = rule;  ///

    permittedFilePathRules.push(permittedFilePathRule);

    updatePermittedFilePathRules(permittedFilePathRules);
  }
}

function ruleFromGlobRegexOrString(glob, string, pattern) {
  const globRule = GlobRule.fromGlob(glob),
        regexRule = RegexRule.fromPattern(pattern),
        stringRule = StringRule.fromString(string),
        rule = (globRule || regexRule || stringRule);

  return rule;
}
