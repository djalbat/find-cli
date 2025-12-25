"use strict";

import { HELP_OPTION,
         GLOB_OPTION,
         REGEX_OPTION,
         STRING_OPTION,
         FORMAT_OPTION,
         VERSION_OPTION,
         DRY_RUN_OPTION,
         QUIETLY_OPTION,
         PREVIOUS_OPTION,
         INTERACTIVE_OPTION } from "./options";

const h = HELP_OPTION,
      g = GLOB_OPTION,
      r = REGEX_OPTION,
      s = STRING_OPTION,
      f = FORMAT_OPTION,
      v = VERSION_OPTION,
      d = DRY_RUN_OPTION,
      q = QUIETLY_OPTION,
      p = PREVIOUS_OPTION,
      i = INTERACTIVE_OPTION;

const abbreviations = {
  h,
  g,
  r,
  s,
  f,
  v,
  d,
  q,
  p,
  i
};

export default abbreviations;
