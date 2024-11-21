"use strict";

const { STRING_TYPE } = require("../types");

class StringMatcher {
  constructor(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }

  toJSON() {
    const type = STRING_TYPE,
          string = this.string,
          json = {
            type,
            string
          };

    return json;
  }

  match(string) {
    const matches = (this.string === string);

    return matches;
  }

  static fromJSON(json) {
    let stringMatcher = null;

    const { type } = json;

    if (type === STRING_TYPE) {
      const { string } = json;

      stringMatcher = new StringMatcher(string);
    }

    return stringMatcher;
  }

  static fromString(string) {
    const stringMatcher = new StringMatcher(string);

    return stringMatcher;
  }
}

module.exports = StringMatcher;
