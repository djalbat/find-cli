"use strict";

const NO_ARGUMENT_GIVEN_MESSAGE = "No argument has been given.",
      COMMAND_NOT_RECOGNISED_MESSAGE = "The command is not recognised.",
      CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE = "The action cannot be performed because the configuration file is missing. Run 'find initialise' to create one.",
      INVALID_ROOT_DIRECTORY = "Additional root directories must be globs of the form '../**/'.",
      INVALID_IGNORE_OR_PERMIT_MESSAGE = "You must answer (i)gnore or (p)ermit.",
      INVALID_GLOB_REGEX_OR_STRING_MESSAGE = "The glob, regex or string is invalid.",
      FAILED_FIND_MESSAGE = "Failed to search everything.",
      FAILED_INITIALISE_MESSAGE = "Failed to create a configuration file because one is already present.",
      FAILED_ADD_ROOT_DIRECTORY_MESSAGE = "Failed to add the root directory.",
      FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE = "Failed to remove the root directory.",
      SUCCESSFUL_FIND_MESSAGE = "Searched everything successfully.",
      SUCCESSFUL_INITIALISE_MESSAGE = "The configuration file has been created successfully.",
      SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE = "Added the root directory successfully.",
      SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE = "Removed the root directory successfully.";

module.exports = {
  NO_ARGUMENT_GIVEN_MESSAGE,
  COMMAND_NOT_RECOGNISED_MESSAGE,
  CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE,
  INVALID_ROOT_DIRECTORY,
  INVALID_IGNORE_OR_PERMIT_MESSAGE,
  INVALID_GLOB_REGEX_OR_STRING_MESSAGE,
  FAILED_FIND_MESSAGE,
  FAILED_INITIALISE_MESSAGE,
  FAILED_ADD_ROOT_DIRECTORY_MESSAGE,
  FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE,
  SUCCESSFUL_FIND_MESSAGE,
  SUCCESSFUL_INITIALISE_MESSAGE,
  SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE,
  SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE
};
