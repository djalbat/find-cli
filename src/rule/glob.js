"use strict";

import converters from "../converters";
import Occurrence from "../occurrence";

import { GLOB_TYPE } from "../types";
import { EMPTY_STRING } from "../constants";
import { isStringGlobLiteral } from "../utilities/literal";
import { addAnchors, addTrailingForwardSlash, removeTrailingForwardSlash } from "../utilities/string";

export default class GlobRule {
  constructor(type, glob, pattern, regExp) {
    this.type = type;
    this.glob = glob;
    this.pattern = pattern;
    this.regExp = regExp;
  }

  getType() {
    return this.type;
  }

  getGlob() {
    return this.glob;
  }

  getPattern() {
    return this.pattern;
  }

  getRegExp() {
    return this.regExp;
  }

  toJSON() {
    const type = this.type,
          glob = this.glob,
          pattern = this.pattern,
          json = {
            type,
            glob,
            pattern
          };

    return json;
  }

  find(line) {
    const occurrences = [],
          content = line.getContent();

    let offset = 0,
        string = content, ///
        result = string.match(this.regExp);

    while (result !== null) {
      const occurrence = Occurrence.fromResultAndOffset(result, offset),
            end = occurrence.getEnd(),
            start = end;  ///

      string = string.substring(start); ///

      offset += start;

      occurrences.push(occurrence);

      result = string.match(this.regExp);
    }

    return occurrences;
  }

  match(string) {
    const matches = this.regExp.test(string);

    return matches;
  }

  isEqualTo(rule) {
    let equalTo = false;

    const ruleType = rule.getType();

    if (ruleType === this.type) {
      const ruleGlob = rule.getGlob();

      if (ruleGlob === this.glob) {
        equalTo = true;
      }
    }

    return equalTo;
  }

  asString() {
    const string = this.glob; ///

    return string;
  }

  static fromJSON(json) {
    let globRule = null;

    const { type } = json;

    if (type === GLOB_TYPE) {
      const { glob, pattern } = json,
            regExp = new RegExp(pattern);

      globRule = new GlobRule(type, glob, pattern, regExp);
    }

    return globRule;
  }

  static fromStringAnchoredAndDirectory(string, anchored, directory) {
    let globRule = null;

    const glob = globFromStringAndDirectory(string, directory);

    if (glob !== null) {
      const type = GLOB_TYPE,
            pattern = patternFromGlobAndAnchored(glob, anchored),
            regExp = new RegExp(pattern);

      globRule = new GlobRule(type, glob, pattern, regExp);
    }

    return globRule;
  }
}

function patternFromGlobAndAnchored(glob, anchored) {
  let pattern = EMPTY_STRING;

  const characters = [ ...glob ];

  for (;;) {
    const converted = converters.some((converter) => {
      const result = converter.match(characters);

      if (result !== null) {
        pattern = `${pattern}${result}`;

        return true;
      }
    });

    if (!converted) {
      break;
    }
  }

  if (anchored) {
    pattern = addAnchors(pattern);
  }

  return pattern;
}

function globFromStringAndDirectory(string, directory) {
  let glob;

  const stringGlobLiteral = isStringGlobLiteral(string);

  if (stringGlobLiteral) {
    const globLiteral = string; ///

    glob = globLiteral;  ///

    glob = removeTrailingForwardSlash(glob);  ///

    if (directory) {
      glob = addTrailingForwardSlash(glob); ///
    }

    try {
      const anchored = false,
            pattern = patternFromGlobAndAnchored(glob, anchored);

      new RegExp(pattern);
    } catch (error) {
      glob = null;
    }
  } else {
    glob = null;
  }

  return glob;
}
