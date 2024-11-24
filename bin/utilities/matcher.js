"use strict";

const characterMatchers = require("../characterMatchers");

const { EMPTY_STRING } = require("../constants"),
      { addAnchors,
        removeAnchors,
        addDoubleQuotes,
        removeDoubleQuotes,
        removeForwardSlashes,
        addTrailingForwardSlash,
        removeTrailingForwardSlash,
        addTrailingEscapedForwardSlash,
        removeTrailingEscapedForwardSlash } = require("../utilities/literal");

function patternFromGlobAndDirectory(glob, directory) {
  let pattern = EMPTY_STRING;

  glob = removeTrailingForwardSlash(glob);  ///

  if (directory) {
    glob = addTrailingForwardSlash(glob); ///
  }

  const characters = [ ...glob ];

  for (;;) {
    const matched = characterMatchers.some((characterMatcher) => {
      const result = characterMatcher.match(characters);

      if (result !== null) {
        pattern = `${pattern}${result}`;

        return true;
      }
    });

    if (!matched) {
      break;
    }
  }

  pattern = addAnchors(pattern);

  try {
    new RegExp(pattern);
  } catch (error) {
    pattern = null;
  }

  return pattern;
}

function stringFromStringAndDirectory(string, directory) {
  string = removeDoubleQuotes(string);  ///

  string = removeTrailingForwardSlash(string);  ///

  if (directory) {
    string = addTrailingForwardSlash(string); ///
  }

  string = addDoubleQuotes(string); ///

  return string;
}

function patternFromPatternAndDirectory(pattern, directory) {
  pattern = removeForwardSlashes(pattern);  ///

  pattern = removeAnchors(pattern); ///

  pattern = removeTrailingEscapedForwardSlash(pattern);  ///

  if (directory) {
    pattern = addTrailingEscapedForwardSlash(pattern); ///
  }

  pattern = addAnchors(pattern);

  try {
    new RegExp(pattern);
  } catch (error) {
    pattern = null;
  }

  return pattern;
}

module.exports = {
  patternFromGlobAndDirectory,
  stringFromStringAndDirectory,
  patternFromPatternAndDirectory
};
