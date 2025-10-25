"use strict";

export const NO_ARGUMENT_GIVEN_MESSAGE = "No argument has been given.";
export const NO_PREVIOUS_RULES_MESSAGE = "There are no previous rules.";
export const NO_ROOT_DIRECTORY_PATHS_MESSAGE = "There are no root directory paths bar the default one.";
export const COMMAND_NOT_RECOGNISED_MESSAGE = "The command is not recognised.";
export const CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE = "The action cannot be performed because the configuration file is missing. Run 'find initialise' to create one.";
export const INVALID_IGNORE_OR_PERMIT_MESSAGE = "You must answer (i)gnore or (p)ermit.";
export const INVALID_ROOT_DIRECTORY_PATH_MESSAGE = "Additional root directories must be globs of the form '../**/'.";
export const INVALID_GLOB_REGEX_OR_STRING_MESSAGE = "The glob, regex or string is invalid.";
export const INVALID_ROOT_DIRECTORY_PATH_INDEX_MESSAGE = "The index is either not a number or not within range.";
export const FAILED_INITIALISE_MESSAGE = "Failed to create a configuration file because one is already present.";
export const FAILED_ADD_ROOT_DIRECTORY_MESSAGE = "Failed to add the root directory.";
export const FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE = "Failed to remove the root directory.";
export const SUCCESSFUL_INITIALISE_MESSAGE = "The configuration file has been created successfully.";
export const SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE = "Added the root directory successfully.";
export const SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE = "Removed the root directory successfully.";
