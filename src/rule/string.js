"use strict";

import Occurrence from "../occurrence";

import { STRING_TYPE } from "../types";
import { isStringStringLiteral } from "../utilities/literal";
import { removeDoubleQuotes, addTrailingForwardSlash, removeTrailingForwardSlash } from "../utilities/string";

export default class StringRule {
  constructor(type, string) {
    this.type = type;
    this.string = string;
  }

  getType() {
    return this.type;
  }

  getString() {
    return this.string;
  }

  toJSON() {
    const type = this.type,
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

  isEqualTo(rule) {
    let equalTo = false;

    const ruleType = rule.getType();

    if (ruleType === this.type) {
      const ruleString = rule.getString();

      if (ruleString === this.string) {
        equalTo = true;
      }
    }

    return equalTo;
  }

  asString() {
    const string = `"${this.string}"`;

    return string;
  }

  static fromJSON(json) {
    let stringRule = null;

    const { type } = json;

    if (type === STRING_TYPE) {
      const { string } = json;

      stringRule = new StringRule(type, string);
    }

    return stringRule;
  }

  static fromStringAnchoredAndDirectory(string, anchored, directory) {
    let stringRule = null;

    string = stringFromStringAndDirectory(string, directory); ///

    if (string !== null) {
      const type = STRING_TYPE; ///

      stringRule = new StringRule(type, string);
    }

    return stringRule;
  }
}

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
