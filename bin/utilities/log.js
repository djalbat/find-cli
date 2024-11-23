"use strict";

const foregroundColourCodeMap = {
        "red": "\u001b[31m",
        "blue": "\u001b[34m",
        "green": "\u001b[32m",
        "yellow": "\u001b[33m",
        "black": "\u001b[30m",
        "magenta": "\u001b[35m",
        "cyan": "\u001b[36m",
        "white": "\u001b[37m",
        "brightBlack": "\u001b[90m",
        "brightRed": "\u001b[91m",
        "brightGreen": "\u001b[92m",
        "brightYellow": "\u001b[93m",
        "brightBlue": "\u001b[94m",
        "brightMagenta": "\u001b[95m",
        "brightCyan": "\u001b[96m",
        "brightWhite": "\u001b[97m"
      },
      backgroundColourCodeMap = {
        "red": "\u001b[41m",
        "blue": "\u001b[44m",
        "green": "\u001b[42m",
        "yellow": "\u001b[43m",
        "black": "\u001b[40m",
        "magenta": "\u001b[45m",
        "cyan": "\u001b[46m",
        "white": "\u001b[47m",
        "brightBlack": "\u001b[100m",
        "brightRed": "\u001b[101m",
        "brightGreen": "\u001b[102m",
        "brightYellow": "\u001b[103m",
        "brightBlue": "\u001b[104m",
        "brightMagenta": "\u001b[105m",
        "brightCyan": "\u001b[106m",
        "brightWhite": "\u001b[107m"
      },
      styleCodeMap = {
        "bold": "\u001b[1m",
        "dim": "\u001b[2m",
        "italic": "\u001b[3m",
        "underline": "\u001b[4m",
        "blink": "\u001b[5m",
        "inverse": "\u001b[7m",
        "hidden": "\u001b[8m",
        "strikethrough": "\u001b[9m"
      },
      resetCodeMap = {
        "resetAll": "\u001b[0m",
        "resetForegroundColor": "\u001b[39m",
        "resetBackgroundColor": "\u001b[49m",
        "resetBoldDim": "\u001b[22m",
        "resetItalic": "\u001b[23m",
        "resetUnderline": "\u001b[24m",
        "resetBlink": "\u001b[25m",
        "resetInverse": "\u001b[27m",
        "resetHidden": "\u001b[28m",
        "resetStrikethrough": "\u001b[29m"
      };

function red(string) { return `${foregroundColourCodeMap["red"]}${string}${resetCodeMap["resetForegroundColor"]}`; }

function blue(string) { return `${foregroundColourCodeMap["blue"]}${string}${resetCodeMap["resetForegroundColor"]}`; }

function green(string) { return `${foregroundColourCodeMap["green"]}${string}${resetCodeMap["resetForegroundColor"]}`; }

function yellow(string) { return `${foregroundColourCodeMap["yellow"]}${string}${resetCodeMap["resetForegroundColor"]}`; }

module.exports = {
  red,
  blue,
  green,
  yellow
};
