"use strict";

const periodConverter = require("./converter/period"),
      defaultConverter = require("./converter/default"),
      directoryConverter = require("./converter/directory"),
      alternatesConverter = require("./converter/alternates"),
      questionMarkConverter = require("./converter/questionMark"),
      characterClassConverter = require("./converter/characterClass"),
      singleWildcardConverter = require("./converter/singleWildcard"),
      singleDirectoryConverter = require("./converter/singleDirectory"),
      repeatedWildcardConverter = require("./converter/repeatedWildcard"),
      escapedCharacterConverter = require("./converter/escapedCharacter"),
      repeatedDirectoriesConverter = require("./converter/repeatedDirectories");

const converters = [
  repeatedDirectoriesConverter,
  singleDirectoryConverter,
  directoryConverter,
  repeatedWildcardConverter,
  singleWildcardConverter,
  escapedCharacterConverter,
  questionMarkConverter,
  periodConverter,
  alternatesConverter,
  characterClassConverter,
  defaultConverter
];

module.exports = converters;
