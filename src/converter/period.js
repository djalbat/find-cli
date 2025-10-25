"use strict";

import Converter from "../converter";

class PeriodConverter extends Converter {
  callback(characters) {
    const result = `\\.`;

    return result;
  }

  static regex = /^\./;

  static fromNothing() { return Converter.fromNothing(PeriodConverter); }
}

const periodConverter = PeriodConverter.fromNothing();

export default periodConverter;
