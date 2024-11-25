"use strict";

const { REGEX_TYPE } = require("../types"),
      { addAnchors,
        removeAnchors,
        addForwardSlashes,
        removeForwardSlashes,
        addTrailingEscapedForwardSlash,
        removeTrailingEscapedForwardSlash } = require("../utilities/literal");

class RegexRule {
  constructor(pattern) {
    this.pattern = pattern;
  }

  getPattern() {
    return this.pattern;
  }

  toJSON() {
    const type = REGEX_TYPE,
          pattern = this.pattern,
          json = {
            type,
            pattern
          };

    return json;
  }

  match(string) {
    const regExp = new RegExp(this.pattern),
          matches = regExp.test(string);

    return matches;
  }

  asString() {
    const string = addForwardSlashes(this.pattern);  ///

    return string;
  }

  static fromJSON(json) {
    let regexRule = null;

    const { type } = json;

    if (type === REGEX_TYPE) {
      const { pattern } = json;

      regexRule = new RegexRule(pattern);
    }

    return regexRule;
  }

  static fromPattern(pattern) {
    let regexRule = null;

    if (pattern !== null) {
      regexRule = new RegexRule(pattern);
    }

    return regexRule;
  }

  static fromAnswerAndDirectory(answer, directory) {
    const pattern = patternFromAnswerAndDirectory(answer, directory),
          regexRule = RegexRule.fromPattern(pattern);

    return regexRule;
  }
}

function isAnswerPattern(answer) { return /^\/.*?\/$/.test(answer); }

module.exports = RegexRule;

Object.assign(module.exports, {
  isAnswerPattern
});

function patternFromPatternAndDirectory(pattern, directory) {
  pattern = removeForwardSlashes(pattern);  ///

  pattern = removeAnchors(pattern); ///

  pattern = removeTrailingEscapedForwardSlash(pattern);  ///

  if (directory) {
    pattern = addTrailingEscapedForwardSlash(pattern); ///
  }

  pattern = addAnchors(pattern);

  try {
    new RegExp(pattern);
  } catch (error) {
    pattern = null;
  }

  return pattern;
}

function patternFromAnswerAndDirectory(answer, directory) {
  let pattern = null;

  const answerPattern = isAnswerPattern(answer);

  if (answerPattern) {
    pattern = answer; ///

    pattern = patternFromPatternAndDirectory(pattern, directory);  ///
  }

  return pattern;
}

