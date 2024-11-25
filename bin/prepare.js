"use strict";

const { migrateConfigurationFile } = require("./configuration"),
      { DEFAULT_HELP, DEFAULT_VERSION } = require("./defaults"),
      { FIND_COMMAND,
        HELP_COMMAND,
        VERSION_COMMAND,
        INITIALISE_COMMAND,
        ADD_ROOT_DIRECTORY_PATH_COMMAND,
        LIST_ROOT_DIRECTORY_PATHS_COMMAND,
        REMOVE_ROOT_DIRECTORY_PATH_COMMAND } = require("./commands");

function prepare(command, argument, options, main) {
  const { help = DEFAULT_HELP, version = DEFAULT_VERSION } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  }

  if ((command === HELP_COMMAND) ||
      (command === VERSION_COMMAND) ||
      (command === INITIALISE_COMMAND) ||
      (command === ADD_ROOT_DIRECTORY_PATH_COMMAND) ||
      (command === LIST_ROOT_DIRECTORY_PATHS_COMMAND) ||
      (command === REMOVE_ROOT_DIRECTORY_PATH_COMMAND)) {

    main(command, argument, options);

    return;
  }

  migrateConfigurationFile();

  argument = command; ///

  command = FIND_COMMAND;

  main(command, argument, options);
}

module.exports = prepare;
