"use strict";

const { ZERO } = require("./constants");

class Occurrence {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }

  static fromResultAndOffset(result, offset) {
    const { index } = result,
          match = result[ZERO],
          length = match.length,
          start = index + offset,
          end = start + length,
          occurrence = new Occurrence(start, end);

    return occurrence;
  }

  static fromIndexStringAndOffset(index, string, offset) {
    const length = string.length,
          start = index + offset,
          end = start + length,
          occurrence = new Occurrence(start, end);

    return occurrence;
  }
}

module.exports = Occurrence;
