"use strict";

function isAnswerIgnore(answer) { return /^(?:ignore|i)$/i.test(answer); }

module.exports = {
  isAnswerIgnore
};
