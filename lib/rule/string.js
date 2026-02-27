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
const _occurrence = /*#__PURE__*/ _interop_require_default(require("../occurrence"));
const _types = require("../types");
const _literal = require("../utilities/literal");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StringRule {
    constructor(type, string){
        this.type = type;
        this.string = string;
    }
    getType() {
        return this.type;
    }
    getString() {
        return this.string;
    }
    toJSON() {
        const type = this.type, string = this.string, json = {
            type,
            string
        };
        return json;
    }
    find(line) {
        const occurrences = [], content = line.getContent();
        let offset = 0, string = content, index = string.indexOf(this.string), length = this.string.length;
        while(index !== -1){
            const occurrence = _occurrence.default.fromIndexLengthAndOffset(index, length, offset), end = occurrence.getEnd(), start = end; ///
            string = string.substring(start); ///
            offset += start;
            occurrences.push(occurrence);
            index = string.indexOf(this.string);
        }
        return occurrences;
    }
    match(string) {
        const matches = this.string === string;
        return matches;
    }
    isEqualTo(rule) {
        let equalTo = false;
        const ruleType = rule.getType();
        if (ruleType === this.type) {
            const ruleString = rule.getString();
            if (ruleString === this.string) {
                equalTo = true;
            }
        }
        return equalTo;
    }
    asString() {
        const string = `"${this.string}"`;
        return string;
    }
    static fromJSON(json) {
        let stringRule = null;
        const { type } = json;
        if (type === _types.STRING_TYPE) {
            const { string } = json;
            stringRule = new StringRule(type, string);
        }
        return stringRule;
    }
    static fromStringAnchoredAndDirectory(string, anchored, directory) {
        let stringRule = null;
        string = stringFromStringAndDirectory(string, directory); ///
        if (string !== null) {
            const type = _types.STRING_TYPE; ///
            stringRule = new StringRule(type, string);
        }
        return stringRule;
    }
}
function stringFromStringAndDirectory(string, directory) {
    const stringStringLiteral = (0, _literal.isStringStringLiteral)(string);
    if (stringStringLiteral) {
        const stringLiteral = string; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3N0cmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9jY3VycmVuY2UgZnJvbSBcIi4uL29jY3VycmVuY2VcIjtcblxuaW1wb3J0IHsgU1RSSU5HX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGlzU3RyaW5nU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGl0ZXJhbFwiO1xuaW1wb3J0IHsgcmVtb3ZlRG91YmxlUXVvdGVzLCBhZGRUcmFpbGluZ0ZvcndhcmRTbGFzaCwgcmVtb3ZlVHJhaWxpbmdGb3J3YXJkU2xhc2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGZpbmQobGluZSkge1xuICAgIGNvbnN0IG9jY3VycmVuY2VzID0gW10sXG4gICAgICAgICAgY29udGVudCA9IGxpbmUuZ2V0Q29udGVudCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDAsXG4gICAgICAgIHN0cmluZyA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBpbmRleCA9IHN0cmluZy5pbmRleE9mKHRoaXMuc3RyaW5nKSxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5zdHJpbmcubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3Qgb2NjdXJyZW5jZSA9IE9jY3VycmVuY2UuZnJvbUluZGV4TGVuZ3RoQW5kT2Zmc2V0KGluZGV4LCBsZW5ndGgsIG9mZnNldCksXG4gICAgICAgICAgICBlbmQgPSBvY2N1cnJlbmNlLmdldEVuZCgpLFxuICAgICAgICAgICAgc3RhcnQgPSBlbmQ7ICAvLy9cblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCk7IC8vL1xuXG4gICAgICBvZmZzZXQgKz0gc3RhcnQ7XG5cbiAgICAgIG9jY3VycmVuY2VzLnB1c2gob2NjdXJyZW5jZSk7XG5cbiAgICAgIGluZGV4ID0gc3RyaW5nLmluZGV4T2YodGhpcy5zdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBvY2N1cnJlbmNlcztcbiAgfVxuXG4gIG1hdGNoKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyhydWxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVUeXBlID0gcnVsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAocnVsZVR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChydWxlU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGBcIiR7dGhpcy5zdHJpbmd9XCJgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHN0cmluZ1J1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHR5cGUgPT09IFNUUklOR19UWVBFKSB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbjtcblxuICAgICAgc3RyaW5nUnVsZSA9IG5ldyBTdHJpbmdSdWxlKHR5cGUsIHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ1J1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICAgIGxldCBzdHJpbmdSdWxlID0gbnVsbDtcblxuICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3Rvcnkoc3RyaW5nLCBkaXJlY3RvcnkpOyAvLy9cblxuICAgIGlmIChzdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBTVFJJTkdfVFlQRTsgLy8vXG5cbiAgICAgIHN0cmluZ1J1bGUgPSBuZXcgU3RyaW5nUnVsZSh0eXBlLCBzdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3Rvcnkoc3RyaW5nLCBkaXJlY3RvcnkpIHtcbiAgY29uc3Qgc3RyaW5nU3RyaW5nTGl0ZXJhbCA9IGlzU3RyaW5nU3RyaW5nTGl0ZXJhbChzdHJpbmcpO1xuXG4gIGlmIChzdHJpbmdTdHJpbmdMaXRlcmFsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZzsgLy8vXG5cbiAgICBzdHJpbmcgPSByZW1vdmVEb3VibGVRdW90ZXMoc3RyaW5nTGl0ZXJhbCk7ICAvLy9cblxuICAgIHN0cmluZyA9IHJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoKHN0cmluZyk7ICAvLy9cblxuICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgIHN0cmluZyA9IGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoKHN0cmluZyk7IC8vL1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdHJpbmcgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJTdHJpbmdSdWxlIiwidHlwZSIsInN0cmluZyIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZmluZCIsImxpbmUiLCJvY2N1cnJlbmNlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwib2Zmc2V0IiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwib2NjdXJyZW5jZSIsIk9jY3VycmVuY2UiLCJmcm9tSW5kZXhMZW5ndGhBbmRPZmZzZXQiLCJlbmQiLCJnZXRFbmQiLCJzdGFydCIsInN1YnN0cmluZyIsInB1c2giLCJtYXRjaCIsIm1hdGNoZXMiLCJpc0VxdWFsVG8iLCJydWxlIiwiZXF1YWxUbyIsInJ1bGVUeXBlIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwiZnJvbUpTT04iLCJzdHJpbmdSdWxlIiwiU1RSSU5HX1RZUEUiLCJmcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkiLCJhbmNob3JlZCIsImRpcmVjdG9yeSIsInN0cmluZ0Zyb21TdHJpbmdBbmREaXJlY3RvcnkiLCJzdHJpbmdTdHJpbmdMaXRlcmFsIiwiaXNTdHJpbmdTdHJpbmdMaXRlcmFsIiwic3RyaW5nTGl0ZXJhbCIsInJlbW92ZURvdWJsZVF1b3RlcyIsInJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoIiwiYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7bUVBTkU7dUJBRUs7eUJBQ1U7d0JBQ2tEOzs7Ozs7QUFFekUsTUFBTUE7SUFDbkIsWUFBWUMsSUFBSSxFQUFFQyxNQUFNLENBQUU7UUFDeEIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FB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