"use strict";

const converters = require("../converters");

const { GLOB_TYPE } = require("../types"),
      {EMPTY_STRING} = require("../constants"),
      { isStringGlobLiteral } = require("../utilities/literal"),
      { addAnchors, addTrailingForwardSlash, removeTrailingForwardSlash } = require("../utilities/string");

class GlobRule {
  constructor(glob, pattern) {
    this.glob = glob;
    this.pattern = pattern;
  }

  getGlob() {
    return this.glob;
  }

  getPattern() {
    return this.pattern;
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

  match(string) {
    const regExp = new RegExp(this.pattern),
          matches = regExp.test(string);

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
      const { glob, pattern } = json;

      globRule = new GlobRule(glob, pattern);
    }

    return globRule;
  }

  static fromStringAnchoredAndDirectory(string, anchored, directory) {
    let globRule = null;

    const glob = globFromStringAndDirectory(string, directory);

    if (glob !== null) {
      const pattern = patternFromGlobAndAnchored(glob, anchored);

      globRule = new GlobRule(glob, pattern);
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
