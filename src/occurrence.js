"use strict";

import { ZERO } from "./constants";

export default class Occurrence {
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

  static fromIndexLengthAndOffset(index, length, offset) {
    const start = index + offset,
          end = start + length,
          occurrence = new Occurrence(start, end);

    return occurrence;
  }
}
