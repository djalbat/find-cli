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

function patternFromGlob(glob) {
  let pattern = EMPTY_STRING;

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

  return pattern;
}

function globFromGlobAndDirectory(glob, directory) {
  glob = removeTrailingForwardSlash(glob);  ///

  if (directory) {
    glob = addTrailingForwardSlash(glob); ///
  }

  try {
    const pattern = patternFromGlob(glob);

    new RegExp(pattern);
  } catch (error) {
    glob = null;
  }

  return glob;
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
  patternFromGlob,
  globFromGlobAndDirectory,
  stringFromStringAndDirectory,
  patternFromPatternAndDirectory
};
