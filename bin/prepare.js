"use strict";

const { migrateConfigurationFile } = require("./configuration"),
      { DEFAULT_HELP, DEFAULT_VERSION } = require("./defaults"),
      { FIND_COMMAND,
        HELP_COMMAND,
        VERSION_COMMAND,
        INITIALISE_COMMAND } = require("./commands");

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
      (command === INITIALISE_COMMAND)) {

    main(command, argument, options);

    return;
  }

  migrateConfigurationFile();

  argument = command; ///

  command = FIND_COMMAND;

  main(command, argument, options);
}

module.exports = prepare;
