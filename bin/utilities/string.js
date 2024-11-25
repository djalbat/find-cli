"use strict";

const { EMPTY_STRING } = require("../constants");

function addAnchors(string) { return `^${string}$`; }

function removeAnchors(string) { return string.replace(/(^\^|\$$)/g, EMPTY_STRING); }

function addDoubleQuotes(string) { return `"${string}"`; }

function addForwardSlashes(string) { return `/${string}/`; }

function removeDoubleQuotes(string) { return string.replace(/(^"|"$)/g, EMPTY_STRING); }

function removeForwardSlashes(string) { return string.replace(/(^\/|\/$)/g, EMPTY_STRING); }

function addTrailingForwardSlash(string) { return `${string}\/`; }

function removeTrailingForwardSlash(string) { return string.replace(/(\/$)/, EMPTY_STRING); }

function addTrailingEscapedForwardSlash(string) { return `${string}\\\/`; }

function removeTrailingEscapedForwardSlash(string) { return string.replace(/(\\\/$)/, EMPTY_STRING); }

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
