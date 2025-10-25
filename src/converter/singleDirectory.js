"use strict";

import Converter from "../converter";

class SingleDirectoryConverter extends Converter {
  callback(characters) {
    const result = `[^/]*\\/`;

    return result;
  }

  static regex = /^\*\//;

  static fromNothing() { return Converter.fromNothing(SingleDirectoryConverter); }
}

const singleDirectoryConverter = SingleDirectoryConverter.fromNothing();

export default singleDirectoryConverter;
