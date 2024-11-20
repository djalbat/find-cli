"use strict";

const NO_ARGUMENT_GIVEN_MESSAGE = "No argument has been given.",
      COMMAND_NOT_RECOGNISED_MESSAGE = "The command is not recognised.",
      CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE = "The action cannot be performed because the configuration file is missing. Run 'find initialise' to create one.",
      FAILED_FIND_MESSAGE = "Failed to find everything.",
      FAILED_INITIALISE_MESSAGE = "Failed to create a configuration file because one is already present.",
      SUCCESSFUL_FIND_MESSAGE = "Found everything successfully.",
      SUCCESSFUL_INITIALISE_MESSAGE = "The configuration file has been created successfully.";

module.exports = {
  NO_ARGUMENT_GIVEN_MESSAGE,
  COMMAND_NOT_RECOGNISED_MESSAGE,
  CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE,
  FAILED_FIND_MESSAGE,
  FAILED_INITIALISE_MESSAGE,
  SUCCESSFUL_FIND_MESSAGE,
  SUCCESSFUL_INITIALISE_MESSAGE
};
