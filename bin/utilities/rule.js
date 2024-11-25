"use strict";

const GlobRule = require("../rule/glob"),
      RegexRule = require("../rule/regex"),
      StringRule = require("../rule/string");

function ruleFromStringAndDirectory(string, directory) {
  const globRule = GlobRule.fromStringAndDirectory(string, directory),
        regexRule = RegexRule.fromStringAndDirectory(string, directory),
        stringRule = StringRule.fromStringAndDirectory(string, directory),
        rule = (globRule || regexRule || stringRule);

  return rule;
}

module.exports = {
  ruleFromStringAndDirectory
};
