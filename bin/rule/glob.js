"use strict";

const converters = require("../converters");

const { GLOB_TYPE } = require("../types"),
      {EMPTY_STRING} = require("../constants"),
      { isAnswerString } = require("../rule/string"),
      { isAnswerPattern } = require("../rule/regex"),
      { addAnchors, addTrailingForwardSlash, removeTrailingForwardSlash } = require("../utilities/literal");

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

  static fromAnswerAndDirectory(answer, directory) {
    const glob = globFromAnswerAndDirectory(answer, directory),
          globRule = GlobRule.fromGlob(glob);

    return globRule;
  }
}

module.exports = GlobRule;

function isAnswerGlob(answer) {
  const answerPattern = isAnswerPattern(answer),
        answerString = isAnswerString(answer),
        answerGlob = (!answerPattern && !answerString);

  return answerGlob;
}

function patternFromGlob(glob) {
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

  pattern = addAnchors(pattern);

  return pattern;
}

function globFromGlobAndDirectory(glob, directory) {
  glob = removeTrailingForwardSlash(glob);  ///

  if (directory) {
    glob = addTrailingForwardSlash(glob); ///
  }

  try {
    const pattern = patternFromGlob(glob);

    new RegExp(pattern);
  } catch (error) {
    glob = null;
  }

  return glob;
}

function globFromAnswerAndDirectory(answer, directory) {
  let glob = null;

  const answerGlob = isAnswerGlob(answer);

  if (answerGlob) {
    glob = answer;  ///

    glob = globFromGlobAndDirectory(glob, directory);
  }

  return glob;
}
