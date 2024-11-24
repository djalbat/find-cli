"use strict";

const { EMPTY_STRING } = require("../constants");

function addAnchors(literal) { return `^${literal}$`; }

function removeAnchors(literal) { return literal.replace(/(^\^|\$$)/g, EMPTY_STRING); }

function addDoubleQuotes(literal) { return `"${literal}"`; }

function addForwardSlashes(literal) { return `/${literal}/`; }

function removeDoubleQuotes(literal) { return literal.replace(/(^"|"$)/g, EMPTY_STRING); }

function removeForwardSlashes(literal) { return literal.replace(/(^\/|\/$)/g, EMPTY_STRING); }

function addTrailingForwardSlash(literal) { return `${literal}\/`; }

function removeTrailingForwardSlash(literal) { return literal.replace(/(\/$)/, EMPTY_STRING); }

function addTrailingEscapedForwardSlash(literal) { return `${literal}\\\/`; }

function removeTrailingEscapedForwardSlash(literal) { return literal.replace(/(\\\/$)/, EMPTY_STRING); }

module.exports = {
  addAnchors,
  removeAnchors,
  addDoubleQuotes,
  addForwardSlashes,
  removeDoubleQuotes,
  removeForwardSlashes,
  addTrailingForwardSlash,
  removeTrailingForwardSlash,
  addTrailingEscapedForwardSlash,
  removeTrailingEscapedForwardSlash
};
