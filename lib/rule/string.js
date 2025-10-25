"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StringRule;
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
var StringRule = /*#__PURE__*/ function() {
    function StringRule(type, string) {
        _class_call_check(this, StringRule);
        this.type = type;
        this.string = string;
    }
    _create_class(StringRule, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var type = this.type, string = this.string, json = {
                    type: type,
                    string: string
                };
                return json;
            }
        },
        {
            key: "find",
            value: function find(line) {
                var occurrences = [], content = line.getContent();
                var offset = 0, string = content, index = string.indexOf(this.string), length = this.string.length;
                while(index !== -1){
                    var occurrence = _occurrence.default.fromIndexLengthAndOffset(index, length, offset), end = occurrence.getEnd(), start = end; ///
                    string = string.substring(start); ///
                    offset += start;
                    occurrences.push(occurrence);
                    index = string.indexOf(this.string);
                }
                return occurrences;
            }
        },
        {
            key: "match",
            value: function match(string) {
                var matches = this.string === string;
                return matches;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(rule) {
                var equalTo = false;
                var ruleType = rule.getType();
                if (ruleType === this.type) {
                    var ruleString = rule.getString();
                    if (ruleString === this.string) {
                        equalTo = true;
                    }
                }
                return equalTo;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = '"'.concat(this.string, '"');
                return string;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var stringRule = null;
                var type = json.type;
                if (type === _types.STRING_TYPE) {
                    var string = json.string;
                    stringRule = new StringRule(type, string);
                }
                return stringRule;
            }
        },
        {
            key: "fromStringAnchoredAndDirectory",
            value: function fromStringAnchoredAndDirectory(string, anchored, directory) {
                var stringRule = null;
                string = stringFromStringAndDirectory(string, directory); ///
                if (string !== null) {
                    var type = _types.STRING_TYPE; ///
                    stringRule = new StringRule(type, string);
                }
                return stringRule;
            }
        }
    ]);
    return StringRule;
}();
function stringFromStringAndDirectory(string, directory) {
    var stringStringLiteral = (0, _literal.isStringStringLiteral)(string);
    if (stringStringLiteral) {
        var stringLiteral = string; ///
        string = (0, _string.removeDoubleQuotes)(stringLiteral); ///
        string = (0, _string.removeTrailingForwardSlash)(string); ///
        if (directory) {
            string = (0, _string.addTrailingForwardSlash)(string); ///
        }
    } else {
        string = null;
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3N0cmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9jY3VycmVuY2UgZnJvbSBcIi4uL29jY3VycmVuY2VcIjtcblxuaW1wb3J0IHsgU1RSSU5HX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGlzU3RyaW5nU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGl0ZXJhbFwiO1xuaW1wb3J0IHsgcmVtb3ZlRG91YmxlUXVvdGVzLCBhZGRUcmFpbGluZ0ZvcndhcmRTbGFzaCwgcmVtb3ZlVHJhaWxpbmdGb3J3YXJkU2xhc2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGZpbmQobGluZSkge1xuICAgIGNvbnN0IG9jY3VycmVuY2VzID0gW10sXG4gICAgICAgICAgY29udGVudCA9IGxpbmUuZ2V0Q29udGVudCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDAsXG4gICAgICAgIHN0cmluZyA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBpbmRleCA9IHN0cmluZy5pbmRleE9mKHRoaXMuc3RyaW5nKSxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5zdHJpbmcubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3Qgb2NjdXJyZW5jZSA9IE9jY3VycmVuY2UuZnJvbUluZGV4TGVuZ3RoQW5kT2Zmc2V0KGluZGV4LCBsZW5ndGgsIG9mZnNldCksXG4gICAgICAgICAgICBlbmQgPSBvY2N1cnJlbmNlLmdldEVuZCgpLFxuICAgICAgICAgICAgc3RhcnQgPSBlbmQ7ICAvLy9cblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCk7IC8vL1xuXG4gICAgICBvZmZzZXQgKz0gc3RhcnQ7XG5cbiAgICAgIG9jY3VycmVuY2VzLnB1c2gob2NjdXJyZW5jZSk7XG5cbiAgICAgIGluZGV4ID0gc3RyaW5nLmluZGV4T2YodGhpcy5zdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBvY2N1cnJlbmNlcztcbiAgfVxuXG4gIG1hdGNoKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyhydWxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVUeXBlID0gcnVsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAocnVsZVR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChydWxlU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGBcIiR7dGhpcy5zdHJpbmd9XCJgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHN0cmluZ1J1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHR5cGUgPT09IFNUUklOR19UWVBFKSB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbjtcblxuICAgICAgc3RyaW5nUnVsZSA9IG5ldyBTdHJpbmdSdWxlKHR5cGUsIHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ1J1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICAgIGxldCBzdHJpbmdSdWxlID0gbnVsbDtcblxuICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3Rvcnkoc3RyaW5nLCBkaXJlY3RvcnkpOyAvLy9cblxuICAgIGlmIChzdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBTVFJJTkdfVFlQRTsgLy8vXG5cbiAgICAgIHN0cmluZ1J1bGUgPSBuZXcgU3RyaW5nUnVsZSh0eXBlLCBzdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3Rvcnkoc3RyaW5nLCBkaXJlY3RvcnkpIHtcbiAgY29uc3Qgc3RyaW5nU3RyaW5nTGl0ZXJhbCA9IGlzU3RyaW5nU3RyaW5nTGl0ZXJhbChzdHJpbmcpO1xuXG4gIGlmIChzdHJpbmdTdHJpbmdMaXRlcmFsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZzsgLy8vXG5cbiAgICBzdHJpbmcgPSByZW1vdmVEb3VibGVRdW90ZXMoc3RyaW5nTGl0ZXJhbCk7ICAvLy9cblxuICAgIHN0cmluZyA9IHJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoKHN0cmluZyk7ICAvLy9cblxuICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgIHN0cmluZyA9IGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoKHN0cmluZyk7IC8vL1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdHJpbmcgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJTdHJpbmdSdWxlIiwidHlwZSIsInN0cmluZyIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZmluZCIsImxpbmUiLCJvY2N1cnJlbmNlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwib2Zmc2V0IiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwib2NjdXJyZW5jZSIsIk9jY3VycmVuY2UiLCJmcm9tSW5kZXhMZW5ndGhBbmRPZmZzZXQiLCJlbmQiLCJnZXRFbmQiLCJzdGFydCIsInN1YnN0cmluZyIsInB1c2giLCJtYXRjaCIsIm1hdGNoZXMiLCJpc0VxdWFsVG8iLCJydWxlIiwiZXF1YWxUbyIsInJ1bGVUeXBlIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwiZnJvbUpTT04iLCJzdHJpbmdSdWxlIiwiU1RSSU5HX1RZUEUiLCJmcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkiLCJhbmNob3JlZCIsImRpcmVjdG9yeSIsInN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3RvcnkiLCJzdHJpbmdTdHJpbmdMaXRlcmFsIiwiaXNTdHJpbmdTdHJpbmdMaXRlcmFsIiwic3RyaW5nTGl0ZXJhbCIsInJlbW92ZURvdWJsZVF1b3RlcyIsInJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoIiwiYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2lFQU5FO3FCQUVLO3VCQUNVO3NCQUNrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLElBQUksRUFBRUMsTUFBTTtnQ0FETEY7UUFF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