"use strict";

const { characters } = require("necessary");

const Converter = require("../converter");

const { HAT_CHARACTER, EXCLAMATION_MARK_CHARACTER } = characters;

class CharacterClassConverter extends Converter {
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

  static fromNothing() { return Converter.fromNothing(CharacterClassConverter); }
}

const characterClassConverter = CharacterClassConverter.fromNothing();

module.exports = characterClassConverter;
