"use strict";

const { STRING_TYPE } = require("../types"),
      { addDoubleQuotes, removeDoubleQuotes } = require("../utilities/literal");

class StringRule {
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
    let stringRule = null;

    const { type } = json;

    if (type === STRING_TYPE) {
      const { string } = json;

      stringRule = new StringRule(string);
    }

    return stringRule;
  }

  static fromString(string) {
    let stringRule = null;

    if (string !== null) {
      stringRule = new StringRule(string);
    }

    return stringRule;
  }
}

module.exports = StringRule;
