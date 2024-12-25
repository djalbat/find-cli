"use strict";

const { findInEntries } = require("../utilities/find");
const { retrieveRootDirectoryPaths,
        retrieveIgnoredFilePathRules,
        retrievePermittedFilePathRules,
        retrieveIgnoredDirectoryPathRules,
        retrievePermittedDirectoryPathRules } = require("../configuration");

function findOperation(proceed, abort, context) {
  const rootDirectoryPaths = retrieveRootDirectoryPaths(),
        ignoredFilePathRules = retrieveIgnoredFilePathRules(),
        permittedFilePathRules = retrievePermittedFilePathRules(),
        ignoredDirectoryPathRules = retrieveIgnoredDirectoryPathRules(),
        permittedDirectoryPathRules = retrievePermittedDirectoryPathRules();

  Object.assign(context, {
    rootDirectoryPaths,
    ignoredFilePathRules,
    permittedFilePathRules,
    ignoredDirectoryPathRules,
    permittedDirectoryPathRules
  });

  const entryPaths = [  ///
          ...rootDirectoryPaths
        ],
        synchronous = findInEntries(entryPaths, (pathIgnored) => {
          delete context.rootDirectoryPaths;
          delete context.ignoredFilePathRules;
          delete context.permittedFilePathRules;
          delete context.ignoredDirectoryPathRules;
          delete context.permittedDirectoryPathRules;

          if (pathIgnored === null) {
            abort();

            return;
          }

          proceed();
        }, context);

  if (synchronous) {
    delete context.rootDirectoryPaths;
    delete context.ignoredFilePathRules;
    delete context.permittedFilePathRules;
    delete context.ignoredDirectoryPathRules;
    delete context.permittedDirectoryPathRules;

    proceed();
  }
}

module.exports = findOperation;
