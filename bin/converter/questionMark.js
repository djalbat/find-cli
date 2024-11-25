"use strict";

const Converter = require("../converter");

class QuestionMarkConverter extends Converter {
  callback(characters) {
    const result = `.`;

    return result;
  }

  static regex = /^\?/;

  static fromNothing() { return Converter.fromNothing(QuestionMarkConverter); }
}

const questionMarkConverter = QuestionMarkConverter.fromNothing();

module.exports = questionMarkConverter;
