"use strict";

const { globFromAnswer, regexFromAnswer, stringFromAnswer } = require("../utilities/prompt");

function validateIgnoreOrPermit(answer) { return /^(:?ignore|permit|i|p)$/i.test(answer); }

function validateGlobRegexOrString(answer) {
  const glob = globFromAnswer(answer),
        regex = regexFromAnswer(answer),
        string = stringFromAnswer(answer),
        valid = ((glob !== null) || (regex !== null) || (string !== null));

  return valid;
}

module.exports = {
  validateIgnoreOrPermit,
  validateGlobRegexOrString
};
