"use strict";

const { globFromGlobAndDirectory, stringFromStringAndDirectory, patternFromPatternAndDirectory } = require("../utilities/matcher");

function isAnswerIgnore(answer) { return /^(?:ignore|i)$/i.test(answer); }

function globFromAnswerAndDirectory(answer, directory) {
  let glob = null;

  const answerGlob = isAnswerGlob(answer);

  if (answerGlob) {
    glob = answer;  ///

    glob = globFromGlobAndDirectory(glob, directory);
  }

  return glob;
}

function stringFromAnswerAndDirectory(answer, directory) {
  let string = null;

  const answerString = isAnswerString(answer);

  if (answerString) {
    string = answer;  ///

    string = stringFromStringAndDirectory(string, directory);  ///
  }

  return string;
}

function patternFromAnswerAndDirectory(answer, directory) {
  let pattern = null;

  const answerPattern = isAnswerPattern(answer);

  if (answerPattern) {
    pattern = answer; ///

    pattern = patternFromPatternAndDirectory(pattern, directory);  ///
  }

  return pattern;
}

module.exports = {
  isAnswerIgnore,
  globFromAnswerAndDirectory,
  stringFromAnswerAndDirectory,
  patternFromAnswerAndDirectory
};

function isAnswerGlob(answer) {
  const answerPattern = isAnswerPattern(answer),
        answerString = isAnswerString(answer),
        answerGlob = (!answerPattern && !answerString);

  return answerGlob;
}

function isAnswerString(answer) { return /^".*?"$/.test(answer); }

function isAnswerPattern(answer) { return /^\/.*?\/$/.test(answer); }
