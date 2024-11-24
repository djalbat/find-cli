"use strict";

const { globFromAnswerAndDirectory, stringFromAnswerAndDirectory, patternFromAnswerAndDirectory } = require("../utilities/prompt");

function validateIgnoreOrPermit(answer) { return /^(:?ignore|permit|i|p)$/i.test(answer); }

function validateGlobStringOrPattern(answer, directory) {
  const glob = globFromAnswerAndDirectory(answer, directory),
        string = stringFromAnswerAndDirectory(answer, directory),
        pattern = patternFromAnswerAndDirectory(answer, directory),
        valid = ((glob !== null) || (string !== null) || (pattern !== null));

  return valid;
}

module.exports = {
  validateIgnoreOrPermit,
  validateGlobStringOrPattern
};
