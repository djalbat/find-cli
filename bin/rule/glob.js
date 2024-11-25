"use strict";

const { GLOB_TYPE } = require("../types"),
      { patternFromGlob } = require("../utilities/matcher");

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

  static fromGlob(glob) {
    let globRule = null;

    if (glob !== null) {
      const pattern = patternFromGlob(glob);

      if (pattern !== null) {
        globRule = new GlobRule(glob, pattern);
      }
    }

    return globRule;
  }
}

module.exports = GlobRule;
