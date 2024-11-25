"use strict";

const { shellUtilities } = require("necessary");

const { ruleFromStringAnchoredAndDirectory } = require("../../utilities/rule"),
      { validateGlobStringOrPattern } = require("../../utilities/validate"),
      { GLOB_STRING_OR_REGEX_DESCRIPTION } = require("../../descriptions"),
      { INVALID_GLOB_REGEX_OR_STRING_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function rulePromptOperation(proceed, abort, context) {
  const { path, directory } = context,
        description = GLOB_STRING_OR_REGEX_DESCRIPTION,
        errorMessage = INVALID_GLOB_REGEX_OR_STRING_MESSAGE,
        initialAnswer = path,  ///
        validationFunction = (answer) => {
          const valid = validateGlobStringOrPattern(answer, directory);

          return valid;
        },
        options = {
          description,
          errorMessage,
          initialAnswer,
          validationFunction
        };

  prompt(options, (answer) => {
    const valid = (answer !== null);

    if(!valid) {
      abort();

      return;
    }

    const string = answer,  ///
          anchored = true,
          rule = ruleFromStringAnchoredAndDirectory(string, anchored, directory);

    Object.assign(context, {
      rule
    });

    proceed();
  });
}

module.exports = rulePromptOperation;
