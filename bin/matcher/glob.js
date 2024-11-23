"use strict";

const { GLOB_TYPE } = require("../types"),
      { regexFromGlob } = require("../utilities/glob");

class GlobMatcher {
  constructor(glob, regex) {
    this.glob = glob;
    this.regex = regex;
  }

  getGlob() {
    return this.glob;
  }

  getRegex() {
    return this.regex;
  }

  toJSON() {
    const type = GLOB_TYPE,
          glob = this.glob,
          json = {
            type,
            glob
          };

    return json;
  }

  match(string) {
    const matches = this.regex.test(string);

    return matches;
  }

  static fromJSON(json) {
    let globMatcher = null;

    const { type } = json;

    if (type === GLOB_TYPE) {
      let { glob } = json;

      const regex = regexFromGlob(glob);

      globMatcher = new GlobMatcher(glob, regex);
    }

    return globMatcher;
  }

  static fromGlob(glob) {
    let globMatcher = null;

    const regex = regexFromGlob(glob);

    if (regex !== null) {
      globMatcher = new GlobMatcher(glob, regex);
    }

    return globMatcher;
  }
}

module.exports = GlobMatcher;
