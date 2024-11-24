"use strict";

class CharacterMatcher {
  constructor(regex) {
    this.regex = regex;
  }

  getRegex() {
    return this.regex;
  }

  match(characters) {
    let result = null;

    const match = this.regex.exec(characters);

    if (match !== null) {
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
          characterMatcher = new Class(regex);

    return characterMatcher;
  }
}

module.exports = CharacterMatcher;
