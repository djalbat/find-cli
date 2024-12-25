"use strict";

const { retrievePreviousRules } = require("../../configuration"),
      { NO_PREVIOUS_RULES_MESSAGE } = require("../../messages");

function previousRulePromptOperation(proceed, abort, context) {
  const { dryRun } = context;

  if (dryRun) {
    proceed();

    return;
  }

  const { previous } = context;

  if (!previous) {
    proceed();

    return;
  }

  const previousRules = retrievePreviousRules(),
        previousRulesLength = previousRules.length;

  if (previousRulesLength === 0) {
    console.log(NO_PREVIOUS_RULES_MESSAGE);

    abort();

    return;
  }

  debugger
}

module.exports = previousRulePromptOperation;
