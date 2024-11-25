"use strict";

const Converter = require("../converter");

class SingleWildcardConverter extends Converter {
  callback(characters) {
    const result = `.+?`;

    return result;
  }

  static regex = /^\*/;

  static fromNothing() { return Converter.fromNothing(SingleWildcardConverter); }
}

const singleWildcardConverter = SingleWildcardConverter.fromNothing();

module.exports = singleWildcardConverter;
