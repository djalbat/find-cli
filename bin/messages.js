"use strict";

const NO_ARGUMENT_GIVEN_MESSAGE = "No argument has been given.",
      COMMAND_NOT_RECOGNISED_MESSAGE = "The command is not recognised.",
      CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE = "The action cannot be performed because the configuration file is missing. Run 'find initialise' to create one.",
      INVALID_IGNORE_OR_PERMIT_MESSAGE = "You must answer (i)gnore or (p)ermit.",
      INVALID_GLOB_REGEX_OR_STRING_MESSAGE = "The glob, regex or string is invalid.",
      FAILED_FIND_MESSAGE = "Failed to find everything.",
      FAILED_INITIALISE_MESSAGE = "Failed to create a configuration file because one is already present.",
      SUCCESSFUL_FIND_MESSAGE = "Found everything successfully.",
      SUCCESSFUL_INITIALISE_MESSAGE = "The configuration file has been created successfully.";

module.exports = {
  NO_ARGUMENT_GIVEN_MESSAGE,
  COMMAND_NOT_RECOGNISED_MESSAGE,
  CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE,
  INVALID_IGNORE_OR_PERMIT_MESSAGE,
  INVALID_GLOB_REGEX_OR_STRING_MESSAGE,
  FAILED_FIND_MESSAGE,
  FAILED_INITIALISE_MESSAGE,
  SUCCESSFUL_FIND_MESSAGE,
  SUCCESSFUL_INITIALISE_MESSAGE
};
