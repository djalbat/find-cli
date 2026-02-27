"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ruleFromStringAnchoredAndDirectory", {
    enumerable: true,
    get: function() {
        return ruleFromStringAnchoredAndDirectory;
    }
});
const _glob = /*#__PURE__*/ _interop_require_default(require("../rule/glob"));
const _regex = /*#__PURE__*/ _interop_require_default(require("../rule/regex"));
const _string = /*#__PURE__*/ _interop_require_default(require("../rule/string"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ruleFromStringAnchoredAndDirectory(string, anchored, directory) {
    const globRule = _glob.default.fromStringAnchoredAndDirectory(string, anchored, directory), regexRule = _regex.default.fromStringAnchoredAndDirectory(string, anchored, directory), stringRule = _string.default.fromStringAnchoredAndDirectory(string, anchored, directory), rule = globRule || regexRule || stringRule;
    return rule;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEdsb2JSdWxlIGZyb20gXCIuLi9ydWxlL2dsb2JcIjtcbmltcG9ydCBSZWdleFJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVnZXhcIjtcbmltcG9ydCBTdHJpbmdSdWxlIGZyb20gXCIuLi9ydWxlL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpIHtcbiAgY29uc3QgZ2xvYlJ1bGUgPSBHbG9iUnVsZS5mcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3Rvcnkoc3RyaW5nLCBhbmNob3JlZCwgZGlyZWN0b3J5KSxcbiAgICAgICAgcmVnZXhSdWxlID0gUmVnZXhSdWxlLmZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpLFxuICAgICAgICBzdHJpbmdSdWxlID0gU3RyaW5nUnVsZS5mcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3Rvcnkoc3RyaW5nLCBhbmNob3JlZCwgZGlyZWN0b3J5KSxcbiAgICAgICAgcnVsZSA9IChnbG9iUnVsZSB8fCByZWdleFJ1bGUgfHwgc3RyaW5nUnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGU7XG59XG4iXSwibmFtZXMiOlsicnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsInN0cmluZyIsImFuY2hvcmVkIiwiZGlyZWN0b3J5IiwiZ2xvYlJ1bGUiLCJHbG9iUnVsZSIsImZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsInJlZ2V4UnVsZSIsIlJlZ2V4UnVsZSIsInN0cmluZ1J1bGUiLCJTdHJpbmdSdWxlIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7NkRBSks7OERBQ0M7K0RBQ0M7Ozs7OztBQUVoQixTQUFTQSxtQ0FBbUNDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTO0lBQzVFLE1BQU1DLFdBQVdDLGFBQVEsQ0FBQ0MsOEJBQThCLENBQUNMLFFBQVFDLFVBQVVDLFlBQ3JFSSxZQUFZQyxjQUFTLENBQUNGLDhCQUE4QixDQUFDTCxRQUFRQyxVQUFVQyxZQUN2RU0sYUFBYUMsZUFBVSxDQUFDSiw4QkFBOEIsQ0FBQ0wsUUFBUUMsVUFBVUMsWUFDekVRLE9BQVFQLFlBQVlHLGFBQWFFO0lBRXZDLE9BQU9FO0FBQ1QifQ==