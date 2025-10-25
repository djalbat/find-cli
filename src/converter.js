"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "./constants";

const { first } = arrayUtilities;

export default class Converter {
  constructor(regex) {
    this.regex = regex;
  }

  getRegex() {
    return this.regex;
  }

  match(characters) {
    let result = null;

    const string = characters.join(EMPTY_STRING),
          matches = this.regex.exec(string);

    if (matches !== null) {
      const firstMatch = first(matches),
            match = firstMatch; ///

      result = this.callback(match);

      const length = match.length,
            start = 0,
            deleteCount = length;

      characters.splice(start, deleteCount);
    }

    return result;
  }

  static fromNothing(Class) {
    const { regex } = Class,
          converter = new Class(regex);

    return converter;
  }
}
