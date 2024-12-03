"use strict";

const RED_FOREGROUND_COLOUR = "\u001b[31m",
      GREY_FOREGROUND_COLOUR = "\u001b[90m",
      BLUE_FOREGROUND_COLOUR = "\u001b[34m",
      GREEN_FOREGROUND_COLOUR = "\u001b[32m",
      YELLOW_FOREGROUND_COLOUR = "\u001b[33m",
      RESET_FOREGROUND_COLOUR = "\u001b[39m";

function red(string) { return `${RED_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

function grey(string) { return `${GREY_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

function blue(string) { return `${BLUE_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

function green(string) { return `${GREEN_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

function yellow(string) { return `${YELLOW_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

module.exports = {
  red,
  grey,
  blue,
  green,
  yellow
};
