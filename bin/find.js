"use strict";

const { fileSystemUtilities } = require("necessary");

const { grey, blue } = require("./utilities/log"),
      { EMPTY_STRING } = require("./constants");

const { readFile } = fileSystemUtilities;

function find(filePath, context) {
  const { rule } = context,
        content = readFile(filePath),
        lines = linesFromContent(content);

  let { totalLines } = context;

  lines.forEach((line) => {

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