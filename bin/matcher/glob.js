"use strict";

const { characters } = require("necessary");

const { GLOB_TYPE } = require("../types"),
      { EMPTY_STRING } = require("../constants");

const { HAT_CHARACTER,
        BAR_CHARACTER,
        PLUS_CHARACTER,
        COMMA_CHARACTER,
        DOLLAR_CHARACTER,
        PERIOD_CHARACTER,
        ASTERISK_CHARACTER,
        BACKSLASH_CHARACTER,
        QUESTION_MARK_CHARACTER,
        OPENING_BRACKET_CHARACTER,
        CLOSING_BRACKET_CHARACTER,
        EXCLAMATION_MARK_CHARACTER,
        OPENING_CURLY_BRACKET_CHARACTER,
        CLOSING_CURLY_BRACKET_CHARACTER,
        OPENING_SQUARE_BRACKET_CHARACTER,
        CLOSING_SQUARE_BRACKET_CHARACTER } = characters;

class GlobMatcher {
  constructor(glob, regex) {
    this.glob = glob;
    this.regex = regex;
  }

  getGlob() {
    return this.glob;
  }

  getRegex() {
    return this.regex;
  }

  toJSON() {
    const type = GLOB_TYPE,
          glob = this.glob,
          json = {
            type,
            glob
          };

    return json;
  }

  match(string) {
    const matches = this.regex.test(string);

    return matches;
  }

  static fromJSON(json) {
    let globMatcher = null;

    const { type } = json;

    if (type === GLOB_TYPE) {
      let { glob } = json;

      const regex = regexFromGlob(glob);

      globMatcher = new GlobMatcher(glob, regex);
    }

    return globMatcher;
  }

  static fromGlob(glob) {
    const regex = regexFromGlob(glob),
          globMatcher = new GlobMatcher(glob, regex);

    return globMatcher;
  }
}

module.exports = GlobMatcher;

function regexFromGlob(glob) {
  let regex = EMPTY_STRING;

  const characters = [ ...glob ],
        length = characters.length;

  let index = 0;

  while (index < length) {
    if (regex === null) {
      break;
    }

    const character = characters[index];

    let nextIndex = (index + 1),
        nextCharacter = (nextIndex < length) ?
                          characters[nextIndex] :
                            null;

    switch (character) {
      case BAR_CHARACTER:
      case HAT_CHARACTER:
      case PLUS_CHARACTER:
      case PERIOD_CHARACTER:
      case DOLLAR_CHARACTER:
      case OPENING_BRACKET_CHARACTER:
      case CLOSING_BRACKET_CHARACTER:
      case CLOSING_CURLY_BRACKET_CHARACTER:
      case CLOSING_SQUARE_BRACKET_CHARACTER: {
        regex = `${regex}\\${character}`;

        break;
      }

      case ASTERISK_CHARACTER: {
        if (nextCharacter === ASTERISK_CHARACTER) {
          regex = `${regex}.*?`;

          index = nextIndex;  ///
        } else {
          regex = `${regex}[^/]*`;
        }

        break;
      }

      case BACKSLASH_CHARACTER: {
        if (nextCharacter !== null) {
          regex = `${regex}\\${nextCharacter}`;

          index = nextIndex;  ///
        } else {
          regex = null;
        }
        break;
      }

      case QUESTION_MARK_CHARACTER: {
        regex = `${regex}[^/]`;

        break;
      }

      case OPENING_CURLY_BRACKET_CHARACTER: {
        let alternates = EMPTY_STRING;

        while ((nextCharacter !== null) && (nextCharacter !== CLOSING_CURLY_BRACKET_CHARACTER)) {
          alternates = `${alternates}${nextCharacter}`;

          nextIndex++;

          nextCharacter = (nextIndex < length) ?
                            characters[nextIndex] :
                              null;
        }

        if (nextCharacter === CLOSING_CURLY_BRACKET_CHARACTER) {
          alternates = alternates.split(COMMA_CHARACTER);

          const alternation = alternates.join(BAR_CHARACTER);

          regex = `${regex}(${alternation})`;

          index = nextIndex;  ///
        } else {
          regex = null;
        }

        break;
      }

      case OPENING_SQUARE_BRACKET_CHARACTER: {
        let negated = false;

        if ((nextCharacter === HAT_CHARACTER) || (nextCharacter === EXCLAMATION_MARK_CHARACTER)) {
          nextIndex++;

          nextCharacter = (nextIndex < length) ?
                            characters[nextIndex] :
                              null;

          negated = true;
        }

        let characterClass = EMPTY_STRING;

        while ((nextCharacter !== null) && (nextCharacter !== CLOSING_SQUARE_BRACKET_CHARACTER)) {
          characterClass = `${characterClass}${nextCharacter}`;

          nextIndex++;

          nextCharacter = (nextIndex < length) ?
                            characters[nextIndex] :
                              null;
        }

        if (nextCharacter === CLOSING_SQUARE_BRACKET_CHARACTER) {
          if (negated) {
            characterClass = `${HAT_CHARACTER}${characterClass}`;
          }

          regex = `${regex}[${characterClass}]`;

          index = nextIndex;  ///
        } else {
          regex = null;
        }

        break;
      }

      default: {
        regex = `${regex}${character}`;

        break;
      }
    }

    index++;
  }

  regex = `${HAT_CHARACTER}${regex}${DOLLAR_CHARACTER}`;

  return regex;
}
