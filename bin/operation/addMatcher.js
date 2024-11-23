"use strict";

const GlobMatcher = require("../matcher/glob"),
      RegexMatcher = require("../matcher/regex"),
      StringMatcher = require("../matcher/string");

function addMatcherOperation(proceed, abort, context) {
  const { glob, regex, string, directory, pathIgnored } = context;

  pathIgnored ?
    addIgnoreMatcher(glob, regex, string, directory, context) :
      addPermitMatcher(glob, regex, string, directory, context);

  proceed();
}

module.exports = addMatcherOperation;

function addIgnoreMatcher(glob, regex, string, directory, context) {
  if (directory) {
    const { ignoredDirectoryPathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, regex, string),
          ignoredDirectoryPathMatcher = matcher;  ///

    ignoredDirectoryPathMatchers.push(ignoredDirectoryPathMatcher);
  } else {
    const { ignoredFilePathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, regex, string),
          ignoredFilePathMatcher = matcher;  ///

    ignoredFilePathMatchers.push(ignoredFilePathMatcher);
  }
}

function addPermitMatcher(glob, regex, string, directory, context) {
  if (directory) {
    const { permittedDirectoryPathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, regex, string),
          permittedDirectoryPathMatcher = matcher;  ///

    permittedDirectoryPathMatchers.push(permittedDirectoryPathMatcher);
  } else {
    const { permittedFilePathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, regex, string),
          permittedFilePathMatcher = matcher;  ///

    permittedFilePathMatchers.push(permittedFilePathMatcher);
  }
}

function matcherFromGlobRegexOrString(glob, regex, string) {
  const globMatcher = GlobMatcher.fromGlob(glob),
        regexMatcher = RegexMatcher.fromRegex(regex),
        stringMatcher = StringMatcher.fromString(string),
        matcher = (globMatcher || regexMatcher || stringMatcher);

  return matcher;
}
