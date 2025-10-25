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
import { STRING_TYPE } from "../types";
import { isStringStringLiteral } from "../utilities/literal";
import { removeDoubleQuotes, addTrailingForwardSlash, removeTrailingForwardSlash } from "../utilities/string";
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
                    var occurrence = Occurrence.fromIndexLengthAndOffset(index, length, offset), end = occurrence.getEnd(), start = end; ///
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
                if (type === STRING_TYPE) {
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
                    var type = STRING_TYPE; ///
                    stringRule = new StringRule(type, string);
                }
                return stringRule;
            }
        }
    ]);
    return StringRule;
}();
export { StringRule as default };
function stringFromStringAndDirectory(string, directory) {
    var stringStringLiteral = isStringStringLiteral(string);
    if (stringStringLiteral) {
        var stringLiteral = string; ///
        string = removeDoubleQuotes(stringLiteral); ///
        string = removeTrailingForwardSlash(string); ///
        if (directory) {
            string = addTrailingForwardSlash(string); ///
        }
    } else {
        string = null;
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3N0cmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9jY3VycmVuY2UgZnJvbSBcIi4uL29jY3VycmVuY2VcIjtcblxuaW1wb3J0IHsgU1RSSU5HX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGlzU3RyaW5nU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGl0ZXJhbFwiO1xuaW1wb3J0IHsgcmVtb3ZlRG91YmxlUXVvdGVzLCBhZGRUcmFpbGluZ0ZvcndhcmRTbGFzaCwgcmVtb3ZlVHJhaWxpbmdGb3J3YXJkU2xhc2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGZpbmQobGluZSkge1xuICAgIGNvbnN0IG9jY3VycmVuY2VzID0gW10sXG4gICAgICAgICAgY29udGVudCA9IGxpbmUuZ2V0Q29udGVudCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDAsXG4gICAgICAgIHN0cmluZyA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBpbmRleCA9IHN0cmluZy5pbmRleE9mKHRoaXMuc3RyaW5nKSxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5zdHJpbmcubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3Qgb2NjdXJyZW5jZSA9IE9jY3VycmVuY2UuZnJvbUluZGV4TGVuZ3RoQW5kT2Zmc2V0KGluZGV4LCBsZW5ndGgsIG9mZnNldCksXG4gICAgICAgICAgICBlbmQgPSBvY2N1cnJlbmNlLmdldEVuZCgpLFxuICAgICAgICAgICAgc3RhcnQgPSBlbmQ7ICAvLy9cblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCk7IC8vL1xuXG4gICAgICBvZmZzZXQgKz0gc3RhcnQ7XG5cbiAgICAgIG9jY3VycmVuY2VzLnB1c2gob2NjdXJyZW5jZSk7XG5cbiAgICAgIGluZGV4ID0gc3RyaW5nLmluZGV4T2YodGhpcy5zdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBvY2N1cnJlbmNlcztcbiAgfVxuXG4gIG1hdGNoKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyhydWxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVUeXBlID0gcnVsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAocnVsZVR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChydWxlU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGBcIiR7dGhpcy5zdHJpbmd9XCJgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHN0cmluZ1J1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHR5cGUgPT09IFNUUklOR19UWVBFKSB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbjtcblxuICAgICAgc3RyaW5nUnVsZSA9IG5ldyBTdHJpbmdSdWxlKHR5cGUsIHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ1J1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICAgIGxldCBzdHJpbmdSdWxlID0gbnVsbDtcblxuICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3Rvcnkoc3RyaW5nLCBkaXJlY3RvcnkpOyAvLy9cblxuICAgIGlmIChzdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBTVFJJTkdfVFlQRTsgLy8vXG5cbiAgICAgIHN0cmluZ1J1bGUgPSBuZXcgU3RyaW5nUnVsZSh0eXBlLCBzdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3Rvcnkoc3RyaW5nLCBkaXJlY3RvcnkpIHtcbiAgY29uc3Qgc3RyaW5nU3RyaW5nTGl0ZXJhbCA9IGlzU3RyaW5nU3RyaW5nTGl0ZXJhbChzdHJpbmcpO1xuXG4gIGlmIChzdHJpbmdTdHJpbmdMaXRlcmFsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZzsgLy8vXG5cbiAgICBzdHJpbmcgPSByZW1vdmVEb3VibGVRdW90ZXMoc3RyaW5nTGl0ZXJhbCk7ICAvLy9cblxuICAgIHN0cmluZyA9IHJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoKHN0cmluZyk7ICAvLy9cblxuICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgIHN0cmluZyA9IGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoKHN0cmluZyk7IC8vL1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdHJpbmcgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJPY2N1cnJlbmNlIiwiU1RSSU5HX1RZUEUiLCJpc1N0cmluZ1N0cmluZ0xpdGVyYWwiLCJyZW1vdmVEb3VibGVRdW90ZXMiLCJhZGRUcmFpbGluZ0ZvcndhcmRTbGFzaCIsInJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoIiwiU3RyaW5nUnVsZSIsInR5cGUiLCJzdHJpbmciLCJnZXRUeXBlIiwiZ2V0U3RyaW5nIiwidG9KU09OIiwianNvbiIsImZpbmQiLCJsaW5lIiwib2NjdXJyZW5jZXMiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm9mZnNldCIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsIm9jY3VycmVuY2UiLCJmcm9tSW5kZXhMZW5ndGhBbmRPZmZzZXQiLCJlbmQiLCJnZXRFbmQiLCJzdGFydCIsInN1YnN0cmluZyIsInB1c2giLCJtYXRjaCIsIm1hdGNoZXMiLCJpc0VxdWFsVG8iLCJydWxlIiwiZXF1YWxUbyIsInJ1bGVUeXBlIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwiZnJvbUpTT04iLCJzdHJpbmdSdWxlIiwiZnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5IiwiYW5jaG9yZWQiLCJkaXJlY3RvcnkiLCJzdHJpbmdGcm9tU3RyaW5nQW5kRGlyZWN0b3J5Iiwic3RyaW5nU3RyaW5nTGl0ZXJhbCIsInN0cmluZ0xpdGVyYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLGdCQUFnQixnQkFBZ0I7QUFFdkMsU0FBU0MsV0FBVyxRQUFRLFdBQVc7QUFDdkMsU0FBU0MscUJBQXFCLFFBQVEsdUJBQXVCO0FBQzdELFNBQVNDLGtCQUFrQixFQUFF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