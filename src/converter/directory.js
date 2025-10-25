"use strict";

import Converter from "../converter";

class DirectoryConverter extends Converter {
  callback(characters) {
    const result = `\\/`;

    return result;
  }

  static regex = /^\//;

  static fromNothing() { return Converter.fromNothing(DirectoryConverter); }
}

const directoryConverter = DirectoryConverter.fromNothing();

export default directoryConverter;
