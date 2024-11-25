"use strict";

const Converter = require("../converter");

class RepeatedWildcardConverter extends Converter {
  callback(characters) {
    const result = `.*`;

    return result;
  }

  static regex = /^\*\*/;

  static fromNothing() { return Converter.fromNothing(RepeatedWildcardConverter); }
}

const singleDirectoryConverter = RepeatedWildcardConverter.fromNothing();

module.exports = singleDirectoryConverter;
