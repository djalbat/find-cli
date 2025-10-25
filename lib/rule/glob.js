"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import converters from "../converters";
import Occurrence from "../occurrence";
import { GLOB_TYPE } from "../types";
import { EMPTY_STRING } from "../constants";
import { isStringGlobLiteral } from "../utilities/literal";
import { addAnchors, addTrailingForwardSlash, removeTrailingForwardSlash } from "../utilities/string";
var GlobRule = /*#__PURE__*/ function() {
    function GlobRule(type, glob, pattern, regExp) {
        _class_call_check(this, GlobRule);
        this.type = type;
        this.glob = glob;
        this.pattern = pattern;
        this.regExp = regExp;
    }
    _create_class(GlobRule, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getGlob",
            value: function getGlob() {
                return this.glob;
            }
        },
        {
            key: "getPattern",
            value: function getPattern() {
                return this.pattern;
            }
        },
        {
            key: "getRegExp",
            value: function getRegExp() {
                return this.regExp;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var type = this.type, glob = this.glob, pattern = this.pattern, json = {
                    type: type,
                    glob: glob,
                    pattern: pattern
                };
                return json;
            }
        },
        {
            key: "find",
            value: function find(line) {
                var occurrences = [], content = line.getContent();
                var offset = 0, string = content, result = string.match(this.regExp);
                while(result !== null){
                    var occurrence = Occurrence.fromResultAndOffset(result, offset), end = occurrence.getEnd(), start = end; ///
                    string = string.substring(start); ///
                    offset += start;
                    occurrences.push(occurrence);
                    result = string.match(this.regExp);
                }
                return occurrences;
            }
        },
        {
            key: "match",
            value: function match(string) {
                var matches = this.regExp.test(string);
                return matches;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(rule) {
                var equalTo = false;
                var ruleType = rule.getType();
                if (ruleType === this.type) {
                    var ruleGlob = rule.getGlob();
                    if (ruleGlob === this.glob) {
                        equalTo = true;
                    }
                }
                return equalTo;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = this.glob; ///
                return string;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var globRule = null;
                var type = json.type;
                if (type === GLOB_TYPE) {
                    var glob = json.glob, pattern = json.pattern, regExp = new RegExp(pattern);
                    globRule = new GlobRule(type, glob, pattern, regExp);
                }
                return globRule;
            }
        },
        {
            key: "fromStringAnchoredAndDirectory",
            value: function fromStringAnchoredAndDirectory(string, anchored, directory) {
                var globRule = null;
                var glob = globFromStringAndDirectory(string, directory);
                if (glob !== null) {
                    var type = GLOB_TYPE, pattern = patternFromGlobAndAnchored(glob, anchored), regExp = new RegExp(pattern);
                    globRule = new GlobRule(type, glob, pattern, regExp);
                }
                return globRule;
            }
        }
    ]);
    return GlobRule;
}();
export { GlobRule as default };
function patternFromGlobAndAnchored(glob, anchored) {
    var pattern = EMPTY_STRING;
    var characters = _to_consumable_array(glob);
    for(;;){
        var converted = converters.some(function(converter) {
            var result = converter.match(characters);
            if (result !== null) {
                pattern = "".concat(pattern).concat(result);
                return true;
            }
        });
        if (!converted) {
            break;
        }
    }
    if (anchored) {
        pattern = addAnchors(pattern);
    }
    return pattern;
}
function globFromStringAndDirectory(string, directory) {
    var glob;
    var stringGlobLiteral = isStringGlobLiteral(string);
    if (stringGlobLiteral) {
        var globLiteral = string; ///
        glob = globLiteral; ///
        glob = removeTrailingForwardSlash(glob); ///
        if (directory) {
            glob = addTrailingForwardSlash(glob); ///
        }
        try {
            var anchored = false, pattern = patternFromGlobAndAnchored(glob, anchored);
            new RegExp(pattern);
        } catch (error) {
            glob = null;
        }
    } else {
        glob = null;
    }
    return glob;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2dsb2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjb252ZXJ0ZXJzIGZyb20gXCIuLi9jb252ZXJ0ZXJzXCI7XG5pbXBvcnQgT2NjdXJyZW5jZSBmcm9tIFwiLi4vb2NjdXJyZW5jZVwiO1xuXG5pbXBvcnQgeyBHTE9CX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzU3RyaW5nR2xvYkxpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xpdGVyYWxcIjtcbmltcG9ydCB7IGFkZEFuY2hvcnMsIGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoLCByZW1vdmVUcmFpbGluZ0ZvcndhcmRTbGFzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgZ2xvYiwgcGF0dGVybiwgcmVnRXhwKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdsb2IgPSBnbG9iO1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRHbG9iKCkge1xuICAgIHJldHVybiB0aGlzLmdsb2I7XG4gIH1cblxuICBnZXRQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gIH1cblxuICBnZXRSZWdFeHAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnRXhwO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUsXG4gICAgICAgICAgZ2xvYiA9IHRoaXMuZ2xvYixcbiAgICAgICAgICBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZ2xvYixcbiAgICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBmaW5kKGxpbmUpIHtcbiAgICBjb25zdCBvY2N1cnJlbmNlcyA9IFtdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmdldENvbnRlbnQoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgcmVzdWx0ID0gc3RyaW5nLm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgIHdoaWxlIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG9jY3VycmVuY2UgPSBPY2N1cnJlbmNlLmZyb21SZXN1bHRBbmRPZmZzZXQocmVzdWx0LCBvZmZzZXQpLFxuICAgICAgICAgICAgZW5kID0gb2NjdXJyZW5jZS5nZXRFbmQoKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZW5kOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQpOyAvLy9cblxuICAgICAgb2Zmc2V0ICs9IHN0YXJ0O1xuXG4gICAgICBvY2N1cnJlbmNlcy5wdXNoKG9jY3VycmVuY2UpO1xuXG4gICAgICByZXN1bHQgPSBzdHJpbmcubWF0Y2godGhpcy5yZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiBvY2N1cnJlbmNlcztcbiAgfVxuXG4gIG1hdGNoKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC50ZXN0KHN0cmluZyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyhydWxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVUeXBlID0gcnVsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAocnVsZVR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgY29uc3QgcnVsZUdsb2IgPSBydWxlLmdldEdsb2IoKTtcblxuICAgICAgaWYgKHJ1bGVHbG9iID09PSB0aGlzLmdsb2IpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdsb2I7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGdsb2JSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBHTE9CX1RZUEUpIHtcbiAgICAgIGNvbnN0IHsgZ2xvYiwgcGF0dGVybiB9ID0ganNvbixcbiAgICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIGdsb2JSdWxlID0gbmV3IEdsb2JSdWxlKHR5cGUsIGdsb2IsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpIHtcbiAgICBsZXQgZ2xvYlJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZ2xvYiA9IGdsb2JGcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgZGlyZWN0b3J5KTtcblxuICAgIGlmIChnbG9iICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gR0xPQl9UWVBFLFxuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKSxcbiAgICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIGdsb2JSdWxlID0gbmV3IEdsb2JSdWxlKHR5cGUsIGdsb2IsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKSB7XG4gIGxldCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBbIC4uLmdsb2IgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgY29udmVydGVkID0gY29udmVydGVycy5zb21lKChjb252ZXJ0ZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnZlcnRlci5tYXRjaChjaGFyYWN0ZXJzKTtcblxuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBwYXR0ZXJuID0gYCR7cGF0dGVybn0ke3Jlc3VsdH1gO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFjb252ZXJ0ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhbmNob3JlZCkge1xuICAgIHBhdHRlcm4gPSBhZGRBbmNob3JzKHBhdHRlcm4pO1xuICB9XG5cbiAgcmV0dXJuIHBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIGdsb2JGcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgZGlyZWN0b3J5KSB7XG4gIGxldCBnbG9iO1xuXG4gIGNvbnN0IHN0cmluZ0dsb2JMaXRlcmFsID0gaXNTdHJpbmdHbG9iTGl0ZXJhbChzdHJpbmcpO1xuXG4gIGlmIChzdHJpbmdHbG9iTGl0ZXJhbCkge1xuICAgIGNvbnN0IGdsb2JMaXRlcmFsID0gc3RyaW5nOyAvLy9cblxuICAgIGdsb2IgPSBnbG9iTGl0ZXJhbDsgIC8vL1xuXG4gICAgZ2xvYiA9IHJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoKGdsb2IpOyAgLy8vXG5cbiAgICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgICBnbG9iID0gYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2goZ2xvYik7IC8vL1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbmNob3JlZCA9IGZhbHNlLFxuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKTtcblxuICAgICAgbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZ2xvYiA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGdsb2IgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGdsb2I7XG59XG4iXSwibmFtZXMiOlsiY29udmVydGVycyIsIk9jY3VycmVuY2UiLCJHTE9CX1RZUEUiLCJFTVBUWV9TVFJJTkciLCJpc1N0cmluZ0dsb2JMaXRlcmFsIiwiYWRkQW5jaG9ycyIsImFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoIiwicmVtb3ZlVHJhaWxpbmdGb3J3YXJkU2xhc2giLCJHbG9iUnVsZSIsInR5cGUiLCJnbG9iIiwicGF0dGVybiIsInJlZ0V4cCIsImdldFR5cGUiLCJnZXRHbG9iIiwiZ2V0UGF0dGVybiIsImdldFJlZ0V4cCIsInRvSlNPTiIsImpzb24iLCJmaW5kIiwibGluZSIsIm9jY3VycmVuY2VzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJvZmZzZXQiLCJzdHJpbmciLCJyZXN1bHQiLCJtYXRjaCIsIm9jY3VycmVuY2UiLCJmcm9tUmVzdWx0QW5kT2Zmc2V0IiwiZW5kIiwiZ2V0RW5kIiwic3RhcnQiLCJzdWJzdHJpbmciLCJwdXNoIiwibWF0Y2hlcyIsInRlc3QiLCJpc0VxdWFsVG8iLCJydWxlIiwiZXF1YWxUbyIsInJ1bGVUeXBlIiwicnVsZUdsb2IiLCJhc1N0cmluZyIsImZyb21KU09OIiwiZ2xvYlJ1bGUiLCJSZWdFeHAiLCJmcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkiLCJhbmNob3JlZCIsImRpcmVjdG9yeSIsImdsb2JGcm9tU3RyaW5nQW5kRGlyZWN0b3J5IiwicGF0dGVybkZyb21HbG9iQW5kQW5jaG9yZWQiLCJjaGFyYWN0ZXJzIiwiY29udmVydGVkIiwic29tZSIsImNvbnZlcnRlciIsInN0cmluZ0dsb2JMaXRlcmFsIiwiZ2xvYkxpdGVyYWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLGdCQUFnQixnQkFBZ0I7QUFDdkMsT0FBT0MsZ0JBQWdCLGdCQUFnQjtBQUV2QyxTQUFTQyxTQUFTLFFBQVEsV0FBVztBQUNyQyxTQUFTQyxZQUFZLFFBQVEsZUFBZTtBQUM1QyxTQUFTQyxtQkFBbUIsUUFBUSx1QkFBdUI7QUFDM0QsU0FBU0MsVUFBVSxFQUFFQyx1QkFBdUIsRUFBRUMsMEJBQTBCLFFBQVEsc0JBQXNCO0FBRXZGLElBQUEsQUFBTUMseUJBQU47YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsTUFBTTtnQ0FEcEJKO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBTEdKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsVUFBVSxJQUFJLENBQUNBLE9BQU8sRUFDdEJPLE9BQU87b0JBQ0xULE1BQUFBO29CQUNBQyxNQUFBQTtvQkFDQUMsU0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxJQUFJO2dCQUNQLElBQU1DLGNBQWMsRUFBRSxFQUNoQkMsVUFBVUYsS0FBS0csVUFBVTtnQkFFL0IsSUFBSUMsU0FBUyxHQUNUQyxTQUFTSCxTQUNUSSxTQUFTRCxPQUFPRSxLQUFLLENBQUMsSUFBSSxDQUFDZixNQUFNO2dCQUVyQyxNQUFPYyxXQUFXLEtBQU07b0JBQ3RCLElBQU1FLGFBQWEzQixXQUFXNEIsbUJBQW1CLENBQUNILFFBQVFGLFNBQ3BETSxNQUFNRixXQUFXRyxNQUFNLElBQ3ZCQyxRQUFRRixLQUFNLEdBQUc7b0JBRXZCTCxTQUFTQSxPQUFPUSxTQUFTLENBQUNELFFBQVEsR0FBRztvQkFFckNSLFVBQVVRO29CQUVWWCxZQUFZYSxJQUFJLENBQUNOO29CQUVqQkYsU0FBU0QsT0FBT0UsS0FBSyxDQUFDLElBQUksQ0FBQ2YsTUFBTTtnQkFDbkM7Z0JBRUEsT0FBT1M7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNRixNQUFNO2dCQUNWLElBQU1VLFVBQVUsSUFBSSxDQUFDdkIsTUFBTSxDQUFDd0IsSUFBSSxDQUFDWDtnQkFFakMsT0FBT1U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJO2dCQUNaLElBQUlDLFVBQVU7Z0JBRWQsSUFBTUMsV0FBV0YsS0FBS3pCLE9BQU87Z0JBRTdCLElBQUkyQixhQUFhLElBQUksQ0FBQy9CLElBQUksRUFBRTtvQkFDMUIsSUFBTWdDLFdBQVdILEtBQUt4QixPQUFPO29CQUU3QixJQUFJMkIsYUFBYSxJQUFJLENBQUMvQixJQUFJLEVBQUU7d0JBQzFCNkIsVUFBVTtvQkFDWjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1qQixTQUFTLElBQUksQ0FBQ2YsSUFBSSxFQUFFLEdBQUc7Z0JBRTdCLE9BQU9lO1lBQ1Q7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLFNBQVN6QixJQUFJO2dCQUNsQixJQUFJMEIsV0FBVztnQkFFZixJQUFNLEFBQUVuQyxPQUFTUyxLQUFUVDtnQkFFUixJQUFJQSxTQUFTUCxXQUFXO29CQUN0QixJQUFRUSxPQUFrQlEsS0FBbEJSLE1BQU1DLFVBQVlPLEtBQVpQLFNBQ1JDLFNBQVMsSUFBSWlDLE9BQU9sQztvQkFFMUJpQyxXQUFXLElBbkdJcEMsU0FtR1NDLE1BQU1DLE1BQU1DLFNBQVNDO2dCQUMvQztnQkFFQSxPQUFPZ0M7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQnJCLE1BQU0sRUFBRXNCLFFBQVEsRUFBRUMsU0FBUztnQkFDL0QsSUFBSUosV0FBVztnQkFFZixJQUFNbEMsT0FBT3VDLDJCQUEyQnhCLFFBQVF1QjtnQkFFaEQsSUFBSXRDLFNBQVMsTUFBTTtvQkFDakIsSUFBTUQsT0FBT1AsV0FDUFMsVUFBVXVDLDJCQUEyQnhDLE1BQU1xQyxXQUMzQ25DLFNBQVMsSUFBSWlDLE9BQU9sQztvQkFFMUJpQyxXQUFXLElBbkhJcEMsU0FtSFNDLE1BQU1DLE1BQU1DLFNBQVNDO2dCQUMvQztnQkFFQSxPQUFPZ0M7WUFDVDs7O1dBdkhtQnBDOztBQUFyQixTQUFxQkEsc0JBd0hwQjtBQUVELFNBQVMwQywyQkFBMkJ4QyxJQUFJLEVBQUVxQyxRQUFRO0lBQ2hELElBQUlwQyxVQUFVUjtJQUVkLElBQU1nRCxhQUFlLHFCQUFHekM7SUFFeEIsT0FBUztRQUNQLElBQU0wQyxZQUFZcEQsV0FBV3FELElBQUksQ0FBQyxTQUFDQztZQUNqQyxJQUFNNUIsU0FBUzRCLFVBQVUzQixLQUFLLENBQUN3QjtZQUUvQixJQUFJekIsV0FBVyxNQUFNO2dCQUNuQmYsVUFBVSxBQUFDLEdBQVllLE9BQVZmLFNBQWlCLE9BQVBlO2dCQUV2QixPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUksQ0FBQzBCLFdBQVc7WUFDZDtRQUNGO0lBQ0Y7SUFFQSxJQUFJTCxVQUFVO1FBQ1pwQyxVQUFVTixXQUFXTTtJQUN2QjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTc0MsMkJBQTJCeEIsTUFBTSxFQUFFdUIsU0FBUztJQUNuRCxJQUFJdEM7SUFFSixJQUFNNkMsb0JBQW9CbkQsb0JBQW9CcUI7SUFFOUMsSUFBSThCLG1CQUFtQjtRQUNyQixJQUFNQyxjQUFjL0IsUUFBUSxHQUFHO1FBRS9CZixPQUFPOEMsYUFBYyxHQUFHO1FBRXhCOUMsT0FBT0gsMkJBQTJCRyxPQUFRLEdBQUc7UUFFN0MsSUFBSXNDLFdBQVc7WUFDYnRDLE9BQU9KLHdCQUF3QkksT0FBTyxHQUFHO1FBQzNDO1FBRUEsSUFBSTtZQUNGLElBQU1xQyxXQUFXLE9BQ1hwQyxVQUFVdUMsMkJBQTJCeEMsTUFBTXFDO1lBRWpELElBQUlGLE9BQU9sQztRQUNiLEVBQUUsT0FBTzhDLE9BQU87WUFDZC9DLE9BQU87UUFDVDtJQUNGLE9BQU87UUFDTEEsT0FBTztJQUNUO0lBRUEsT0FBT0E7QUFDVCJ9