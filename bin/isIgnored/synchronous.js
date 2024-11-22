"use strict";

function synchronousIsIgnored(path, directory, context) {
  let ignored = null;

  if (directory) {
    const { permittedDirectoryPathMatchers, ignoredDirectoryPathMatchers } = context,
          string = `${path}/`;

    permittedDirectoryPathMatchers.some((permittedDirectoryPathMatcher) => {
      const matches = permittedDirectoryPathMatcher.match(string);

      if (matches) {
        ignored = false;
      }

      if (ignored !== null) {
        return true;
      }
    });

    ignoredDirectoryPathMatchers.some((ignoredDirectoryPathMatcher) => {
      const matches = ignoredDirectoryPathMatcher.match(string);

      if (matches) {
        ignored = true;
      }

      if (ignored !== null) {
        return true;
      }
    });
  } else {
    const { permittedFilePathMatchers, ignoredFilePathMatchers } = context,
          string = path;  ///

    permittedFilePathMatchers.some((permittedFilePathMatcher) => {
      const matches = permittedFilePathMatcher.match(string);

      if (matches) {
        ignored = false;
      }

      if (ignored !== null) {
        return true;
      }
    });

    ignoredFilePathMatchers.some((ignoredFilePathMatcher) => {
      const matches = ignoredFilePathMatcher.match(string);

      if (matches) {
        ignored = true;
      }

      if (ignored !== null) {
        return true;
      }
    });
  }

  return ignored;
}

module.exports = synchronousIsIgnored;
