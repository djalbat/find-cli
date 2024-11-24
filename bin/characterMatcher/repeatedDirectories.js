"use strict";

const CharacterMatcher = require("../characterMatcher");

class RepeatedDirectoriesCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = `(?:[^/]*\\/)*`;

    return result;
  }

  static regex = /^\*\*\//;

  static fromNothing() { return CharacterMatcher.fromNothing(RepeatedDirectoriesCharacterMatcher); }
}

const repeatedDirectoriesCharacterMatcher = RepeatedDirectoriesCharacterMatcher.fromNothing();

module.exports = repeatedDirectoriesCharacterMatcher;
