"use strict";

const { GLOB_TYPE } = require("../types"),
      { patternFromGlobAndDirectory } = require("../utilities/matcher");

class GlobMatcher {
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
          pattern = this.pattern,
          json = {
            type,
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
    let globMatcher = null;

    const { type } = json;

    if (type === GLOB_TYPE) {
      const { glob, pattern } = json;

      globMatcher = new GlobMatcher(glob, pattern);
    }

    return globMatcher;
  }

  static fromGlobAndDirectory(glob, directory) {
    let globMatcher = null;

    if (glob !== null) {
      const pattern = patternFromGlobAndDirectory(glob, directory);

      if (pattern !== null) {
        globMatcher = new GlobMatcher(glob, pattern);
      }
    }

    return globMatcher;
  }
}

module.exports = GlobMatcher;
