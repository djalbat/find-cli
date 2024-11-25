"use strict";

const { arrayUtilities } = require("necessary");

const { EMPTY_STRING } = require("./constants");

const { first } = arrayUtilities;

class Converter {
  constructor(regex) {
    this.regex = regex;
  }

  getRegex() {
    return this.regex;
  }

  match(characters) {
    let result = null;

    const string = characters.join(EMPTY_STRING),
          matches = this.regex.exec(string);

    if (matches !== null) {
      const firstMatch = first(matches),
            match = firstMatch; ///

      result = this.callback(match);

      const length = match.length,
            start = 0,
            deleteCount = length;

      characters.splice(start, deleteCount);
    }

    return result;
  }

  static fromNothing(Class) {
    const { regex } = Class,
          converter = new Class(regex);

    return converter;
  }
}

module.exports = Converter;
