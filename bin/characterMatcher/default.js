"use strict";

const CharacterMatcher = require("../characterMatcher");

class DefaultCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = characters;  ///

    return result;
  }

  static regex = /./;

  static fromNothing() { return CharacterMatcher.fromNothing(DefaultCharacterMatcher); }
}

const defaultCharacterMatcher = DefaultCharacterMatcher.fromNothing();

module.exports = defaultCharacterMatcher;
