"use strict";

const CharacterMatcher = require("../characterMatcher");

class PeriodCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = `\\.`;

    return result;
  }

  static regex = /^\./;

  static fromNothing() { return CharacterMatcher.fromNothing(PeriodCharacterMatcher); }
}

const periodCharacterMatcher = PeriodCharacterMatcher.fromNothing();

module.exports = periodCharacterMatcher;
