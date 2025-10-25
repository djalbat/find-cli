"use strict";

import { shellUtilities } from "necessary";

import { validateGlobStringOrPattern } from "../../utilities/validate";
import { GLOB_STRING_OR_REGEX_DESCRIPTION } from "../../descriptions";
import { ruleFromStringAnchoredAndDirectory } from "../../utilities/rule";
import { INVALID_GLOB_REGEX_OR_STRING_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function pathRulePromptOperation(proceed, abort, context) {
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
