"use strict";

const Converter = require("../converter");

class PeriodConverter extends Converter {
  callback(characters) {
    const result = `\\.`;

    return result;
  }

  static regex = /^\./;

  static fromNothing() { return Converter.fromNothing(PeriodConverter); }
}

const periodConverter = PeriodConverter.fromNothing();

module.exports = periodConverter;
