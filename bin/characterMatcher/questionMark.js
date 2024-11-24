"use strict";

const CharacterMatcher = require("../characterMatcher");

class QuestionMarkCharacterMatcher extends CharacterMatcher {
  callback(characters) {
    const result = `.`;

    return result;
  }

  static regex = /^\?/;

  static fromNothing() { return CharacterMatcher.fromNothing(QuestionMarkCharacterMatcher); }
}

const questionMarkCharacterMatcher = QuestionMarkCharacterMatcher.fromNothing();

module.exports = questionMarkCharacterMatcher;
