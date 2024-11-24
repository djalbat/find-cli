"use strict";

const { STRING_TYPE } = require("../types"),
      { stringFromStringAndDirectory } = require("../utilities/matcher"),
      { addDoubleQuotes, removeDoubleQuotes } = require("../utilities/literal");

class StringMatcher {
  constructor(string, directory) {
    this.string = string;
    this.directory = directory;
  }

  getString() {
    return this.string;
  }

  getDirectory() {
    return this.directory;
  }

  toJSON() {
    const type = STRING_TYPE,
          string = this.string,
          directory = this.directory,
          json = {
            type,
            string,
            directory
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
      const { string, directory } = json;

      stringMatcher = new StringMatcher(string, directory);
    }

    return stringMatcher;
  }

  static fromStringAndDirectory(string, directory) {
    let stringMatcher = null;

    if (string !== null) {
      string = stringFromStringAndDirectory(string, directory); ///

      stringMatcher = new StringMatcher(string, directory);
    }

    return stringMatcher;
  }
}

module.exports = StringMatcher;
