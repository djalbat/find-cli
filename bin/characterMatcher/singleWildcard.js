"use strict";

const CharacterMatcher = require("../characterMatcher");

class SingleWildcardCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = `.+?`;

    return result;
  }

  static regex = /^\*/;

  static fromNothing() { return CharacterMatcher.fromNothing(SingleWildcardCharacterMatcher); }
}

const singleWildcardCharacterMatcher = SingleWildcardCharacterMatcher.fromNothing();

module.exports = singleWildcardCharacterMatcher;
