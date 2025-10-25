"use strict";

import Converter from "../converter";

class EscapedCharacterConverter extends Converter {
  callback(characters) {
    const result = characters;  ///

    return result;
  }

  static regex = /^\\./;

  static fromNothing() { return Converter.fromNothing(EscapedCharacterConverter); }
}

const questionMarkCharacterConverter = EscapedCharacterConverter.fromNothing();

export default questionMarkCharacterConverter;
