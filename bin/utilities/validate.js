"use strict";

function validateIgnoreOrPermit(answer) { return /^(:?ignore|permit|i|p)$/i.test(answer); }

module.exports = {
  validateIgnoreOrPermit
};
