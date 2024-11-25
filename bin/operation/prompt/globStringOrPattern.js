"use strict";

const { shellUtilities } = require("necessary");

const { validateGlobStringOrPattern } = require("../../utilities/validate"),
      { GLOB_STRING_OR_REGEX_DESCRIPTION } = require("../../descriptions"),
      { INVALID_GLOB_REGEX_OR_STRING_MESSAGE } = require("../../messages"),
      { globFromAnswerAndDirectory, stringFromAnswerAndDirectory, patternFromAnswerAndDirectory } = require("../../utilities/prompt");

const { prompt } = shellUtilities;

function globStringOrPatternPromptOperation(proceed, abort, context) {
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

    const glob = globFromAnswerAndDirectory(answer, directory),
          string = stringFromAnswerAndDirectory(answer, directory),
          pattern = patternFromAnswerAndDirectory(answer, directory);

    Object.assign(context, {
      glob,
      string,
      pattern
    });

    proceed();
  });
}

module.exports = globStringOrPatternPromptOperation;
