"use strict";

import { arrayUtilities } from "necessary";

import { grey, blue, yellow } from "./utilities/log";
import { EMPTY_STRING, SINGLE_SPACE } from "./constants";

const { backwardsForEach } = arrayUtilities;

export default class Line {
  constructor(index, content, filePath, occurrences) {
    this.index = index;
    this.content = content;
    this.filePath = filePath;
    this.occurences = occurrences;
  }

  getIndex() {
    return this.index;
  }

  getContent() {
    return this.content;
  }

  getFilePath() {
    return this.filePath;
  }

  getOccurrences() {
    return this.occurences;
  }

  setIndex(index) {
    this.index = index;
  }

  setContent(content) {
    this.content = content;
  }

  setFilePath(filePath) {
    this.filePath = filePath;
  }

  setOccurrences(occurrences) {
    this.occurrences = occurrences;
  }

  getIndexLength() {
    const indexLength = this.index.length;

    return indexLength;
  }

  getFilePathLength() {
    const filePathLength = this.filePath.length;

    return filePathLength;
  }

  addOccurrences(occurrences) {

  }

  getFormattedIndex(requiredIndexLength) {
    let index;

    const indexLength = this.getIndexLength(),
          paddingLength = requiredIndexLength - indexLength,
          padding = paddingFromPaddingLength(paddingLength);

    index = `${padding}${this.index}`;

    const formattedIndex = yellow(index);

    return formattedIndex;
  }

  getFormattedContent() {
    const gaps = [],
          matches = [];

    let end,
        start,
        string = this.content;  ///

    backwardsForEach(this.occurrences, (occurrence) => {
      end = occurrence.getEnd();

      start = end;  ///

      end = Infinity;

      const gap = string.substring(start, end);

      gaps.unshift(gap);

      end = occurrence.getEnd();

      start = 0;

      string = string.substring(start, end);

      start = occurrence.getStart();

      end = Infinity;

      const match = string.substring(start, end);

      matches.unshift(match);

      end = start;  ///

      start = 0;

      string = string.substring(start, end);  ///
    });

    let gap = string; ///

    gap = grey(gap);  ///

    string = gap; ///

    gaps.forEach((gap, index) => {
      let match = matches[index];

      gap = grey(gap);  ///

      match = blue(match);  ///

      string = `${string}${match}${gap}`;
    });

    const formattedContent = string;  ///

    return formattedContent;
  }

  getFormattedFilePath(requiredFilePathLength) {
    const filePathLength = this.getFilePathLength(),
          paddingLength = requiredFilePathLength - filePathLength,
          padding = paddingFromPaddingLength(paddingLength),
          formattedFilePath =  `${this.filePath}${padding}`;

    return formattedFilePath;
  }

  asMessage() {
    const message = `${this.filePath}  ${this.index} | ${this.content}`;

    return message;
  }

  asFormattedMessage(requiredIndexLength, requiredFilePathLength) {
    const formattedIndex = this.getFormattedIndex(requiredIndexLength),
          formattedContent = this.getFormattedContent(),
          formattedFilePath = this.getFormattedFilePath(requiredFilePathLength),
          message = `${formattedFilePath}  ${formattedIndex} | ${formattedContent}`;

    return message;
  }

  static fromIndexContentAndFilePath(index, content, filePath) {
    index = `${index}`; ///

    content = content.replace(/(\r\n|\r|\n)$/, EMPTY_STRING); ///

    const occurrences = [],
          line = new Line(index, content, filePath, occurrences);

    return line;
  }
}

function paddingFromPaddingLength(paddingLength) {
  let padding = EMPTY_STRING;

  for (let count = 0; count < paddingLength; count++) {
    padding += SINGLE_SPACE;
  }

  return padding;
}
