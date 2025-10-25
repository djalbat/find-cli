"use strict";

const { HELP_OPTION,
        GLOB_OPTION,
        REGEX_OPTION,
        STRING_OPTION,
        FORMAT_OPTION,
        VERSION_OPTION,
        DRY_RUN_OPTION,
        QUIETLY_OPTION,
        PREVIOUS_OPTION,
        INTERACTIVE_OPTION } = require("./options");

const abbreviations = {
  "h": HELP_OPTION,
  "g": GLOB_OPTION,
  "r": REGEX_OPTION,
  "s": STRING_OPTION,
  "f": FORMAT_OPTION,
  "v": VERSION_OPTION,
  "d": DRY_RUN_OPTION,
  "q": QUIETLY_OPTION,
  "p": PREVIOUS_OPTION,
  "i": INTERACTIVE_OPTION
};

export default abbreviations;
