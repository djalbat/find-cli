"use strict";

const { characters } = require("necessary");

const CharacterMatcher = require("../characterMatcher");

const { HAT_CHARACTER, EXCLAMATION_MARK_CHARACTER } = characters;

class CharacterClassCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    characters.pop();

    characters.shift();

    let negated = true;

    const firstCharacter = characters.shift() || null;

    if (firstCharacter !== null) {
      if ((firstCharacter === HAT_CHARACTER) || (firstCharacter === EXCLAMATION_MARK_CHARACTER)) {
        negated = true;
      } else {
        characters.unshift(firstCharacter);
      }
    }

    let characterClass = `${characters}`;

    if (negated) {
      characterClass = `^${characterClass}`;
    }

    const result = `[${characterClass}]`;

    return result;
  }

  static regex = /^\[[^\]]+]/;

  static fromNothing() { return CharacterMatcher.fromNothing(CharacterClassCharacterMatcher); }
}

const characterClassCharacterMatcher = CharacterClassCharacterMatcher.fromNothing();

module.exports = characterClassCharacterMatcher;
