"use strict";

const { EMPTY_STRING } = require("../constants");

function stripSlashedFromPattern(pattern) { return pattern.replace(/(^\/|\/$)/g, EMPTY_STRING); } ///

module.exports = {
  stripSlashedFromPattern
};
