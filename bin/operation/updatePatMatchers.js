"use strict";

const GlobMatcher = require("../matcher/glob"),
      RegexMatcher = require("../matcher/regex"),
      StringMatcher = require("../matcher/string");

const { updateIgnoredFilePathMatchers,
        updatePermittedFilePathMatchers,
        updateIgnoredDirectoryPathMatchers,
        updatePermittedDirectoryPathMatchers } = require("../configuration");

function updatePathMatchersOperation(proceed, abort, context) {
  const { glob, string, pattern, directory, pathIgnored } = context;

  pathIgnored ?
    addIgnoreMatcher(glob, string, pattern, directory, context) :
      addPermitMatcher(glob, string, pattern, directory, context);

  proceed();
}

module.exports = updatePathMatchersOperation;

function addIgnoreMatcher(glob, string, pattern, directory, context) {
  if (directory) {
    const { ignoredDirectoryPathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, string, pattern),
          ignoredDirectoryPathMatcher = matcher;  ///

    ignoredDirectoryPathMatchers.push(ignoredDirectoryPathMatcher);

    updateIgnoredDirectoryPathMatchers(ignoredDirectoryPathMatchers);
  } else {
    const { ignoredFilePathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, string, pattern),
          ignoredFilePathMatcher = matcher;  ///

    ignoredFilePathMatchers.push(ignoredFilePathMatcher);

    updateIgnoredFilePathMatchers(ignoredFilePathMatchers);
  }
}

function addPermitMatcher(glob, string, pattern, directory, context) {
  if (directory) {
    const { permittedDirectoryPathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, string, pattern),
          permittedDirectoryPathMatcher = matcher;  ///

    permittedDirectoryPathMatchers.push(permittedDirectoryPathMatcher);

    updatePermittedDirectoryPathMatchers(permittedDirectoryPathMatchers);
  } else {
    const { permittedFilePathMatchers } = context,
          matcher = matcherFromGlobRegexOrString(glob, string, pattern),
          permittedFilePathMatcher = matcher;  ///

    permittedFilePathMatchers.push(permittedFilePathMatcher);

    updatePermittedFilePathMatchers(permittedFilePathMatchers);
  }
}

function matcherFromGlobRegexOrString(glob, string, pattern) {
  const globMatcher = GlobMatcher.fromGlob(glob),
        regexMatcher = RegexMatcher.fromPattern(pattern),
        stringMatcher = StringMatcher.fromString(string),
        matcher = (globMatcher || regexMatcher || stringMatcher);

  return matcher;
}
