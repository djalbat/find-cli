"use strict";

const { regexFromGlob } = require("../utilities/glob"),
      { stripSlashedFromPattern } = require("./pattern");

const regexRegex = /^\/.*?\/$/,
      stringRegex = /^".*?"$/;

function isAnswerIgnore(answer) { return /^(?:ignore|i)$/i.test(answer); }

function globFromAnswer(answer) {
  let glob = null;

  const matches = stringRegex.test(answer) || regexRegex.test(answer);

  if (!matches) {
    glob = answer;  ///

    const regex = regexFromGlob(glob);

    if (regex === null) {
      glob = null;
    }
  }

  return glob;
}

function regexFromAnswer(answer) {
  let regex = null;

  const matches = regexRegex.test(answer);

  if (matches) {
    try {
      const pattern =patternFromAnswer(answer), ///
            regExp = new RegExp(pattern);

      regex = regExp; ///
    }
    catch (error) {
      ///
    }
  }

  return regex;
}

function stringFromAnswer(answer) {
  let string = null;

  const matches = stringRegex.test(answer);

  if (matches) {
    string = answer;  ///
  }

  return string;
}

function patternFromAnswer(answer) {
  let pattern;

  pattern = answer; ///

  pattern = stripSlashedFromPattern(pattern);

  return pattern;
}

module.exports = {
  isAnswerIgnore,
  globFromAnswer,
  regexFromAnswer,
  stringFromAnswer
};
