"use strict";

import Converter from "../converter";

class RepeatedDirectoriesConverter extends Converter {
  callback(characters) {
    const result = `(?:[^/]*\\/)*`;

    return result;
  }

  static regex = /^\*\*\//;

  static fromNothing() { return Converter.fromNothing(RepeatedDirectoriesConverter); }
}

const repeatedDirectoriesConverter = RepeatedDirectoriesConverter.fromNothing();

export default repeatedDirectoriesConverter;
