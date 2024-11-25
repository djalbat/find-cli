"use strict";

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

  static fromResult(result) {
    const { index } = result,
          match = result[0],  ///
          length = match.length,
          start = index,  ///
          end = start + length,
          occurrence = new Occurrence(start, end);

    return occurrence;
  }

  static fromIndexAndString(index, string) {
    const length = string.length,
          start = index,  ///
          end = start + length,
          occurrence = new Occurrence(start, end);

    return occurrence;
  }
}

module.exports = Occurrence;
