"use strict";

const converters = require("../converters"),
      Occurrence = require("../occurrence");

const { GLOB_TYPE } = require("../types"),
      { EMPTY_STRING } = require("../constants"),
      { isStringGlobLiteral } = require("../utilities/literal"),
      { addAnchors, addTrailingForwardSlash, removeTrailingForwardSlash } = require("../utilities/string");

class GlobRule {
  constructor(glob, pattern, regExp) {
    this.glob = glob;
    this.pattern = pattern;
    this.regExp = regExp;
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
    const type = GLOB_TYPE,
          glob = this.glob,
          pattern = this.pattern,
          json = {
            type,
            glob,
            pattern
          };

    return json;
  }

  find(string) {
    const occurrences = [];

    let result = string.match(this.regExp);

    while (result !== null) {
      const occurrence = Occurrence.fromResult(result),
            end = occurrence.getEnd(),
            start = end;  ///

      string = string.substring(start); ///

      occurrences.push(occurrence);

      result = string.match(this.regExp);
    }

    return occurrences;
  }

  match(string) {
    const matches = this.regExp.test(string);

    return matches;
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

      globRule = new GlobRule(glob, pattern, regExp);
    }

    return globRule;
  }

  static fromStringAnchoredAndDirectory(string, anchored, directory) {
    let globRule = null;

    const glob = globFromStringAndDirectory(string, directory);

    if (glob !== null) {
      const pattern = patternFromGlobAndAnchored(glob, anchored),
            regExp = new RegExp(pattern);

      globRule = new GlobRule(glob, pattern, regExp);
    }

    return globRule;
  }
}

module.exports = GlobRule;

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
