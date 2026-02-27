"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default1;
    }
});
const _period = /*#__PURE__*/ _interop_require_default(require("./converter/period"));
const _default = /*#__PURE__*/ _interop_require_default(require("./converter/default"));
const _directory = /*#__PURE__*/ _interop_require_default(require("./converter/directory"));
const _alternates = /*#__PURE__*/ _interop_require_default(require("./converter/alternates"));
const _questionMark = /*#__PURE__*/ _interop_require_default(require("./converter/questionMark"));
const _characterClass = /*#__PURE__*/ _interop_require_default(require("./converter/characterClass"));
const _singleWildcard = /*#__PURE__*/ _interop_require_default(require("./converter/singleWildcard"));
const _singleDirectory = /*#__PURE__*/ _interop_require_default(require("./converter/singleDirectory"));
const _repeatedWildcard = /*#__PURE__*/ _interop_require_default(require("./converter/repeatedWildcard"));
const _escapedCharacter = /*#__PURE__*/ _interop_require_default(require("./converter/escapedCharacter"));
const _repeatedDirectories = /*#__PURE__*/ _interop_require_default(require("./converter/repeatedDirectories"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const converters = [
    _repeatedDirectories.default,
    _singleDirectory.default,
    _directory.default,
    _repeatedWildcard.default,
    _singleWildcard.default,
    _escapedCharacter.default,
    _questionMark.default,
    _period.default,
    _alternates.default,
    _characterClass.default,
    _default.default
];
const _default1 = converters;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGVyaW9kQ29udmVydGVyIGZyb20gXCIuL2NvbnZlcnRlci9wZXJpb2RcIjtcbmltcG9ydCBkZWZhdWx0Q29udmVydGVyIGZyb20gXCIuL2NvbnZlcnRlci9kZWZhdWx0XCI7XG5pbXBvcnQgZGlyZWN0b3J5Q29udmVydGVyIGZyb20gXCIuL2NvbnZlcnRlci9kaXJlY3RvcnlcIjtcbmltcG9ydCBhbHRlcm5hdGVzQ29udmVydGVyIGZyb20gXCIuL2NvbnZlcnRlci9hbHRlcm5hdGVzXCI7XG5pbXBvcnQgcXVlc3Rpb25NYXJrQ29udmVydGVyIGZyb20gXCIuL2NvbnZlcnRlci9xdWVzdGlvbk1hcmtcIjtcbmltcG9ydCBjaGFyYWN0ZXJDbGFzc0NvbnZlcnRlciBmcm9tIFwiLi9jb252ZXJ0ZXIvY2hhcmFjdGVyQ2xhc3NcIjtcbmltcG9ydCBzaW5nbGVXaWxkY2FyZENvbnZlcnRlciBmcm9tIFwiLi9jb252ZXJ0ZXIvc2luZ2xlV2lsZGNhcmRcIjtcbmltcG9ydCBzaW5nbGVEaXJlY3RvcnlDb252ZXJ0ZXIgZnJvbSBcIi4vY29udmVydGVyL3NpbmdsZURpcmVjdG9yeVwiO1xuaW1wb3J0IHJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIgZnJvbSBcIi4vY29udmVydGVyL3JlcGVhdGVkV2lsZGNhcmRcIjtcbmltcG9ydCBlc2NhcGVkQ2hhcmFjdGVyQ29udmVydGVyIGZyb20gXCIuL2NvbnZlcnRlci9lc2NhcGVkQ2hhcmFjdGVyXCI7XG5pbXBvcnQgcmVwZWF0ZWREaXJlY3Rvcmllc0NvbnZlcnRlciBmcm9tIFwiLi9jb252ZXJ0ZXIvcmVwZWF0ZWREaXJlY3Rvcmllc1wiO1xuXG5jb25zdCBjb252ZXJ0ZXJzID0gW1xuICByZXBlYXRlZERpcmVjdG9yaWVzQ29udmVydGVyLFxuICBzaW5nbGVEaXJlY3RvcnlDb252ZXJ0ZXIsXG4gIGRpcmVjdG9yeUNvbnZlcnRlcixcbiAgcmVwZWF0ZWRXaWxkY2FyZENvbnZlcnRlcixcbiAgc2luZ2xlV2lsZGNhcmRDb252ZXJ0ZXIsXG4gIGVzY2FwZWRDaGFyYWN0ZXJDb252ZXJ0ZXIsXG4gIHF1ZXN0aW9uTWFya0NvbnZlcnRlcixcbiAgcGVyaW9kQ29udmVydGVyLFxuICBhbHRlcm5hdGVzQ29udmVydGVyLFxuICBjaGFyYWN0ZXJDbGFzc0NvbnZlcnRlcixcbiAgZGVmYXVsdENvbnZlcnRlclxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydGVycztcbiJdLCJuYW1lcyI6WyJjb252ZXJ0ZXJzIiwicmVwZWF0ZWREaXJlY3Rvcmllc0NvbnZlcnRlciIsInNpbmdsZURpcmVjdG9yeUNvbnZlcnRlciIsImRpcmVjdG9yeUNvbnZlcnRlciIsInJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIiLCJzaW5nbGVXaWxkY2FyZENvbnZlcnRlciIsImVzY2FwZWRDaGFyYWN0ZXJDb252ZXJ0ZXIiLCJxdWVzdGlvbk1hcmtDb252ZXJ0ZXIiLCJwZXJpb2RDb252ZXJ0ZXIiLCJhbHRlcm5hdGVzQ29udmVydGVyIiwiY2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXIiLCJkZWZhdWx0Q29udmVydGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0QkE7OztlQUFBOzs7K0RBMUI0QjtnRUFDQztrRUFDRTttRUFDQztxRUFDRTt1RUFDRTt1RUFDQTt3RUFDQzt5RUFDQzt5RUFDQTs0RUFDRzs7Ozs7O0FBRXpDLE1BQU1BLGFBQWE7SUFDakJDLDRCQUE0QjtJQUM1QkMsd0JBQXdCO0lBQ3hCQyxrQkFBa0I7SUFDbEJDLHlCQUF5QjtJQUN6QkMsdUJBQXVCO0lBQ3ZCQyx5QkFBeUI7SUFDekJDLHFCQUFxQjtJQUNyQkMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLHVCQUF1QjtJQUN2QkMsZ0JBQWdCO0NBQ2pCO01BRUQsWUFBZVgifQ==