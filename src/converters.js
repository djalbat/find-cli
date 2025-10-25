"use strict";

import periodConverter from "./converter/period";
import defaultConverter from "./converter/default";
import directoryConverter from "./converter/directory";
import alternatesConverter from "./converter/alternates";
import questionMarkConverter from "./converter/questionMark";
import characterClassConverter from "./converter/characterClass";
import singleWildcardConverter from "./converter/singleWildcard";
import singleDirectoryConverter from "./converter/singleDirectory";
import repeatedWildcardConverter from "./converter/repeatedWildcard";
import escapedCharacterConverter from "./converter/escapedCharacter";
import repeatedDirectoriesConverter from "./converter/repeatedDirectories";

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

export default converters;
