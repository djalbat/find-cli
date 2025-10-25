"use strict";

export function isStringGlobLiteral(string) {
  const stringStringLiteral = isStringStringLiteral(string),
        stringRegexLiteral = isStringRegexLiteral(string),
        stringGlobLiteral = (!stringStringLiteral && !stringRegexLiteral);

  return stringGlobLiteral;
}

export function isStringRegexLiteral(string) { return /^\/.*?\/$/.test(string); }

export function isStringStringLiteral(string) { return /^".*?"$/.test(string); }
