"use strict";

const { HELP_OPTION, FORMAT_OPTION, VERSION_OPTION, DRY_RUN_OPTION, QUIETLY_OPTION } = require("./options");

module.exports = {
  "h": HELP_OPTION,
  "f": FORMAT_OPTION,
  "v": VERSION_OPTION,
  "d": DRY_RUN_OPTION,
  "q": QUIETLY_OPTION
};
