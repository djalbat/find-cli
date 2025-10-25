"use strict";

import { packageUtilities } from "necessary";

import { FIND_CLI } from "../constants";

const { getVersion } = packageUtilities;

export default function versionAction() {
  const version = getVersion(); ///

  console.log(`${FIND_CLI} version ${version}`);
}
