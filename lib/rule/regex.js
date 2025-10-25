"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegexRule;
    }
});
var _occurrence = /*#__PURE__*/ _interop_require_default(require("../occurrence"));
var _types = require("../types");
var _literal = require("../utilities/literal");
var _string = require("../utilities/string");
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
var RegexRule = /*#__PURE__*/ function() {
    function RegexRule(type, pattern, regExp) {
        _class_call_check(this, RegexRule);
        this.type = type;
        this.pattern = pattern;
        this.regExp = regExp;
    }
    _create_class(RegexRule, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
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
                var type = this.type, pattern = this.pattern, json = {
                    type: type,
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
                    var rulePattern = rule.getPattern();
                    if (rulePattern === this.pattern) {
                        equalTo = true;
                    }
                }
                return equalTo;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = (0, _string.addForwardSlashes)(this.pattern); ///
                return string;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var regexRule = null;
                var type = json.type;
                if (type === _types.REGEX_TYPE) {
                    var pattern = json.pattern, regExp = new RegExp(pattern);
                    regexRule = new RegexRule(type, pattern, regExp);
                }
                return regexRule;
            }
        },
        {
            key: "fromStringAnchoredAndDirectory",
            value: function fromStringAnchoredAndDirectory(string, anchored, directory) {
                var regexRule = null;
                var pattern = patternFromStringAndDirectory(string, anchored, directory);
                if (pattern !== null) {
                    var type = _types.REGEX_TYPE, regExp = new RegExp(pattern);
                    regexRule = new RegexRule(type, pattern, regExp);
                }
                return regexRule;
            }
        }
    ]);
    return RegexRule;
}();
function patternFromStringAndDirectory(string, anchored, directory) {
    var pattern;
    var stringRegexLiteral = (0, _literal.isStringRegexLiteral)(string);
    if (stringRegexLiteral) {
        var regexLiteral = string; ///
        pattern = (0, _string.removeForwardSlashes)(regexLiteral);
        pattern = (0, _string.removeAnchors)(pattern); ///
        pattern = (0, _string.removeTrailingEscapedForwardSlash)(pattern); ///
        if (directory) {
            pattern = (0, _string.addTrailingEscapedForwardSlash)(pattern); ///
        }
        if (anchored) {
            pattern = (0, _string.addAnchors)(pattern);
        }
        try {
            new RegExp(pattern);
        } catch (error) {
            pattern = null;
        }
    } else {
        pattern = null;
    }
    return pattern;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZ2V4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2NjdXJyZW5jZSBmcm9tIFwiLi4vb2NjdXJyZW5jZVwiO1xuXG5pbXBvcnQgeyBSRUdFWF9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc1N0cmluZ1JlZ2V4TGl0ZXJhbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGl0ZXJhbFwiO1xuaW1wb3J0IHsgYWRkQW5jaG9ycyxcbiAgICAgICAgIHJlbW92ZUFuY2hvcnMsXG4gICAgICAgICBhZGRGb3J3YXJkU2xhc2hlcyxcbiAgICAgICAgIHJlbW92ZUZvcndhcmRTbGFzaGVzLFxuICAgICAgICAgYWRkVHJhaWxpbmdFc2NhcGVkRm9yd2FyZFNsYXNoLFxuICAgICAgICAgcmVtb3ZlVHJhaWxpbmdFc2NhcGVkRm9yd2FyZFNsYXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnZXhSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGF0dGVybiwgcmVnRXhwKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UmVnRXhwKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ0V4cDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlLFxuICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm4sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgZmluZChsaW5lKSB7XG4gICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBbXSxcbiAgICAgICAgICBjb250ZW50ID0gbGluZS5nZXRDb250ZW50KCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMCxcbiAgICAgICAgc3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgIHJlc3VsdCA9IHN0cmluZy5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICB3aGlsZSAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBvY2N1cnJlbmNlID0gT2NjdXJyZW5jZS5mcm9tUmVzdWx0QW5kT2Zmc2V0KHJlc3VsdCwgb2Zmc2V0KSxcbiAgICAgICAgICAgIGVuZCA9IG9jY3VycmVuY2UuZ2V0RW5kKCksXG4gICAgICAgICAgICBzdGFydCA9IGVuZDsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKHN0YXJ0KTsgLy8vXG5cbiAgICAgIG9mZnNldCArPSBzdGFydDtcblxuICAgICAgb2NjdXJyZW5jZXMucHVzaChvY2N1cnJlbmNlKTtcblxuICAgICAgcmVzdWx0ID0gc3RyaW5nLm1hdGNoKHRoaXMucmVnRXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBtYXRjaChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5yZWdFeHAudGVzdChzdHJpbmcpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8ocnVsZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlVHlwZSA9IHJ1bGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHJ1bGVUeXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIGNvbnN0IHJ1bGVQYXR0ZXJuID0gcnVsZS5nZXRQYXR0ZXJuKCk7XG5cbiAgICAgIGlmIChydWxlUGF0dGVybiA9PT0gdGhpcy5wYXR0ZXJuKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYWRkRm9yd2FyZFNsYXNoZXModGhpcy5wYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHJlZ2V4UnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAodHlwZSA9PT0gUkVHRVhfVFlQRSkge1xuICAgICAgY29uc3QgeyBwYXR0ZXJuIH0gPSBqc29uLFxuICAgICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgcmVnZXhSdWxlID0gbmV3IFJlZ2V4UnVsZSh0eXBlLCBwYXR0ZXJuLCByZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiByZWdleFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICAgIGxldCByZWdleFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgcGF0dGVybiA9IHBhdHRlcm5Gcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSk7XG5cbiAgICBpZiAocGF0dGVybiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IFJFR0VYX1RZUEUsXG4gICAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWdleFJ1bGUgPSBuZXcgUmVnZXhSdWxlKHR5cGUsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2V4UnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXR0ZXJuRnJvbVN0cmluZ0FuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpIHtcbiAgbGV0IHBhdHRlcm47XG5cbiAgY29uc3Qgc3RyaW5nUmVnZXhMaXRlcmFsID0gaXNTdHJpbmdSZWdleExpdGVyYWwoc3RyaW5nKTtcblxuICBpZiAoc3RyaW5nUmVnZXhMaXRlcmFsKSB7XG4gICAgY29uc3QgcmVnZXhMaXRlcmFsID0gc3RyaW5nOyAgLy8vXG5cbiAgICBwYXR0ZXJuID0gcmVtb3ZlRm9yd2FyZFNsYXNoZXMocmVnZXhMaXRlcmFsKTtcblxuICAgIHBhdHRlcm4gPSByZW1vdmVBbmNob3JzKHBhdHRlcm4pOyAvLy9cblxuICAgIHBhdHRlcm4gPSByZW1vdmVUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2gocGF0dGVybik7ICAvLy9cblxuICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgIHBhdHRlcm4gPSBhZGRUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2gocGF0dGVybik7IC8vL1xuICAgIH1cblxuICAgIGlmIChhbmNob3JlZCkge1xuICAgICAgcGF0dGVybiA9IGFkZEFuY2hvcnMocGF0dGVybik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBhdHRlcm4gPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXR0ZXJuID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuO1xufVxuXG4iXSwibmFtZXMiOlsiUmVnZXhSdWxlIiwidHlwZSIsInBhdHRlcm4iLCJyZWdFeHAiLCJnZXRUeXBlIiwiZ2V0UGF0dGVybiIsImdldFJlZ0V4cCIsInRvSlNPTiIsImpzb24iLCJmaW5kIiwibGluZSIsIm9jY3VycmVuY2VzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJvZmZzZXQiLCJzdHJpbmciLCJyZXN1bHQiLCJtYXRjaCIsIm9jY3VycmVuY2UiLCJPY2N1cnJlbmNlIiwiZnJvbVJlc3VsdEFuZE9mZnNldCIsImVuZCIsImdldEVuZCIsInN0YXJ0Iiwic3Vic3RyaW5nIiwicHVzaCIsIm1hdGNoZXMiLCJ0ZXN0IiwiaXNFcXVhbFRvIiwicnVsZSIsImVxdWFsVG8iLCJydWxlVHlwZSIsInJ1bGVQYXR0ZXJuIiwiYXNTdHJpbmciLCJhZGRGb3J3YXJkU2xhc2hlcyIsImZyb21KU09OIiwicmVnZXhSdWxlIiwiUkVHRVhfVFlQRSIsIlJlZ0V4cCIsImZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsImFuY2hvcmVkIiwiZGlyZWN0b3J5IiwicGF0dGVybkZyb21TdHJpbmdBbmREaXJlY3RvcnkiLCJzdHJpbmdSZWdleExpdGVyYWwiLCJpc1N0cmluZ1JlZ2V4TGl0ZXJhbCIsInJlZ2V4TGl0ZXJhbCIsInJlbW92ZUZvcndhcmRTbGFzaGVzIiwicmVtb3ZlQW5jaG9ycyIsInJlbW92ZVRyYWlsaW5nRXNjYXBlZEZvcndhcmRTbGFzaCIsImFkZFRyYWlsaW5nRXNjYXBlZEZvcndhcmRTbGFzaCIsImFkZEFuY2hvcnMiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7aUVBWEU7cUJBRUk7dUJBQ1U7c0JBTWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsTUFBTTtnQ0FEZEg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7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