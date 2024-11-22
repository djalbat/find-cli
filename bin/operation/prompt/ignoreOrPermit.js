"use strict";

const { shellUtilities } = require("necessary");

const { isAnswerIgnore } = require("../../utilities/prompt"),
      { FILE, DIRECTORY } = require("../../constants"),
      { validateIgnoreOrPermit } = require("../../utilities/validate"),
      { INVALID_IGNORE_OR_PERMIT_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function ignoreOrPermitPromptOperation(proceed, abort, context) {
  const { path, directory } = context,
        fileOrDirectory = directory ?
                            DIRECTORY :
                              FILE,
        description = `Ignore or permit the '${path}' ${fileOrDirectory}? (i)gnore (p)ermit: `,
        errorMessage = INVALID_IGNORE_OR_PERMIT_MESSAGE,
        validationFunction = validateIgnoreOrPermit,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const valid = (answer !== null);

    if(!valid) {
      abort();

      return;
    }

    const ignore = isAnswerIgnore(answer),
          ignored = ignore; ///

    Object.assign(context, {
      ignored
    });

    proceed();
  });
}

module.exports = ignoreOrPermitPromptOperation;
