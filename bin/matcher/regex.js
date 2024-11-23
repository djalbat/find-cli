"use strict";

const { REGEX_TYPE } = require("../types"),
      { stripSlashedFromPattern } = require("../utilities/pattern");

class RegexMatcher {
  constructor(regex) {
    this.regex = regex;
  }

  getRegex() {
    return this.regex;
  }

  toJSON() {
    const type = REGEX_TYPE,
          pattern = this.asPattern(),
          json = {
            type,
            pattern
          };

    return json;
  }

  match(string) {
    const matches = this.regex.test(string);

    return matches;
  }

  asString() {
    const string = this.regex.toString();

    return string;
  }

  asPattern() {
    let pattern;

    const string = this.asString();

    pattern = string; ///

    pattern = stripSlashedFromPattern(pattern); ///

    return pattern;
  }

  static fromJSON(json) {
    let regexMatcher = null;

    const { type } = json;

    if (type === REGEX_TYPE) {
      const { pattern } = json,
            regExp = new RegExp(pattern),
            regex = regExp; ///

      regexMatcher = new RegexMatcher(regex);
    }

    return regexMatcher;
  }

  static fromRegex(regex) {
    let regexMatcher = null;

    if (regex !== null) {
      regexMatcher = new RegexMatcher(regex);
    }

    return regexMatcher;
  }
}

module.exports = RegexMatcher;
