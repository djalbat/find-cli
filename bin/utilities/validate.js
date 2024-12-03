"use strict";

const { ruleFromStringAnchoredAndDirectory } = require("../utilities/rule");

function validateIndex(answer, lastIndex) {
  let valid = true;

  if (valid) {
    valid = /^[1-9][0-9]*$/.test(answer);
  }

  if (valid) {
    const index = Number(answer);

    valid = (index <= lastIndex);
  }

  return valid;
}

function validateIgnoreOrPermit(answer) { return /^(:?ignore|permit|i|p)$/i.test(answer); }

function validateRootDirectoryPath(answer) {
  let valid = true;

  if (valid) {
    valid = /^\.\.\/(?:[^/]*\/)+$/i.test(answer);
  }

  if (valid) {
    const directory = true,
          glob = globFromAnswerAndDirectory(answer, directory);

    if (glob === null) {
      valid = false;
    }
  }

  return valid;
}

function validateGlobStringOrPattern(answer, anchored, directory) {
  const string = answer,  ///
        rule = ruleFromStringAnchoredAndDirectory(string, anchored, directory),
        valid = (rule !== null)

  return valid;
}

module.exports = {
  validateIndex,
  validateIgnoreOrPermit,
  validateRootDirectoryPath,
  validateGlobStringOrPattern
};
