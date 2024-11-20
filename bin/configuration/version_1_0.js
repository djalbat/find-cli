"use strict";

const { VERSION_1_0 } = require("../versions");

function createConfiguration() {
  const version = VERSION_1_0,  ///
        configuration = {
          version
        };

  return configuration;
}

module.exports = {
  createConfiguration
};
