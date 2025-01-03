"use strict";

const { arrayUtilities } = require("necessary");

const { updatePreviousRules, retrievePreviousRules } = require("../configuration");

const { filter } = arrayUtilities;

function previousRuleOperation(proceed, abort, context) {
  const { dryRun } = context;

  if (dryRun) {
    proceed();

    return;
  }

  const { rule } = context;

  const previousRules = retrievePreviousRules();

  filter(previousRules, (previousRule) => {
    const previousRuleEqualToRule = previousRule.isEqualTo(rule);

    if (!previousRuleEqualToRule) {
      return true;
    }
  });

  const previousRule = rule;  ///

  previousRules.unshift(previousRule);

  updatePreviousRules(previousRules);

  proceed();
}

module.exports = previousRuleOperation;
