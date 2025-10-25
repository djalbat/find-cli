"use strict";
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
import Occurrence from "../occurrence";
import { REGEX_TYPE } from "../types";
import { isStringRegexLiteral } from "../utilities/literal";
import { addAnchors, removeAnchors, addForwardSlashes, removeForwardSlashes, addTrailingEscapedForwardSlash, removeTrailingEscapedForwardSlash } from "../utilities/string";
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
                var string = addForwardSlashes(this.pattern); ///
                return string;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var regexRule = null;
                var type = json.type;
                if (type === REGEX_TYPE) {
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
                    var type = REGEX_TYPE, regExp = new RegExp(pattern);
                    regexRule = new RegexRule(type, pattern, regExp);
                }
                return regexRule;
            }
        }
    ]);
    return RegexRule;
}();
export { RegexRule as default };
function patternFromStringAndDirectory(string, anchored, directory) {
    var pattern;
    var stringRegexLiteral = isStringRegexLiteral(string);
    if (stringRegexLiteral) {
        var regexLiteral = string; ///
        pattern = removeForwardSlashes(regexLiteral);
        pattern = removeAnchors(pattern); ///
        pattern = removeTrailingEscapedForwardSlash(pattern); ///
        if (directory) {
            pattern = addTrailingEscapedForwardSlash(pattern); ///
        }
        if (anchored) {
            pattern = addAnchors(pattern);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZ2V4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2NjdXJyZW5jZSBmcm9tIFwiLi4vb2NjdXJyZW5jZVwiO1xuXG5pbXBvcnQgeyBSRUdFWF9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc1N0cmluZ1JlZ2V4TGl0ZXJhbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGl0ZXJhbFwiO1xuaW1wb3J0IHsgYWRkQW5jaG9ycyxcbiAgICAgICAgIHJlbW92ZUFuY2hvcnMsXG4gICAgICAgICBhZGRGb3J3YXJkU2xhc2hlcyxcbiAgICAgICAgIHJlbW92ZUZvcndhcmRTbGFzaGVzLFxuICAgICAgICAgYWRkVHJhaWxpbmdFc2NhcGVkRm9yd2FyZFNsYXNoLFxuICAgICAgICAgcmVtb3ZlVHJhaWxpbmdFc2NhcGVkRm9yd2FyZFNsYXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnZXhSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGF0dGVybiwgcmVnRXhwKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UmVnRXhwKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ0V4cDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlLFxuICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm4sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgZmluZChsaW5lKSB7XG4gICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBbXSxcbiAgICAgICAgICBjb250ZW50ID0gbGluZS5nZXRDb250ZW50KCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMCxcbiAgICAgICAgc3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgIHJlc3VsdCA9IHN0cmluZy5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICB3aGlsZSAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBvY2N1cnJlbmNlID0gT2NjdXJyZW5jZS5mcm9tUmVzdWx0QW5kT2Zmc2V0KHJlc3VsdCwgb2Zmc2V0KSxcbiAgICAgICAgICAgIGVuZCA9IG9jY3VycmVuY2UuZ2V0RW5kKCksXG4gICAgICAgICAgICBzdGFydCA9IGVuZDsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKHN0YXJ0KTsgLy8vXG5cbiAgICAgIG9mZnNldCArPSBzdGFydDtcblxuICAgICAgb2NjdXJyZW5jZXMucHVzaChvY2N1cnJlbmNlKTtcblxuICAgICAgcmVzdWx0ID0gc3RyaW5nLm1hdGNoKHRoaXMucmVnRXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBtYXRjaChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5yZWdFeHAudGVzdChzdHJpbmcpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8ocnVsZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlVHlwZSA9IHJ1bGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHJ1bGVUeXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIGNvbnN0IHJ1bGVQYXR0ZXJuID0gcnVsZS5nZXRQYXR0ZXJuKCk7XG5cbiAgICAgIGlmIChydWxlUGF0dGVybiA9PT0gdGhpcy5wYXR0ZXJuKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYWRkRm9yd2FyZFNsYXNoZXModGhpcy5wYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHJlZ2V4UnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAodHlwZSA9PT0gUkVHRVhfVFlQRSkge1xuICAgICAgY29uc3QgeyBwYXR0ZXJuIH0gPSBqc29uLFxuICAgICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgcmVnZXhSdWxlID0gbmV3IFJlZ2V4UnVsZSh0eXBlLCBwYXR0ZXJuLCByZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiByZWdleFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICAgIGxldCByZWdleFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgcGF0dGVybiA9IHBhdHRlcm5Gcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSk7XG5cbiAgICBpZiAocGF0dGVybiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IFJFR0VYX1RZUEUsXG4gICAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWdleFJ1bGUgPSBuZXcgUmVnZXhSdWxlKHR5cGUsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2V4UnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXR0ZXJuRnJvbVN0cmluZ0FuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpIHtcbiAgbGV0IHBhdHRlcm47XG5cbiAgY29uc3Qgc3RyaW5nUmVnZXhMaXRlcmFsID0gaXNTdHJpbmdSZWdleExpdGVyYWwoc3RyaW5nKTtcblxuICBpZiAoc3RyaW5nUmVnZXhMaXRlcmFsKSB7XG4gICAgY29uc3QgcmVnZXhMaXRlcmFsID0gc3RyaW5nOyAgLy8vXG5cbiAgICBwYXR0ZXJuID0gcmVtb3ZlRm9yd2FyZFNsYXNoZXMocmVnZXhMaXRlcmFsKTtcblxuICAgIHBhdHRlcm4gPSByZW1vdmVBbmNob3JzKHBhdHRlcm4pOyAvLy9cblxuICAgIHBhdHRlcm4gPSByZW1vdmVUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2gocGF0dGVybik7ICAvLy9cblxuICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgIHBhdHRlcm4gPSBhZGRUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2gocGF0dGVybik7IC8vL1xuICAgIH1cblxuICAgIGlmIChhbmNob3JlZCkge1xuICAgICAgcGF0dGVybiA9IGFkZEFuY2hvcnMocGF0dGVybik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBhdHRlcm4gPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXR0ZXJuID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuO1xufVxuXG4iXSwibmFtZXMiOlsiT2NjdXJyZW5jZSIsIlJFR0VYX1RZUEUiLCJpc1N0cmluZ1JlZ2V4TGl0ZXJhbCIsImFkZEFuY2hvcnMiLCJyZW1vdmVBbmNob3JzIiwiYWRkRm9yd2FyZFNsYXNoZXMiLCJyZW1vdmVGb3J3YXJkU2xhc2hlcyIsImFkZFRyYWlsaW5nRXNjYXBlZEZvcndhcmRTbGFzaCIsInJlbW92ZVRyYWlsaW5nRXNjYXBlZEZvcndhcmRTbGFzaCIsIlJlZ2V4UnVsZSIsInR5cGUiLCJwYXR0ZXJuIiwicmVnRXhwIiwiZ2V0VHlwZSIsImdldFBhdHRlcm4iLCJnZXRSZWdFeHAiLCJ0b0pTT04iLCJqc29uIiwiZmluZCIsImxpbmUiLCJvY2N1cnJlbmNlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwib2Zmc2V0Iiwic3RyaW5nIiwicmVzdWx0IiwibWF0Y2giLCJvY2N1cnJlbmNlIiwiZnJvbVJlc3VsdEFuZE9mZnNldCIsImVuZCIsImdldEVuZCIsInN0YXJ0Iiwic3Vic3RyaW5nIiwicHVzaCIsIm1hdGNoZXMiLCJ0ZXN0IiwiaXNFcXVhbFRvIiwicnVsZSIsImVxdWFsVG8iLCJydWxlVHlwZSIsInJ1bGVQYXR0ZXJuIiwiYXNTdHJpbmciLCJmcm9tSlNPTiIsInJlZ2V4UnVsZSIsIlJlZ0V4cCIsImZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsImFuY2hvcmVkIiwiZGlyZWN0b3J5IiwicGF0dGVybkZyb21TdHJpbmdBbmREaXJlY3RvcnkiLCJzdHJpbmdSZWdleExpdGVyYWwiLCJyZWdleExpdGVyYWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsZ0JBQWdCLGdCQUFnQjtBQUV2QyxTQUFTQyxVQUFVLFFBQVEsV0FBVztBQUN0QyxTQUFTQyxvQkFBb0IsUUFBUSx1QkFBdUI7QUFDNUQsU0FBU0MsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLGlCQUFpQixFQUNqQkMsb0JBQW9CLEVBQ3BCQyw4QkFBOEIsRUFDOUJDLGlDQUFpQyxRQUFRLHNCQUFzQjtBQUV6RCxJQUFBLEFBQU1DLDBCQUFOO2FBQU1BLFVBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxNQUFNO2dDQURkSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUpHSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsVUFBVSxJQUFJLENBQUNBLE9BQU8sRUFDdEJNLE9BQU87b0JBQ0xQLE1BQUFBO29CQUNBQyxTQUFBQTtnQkFDRjtnQkFFTixPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLElBQUk7Z0JBQ1AsSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyxVQUFVRixLQUFLRyxVQUFVO2dCQUUvQixJQUFJQyxTQUFTLEdBQ1RDLFNBQVNILFNBQ1RJLFNBQVNELE9BQU9FLEtBQUssQ0FBQyxJQUFJLENBQUNkLE1BQU07Z0JBRXJDLE1BQU9hLFdBQVcsS0FBTTtvQkFDdEIsSUFBTUUsYUFBYTNCLFdBQVc0QixtQkFBbUIsQ0FBQ0gsUUFBUUYsU0FDcERNLE1BQU1GLFdBQVdHLE1BQU0sSUFDdkJDLFFBQVFGLEtBQU0sR0FBRztvQkFFdkJMLFNBQVNBLE9BQU9RLFNBQVMsQ0FBQ0QsUUFBUSxHQUFHO29CQUVyQ1IsVUFBVVE7b0JBRVZYLFlBQVlhLElBQUksQ0FBQ047b0JBRWpCRixTQUFTRCxPQUFPRSxLQUFLLENBQUMsSUFBSSxDQUFDZCxNQUFNO2dCQUNuQztnQkFFQSxPQUFPUTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLE1BQU07Z0JBQ1YsSUFBTVUsVUFBVSxJQUFJLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNYO2dCQUVqQyxPQUFPVTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUk7Z0JBQ1osSUFBSUMsVUFBVTtnQkFFZCxJQUFNQyxXQUFXRixLQUFLeEIsT0FBTztnQkFFN0IsSUFBSTBCLGFBQWEsSUFBSSxDQUFDN0IsSUFBSSxFQUFFO29CQUMxQixJQUFNOEIsY0FBY0gsS0FBS3ZCLFVBQVU7b0JBRW5DLElBQUkwQixnQkFBZ0IsSUFBSSxDQUFDN0IsT0FBTyxFQUFFO3dCQUNoQzJCLFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNakIsU0FBU25CLGtCQUFrQixJQUFJLENBQUNNLE9BQU8sR0FBSSxHQUFHO2dCQUVwRCxPQUFPYTtZQUNUOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSxTQUFTekIsSUFBSTtnQkFDbEIsSUFBSTBCLFlBQVk7Z0JBRWhCLElBQU0sQUFBRWpDLE9BQVNPLEtBQVRQO2dCQUVSLElBQUlBLFNBQVNULFlBQVk7b0JBQ3ZCLElBQU0sQUFBRVUsVUFBWU0sS0FBWk4sU0FDRkMsU0FBUyxJQUFJZ0MsT0FBT2pDO29CQUUxQmdDLFlBQVksSUE1RkdsQyxVQTRGV0MsTUFBTUMsU0FBU0M7Z0JBQzNDO2dCQUVBLE9BQU8rQjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCckIsTUFBTSxFQUFFc0IsUUFBUSxFQUFFQyxTQUFTO2dCQUMvRCxJQUFJSixZQUFZO2dCQUVoQixJQUFNaEMsVUFBVXFDLDhCQUE4QnhCLFFBQVFzQixVQUFVQztnQkFFaEUsSUFBSXBDLFlBQVksTUFBTTtvQkFDcEIsSUFBTUQsT0FBT1QsWUFDUFcsU0FBUyxJQUFJZ0MsT0FBT2pDO29CQUUxQmdDLFlBQVksSUEzR0dsQyxVQTJHV0MsTUFBTUMsU0FBU0M7Z0JBQzNDO2dCQUVBLE9BQU8rQjtZQUNUOzs7V0EvR21CbEM7O0FBQXJCLFNBQXFCQSx1QkFnSHBCO0FBRUQsU0FBU3VDLDhCQUE4QnhCLE1BQU0sRUFBRXNCLFFBQVEsRUFBRUMsU0FBUztJQUNoRSxJQUFJcEM7SUFFSixJQUFNc0MscUJBQXFCL0MscUJBQXFCc0I7SUFFaEQsSUFBSXlCLG9CQUFvQjtRQUN0QixJQUFNQyxlQUFlMUIsUUFBUyxHQUFHO1FBRWpDYixVQUFVTCxxQkFBcUI0QztRQUUvQnZDLFVBQVVQLGNBQWNPLFVBQVUsR0FBRztRQUVyQ0EsVUFBVUgsa0NBQWtDRyxVQUFXLEdBQUc7UUFFMUQsSUFBSW9DLFdBQVc7WUFDYnBDLFVBQVVKLCtCQUErQkksVUFBVSxHQUFHO1FBQ3hEO1FBRUEsSUFBSW1DLFVBQVU7WUFDWm5DLFVBQVVSLFdBQVdRO1FBQ3ZCO1FBRUEsSUFBSTtZQUNGLElBQUlpQyxPQUFPakM7UUFDYixFQUFFLE9BQU93QyxPQUFPO1lBQ2R4QyxVQUFVO1FBQ1o7SUFDRixPQUFPO1FBQ0xBLFVBQVU7SUFDWjtJQUVBLE9BQU9BO0FBQ1QifQ==