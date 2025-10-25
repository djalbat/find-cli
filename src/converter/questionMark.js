"use strict";

import Converter from "../converter";

class QuestionMarkConverter extends Converter {
  callback(characters) {
    const result = `.`;

    return result;
  }

  static regex = /^\?/;

  static fromNothing() { return Converter.fromNothing(QuestionMarkConverter); }
}

const questionMarkConverter = QuestionMarkConverter.fromNothing();

export default questionMarkConverter;
