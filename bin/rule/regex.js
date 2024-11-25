"use strict";

const { REGEX_TYPE } = require("../types"),
      { addForwardSlashes } = require("../utilities/literal");

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
}

module.exports = RegexRule;
