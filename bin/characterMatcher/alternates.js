"use strict";

const { characters } = require("necessary");

const CharacterMatcher = require("../characterMatcher");

const { BAR_CHARACTER, COMMA_CHARACTER } = characters;

class AlternatesCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    characters.pop();

    characters.shift();

    const alternates = characters.split(COMMA_CHARACTER),
          alternation = alternates.join(BAR_CHARACTER),
          result = `(${alternation})`;

    return result;
  }

  static regex = /^{[^}]+}/;

  static fromNothing() { return CharacterMatcher.fromNothing(AlternatesCharacterMatcher); }
}

const alternatesCharacterMatcher = AlternatesCharacterMatcher.fromNothing();

module.exports = alternatesCharacterMatcher;
