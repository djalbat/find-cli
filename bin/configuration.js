"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { FIND } = require("./constants"),
      { createConfiguration } = require("./configuration/version_1_1"),
      { VERSION_1_0, VERSION_1_1 } = require("./versions"),
      { migrateConfigurationToVersion_1_1 } = require("./configuration/version_1_1"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, writeRCFile, readRCFile } = rc;

setRCBaseExtension(FIND);

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
  createConfigurationFile,
  migrateConfigurationFile,
  checkConfigurationFileExists
};
