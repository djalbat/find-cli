"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get addAnchors () {
        return addAnchors;
    },
    get addForwardSlashes () {
        return addForwardSlashes;
    },
    get addTrailingEscapedForwardSlash () {
        return addTrailingEscapedForwardSlash;
    },
    get addTrailingForwardSlash () {
        return addTrailingForwardSlash;
    },
    get removeAnchors () {
        return removeAnchors;
    },
    get removeDoubleQuotes () {
        return removeDoubleQuotes;
    },
    get removeForwardSlashes () {
        return removeForwardSlashes;
    },
    get removeTrailingEscapedForwardSlash () {
        return removeTrailingEscapedForwardSlash;
    },
    get removeTrailingForwardSlash () {
        return removeTrailingForwardSlash;
    }
});
const _constants = require("../constants");
function addAnchors(string) {
    return `^${string}$`;
}
function removeAnchors(string) {
    return string.replace(/(^\^|\$$)/g, _constants.EMPTY_STRING);
}
function addForwardSlashes(string) {
    return `/${string}/`;
}
function removeDoubleQuotes(string) {
    return string.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
}
function removeForwardSlashes(string) {
    return string.replace(/(^\/|\/$)/g, _constants.EMPTY_STRING);
}
function addTrailingForwardSlash(string) {
    return `${string}\/`;
}
function removeTrailingForwardSlash(string) {
    return string.replace(/(\/$)/, _constants.EMPTY_STRING);
}
function addTrailingEscapedForwardSlash(string) {
    return `${string}\\\/`;
}
function removeTrailingEscapedForwardSlash(string) {
    return string.replace(/(\\\/$)/, _constants.EMPTY_STRING);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbmNob3JzKHN0cmluZykgeyByZXR1cm4gYF4ke3N0cmluZ30kYDsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQW5jaG9ycyhzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oXlxcXnxcXCQkKS9nLCBFTVBUWV9TVFJJTkcpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3J3YXJkU2xhc2hlcyhzdHJpbmcpIHsgcmV0dXJuIGAvJHtzdHJpbmd9L2A7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURvdWJsZVF1b3RlcyhzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oXlwifFwiJCkvZywgRU1QVFlfU1RSSU5HKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9yd2FyZFNsYXNoZXMoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvKF5cXC98XFwvJCkvZywgRU1QVFlfU1RSSU5HKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2goc3RyaW5nKSB7IHJldHVybiBgJHtzdHJpbmd9XFwvYDsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdGb3J3YXJkU2xhc2goc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFxcLyQpLywgRU1QVFlfU1RSSU5HKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhaWxpbmdFc2NhcGVkRm9yd2FyZFNsYXNoKHN0cmluZykgeyByZXR1cm4gYCR7c3RyaW5nfVxcXFxcXC9gOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2goc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFxcXFxcXC8kKS8sIEVNUFRZX1NUUklORyk7IH1cbiJdLCJuYW1lcyI6WyJhZGRBbmNob3JzIiwiYWRkRm9yd2FyZFNsYXNoZXMiLCJhZGRUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2giLCJhZGRUcmFpbGluZ0ZvcndhcmRTbGFzaCIsInJlbW92ZUFuY2hvcnMiLCJyZW1vdmVEb3VibGVRdW90ZXMiLCJyZW1vdmVGb3J3YXJkU2xhc2hlcyIsInJlbW92ZVRyYWlsaW5nRXNjYXBlZEZvcndhcmRTbGFzaCIsInJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUFJQUM7ZUFBQUE7O1FBVUFDO2VBQUFBOztRQUpBQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOzs7MkJBZGE7QUFFdEIsU0FBU1IsV0FBV1MsTUFBTTtJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUVBLE9BQU8sQ0FBQyxDQUFDO0FBQUU7QUFFcEQsU0FBU0wsY0FBY0ssTUFBTTtJQUFJLE9BQU9BLE9BQU9DLE9BQU8sQ0FBQyxjQUFjQyx1QkFBWTtBQUFHO0FBRXBGLFNBQVNWLGtCQUFrQlEsTUFBTTtJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUVBLE9BQU8sQ0FBQyxDQUFDO0FBQUU7QUFFM0QsU0FBU0osbUJBQW1CSSxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLFlBQVlDLHVCQUFZO0FBQUc7QUFFdkYsU0FBU0wscUJBQXFCRyxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLGNBQWNDLHVCQUFZO0FBQUc7QUFFM0YsU0FBU1Isd0JBQXdCTSxNQUFNO0lBQUksT0FBTyxHQUFHQSxPQUFPLEVBQUUsQ0FBQztBQUFFO0FBRWpFLFNBQVNELDJCQUEyQkMsTUFBTTtJQUFJLE9BQU9BLE9BQU9DLE9BQU8sQ0FBQyxTQUFTQyx1QkFBWTtBQUFHO0FBRTVGLFNBQVNULCtCQUErQk8sTUFBTTtJQUFJLE9BQU8sR0FBR0EsT0FBTyxJQUFJLENBQUM7QUFBRTtBQUUxRSxTQUFTRixrQ0FBa0NFLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsV0FBV0MsdUJBQVk7QUFBRyJ9