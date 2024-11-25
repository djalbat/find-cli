"use strict";

const { arrayUtilities, fileSystemUtilities } = require("necessary");

const { grey, blue } = require("./utilities/log"),
      { EMPTY_STRING } = require("./constants");

const { readFile } = fileSystemUtilities,
      { backwardsForEach } = arrayUtilities;

function find(filePath, context) {
  const { rule } = context,
        content = readFile(filePath),
        lines = linesFromContent(content);

  let { totalLines } = context;

  lines.forEach((line, index) => {
    const string = line,  ///
          occurrences = rule.find(string),
          length = occurrences.length;

    if (length > 0) {
      const gaps = [],
            matches = [];

      gapsAndMatchesFromLineAndOccurrences(line, occurrences, gaps, matches);

      line = lineFromGapsAndMatches(gaps, matches); ///

      console.log(filePath, index, line);
    }

    totalLines++;
  });

  Object.assign(context, {
    totalLines
  });
}

module.exports = find;

function linesFromContent(content) {
  const contents = content.split(/(\r\n|\r|\n)/),
        lines = contents.map((content) => {
          const line = content.replace(/(\r\n|\r|\n)$/, EMPTY_STRING);

          return line;
        });

  return lines;
}

function lineFromGapsAndMatches(gaps, matches) {
  let line = EMPTY_STRING;

  gaps = [ ...gaps ]; ///

  let gap = gaps.pop(); ///

  gaps.forEach((gap, index) => {
    let match = matches[index];

    gap = grey(gap);  ///

    match = blue(match);  ///

    line = `${line}${gap}${match}`;
  });

  gap = grey(gap);  ///

  line = `${line}${gap}`;

  return line;
}

function gapsAndMatchesFromLineAndOccurrences(line, occurrences, gaps, matches) {
  let end,
      start;

  backwardsForEach(occurrences, (occurrence) => {
    end = occurrence.getEnd();

    start = end;  ///

    end = Infinity;

    const gap = line.substring(start, end);

    gaps.unshift(gap);

    end = occurrence.getEnd();

    start = 0;

    line = line.substring(start, end);

    start = occurrence.getStart();

    end = Infinity;

    const match = line.substring(start, end);

    matches.unshift(match);

    end = start;  ///

    start = 0;

    line = line.substring(start, end);  ///
  });

  const gap = line; ///

  gaps.unshift(gap);
}