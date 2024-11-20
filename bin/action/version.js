"use strict";

const { packageUtilities } = require("necessary");

const { FIND_CLI } = require("../constants");

const { getVersion } = packageUtilities;

function versionAction() {
  const version = getVersion(); ///

  console.log(`${FIND_CLI} version ${version}`);
}

module.exports = versionAction;
