"use strict";

const Occurrence = require("../occurrence");

const { STRING_TYPE } = require("../types"),
      { isStringStringLiteral } = require("../utilities/literal"),
      { removeDoubleQuotes, addTrailingForwardSlash, removeTrailingForwardSlash } = require("../utilities/string");

class StringRule {
  constructor(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }

  toJSON() {
    const type = STRING_TYPE,
          string = this.string,
          json = {
            type,
            string
          };

    return json;
  }

  find(line) {
    const occurrences = [],
          content = line.getContent();

    let offset = 0,
        string = content, ///
        index = string.indexOf(this.string),
        length = this.string.length;

    while (index !== -1) {
      const occurrence = Occurrence.fromIndexLengthAndOffset(index, length, offset),
            end = occurrence.getEnd(),
            start = end;  ///

      string = string.substring(start); ///

      offset += start;

      occurrences.push(occurrence);

      index = string.indexOf(this.string);
    }

    return occurrences;
  }

  match(string) {
    const matches = (this.string === string);

    return matches;
  }

  asString() {
    return this.string;
  }

  static fromJSON(json) {
    let stringRule = null;

    const { type } = json;

    if (type === STRING_TYPE) {
      const { string } = json;

      stringRule = new StringRule(string);
    }

    return stringRule;
  }

  static fromStringAnchoredAndDirectory(string, anchored, directory) {
    let stringRule = null;

    string = stringFromStringAndDirectory(string, directory); ///

    if (string !== null) {
      stringRule = new StringRule(string);
    }

    return stringRule;
  }
}

module.exports = StringRule;

function stringFromStringAndDirectory(string, directory) {
  const stringStringLiteral = isStringStringLiteral(string);

  if (stringStringLiteral) {
    const stringLiteral = string; ///

    string = removeDoubleQuotes(stringLiteral);  ///

    string = removeTrailingForwardSlash(string);  ///

    if (directory) {
      string = addTrailingForwardSlash(string); ///
    }
  } else {
    string = null;
  }

  return string;
}
