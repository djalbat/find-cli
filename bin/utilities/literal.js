"use strict";

function isStringGlobLiteral(string) {
  const stringStringLiteral = isStringStringLiteral(string),
        stringRegexLiteral = isStringRegexLiteral(string),
        stringGlobLiteral = (!stringStringLiteral && !stringRegexLiteral);

  return stringGlobLiteral;
}

function isStringRegexLiteral(string) { return /^\/.*?\/$/.test(string); }

function isStringStringLiteral(string) { return /^".*?"$/.test(string); }

module.exports = {
  isStringGlobLiteral,
  isStringRegexLiteral,
  isStringStringLiteral
};
