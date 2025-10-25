"use strict";

import { shellUtilities } from "necessary";

import { isAnswerIgnore } from "../../utilities/prompt";
import { FILE, DIRECTORY } from "../../constants";
import { validateIgnoreOrPermit } from "../../utilities/validate";
import { INVALID_IGNORE_OR_PERMIT_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function ignoreOrPermitPathPromptOperation(proceed, abort, context) {
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
          pathIgnored = ignore; ///

    Object.assign(context, {
      pathIgnored
    });

    proceed();
  });
}
