"use strict";

const Converter = require("../converter");

class SingleDirectoryConverter extends Converter {
  callback(characters) {
    const result = `[^/]*\\/`;

    return result;
  }

  static regex = /^\*\//;

  static fromNothing() { return Converter.fromNothing(SingleDirectoryConverter); }
}

const singleDirectoryConverter = SingleDirectoryConverter.fromNothing();

module.exports = singleDirectoryConverter;
