"use strict";

const findAction = require("./action/find"),
      helpAction = require("./action/help"),
      versionAction = require("./action/version"),
      initialiseAction = require("./action/initialise");

const { NO_ARGUMENT_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
      { DEFAULT_QUIETLY } = require("./defaults"),
      { FIND_COMMAND,
        HELP_COMMAND,
        VERSION_COMMAND,
        INITIALISE_COMMAND } = require("./commands");

function main(command, argument, options) {
  const { quietly = DEFAULT_QUIETLY } = options;

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

    case FIND_COMMAND: {
      if (argument === null) {
        console.log(NO_ARGUMENT_GIVEN_MESSAGE);
      } else {
        const string = argument;  ///

        findAction(string, quietly);
      }

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}

module.exports = main;
