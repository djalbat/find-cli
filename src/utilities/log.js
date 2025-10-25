"use strict";

const RED_FOREGROUND_COLOUR = "\u001b[31m",
      GREY_FOREGROUND_COLOUR = "\u001b[90m",
      BLUE_FOREGROUND_COLOUR = "\u001b[34m",
      GREEN_FOREGROUND_COLOUR = "\u001b[32m",
      YELLOW_FOREGROUND_COLOUR = "\u001b[33m",
      RESET_FOREGROUND_COLOUR = "\u001b[39m";

export function red(string) { return `${RED_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

export function grey(string) { return `${GREY_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

export function blue(string) { return `${BLUE_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

export function green(string) { return `${GREEN_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }

export function yellow(string) { return `${YELLOW_FOREGROUND_COLOUR}${string}${RESET_FOREGROUND_COLOUR}`; }
