"use strict";

const CharacterMatcher = require("../characterMatcher");

class SingleDirectoryCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = `[^/]*\\/`;

    return result;
  }

  static regex = /^\*\//;

  static fromNothing() { return CharacterMatcher.fromNothing(SingleDirectoryCharacterMatcher); }
}

const singleDirectoryCharacterMatcher = SingleDirectoryCharacterMatcher.fromNothing();

module.exports = singleDirectoryCharacterMatcher;
