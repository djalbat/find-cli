"use strict";

const { fileSystemUtilities } = require("necessary");

const Line = require("./line");

const { readFile } = fileSystemUtilities;

function find(filePath, context) {
  const { rule } = context,
        content = readFile(filePath),
        lines = linesFromContentAndFilePath(content, filePath);

  let { linesTotal } = context;

  lines.forEach((line) => {
    const occurrences = rule.find(line, filePath),
          occurrencesLength = occurrences.length;

    if (occurrencesLength > 0) {
      let { occurrencesTotal } = context;

      occurrencesTotal += occurrencesLength;

      Object.assign(context, {
        occurrencesTotal
      });

      const { lines } = context;

      lines.push(line);

      line.setOccurrences(occurrences);
    }

    linesTotal++;
  });

  Object.assign(context, {
    linesTotal
  });
}

module.exports = find;

function linesFromContentAndFilePath(content, filePath) {
  const contents = content.split(/(\r\n|\r|\n)/),
        lines = contents.map((content, index) => {
          const line = Line.fromIndexContentAndFilePath(index, content, filePath);

          return line;
        });

  return lines;
}
