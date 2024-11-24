"use strict";

const { STRING_TYPE } = require("../types"),
      { addDoubleQuotes, removeDoubleQuotes } = require("../utilities/literal");

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
    this.string = removeDoubleQuotes(this.string);  ///

    const matches = (this.string === string);

    this.string = addDoubleQuotes(this.string); ///

    return matches;
  }

  asString() {
    return this.string;
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
    let stringMatcher = null;

    if (string !== null) {
      stringMatcher = new StringMatcher(string);
    }

    return stringMatcher;
  }
}

module.exports = StringMatcher;
