"use strict";

const NO_ARGUMENT_GIVEN_MESSAGE = "No argument has been given.",
      NO_PREVIOUS_RULES_MESSAGE = "There are no previous rules.",
      NO_ROOT_DIRECTORY_PATHS_MESSAGE = "There are no root directory paths bar the default one.",
      COMMAND_NOT_RECOGNISED_MESSAGE = "The command is not recognised.",
      CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE = "The action cannot be performed because the configuration file is missing. Run 'find initialise' to create one.",
      INVALID_IGNORE_OR_PERMIT_MESSAGE = "You must answer (i)gnore or (p)ermit.",
      INVALID_ROOT_DIRECTORY_PATH_MESSAGE = "Additional root directories must be globs of the form '../**/'.",
      INVALID_GLOB_REGEX_OR_STRING_MESSAGE = "The glob, regex or string is invalid.",
      INVALID_ROOT_DIRECTORY_PATH_INDEX_MESSAGE = "The index is either not a number or not within range.",
      FAILED_INITIALISE_MESSAGE = "Failed to create a configuration file because one is already present.",
      FAILED_ADD_ROOT_DIRECTORY_MESSAGE = "Failed to add the root directory.",
      FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE = "Failed to remove the root directory.",
      SUCCESSFUL_INITIALISE_MESSAGE = "The configuration file has been created successfully.",
      SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE = "Added the root directory successfully.",
      SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE = "Removed the root directory successfully.";

module.exports = {
  NO_ARGUMENT_GIVEN_MESSAGE,
  NO_PREVIOUS_RULES_MESSAGE,
  NO_ROOT_DIRECTORY_PATHS_MESSAGE,
  COMMAND_NOT_RECOGNISED_MESSAGE,
  CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE,
  INVALID_IGNORE_OR_PERMIT_MESSAGE,
  INVALID_ROOT_DIRECTORY_PATH_MESSAGE,
  INVALID_GLOB_REGEX_OR_STRING_MESSAGE,
  INVALID_ROOT_DIRECTORY_PATH_INDEX_MESSAGE,
  FAILED_INITIALISE_MESSAGE,
  FAILED_ADD_ROOT_DIRECTORY_MESSAGE,
  FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE,
  SUCCESSFUL_INITIALISE_MESSAGE,
  SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE,
  SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE
};
