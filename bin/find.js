"use strict";

const { fileSystemUtilities } = require("necessary");

const Line = require("./line");

const { readFile } = fileSystemUtilities;

function find(filePath, context) {
  const { rule, format } = context,
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

      line.setOccurrences(occurrences);

      if (!format) {
        const message = line.asMessage();

        console.log(message);
      } else {
        const { lines } = context;

        lines.push(line);
      }
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
