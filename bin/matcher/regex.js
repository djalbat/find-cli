"use strict";

const { REGEX_TYPE } = require("../types");

class RegexMatcher {
  constructor(regex) {
    this.regex = regex;
  }

  getRegex() {
    return this.regex;
  }

  toJSON() {
    const type = REGEX_TYPE,
          regex = this.regex,
          json = {
            type,
            regex
          };

    return json;
  }

  match(string) {
    const matches = this.regex.test(string);

    return matches;
  }

  static fromRegex(regex) {
    const regexMatcher = new RegexMatcher(regex);

    return regexMatcher;
  }

  static fromJSON(json) {
    let regexMatcher = null;

    const { type } = json;

    if (type === REGEX_TYPE) {
      let { regex } = json;

      const string = regex, ///
            regExp = new RegExp(string);

      regex = regExp; ///

      regexMatcher = new RegexMatcher(regex);
    }

    return regexMatcher;
  }
}

module.exports = RegexMatcher;
