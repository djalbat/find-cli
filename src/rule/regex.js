"use strict";

import Occurrence from "../occurrence";

import { REGEX_TYPE } from "../types";
import { isStringRegexLiteral } from "../utilities/literal";
import { addAnchors,
         removeAnchors,
         addForwardSlashes,
         removeForwardSlashes,
         addTrailingEscapedForwardSlash,
         removeTrailingEscapedForwardSlash } from "../utilities/string";

export default class RegexRule {
  constructor(type, pattern, regExp) {
    this.type = type;
    this.pattern = pattern;
    this.regExp = regExp;
  }

  getType() {
    return this.type;
  }

  getPattern() {
    return this.pattern;
  }

  getRegExp() {
    return this.regExp;
  }

  toJSON() {
    const type = this.type,
          pattern = this.pattern,
          json = {
            type,
            pattern
          };

    return json;
  }

  find(line) {
    const occurrences = [],
          content = line.getContent();

    let offset = 0,
        string = content, ///
        result = string.match(this.regExp);

    while (result !== null) {
      const occurrence = Occurrence.fromResultAndOffset(result, offset),
            end = occurrence.getEnd(),
            start = end;  ///

      string = string.substring(start); ///

      offset += start;

      occurrences.push(occurrence);

      result = string.match(this.regExp);
    }

    return occurrences;
  }

  match(string) {
    const matches = this.regExp.test(string);

    return matches;
  }

  isEqualTo(rule) {
    let equalTo = false;

    const ruleType = rule.getType();

    if (ruleType === this.type) {
      const rulePattern = rule.getPattern();

      if (rulePattern === this.pattern) {
        equalTo = true;
      }
    }

    return equalTo;
  }

  asString() {
    const string = addForwardSlashes(this.pattern);  ///

    return string;
  }

  static fromJSON(json) {
    let regexRule = null;

    const { type } = json;

    if (type === REGEX_TYPE) {
      const { pattern } = json,
            regExp = new RegExp(pattern);

      regexRule = new RegexRule(type, pattern, regExp);
    }

    return regexRule;
  }

  static fromStringAnchoredAndDirectory(string, anchored, directory) {
    let regexRule = null;

    const pattern = patternFromStringAndDirectory(string, anchored, directory);

    if (pattern !== null) {
      const type = REGEX_TYPE,
            regExp = new RegExp(pattern);

      regexRule = new RegexRule(type, pattern, regExp);
    }

    return regexRule;
  }
}

function patternFromStringAndDirectory(string, anchored, directory) {
  let pattern;

  const stringRegexLiteral = isStringRegexLiteral(string);

  if (stringRegexLiteral) {
    const regexLiteral = string;  ///

    pattern = removeForwardSlashes(regexLiteral);

    pattern = removeAnchors(pattern); ///

    pattern = removeTrailingEscapedForwardSlash(pattern);  ///

    if (directory) {
      pattern = addTrailingEscapedForwardSlash(pattern); ///
    }

    if (anchored) {
      pattern = addAnchors(pattern);
    }

    try {
      new RegExp(pattern);
    } catch (error) {
      pattern = null;
    }
  } else {
    pattern = null;
  }

  return pattern;
}

