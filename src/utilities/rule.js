"use strict";

import GlobRule from "../rule/glob";
import RegexRule from "../rule/regex";
import StringRule from "../rule/string";

export function ruleFromStringAnchoredAndDirectory(string, anchored, directory) {
  const globRule = GlobRule.fromStringAnchoredAndDirectory(string, anchored, directory),
        regexRule = RegexRule.fromStringAnchoredAndDirectory(string, anchored, directory),
        stringRule = StringRule.fromStringAnchoredAndDirectory(string, anchored, directory),
        rule = (globRule || regexRule || stringRule);

  return rule;
}
