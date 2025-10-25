"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GlobRule;
    }
});
var _converters = /*#__PURE__*/ _interop_require_default(require("../converters"));
var _occurrence = /*#__PURE__*/ _interop_require_default(require("../occurrence"));
var _types = require("../types");
var _constants = require("../constants");
var _literal = require("../utilities/literal");
var _string = require("../utilities/string");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                    var occurrence = _occurrence.default.fromResultAndOffset(result, offset), end = occurrence.getEnd(), start = end; ///
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
                if (type === _types.GLOB_TYPE) {
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
                    var type = _types.GLOB_TYPE, pattern = patternFromGlobAndAnchored(glob, anchored), regExp = new RegExp(pattern);
                    globRule = new GlobRule(type, glob, pattern, regExp);
                }
                return globRule;
            }
        }
    ]);
    return GlobRule;
}();
function patternFromGlobAndAnchored(glob, anchored) {
    var pattern = _constants.EMPTY_STRING;
    var characters = _to_consumable_array(glob);
    for(;;){
        var converted = _converters.default.some(function(converter) {
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
        pattern = (0, _string.addAnchors)(pattern);
    }
    return pattern;
}
function globFromStringAndDirectory(string, directory) {
    var glob;
    var stringGlobLiteral = (0, _literal.isStringGlobLiteral)(string);
    if (stringGlobLiteral) {
        var globLiteral = string; ///
        glob = globLiteral; ///
        glob = (0, _string.removeTrailingForwardSlash)(glob); ///
        if (directory) {
            glob = (0, _string.addTrailingForwardSlash)(glob); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2dsb2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjb252ZXJ0ZXJzIGZyb20gXCIuLi9jb252ZXJ0ZXJzXCI7XG5pbXBvcnQgT2NjdXJyZW5jZSBmcm9tIFwiLi4vb2NjdXJyZW5jZVwiO1xuXG5pbXBvcnQgeyBHTE9CX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzU3RyaW5nR2xvYkxpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xpdGVyYWxcIjtcbmltcG9ydCB7IGFkZEFuY2hvcnMsIGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoLCByZW1vdmVUcmFpbGluZ0ZvcndhcmRTbGFzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgZ2xvYiwgcGF0dGVybiwgcmVnRXhwKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdsb2IgPSBnbG9iO1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRHbG9iKCkge1xuICAgIHJldHVybiB0aGlzLmdsb2I7XG4gIH1cblxuICBnZXRQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gIH1cblxuICBnZXRSZWdFeHAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnRXhwO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUsXG4gICAgICAgICAgZ2xvYiA9IHRoaXMuZ2xvYixcbiAgICAgICAgICBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZ2xvYixcbiAgICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBmaW5kKGxpbmUpIHtcbiAgICBjb25zdCBvY2N1cnJlbmNlcyA9IFtdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmdldENvbnRlbnQoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgcmVzdWx0ID0gc3RyaW5nLm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgIHdoaWxlIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG9jY3VycmVuY2UgPSBPY2N1cnJlbmNlLmZyb21SZXN1bHRBbmRPZmZzZXQocmVzdWx0LCBvZmZzZXQpLFxuICAgICAgICAgICAgZW5kID0gb2NjdXJyZW5jZS5nZXRFbmQoKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZW5kOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQpOyAvLy9cblxuICAgICAgb2Zmc2V0ICs9IHN0YXJ0O1xuXG4gICAgICBvY2N1cnJlbmNlcy5wdXNoKG9jY3VycmVuY2UpO1xuXG4gICAgICByZXN1bHQgPSBzdHJpbmcubWF0Y2godGhpcy5yZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiBvY2N1cnJlbmNlcztcbiAgfVxuXG4gIG1hdGNoKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC50ZXN0KHN0cmluZyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyhydWxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVUeXBlID0gcnVsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAocnVsZVR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgY29uc3QgcnVsZUdsb2IgPSBydWxlLmdldEdsb2IoKTtcblxuICAgICAgaWYgKHJ1bGVHbG9iID09PSB0aGlzLmdsb2IpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdsb2I7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGdsb2JSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBHTE9CX1RZUEUpIHtcbiAgICAgIGNvbnN0IHsgZ2xvYiwgcGF0dGVybiB9ID0ganNvbixcbiAgICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIGdsb2JSdWxlID0gbmV3IEdsb2JSdWxlKHR5cGUsIGdsb2IsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpIHtcbiAgICBsZXQgZ2xvYlJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZ2xvYiA9IGdsb2JGcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgZGlyZWN0b3J5KTtcblxuICAgIGlmIChnbG9iICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gR0xPQl9UWVBFLFxuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKSxcbiAgICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIGdsb2JSdWxlID0gbmV3IEdsb2JSdWxlKHR5cGUsIGdsb2IsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKSB7XG4gIGxldCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBbIC4uLmdsb2IgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgY29udmVydGVkID0gY29udmVydGVycy5zb21lKChjb252ZXJ0ZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnZlcnRlci5tYXRjaChjaGFyYWN0ZXJzKTtcblxuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBwYXR0ZXJuID0gYCR7cGF0dGVybn0ke3Jlc3VsdH1gO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFjb252ZXJ0ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhbmNob3JlZCkge1xuICAgIHBhdHRlcm4gPSBhZGRBbmNob3JzKHBhdHRlcm4pO1xuICB9XG5cbiAgcmV0dXJuIHBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIGdsb2JGcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgZGlyZWN0b3J5KSB7XG4gIGxldCBnbG9iO1xuXG4gIGNvbnN0IHN0cmluZ0dsb2JMaXRlcmFsID0gaXNTdHJpbmdHbG9iTGl0ZXJhbChzdHJpbmcpO1xuXG4gIGlmIChzdHJpbmdHbG9iTGl0ZXJhbCkge1xuICAgIGNvbnN0IGdsb2JMaXRlcmFsID0gc3RyaW5nOyAvLy9cblxuICAgIGdsb2IgPSBnbG9iTGl0ZXJhbDsgIC8vL1xuXG4gICAgZ2xvYiA9IHJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoKGdsb2IpOyAgLy8vXG5cbiAgICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgICBnbG9iID0gYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2goZ2xvYik7IC8vL1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbmNob3JlZCA9IGZhbHNlLFxuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKTtcblxuICAgICAgbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZ2xvYiA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGdsb2IgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGdsb2I7XG59XG4iXSwibmFtZXMiOlsiR2xvYlJ1bGUiLCJ0eXBlIiwiZ2xvYiIsInBhdHRlcm4iLCJyZWdFeHAiLCJnZXRUeXBlIiwiZ2V0R2xvYiIsImdldFBhdHRlcm4iLCJnZXRSZWdFeHAiLCJ0b0pTT04iLCJqc29uIiwiZmluZCIsImxpbmUiLCJvY2N1cnJlbmNlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwib2Zmc2V0Iiwic3RyaW5nIiwicmVzdWx0IiwibWF0Y2giLCJvY2N1cnJlbmNlIiwiT2NjdXJyZW5jZSIsImZyb21SZXN1bHRBbmRPZmZzZXQiLCJlbmQiLCJnZXRFbmQiLCJzdGFydCIsInN1YnN0cmluZyIsInB1c2giLCJtYXRjaGVzIiwidGVzdCIsImlzRXF1YWxUbyIsInJ1bGUiLCJlcXVhbFRvIiwicnVsZVR5cGUiLCJydWxlR2xvYiIsImFzU3RyaW5nIiwiZnJvbUpTT04iLCJnbG9iUnVsZSIsIkdMT0JfVFlQRSIsIlJlZ0V4cCIsImZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsImFuY2hvcmVkIiwiZGlyZWN0b3J5IiwiZ2xvYkZyb21TdHJpbmdBbmREaXJlY3RvcnkiLCJwYXR0ZXJuRnJvbUdsb2JBbmRBbmNob3JlZCIsIkVNUFRZX1NUUklORyIsImNoYXJhY3RlcnMiLCJjb252ZXJ0ZWQiLCJjb252ZXJ0ZXJzIiwic29tZSIsImNvbnZlcnRlciIsImFkZEFuY2hvcnMiLCJzdHJpbmdHbG9iTGl0ZXJhbCIsImlzU3RyaW5nR2xvYkxpdGVyYWwiLCJnbG9iTGl0ZXJhbCIsInJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoIiwiYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2giLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7aUVBUkU7aUVBQ0E7cUJBRUc7eUJBQ0c7dUJBQ087c0JBQzRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFBLEFBQU1BLHlCQUFOO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE1BQU07Z0NBRHBCSjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUxHSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLFVBQVUsSUFBSSxDQUFDQSxPQUFPLEVBQ3RCTyxPQUFPO29CQUNMVCxNQUFBQTtvQkFDQUMsTUFBQUE7b0JBQ0FDLFNBQUFBO2dCQUNGO2dCQUVOLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsSUFBSTtnQkFDUCxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLFVBQVVGLEtBQUtHLFVBQVU7Z0JBRS9CLElBQUlDLFNBQVMsR0FDVEMsU0FBU0gsU0FDVEksU0FBU0QsT0FBT0UsS0FBSyxDQUFDLElBQUksQ0FBQ2YsTUFBTTtnQkFFckMsTUFBT2MsV0FBVyxLQUFNO29CQUN0QixJQUFNRSxhQUFhQyxtQkFBVSxDQUFDQyxtQkFBbUIsQ0FBQ0osUUFBUUYsU0FDcERPLE1BQU1ILFdBQVdJLE1BQU0sSUFDdkJDLFFBQVFGLEtBQU0sR0FBRztvQkFFdkJOLFNBQVNBLE9BQU9TLFNBQVMsQ0FBQ0QsUUFBUSxHQUFHO29CQUVyQ1QsVUFBVVM7b0JBRVZaLFlBQVljLElBQUksQ0FBQ1A7b0JBRWpCRixTQUFTRCxPQUFPRSxLQUFLLENBQUMsSUFBSSxDQUFDZixNQUFNO2dCQUNuQztnQkFFQSxPQUFPUztZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLE1BQU07Z0JBQ1YsSUFBTVcsVUFBVSxJQUFJLENBQUN4QixNQUFNLENBQUN5QixJQUFJLENBQUNaO2dCQUVqQyxPQUFPVztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUk7Z0JBQ1osSUFBSUMsVUFBVTtnQkFFZCxJQUFNQyxXQUFXRixLQUFLMUIsT0FBTztnQkFFN0IsSUFBSTRCLGFBQWEsSUFBSSxDQUFDaEMsSUFBSSxFQUFFO29CQUMxQixJQUFNaUMsV0FBV0gsS0FBS3pCLE9BQU87b0JBRTdCLElBQUk0QixhQUFhLElBQUksQ0FBQ2hDLElBQUksRUFBRTt3QkFDMUI4QixVQUFVO29CQUNaO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWxCLFNBQVMsSUFBSSxDQUFDZixJQUFJLEVBQUUsR0FBRztnQkFFN0IsT0FBT2U7WUFDVDs7OztZQUVPbUIsS0FBQUE7bUJBQVAsU0FBT0EsU0FBUzFCLElBQUk7Z0JBQ2xCLElBQUkyQixXQUFXO2dCQUVmLElBQU0sQUFBRXBDLE9BQVNTLEtBQVRUO2dCQUVSLElBQUlBLFNBQVNxQyxnQkFBUyxFQUFFO29CQUN0QixJQUFRcEMsT0FBa0JRLEtBQWxCUixNQUFNQyxVQUFZTyxLQUFaUCxTQUNSQyxTQUFTLElBQUltQyxPQUFPcEM7b0JBRTFCa0MsV0FBVyxJQW5HSXJDLFNBbUdTQyxNQUFNQyxNQUFNQyxTQUFTQztnQkFDL0M7Z0JBRUEsT0FBT2lDO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0J2QixNQUFNLEVBQUV3QixRQUFRLEVBQUVDLFNBQVM7Z0JBQy9ELElBQUlMLFdBQVc7Z0JBRWYsSUFBTW5DLE9BQU95QywyQkFBMkIxQixRQUFReUI7Z0JBRWhELElBQUl4QyxTQUFTLE1BQU07b0JBQ2pCLElBQU1ELE9BQU9xQyxnQkFBUyxFQUNoQm5DLFVBQVV5QywyQkFBMkIxQyxNQUFNdUMsV0FDM0NyQyxTQUFTLElBQUltQyxPQUFPcEM7b0JBRTFCa0MsV0FBVyxJQW5ISXJDLFNBbUhTQyxNQUFNQyxNQUFNQyxTQUFTQztnQkFDL0M7Z0JBRUEsT0FBT2lDO1lBQ1Q7OztXQXZIbUJyQzs7QUEwSHJCLFNBQVM0QywyQkFBMkIxQyxJQUFJLEVBQUV1QyxRQUFRO0lBQ2hELElBQUl0QyxVQUFVMEMsdUJBQVk7SUFFMUIsSUFBTUMsYUFBZSxxQkFBRzVDO0lBRXhCLE9BQVM7UUFDUCxJQUFNNkMsWUFBWUMsbUJBQVUsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDO1lBQ2pDLElBQU1oQyxTQUFTZ0MsVUFBVS9CLEtBQUssQ0FBQzJCO1lBRS9CLElBQUk1QixXQUFXLE1BQU07Z0JBQ25CZixVQUFVLEFBQUMsR0FBWWUsT0FBVmYsU0FBaUIsT0FBUGU7Z0JBRXZCLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSSxDQUFDNkIsV0FBVztZQUNkO1FBQ0Y7SUFDRjtJQUVBLElBQUlOLFVBQVU7UUFDWnRDLFVBQVVnRCxJQUFBQSxrQkFBVSxFQUFDaEQ7SUFDdkI7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU3dDLDJCQUEyQjFCLE1BQU0sRUFBRXlCLFNBQVM7SUFDbkQsSUFBSXhDO0lBRUosSUFBTWtELG9CQUFvQkMsSUFBQUEsNEJBQW1CLEVBQUNwQztJQUU5QyxJQUFJbUMsbUJBQW1CO1FBQ3JCLElBQU1FLGNBQWNyQyxRQUFRLEdBQUc7UUFFL0JmLE9BQU9vRCxhQUFjLEdBQUc7UUFFeEJwRCxPQUFPcUQsSUFBQUEsa0NBQTBCLEVBQUNyRCxPQUFRLEdBQUc7UUFFN0MsSUFBSXdDLFdBQVc7WUFDYnhDLE9BQU9zRCxJQUFBQSwrQkFBdUIsRUFBQ3RELE9BQU8sR0FBRztRQUMzQztRQUVBLElBQUk7WUFDRixJQUFNdUMsV0FBVyxPQUNYdEMsVUFBVXlDLDJCQUEyQjFDLE1BQU11QztZQUVqRCxJQUFJRixPQUFPcEM7UUFDYixFQUFFLE9BQU9zRCxPQUFPO1lBQ2R2RCxPQUFPO1FBQ1Q7SUFDRixPQUFPO1FBQ0xBLE9BQU87SUFDVDtJQUVBLE9BQU9BO0FBQ1QifQ==