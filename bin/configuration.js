"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const GlobMatcher = require("./matcher/glob"),
      RegexMatcher = require("./matcher/regex"),
      StringMatcher = require("./matcher/string");

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

function retrieveIgnoredFilePathMatchers() {
  const configuration = readConfigurationFile();

  let { ignoredFilePathMatchers } = configuration;

  const ignoredFilePathMatchersJSON = ignoredFilePathMatchers;  ///

  ignoredFilePathMatchers = matchersFromPathMatchersJSON(ignoredFilePathMatchersJSON);

  return ignoredFilePathMatchers;
}

function retrievePermittedFilePathMatchers() {
  const configuration = readConfigurationFile();

  let { permittedFilePathMatchers } = configuration;

  const permittedFilePathMatchersJSON = permittedFilePathMatchers;  ///

  permittedFilePathMatchers = matchersFromPathMatchersJSON(permittedFilePathMatchersJSON);

  return permittedFilePathMatchers;
}

function retrieveIgnoredDirectoryPathMatchers() {
  const configuration = readConfigurationFile();

  let { ignoredDirectoryPathMatchers } = configuration;

  const ignoredDirectoryPathMatchersJSON = ignoredDirectoryPathMatchers;  ///

  ignoredDirectoryPathMatchers = matchersFromPathMatchersJSON(ignoredDirectoryPathMatchersJSON);

  return ignoredDirectoryPathMatchers;
}

function retrievePermittedDirectoryPathMatchers() {
  const configuration = readConfigurationFile();

  let { permittedDirectoryPathMatchers } = configuration;

  const permittedDirectoryPathMatchersJSON = permittedDirectoryPathMatchers;  ///

  permittedDirectoryPathMatchers = matchersFromPathMatchersJSON(permittedDirectoryPathMatchersJSON);

  return permittedDirectoryPathMatchers;
}

function updateIgnoredFilePathMatchers(ignoredFilePathMatchers) {
  const ignoredFilePathMatchersJSON = matchersJSONFromMatchers(ignoredFilePathMatchers);

  ignoredFilePathMatchers = ignoredFilePathMatchersJSON;  ///

  updateConfigurationFile({
    ignoredFilePathMatchers
  });
}

function updatePermittedFilePathMatchers(permittedFilePathMatchers) {
  const permittedFilePathMatchersJSON = matchersJSONFromMatchers(permittedFilePathMatchers);

  permittedFilePathMatchers = permittedFilePathMatchersJSON;  ///

  updateConfigurationFile({
    permittedFilePathMatchers
  });
}

function updateIgnoredDirectoryPathMatchers(ignoredDirectoryPathMatchers) {
  const ignoredDirectoryPathMatchersJSON = matchersJSONFromMatchers(ignoredDirectoryPathMatchers);

  ignoredDirectoryPathMatchers = ignoredDirectoryPathMatchersJSON;  ///

  updateConfigurationFile({
    ignoredDirectoryPathMatchers
  });
}

function updatePermittedDirectoryPathMatchers(permittedDirectoryPathMatchers) {
  const permittedDirectoryPathMatchersJSON = matchersJSONFromMatchers(permittedDirectoryPathMatchers);

  permittedDirectoryPathMatchers = permittedDirectoryPathMatchersJSON;  ///

  updateConfigurationFile({
    permittedDirectoryPathMatchers
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
  retrieveIgnoredFilePathMatchers,
  retrievePermittedFilePathMatchers,
  retrieveIgnoredDirectoryPathMatchers,
  retrievePermittedDirectoryPathMatchers,
  updateIgnoredFilePathMatchers,
  updatePermittedFilePathMatchers,
  updateIgnoredDirectoryPathMatchers,
  updatePermittedDirectoryPathMatchers,
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

function matchersFromPathMatchersJSON(matchersJSON) {
  const matchers = matchersJSON.map((matcherJSON) => {
    const json = matcherJSON, ///
          matcher = GlobMatcher.fromJSON(json) ||
                    RegexMatcher.fromJSON(json) ||
                    StringMatcher.fromJSON(json);

    return matcher;
  });

  return matchers;
}

function matchersJSONFromMatchers(matchers) {
  const matchersJSON = matchers.map((matcher) => {
    const matcherJSON = matcher.toJSON();

    return matcherJSON;
  });

  return matchersJSON;
}
