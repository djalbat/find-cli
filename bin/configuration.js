"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const GlobRule = require("./rule/glob"),
      RegexRule = require("./rule/regex"),
      StringRule = require("./rule/string");

const { FIND } = require("./constants"),
      { createConfiguration } = require("./configuration/version_1_7"),
      { migrateConfigurationToVersion_1_1 } = require("./configuration/version_1_1"),
      { migrateConfigurationToVersion_1_2 } = require("./configuration/version_1_2"),
      { migrateConfigurationToVersion_1_3 } = require("./configuration/version_1_3"),
      { migrateConfigurationToVersion_1_4 } = require("./configuration/version_1_4"),
      { migrateConfigurationToVersion_1_7 } = require("./configuration/version_1_7"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages"),
      { VERSION_1_0, VERSION_1_1, VERSION_1_2, VERSION_1_3, VERSION_1_4, VERSION_1_7 } = require("./versions");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

setRCBaseExtension(FIND);

function retrieveRootDirectoryPaths() {
  const configuration = readConfigurationFile(),
        { rootDirectoryPaths } = configuration;

  return rootDirectoryPaths;
}

function retrievePreviousRules() {
  const configuration = readConfigurationFile();

  let { previousRules } = configuration;

  const previousRulesJSON = previousRules;  ///

  previousRules = rulesFromPathRulesJSON(previousRulesJSON);

  return previousRules;
}

function retrieveIgnoredFilePathRules() {
  const configuration = readConfigurationFile();

  let { ignoredFilePathRules } = configuration;

  const ignoredFilePathRulesJSON = ignoredFilePathRules;  ///

  ignoredFilePathRules = rulesFromPathRulesJSON(ignoredFilePathRulesJSON);

  return ignoredFilePathRules;
}

function retrievePermittedFilePathRules() {
  const configuration = readConfigurationFile();

  let { permittedFilePathRules } = configuration;

  const permittedFilePathRulesJSON = permittedFilePathRules;  ///

  permittedFilePathRules = rulesFromPathRulesJSON(permittedFilePathRulesJSON);

  return permittedFilePathRules;
}

function retrieveIgnoredDirectoryPathRules() {
  const configuration = readConfigurationFile();

  let { ignoredDirectoryPathRules } = configuration;

  const ignoredDirectoryPathRulesJSON = ignoredDirectoryPathRules;  ///

  ignoredDirectoryPathRules = rulesFromPathRulesJSON(ignoredDirectoryPathRulesJSON);

  return ignoredDirectoryPathRules;
}

function retrievePermittedDirectoryPathRules() {
  const configuration = readConfigurationFile();

  let { permittedDirectoryPathRules } = configuration;

  const permittedDirectoryPathRulesJSON = permittedDirectoryPathRules;  ///

  permittedDirectoryPathRules = rulesFromPathRulesJSON(permittedDirectoryPathRulesJSON);

  return permittedDirectoryPathRules;
}

function updateRootDirectoryPaths(rootDirectoryPaths) {
  updateConfigurationFile({
    rootDirectoryPaths
  });
}

function updatePreviousRules(previousRules) {
  const previousRulesJSON = rulesJSONFromRules(previousRules);

  previousRules = previousRulesJSON;  ///

  updateConfigurationFile({
    previousRules
  });
}

function updateIgnoredFilePathRules(ignoredFilePathRules) {
  const ignoredFilePathRulesJSON = rulesJSONFromRules(ignoredFilePathRules);

  ignoredFilePathRules = ignoredFilePathRulesJSON;  ///

  updateConfigurationFile({
    ignoredFilePathRules
  });
}

function updatePermittedFilePathRules(permittedFilePathRules) {
  const permittedFilePathRulesJSON = rulesJSONFromRules(permittedFilePathRules);

  permittedFilePathRules = permittedFilePathRulesJSON;  ///

  updateConfigurationFile({
    permittedFilePathRules
  });
}

function updateIgnoredDirectoryPathRules(ignoredDirectoryPathRules) {
  const ignoredDirectoryPathRulesJSON = rulesJSONFromRules(ignoredDirectoryPathRules);

  ignoredDirectoryPathRules = ignoredDirectoryPathRulesJSON;  ///

  updateConfigurationFile({
    ignoredDirectoryPathRules
  });
}

function updatePermittedDirectoryPathRules(permittedDirectoryPathRules) {
  const permittedDirectoryPathRulesJSON = rulesJSONFromRules(permittedDirectoryPathRules);

  permittedDirectoryPathRules = permittedDirectoryPathRulesJSON;  ///

  updateConfigurationFile({
    permittedDirectoryPathRules
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
          [ VERSION_1_2 ]: migrateConfigurationToVersion_1_3,
          [ VERSION_1_3 ]: migrateConfigurationToVersion_1_4,
          [ VERSION_1_4 ]: migrateConfigurationToVersion_1_7
        },
        latestVersion = VERSION_1_7;

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
  retrieveRootDirectoryPaths,
  retrievePreviousRules,
  retrieveIgnoredFilePathRules,
  retrievePermittedFilePathRules,
  retrieveIgnoredDirectoryPathRules,
  retrievePermittedDirectoryPathRules,
  updatePreviousRules,
  updateRootDirectoryPaths,
  updateIgnoredFilePathRules,
  updatePermittedFilePathRules,
  updateIgnoredDirectoryPathRules,
  updatePermittedDirectoryPathRules,
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

function rulesFromPathRulesJSON(rulesJSON) {
  const rules = rulesJSON.map((ruleJSON) => {
    const json = ruleJSON, ///
          rule = GlobRule.fromJSON(json) ||
                    RegexRule.fromJSON(json) ||
                    StringRule.fromJSON(json);

    return rule;
  });

  return rules;
}

function rulesJSONFromRules(rules) {
  const rulesJSON = rules.map((rule) => {
    const ruleJSON = rule.toJSON();

    return ruleJSON;
  });

  return rulesJSON;
}
