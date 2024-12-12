"use strict";

const { shellUtilities } = require("necessary");

const { validateGlobStringOrPattern } = require("../../utilities/validate"),
      { GLOB_STRING_OR_REGEX_DESCRIPTION } = require("../../descriptions"),
      { ruleFromStringAnchoredAndDirectory } = require("../../utilities/rule"),
      { INVALID_GLOB_REGEX_OR_STRING_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function pathRulePromptOperation(proceed, abort, context) {
  const { path, directory } = context,
        anchored = true,
        description = GLOB_STRING_OR_REGEX_DESCRIPTION,
        errorMessage = INVALID_GLOB_REGEX_OR_STRING_MESSAGE,
        initialAnswer = path,  ///
        validationFunction = (answer) => {
          const valid = validateGlobStringOrPattern(answer, anchored, directory);

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
          rule = ruleFromStringAnchoredAndDirectory(string, anchored, directory),
          pathRule = rule;  ///

    Object.assign(context, {
      pathRule
    });

    proceed();
  });
}

module.exports = pathRulePromptOperation;
