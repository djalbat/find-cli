"use strict";

const Converter = require("../converter");

class DefaultConverter extends Converter {
  callback(characters) {
    const result = characters;  ///

    return result;
  }

  static regex = /./;

  static fromNothing() { return Converter.fromNothing(DefaultConverter); }
}

const defaultConverter = DefaultConverter.fromNothing();

module.exports = defaultConverter;
