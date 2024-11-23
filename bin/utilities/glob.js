"use strict";

const { characters } = require("necessary");

const { EMPTY_STRING } = require("../constants");

const { HAT_CHARACTER,
        BAR_CHARACTER,
        PLUS_CHARACTER,
        COMMA_CHARACTER,
        DOLLAR_CHARACTER,
        PERIOD_CHARACTER,
        ASTERISK_CHARACTER,
        BACKSLASH_CHARACTER,
        FORWARD_SLASH_CHARACTER,
        QUESTION_MARK_CHARACTER,
        OPENING_BRACKET_CHARACTER,
        CLOSING_BRACKET_CHARACTER,
        EXCLAMATION_MARK_CHARACTER,
        OPENING_CURLY_BRACKET_CHARACTER,
        CLOSING_CURLY_BRACKET_CHARACTER,
        OPENING_SQUARE_BRACKET_CHARACTER,
        CLOSING_SQUARE_BRACKET_CHARACTER } = characters;

function regexFromGlob(glob) {
  let regex = null;

  let pattern = EMPTY_STRING;

  const characters = [ ...glob ],
        length = characters.length;

  let index = 0;

  while (index < length) {
    if (pattern === null) {
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
        pattern = `${pattern}\\${character}`;

        break;
      }

      case ASTERISK_CHARACTER: {
        switch (nextCharacter) {
          case ASTERISK_CHARACTER: {
            nextIndex++;

            nextCharacter = (nextIndex < length) ?
                              characters[nextIndex] :
                                null;

            switch (nextCharacter) {
              case FORWARD_SLASH_CHARACTER: {
                pattern = `${pattern}(?:[^/]+\\/)*`;

                index = nextIndex;  ///

                break;
              }

              case null: {
                pattern = `${pattern}.*`;

                index = nextIndex;  ///

                break;
              }

              default: {
                pattern = null;

                break;
              }
            }

            break;
          }

          case FORWARD_SLASH_CHARACTER: {
            pattern = `${pattern}[^/]+\\/`;

            index = nextIndex;  ///

            break;
          }

          default: {
            pattern = `${pattern}[^/]+?`;

            break;
          }
        }

        break;
      }

      case BACKSLASH_CHARACTER: {
        if (nextCharacter !== null) {
          pattern = `${pattern}\\${nextCharacter}`;

          index = nextIndex;  ///
        } else {
          pattern = null;
        }
        break;
      }

      case FORWARD_SLASH_CHARACTER: {
        switch (nextCharacter) {
          case ASTERISK_CHARACTER: {
            nextIndex++;

            nextCharacter = (nextIndex < length) ?
                              characters[nextIndex] :
                                null;

            switch (nextCharacter) {
              case ASTERISK_CHARACTER: {
                nextIndex++;

                nextCharacter = (nextIndex < length) ?
                                  characters[nextIndex] :
                                    null;

                switch (nextCharacter) {
                  case null: {
                    pattern = `${pattern}(?:\\/.*)?`;

                    index = nextIndex;  ///

                    break;
                  }

                  default: {
                    pattern = `${pattern}\\${character}`;

                    break;
                  }
                }

                break;
              }

              default: {
                pattern = `${pattern}\\${character}`;

                break;
              }
            }

            break;
          }

          default: {
            pattern = `${pattern}\\${character}`;

            break;
          }
        }

        break;
      }

      case QUESTION_MARK_CHARACTER: {
        pattern = `${pattern}[^/]`;

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

          pattern = `${pattern}(${alternation})`;

          index = nextIndex;  ///
        } else {
          pattern = null;
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

          pattern = `${pattern}[${characterClass}]`;

          index = nextIndex;  ///
        } else {
          pattern = null;
        }

        break;
      }

      default: {
        pattern = `${pattern}${character}`;

        break;
      }
    }

    index++;
  }

  if (pattern !== null) {
    pattern = `${HAT_CHARACTER}${pattern}${DOLLAR_CHARACTER}`;

    try {
      const regExp = new RegExp(pattern);

      regex = regExp; ///
    } catch (error) {
      ///
    }
  }

  return regex;
}

module.exports = {
  regexFromGlob
};
