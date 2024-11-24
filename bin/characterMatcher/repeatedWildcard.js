"use strict";

const CharacterMatcher = require("../characterMatcher");

class RepeatedWildcardCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = `.*`;

    return result;
  }

  static regex = /^\*\*/;

  static fromNothing() { return CharacterMatcher.fromNothing(RepeatedWildcardCharacterMatcher); }
}

const singleDirectoryCharacterMatcher = RepeatedWildcardCharacterMatcher.fromNothing();

module.exports = singleDirectoryCharacterMatcher;
