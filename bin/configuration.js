"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { FIND } = require("./constants"),
      { VERSION_1_0 } = require("./versions"),
      { createConfiguration } = require("./configuration/version_1_0"),
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
          [ VERSION_1_0 ]: migrateConfigurationToVersion_1_3,
          [ VERSION_1_3 ]: migrateConfigurationToVersion_1_7,
          [ VERSION_1_7 ] :migrateConfigurationToVersion_1_9
        },
        latestVersion = VERSION_1_9;

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
