"use strict";

import { encodings, characters } from "necessary";

import { DATA } from "../constants";
import { PREVIOUS_GLOB_STRING_OR_REGEX_DESCRIPTION } from "../descriptions";

const { UTF8_ENCODING } = encodings,
      { UP_CHARACTER,
        ETX_CHARACTER,
        DOWN_CHARACTER,
        ESCAPE_CHARACTER,
        CTRL_C_CHARACTER,
        NEW_LINE_CHARACTER,
        CARRIAGE_RETURN_CHARACTER } = characters;

export function isAnswerIgnore(answer) { return /^(:?ignore|i)$/i.test(answer); }

export function selectPreviousRule(previousRules, callback) {
  let index = 0,
      previousRule = previousRules[index];

  writePreviousRule(previousRule);

  const rawMode = true,
        encoding = UTF8_ENCODING,
        previousRulesLength = previousRules.length;

  process.stdin.setRawMode(rawMode);

  process.stdin.setEncoding(encoding);

  process.stdin.addListener(DATA, listener);

  process.stdin.resume();

  function listener(data) {
    const character = data.toString(encoding);

    switch (character) {
      case UP_CHARACTER: {
        const firstIndex = 0;

        if (index > firstIndex) {
          index--;

          previousRule = previousRules[index];

          writePreviousRule(previousRule);
        }

        break;
      }

      case DOWN_CHARACTER: {
        const lastIndex = previousRulesLength - 1;

        if (index < lastIndex) {
          index++;

          previousRule = previousRules[index];

          writePreviousRule(previousRule);
        }

        break;
      }

      case ESCAPE_CHARACTER: {
        previousRule = null;

        console.log(CARRIAGE_RETURN_CHARACTER);

        process.stdin.removeListener(DATA, listener);

        process.stdin.pause();

        callback(previousRule);

        break;
      }

      case NEW_LINE_CHARACTER:
      case CARRIAGE_RETURN_CHARACTER: {
        process.stdout.clearLine();

        process.stdout.cursorTo(0);

        process.stdin.removeListener(DATA, listener);

        process.stdin.pause();

        callback(previousRule);

        break;
      }

      case ETX_CHARACTER: {
        console.log(CTRL_C_CHARACTER);

        process.exit();

        break;
      }

      default: {
        ///

        break;
      }
    }
  }
}

function writePreviousRule(previousRule) {
  const description = PREVIOUS_GLOB_STRING_OR_REGEX_DESCRIPTION,  ///
        previousRuleString = previousRule.asString();

  process.stdout.clearLine();

  process.stdout.cursorTo(0);

  process.stdout.write(description);

  process.stdout.write(previousRuleString);
}

