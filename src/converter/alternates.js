"use strict";

import { characters } from "necessary";

import Converter from "../converter";

const { BAR_CHARACTER, COMMA_CHARACTER } = characters;

class AlternatesConverter extends Converter {
  callback(characters) {
    characters.pop();

    characters.shift();

    const alternates = characters.split(COMMA_CHARACTER),
          alternation = alternates.join(BAR_CHARACTER),
          result = `(${alternation})`;

    return result;
  }

  static regex = /^{[^}]+}/;

  static fromNothing() { return Converter.fromNothing(AlternatesConverter); }
}

const alternatesConverter = AlternatesConverter.fromNothing();

export default alternatesConverter;
