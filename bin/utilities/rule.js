"use strict";

const GlobRule = require("../rule/glob"),
      RegexRule = require("../rule/regex"),
      StringRule = require("../rule/string");

function ruleFromAnswerAndDirectory(answer, directory) {
  const globRule = GlobRule.fromAnswerAndDirectory(answer, directory),
        regexRule = RegexRule.fromAnswerAndDirectory(answer, directory),
        stringRule = StringRule.fromAnswerAndDirectory(answer, directory),
        rule = (globRule || regexRule || stringRule);

  return rule;
}

module.exports = {
  ruleFromAnswerAndDirectory
};
