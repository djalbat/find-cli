"use strict";

import { shellUtilities } from "necessary";

import { EMPTY_STRING } from "../../constants";
import { validateGlobStringOrPattern } from "../../utilities/validate";
import { GLOB_STRING_OR_REGEX_DESCRIPTION } from "../../descriptions";
import { ruleFromStringAnchoredAndDirectory } from "../../utilities/rule";
import { INVALID_GLOB_REGEX_OR_STRING_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function rulePromptOperation(proceed, abort, context) {
  const { dryRun } = context;

  if (dryRun) {
    proceed();

    return;
  }

  const { interactive } = context;

  if (!interactive) {
    proceed();

    return;
  }

  const { rule, anchored, directory } = context,
        description = GLOB_STRING_OR_REGEX_DESCRIPTION,
        errorMessage = INVALID_GLOB_REGEX_OR_STRING_MESSAGE,
        validationFunction = (answer) => {
          let valid = false;

          if (answer !== EMPTY_STRING) {
            valid = validateGlobStringOrPattern(answer, anchored, directory);
          }

          return valid;
        },
        options = {
          description,
          errorMessage,
          validationFunction
        };

  if (rule !== null) {
    const ruleString = rule.asString(),
          initialAnswer = ruleString; ///

    Object.assign(options, {
      initialAnswer
    });
  }

  prompt(options, (answer) => {
    const valid = (answer !== null);

    if(!valid) {
      abort();

      return;
    }

    const string = answer,  ///
          rule = ruleFromStringAnchoredAndDirectory(string, anchored, directory);

    Object.assign(context, {
      rule
    });

    proceed();
  });
}
