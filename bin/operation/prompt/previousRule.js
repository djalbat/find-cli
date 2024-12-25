"use strict";

const { selectPreviousRule } = require("../../utilities/prompt"),
      { retrievePreviousRules } = require("../../configuration"),
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

  selectPreviousRule(previousRules, (previousRule) => {
    if (previousRule === null) {
      abort();

      return;
    }

    const rule = previousRule;  ///

    Object.assign(context, {
      rule
    });

    proceed();
  });
}

module.exports = previousRulePromptOperation;
