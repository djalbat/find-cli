"use strict";

const CharacterMatcher = require("../characterMatcher");

class DirectoryCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = `\\/`;

    return result;
  }

  static regex = /^\//;

  static fromNothing() { return CharacterMatcher.fromNothing(DirectoryCharacterMatcher); }
}

const directoryCharacterMatcher = DirectoryCharacterMatcher.fromNothing();

module.exports = directoryCharacterMatcher;
