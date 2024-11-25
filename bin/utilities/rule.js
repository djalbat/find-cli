"use strict";

const GlobRule = require("../rule/glob"),
      RegexRule = require("../rule/regex"),
      StringRule = require("../rule/string");

function ruleFromStringAnchoredAndDirectory(string, anchored, directory) {
  const globRule = GlobRule.fromStringAnchoredAndDirectory(string, anchored, directory),
        regexRule = RegexRule.fromStringAnchoredAndDirectory(string, anchored, directory),
        stringRule = StringRule.fromStringAnchoredAndDirectory(string, anchored, directory),
        rule = (globRule || regexRule || stringRule);

  return rule;
}

module.exports = {
  ruleFromStringAnchoredAndDirectory
};
