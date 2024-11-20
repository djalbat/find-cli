"use strict";

const helpAction = require("./action/help"),
      versionAction = require("./action/version"),
      initialiseAction = require("./action/initialise");

const { COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
      { DEFAULT_QUIETLY } = require("./defaults"),
      { HELP_COMMAND,
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

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}

module.exports = main;
