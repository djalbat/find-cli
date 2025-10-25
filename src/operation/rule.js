"use strict";

import { ruleFromStringAnchoredAndDirectory } from "../utilities/rule";

export default function ruleOperation(proceed, abort, context) {
  const { dryRun } = context;

  if (dryRun) {
    proceed();

    return;
  }

  const { previous, interactive } = context;

  if (previous || interactive) {
    proceed();

    return;
  }

  const { string } = context,
        anchored = true,
        directory = false,
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
