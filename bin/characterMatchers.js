"use strict";

const periodCharacterMatcher = require("./characterMatcher/period"),
      defaultCharacterMatcher = require("./characterMatcher/default"),
      directoryCharacterMatcher = require("./characterMatcher/directory"),
      alternatesCharacterMatcher = require("./characterMatcher/alternates"),
      questionMarkCharacterMatcher = require("./characterMatcher/questionMark"),
      characterClassCharacterMatcher = require("./characterMatcher/characterClass"),
      singleWildcardCharacterMatcher = require("./characterMatcher/singleWildcard"),
      singleDirectoryCharacterMatcher = require("./characterMatcher/singleDirectory"),
      repeatedWildcardCharacterMatcher = require("./characterMatcher/repeatedWildcard"),
      escapedCharacterCharacterMatcher = require("./characterMatcher/escapedCharacter"),
      repeatedDirectoriesCharacterMatcher = require("./characterMatcher/repeatedDirectories");

const characterMatchers = [
        repeatedDirectoriesCharacterMatcher,
        singleDirectoryCharacterMatcher,
        directoryCharacterMatcher,
        repeatedWildcardCharacterMatcher,
        singleWildcardCharacterMatcher,
        escapedCharacterCharacterMatcher,
        questionMarkCharacterMatcher,
        periodCharacterMatcher,
        alternatesCharacterMatcher,
        characterClassCharacterMatcher,
        defaultCharacterMatcher
      ];

module.exports = characterMatchers;
