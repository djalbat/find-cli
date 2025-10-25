"use strict";

import { EMPTY_STRING } from "../constants";

export function addAnchors(string) { return `^${string}$`; }

export function removeAnchors(string) { return string.replace(/(^\^|\$$)/g, EMPTY_STRING); }

export function addForwardSlashes(string) { return `/${string}/`; }

export function removeDoubleQuotes(string) { return string.replace(/(^"|"$)/g, EMPTY_STRING); }

export function removeForwardSlashes(string) { return string.replace(/(^\/|\/$)/g, EMPTY_STRING); }

export function addTrailingForwardSlash(string) { return `${string}\/`; }

export function removeTrailingForwardSlash(string) { return string.replace(/(\/$)/, EMPTY_STRING); }

export function addTrailingEscapedForwardSlash(string) { return `${string}\\\/`; }

export function removeTrailingEscapedForwardSlash(string) { return string.replace(/(\\\/$)/, EMPTY_STRING); }
