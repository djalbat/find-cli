"use strict";

const { shellUtilities } = require("necessary");

const { validateGlobRegexOrString} = require("../../utilities/validate"),
      { INVALID_GLOB_REGEX_OR_STRING_MESSAGE } = require("../../messages"),
      { globFromAnswer, regexFromAnswer, stringFromAnswer } = require("../../utilities/prompt");

const { prompt } = shellUtilities;

function globRegexOrStringPromptOperation(proceed, abort, context) {
  const { path, directory } = context,
        description = `Glob, regex or string: `,
        errorMessage = INVALID_GLOB_REGEX_OR_STRING_MESSAGE,
        initialAnswer = directory ?
                          `${path}/` :
                             path,  ///
        validationFunction = validateGlobRegexOrString,  ///
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

    let glob = globFromAnswer(answer),
        regex = regexFromAnswer(answer),
        string = stringFromAnswer(answer);

    Object.assign(context, {
      glob,
      regex,
      string
    });

    proceed();
  });
}

module.exports = globRegexOrStringPromptOperation;
