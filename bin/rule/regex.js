"use strict";

const { REGEX_TYPE } = require("../types"),
      { isStringRegexLiteral } = require("../utilities/literal"),
      { addAnchors,
        removeAnchors,
        addForwardSlashes,
        removeForwardSlashes,
        addTrailingEscapedForwardSlash,
        removeTrailingEscapedForwardSlash } = require("../utilities/string");

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

  static fromStringAndDirectory(string, directory) {
    let regexRule = null;

    const pattern = patternFromStringAndDirectory(string, directory);

    if (pattern !== null) {
      regexRule = new RegexRule(pattern);
    }

    return regexRule;
  }
}

module.exports = RegexRule;

function patternFromStringAndDirectory(string, directory) {
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

    pattern = addAnchors(pattern);

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

