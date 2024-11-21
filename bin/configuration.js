"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { FIND } = require("./constants"),
      { createConfiguration } = require("./configuration/version_1_2"),
      { migrateConfigurationToVersion_1_1 } = require("./configuration/version_1_1"),
      { migrateConfigurationToVersion_1_2 } = require("./configuration/version_1_2"),
      { VERSION_1_0, VERSION_1_1, VERSION_1_2 } = require("./versions"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

setRCBaseExtension(FIND);

function retrieveIgnoredFilePaths() {
  const configuration = readConfigurationFile(),
        { ignoredFilePaths } = configuration;

  return ignoredFilePaths;
}

function retrievePermittedFilePaths() {
  const configuration = readConfigurationFile(),
        { permittedFilePaths } = configuration;

  return permittedFilePaths;
}

function retrieveIgnoredDirectoryPaths() {
  const configuration = readConfigurationFile(),
        { ignoredDirectoryPaths } = configuration;

  return ignoredDirectoryPaths;
}

function retrievePermittedDirectoryPaths() {
  const configuration = readConfigurationFile(),
        { permittedDirectoryPaths } = configuration;

  return permittedDirectoryPaths;
}

function updateIgnoredFilePaths(ignoredFilePaths) {
  updateConfigurationFile({
    ignoredFilePaths
  });
}

function updatePermittedFilePaths(permittedFilePaths) {
  updateConfigurationFile({
    permittedFilePaths
  });
}

function updateIgnoredDirectoryPaths(ignoredDirectoryPaths) {
  updateConfigurationFile({
    ignoredDirectoryPaths
  });
}

function updatePermittedDirectoryPaths(permittedDirectoryPaths) {
  updateConfigurationFile({
    permittedDirectoryPaths
  });
}

function createConfigurationFile() {
  const configuration = createConfiguration(),
        json = configuration; ///

  writeRCFile(json);
}

function migrateConfigurationFile() {
  assertConfigurationFileExists();

  let json = readRCFile();

  const migrationMap = {
          [ VERSION_1_0 ]: migrateConfigurationToVersion_1_1,
          [ VERSION_1_1 ]: migrateConfigurationToVersion_1_2,
        },
        latestVersion = VERSION_1_2;

  json = migrate(json, migrationMap, latestVersion);

  writeRCFile(json);
}

function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

function assertConfigurationFileExists() {
  const configurationFileExists = checkConfigurationFileExists();

  if (!configurationFileExists) {
    console.log(CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);

    process.exit(1);
  }
}

module.exports = {
  retrieveIgnoredFilePaths,
  retrievePermittedFilePaths,
  retrieveIgnoredDirectoryPaths,
  retrievePermittedDirectoryPaths,
  updateIgnoredFilePaths,
  updatePermittedFilePaths,
  updateIgnoredDirectoryPaths,
  updatePermittedDirectoryPaths,
  createConfigurationFile,
  migrateConfigurationFile,
  checkConfigurationFileExists
};

function readConfigurationFile() {
  assertConfigurationFileExists();

  const json = readRCFile(),
        configuration = json; ///

  return configuration;
}

function writeConfigurationFile(configuration) {
  assertConfigurationFileExists();

  const json = configuration; ///

  writeRCFile(json);
}

function updateConfigurationFile(addedConfiguration, ...deleteConfigurationNames) {
  assertConfigurationFileExists();

  const addedProperties = addedConfiguration, ///
        deletedPropertyNames = deleteConfigurationNames;  ///

  updateRCFile(addedProperties, ...deletedPropertyNames);
}
