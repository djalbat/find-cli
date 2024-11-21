"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { FIND } = require("./constants"),
      { createConfiguration } = require("./configuration/version_1_1"),
      { VERSION_1_0, VERSION_1_1 } = require("./versions"),
      { migrateConfigurationToVersion_1_1 } = require("./configuration/version_1_1"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

setRCBaseExtension(FIND);

function retrieveIgnoredFileNames() {
  const configuration = readConfigurationFile(),
        { ignoredFileNames } = configuration;

  return ignoredFileNames;
}

function retrieveIgnoredFilePaths() {
  const configuration = readConfigurationFile(),
        { ignoredFilePaths } = configuration;

  return ignoredFilePaths;
}

function retrievePermittedFileNames() {
  const configuration = readConfigurationFile(),
        { permittedFileNames } = configuration;

  return permittedFileNames;
}

function retrievePermittedFilePaths() {
  const configuration = readConfigurationFile(),
        { permittedFilePaths } = configuration;

  return permittedFilePaths;
}

function retrieveIgnoredDirectoryNames() {
  const configuration = readConfigurationFile(),
        { ignoredDirectoryNames } = configuration;

  return ignoredDirectoryNames;
}

function retrieveIgnoredDirectoryPaths() {
  const configuration = readConfigurationFile(),
        { ignoredDirectoryPaths } = configuration;

  return ignoredDirectoryPaths;
}

function retrievePermittedDirectoryNames() {
  const configuration = readConfigurationFile(),
        { permittedDirectoryNames } = configuration;

  return permittedDirectoryNames;
}

function retrievePermittedDirectoryPaths() {
  const configuration = readConfigurationFile(),
        { permittedDirectoryPaths } = configuration;

  return permittedDirectoryPaths;
}

function updateIgnoredFileNames(ignoredFileNames) {
  updateConfigurationFile({
    ignoredFileNames
  });
}

function updateIgnoredFilePaths(ignoredFilePaths) {
  updateConfigurationFile({
    ignoredFilePaths
  });
}

function updatePermittedFileNames(permittedFileNames) {
  updateConfigurationFile({
    permittedFileNames
  });
}

function updatePermittedFilePaths(permittedFilePaths) {
  updateConfigurationFile({
    permittedFilePaths
  });
}

function updateIgnoredDirectoryNames(ignoredDirectoryNames) {
  updateConfigurationFile({
    ignoredDirectoryNames
  });
}

function updateIgnoredDirectoryPaths(ignoredDirectoryPaths) {
  updateConfigurationFile({
    ignoredDirectoryPaths
  });
}

function updatePermittedDirectoryNames(permittedDirectoryNames) {
  updateConfigurationFile({
    permittedDirectoryNames
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
          [ VERSION_1_0 ]: migrateConfigurationToVersion_1_1
        },
        latestVersion = VERSION_1_1;

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
  retrieveIgnoredFileNames,
  retrieveIgnoredFilePaths,
  retrievePermittedFileNames,
  retrievePermittedFilePaths,
  retrieveIgnoredDirectoryNames,
  retrieveIgnoredDirectoryPaths,
  retrievePermittedDirectoryNames,
  retrievePermittedDirectoryPaths,
  updateIgnoredFileNames,
  updateIgnoredFilePaths,
  updatePermittedFileNames,
  updatePermittedFilePaths,
  updateIgnoredDirectoryNames,
  updateIgnoredDirectoryPaths,
  updatePermittedDirectoryNames,
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
