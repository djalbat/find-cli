"use strict";

const CharacterMatcher = require("../characterMatcher");

class EscapedCharacterCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = characters;  ///

    return result;
  }

  static regex = /^\\./;

  static fromNothing() { return CharacterMatcher.fromNothing(EscapedCharacterCharacterMatcher); }
}

const questionMarkCharacterCharacterMatcher = EscapedCharacterCharacterMatcher.fromNothing();

module.exports = questionMarkCharacterCharacterMatcher;
