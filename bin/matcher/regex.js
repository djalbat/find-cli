"use strict";

const { REGEX_TYPE } = require("../types"),
      { addForwardSlashes } = require("../utilities/literal");

class RegexMatcher {
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
    let regexMatcher = null;

    const { type } = json;

    if (type === REGEX_TYPE) {
      const { pattern } = json;

      regexMatcher = new RegexMatcher(pattern);
    }

    return regexMatcher;
  }

  static fromPattern(pattern) {
    let regexMatcher = null;

    if (pattern !== null) {
      regexMatcher = new RegexMatcher(pattern);
    }

    return regexMatcher;
  }
}

module.exports = RegexMatcher;
