"use strict";

const findAction = require("./action/find"),
      helpAction = require("./action/help"),
      versionAction = require("./action/version"),
      initialiseAction = require("./action/initialise"),
      addRootDirectoryPathAction = require("./action/addRootDirectoryPath"),
      listRootDirectoryPathsAction = require("./action/listRootDirectoryPaths"),
      removeRootDirectoryPathAction = require("./action/removeRootDirectoryPath");

const { NO_ARGUMENT_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
      { DEFAULT_REGEX, DEFAULT_STRING, DEFAULT_FORMAT, DEFAULT_DRY_RUN, DEFAULT_QUIETLY, DEFAULT_PREVIOUS, DEFAULT_INTERACTIVE } = require("./defaults"),
      { FIND_COMMAND,
        HELP_COMMAND,
        VERSION_COMMAND,
        INITIALISE_COMMAND,
        ADD_ROOT_DIRECTORY_PATH_COMMAND,
        LIST_ROOT_DIRECTORY_PATHS_COMMAND,
        REMOVE_ROOT_DIRECTORY_PATH_COMMAND } = require("./commands");

function main(command, argument, options) {
  const { format = DEFAULT_FORMAT, dryRun = DEFAULT_DRY_RUN, quietly = DEFAULT_QUIETLY, previous = DEFAULT_PREVIOUS, interactive = DEFAULT_INTERACTIVE } = options;

  let { regex = DEFAULT_REGEX, string = DEFAULT_STRING } = options;

  switch (command) {
    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case INITIALISE_COMMAND: {
      initialiseAction();

      break;
    }

    case ADD_ROOT_DIRECTORY_PATH_COMMAND: {
      const rootDirectoryPath = argument; ///

      addRootDirectoryPathAction(rootDirectoryPath);

      break;
    }

    case LIST_ROOT_DIRECTORY_PATHS_COMMAND: {
      listRootDirectoryPathsAction();

      break;
    }

    case REMOVE_ROOT_DIRECTORY_PATH_COMMAND: {
      const rootDirectoryPath = argument; ///

      removeRootDirectoryPathAction(rootDirectoryPath);

      break;
    }

    case FIND_COMMAND: {
      if (argument === null) {
        if (!dryRun && !previous && !interactive) {
          console.log(NO_ARGUMENT_GIVEN_MESSAGE);

          break;
        }
      }

      if (false) {
        ///
      } else if (string) {
        argument = `"${argument}"`;
      } else if (regex) {
        argument = `/${argument}/`;
      }

      string = argument;  ///

      findAction(string, dryRun, format, quietly, previous, interactive);

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}

module.exports = main;
