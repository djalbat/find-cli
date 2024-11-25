"use strict";

const { ruleFromStringAnchoredAndDirectory } = require("../utilities/rule");

function ruleOperation(proceed, abort, context) {
  const { string } = context,
        directory = false,
        anchored = false,
        rule = ruleFromStringAnchoredAndDirectory(string, anchored, directory);

  if (rule === null) {
    abort();

    return;
  }

  Object.assign(context, {
    rule
  });

  proceed();
}

module.exports = ruleOperation;
