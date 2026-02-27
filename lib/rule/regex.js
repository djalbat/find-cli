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
const _occurrence = /*#__PURE__*/ _interop_require_default(require("../occurrence"));
const _types = require("../types");
const _literal = require("../utilities/literal");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RegexRule {
    constructor(type, pattern, regExp){
        this.type = type;
        this.pattern = pattern;
        this.regExp = regExp;
    }
    getType() {
        return this.type;
    }
    getPattern() {
        return this.pattern;
    }
    getRegExp() {
        return this.regExp;
    }
    toJSON() {
        const type = this.type, pattern = this.pattern, json = {
            type,
            pattern
        };
        return json;
    }
    find(line) {
        const occurrences = [], content = line.getContent();
        let offset = 0, string = content, result = string.match(this.regExp);
        while(result !== null){
            const occurrence = _occurrence.default.fromResultAndOffset(result, offset), end = occurrence.getEnd(), start = end; ///
            string = string.substring(start); ///
            offset += start;
            occurrences.push(occurrence);
            result = string.match(this.regExp);
        }
        return occurrences;
    }
    match(string) {
        const matches = this.regExp.test(string);
        return matches;
    }
    isEqualTo(rule) {
        let equalTo = false;
        const ruleType = rule.getType();
        if (ruleType === this.type) {
            const rulePattern = rule.getPattern();
            if (rulePattern === this.pattern) {
                equalTo = true;
            }
        }
        return equalTo;
    }
    asString() {
        const string = (0, _string.addForwardSlashes)(this.pattern); ///
        return string;
    }
    static fromJSON(json) {
        let regexRule = null;
        const { type } = json;
        if (type === _types.REGEX_TYPE) {
            const { pattern } = json, regExp = new RegExp(pattern);
            regexRule = new RegexRule(type, pattern, regExp);
        }
        return regexRule;
    }
    static fromStringAnchoredAndDirectory(string, anchored, directory) {
        let regexRule = null;
        const pattern = patternFromStringAndDirectory(string, anchored, directory);
        if (pattern !== null) {
            const type = _types.REGEX_TYPE, regExp = new RegExp(pattern);
            regexRule = new RegexRule(type, pattern, regExp);
        }
        return regexRule;
    }
}
function patternFromStringAndDirectory(string, anchored, directory) {
    let pattern;
    const stringRegexLiteral = (0, _literal.isStringRegexLiteral)(string);
    if (stringRegexLiteral) {
        const regexLiteral = string; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZ2V4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2NjdXJyZW5jZSBmcm9tIFwiLi4vb2NjdXJyZW5jZVwiO1xuXG5pbXBvcnQgeyBSRUdFWF9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc1N0cmluZ1JlZ2V4TGl0ZXJhbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGl0ZXJhbFwiO1xuaW1wb3J0IHsgYWRkQW5jaG9ycyxcbiAgICAgICAgIHJlbW92ZUFuY2hvcnMsXG4gICAgICAgICBhZGRGb3J3YXJkU2xhc2hlcyxcbiAgICAgICAgIHJlbW92ZUZvcndhcmRTbGFzaGVzLFxuICAgICAgICAgYWRkVHJhaWxpbmdFc2NhcGVkRm9yd2FyZFNsYXNoLFxuICAgICAgICAgcmVtb3ZlVHJhaWxpbmdFc2NhcGVkRm9yd2FyZFNsYXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnZXhSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGF0dGVybiwgcmVnRXhwKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UmVnRXhwKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ0V4cDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlLFxuICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm4sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgZmluZChsaW5lKSB7XG4gICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBbXSxcbiAgICAgICAgICBjb250ZW50ID0gbGluZS5nZXRDb250ZW50KCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMCxcbiAgICAgICAgc3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgIHJlc3VsdCA9IHN0cmluZy5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICB3aGlsZSAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBvY2N1cnJlbmNlID0gT2NjdXJyZW5jZS5mcm9tUmVzdWx0QW5kT2Zmc2V0KHJlc3VsdCwgb2Zmc2V0KSxcbiAgICAgICAgICAgIGVuZCA9IG9jY3VycmVuY2UuZ2V0RW5kKCksXG4gICAgICAgICAgICBzdGFydCA9IGVuZDsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKHN0YXJ0KTsgLy8vXG5cbiAgICAgIG9mZnNldCArPSBzdGFydDtcblxuICAgICAgb2NjdXJyZW5jZXMucHVzaChvY2N1cnJlbmNlKTtcblxuICAgICAgcmVzdWx0ID0gc3RyaW5nLm1hdGNoKHRoaXMucmVnRXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBtYXRjaChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5yZWdFeHAudGVzdChzdHJpbmcpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8ocnVsZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlVHlwZSA9IHJ1bGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHJ1bGVUeXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIGNvbnN0IHJ1bGVQYXR0ZXJuID0gcnVsZS5nZXRQYXR0ZXJuKCk7XG5cbiAgICAgIGlmIChydWxlUGF0dGVybiA9PT0gdGhpcy5wYXR0ZXJuKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYWRkRm9yd2FyZFNsYXNoZXModGhpcy5wYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHJlZ2V4UnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAodHlwZSA9PT0gUkVHRVhfVFlQRSkge1xuICAgICAgY29uc3QgeyBwYXR0ZXJuIH0gPSBqc29uLFxuICAgICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgcmVnZXhSdWxlID0gbmV3IFJlZ2V4UnVsZSh0eXBlLCBwYXR0ZXJuLCByZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiByZWdleFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICAgIGxldCByZWdleFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgcGF0dGVybiA9IHBhdHRlcm5Gcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSk7XG5cbiAgICBpZiAocGF0dGVybiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IFJFR0VYX1RZUEUsXG4gICAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWdleFJ1bGUgPSBuZXcgUmVnZXhSdWxlKHR5cGUsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2V4UnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXR0ZXJuRnJvbVN0cmluZ0FuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpIHtcbiAgbGV0IHBhdHRlcm47XG5cbiAgY29uc3Qgc3RyaW5nUmVnZXhMaXRlcmFsID0gaXNTdHJpbmdSZWdleExpdGVyYWwoc3RyaW5nKTtcblxuICBpZiAoc3RyaW5nUmVnZXhMaXRlcmFsKSB7XG4gICAgY29uc3QgcmVnZXhMaXRlcmFsID0gc3RyaW5nOyAgLy8vXG5cbiAgICBwYXR0ZXJuID0gcmVtb3ZlRm9yd2FyZFNsYXNoZXMocmVnZXhMaXRlcmFsKTtcblxuICAgIHBhdHRlcm4gPSByZW1vdmVBbmNob3JzKHBhdHRlcm4pOyAvLy9cblxuICAgIHBhdHRlcm4gPSByZW1vdmVUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2gocGF0dGVybik7ICAvLy9cblxuICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgIHBhdHRlcm4gPSBhZGRUcmFpbGluZ0VzY2FwZWRGb3J3YXJkU2xhc2gocGF0dGVybik7IC8vL1xuICAgIH1cblxuICAgIGlmIChhbmNob3JlZCkge1xuICAgICAgcGF0dGVybiA9IGFkZEFuY2hvcnMocGF0dGVybik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBhdHRlcm4gPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXR0ZXJuID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuO1xufVxuXG4iXSwibmFtZXMiOlsiUmVnZXhSdWxlIiwidHlwZSIsInBhdHRlcm4iLCJyZWdFeHAiLCJnZXRUeXBlIiwiZ2V0UGF0dGVybiIsImdldFJlZ0V4cCIsInRvSlNPTiIsImpzb24iLCJmaW5kIiwibGluZSIsIm9jY3VycmVuY2VzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJvZmZzZXQiLCJzdHJpbmciLCJyZXN1bHQiLCJtYXRjaCIsIm9jY3VycmVuY2UiLCJPY2N1cnJlbmNlIiwiZnJvbVJlc3VsdEFuZE9mZnNldCIsImVuZCIsImdldEVuZCIsInN0YXJ0Iiwic3Vic3RyaW5nIiwicHVzaCIsIm1hdGNoZXMiLCJ0ZXN0IiwiaXNFcXVhbFRvIiwicnVsZSIsImVxdWFsVG8iLCJydWxlVHlwZSIsInJ1bGVQYXR0ZXJuIiwiYXNTdHJpbmciLCJhZGRGb3J3YXJkU2xhc2hlcyIsImZyb21KU09OIiwicmVnZXhSdWxlIiwiUkVHRVhfVFlQRSIsIlJlZ0V4cCIsImZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsImFuY2hvcmVkIiwiZGlyZWN0b3J5IiwicGF0dGVybkZyb21TdHJpbmdBbmREaXJlY3RvcnkiLCJzdHJpbmdSZWdleExpdGVyYWwiLCJpc1N0cmluZ1JlZ2V4TGl0ZXJhbCIsInJlZ2V4TGl0ZXJhbCIsInJlbW92ZUZvcndhcmRTbGFzaGVzIiwicmVtb3ZlQW5jaG9ycyIsInJlbW92ZVRyYWlsaW5nRXNjYXBlZEZvcndhcmRTbGFzaCIsImFkZFRyYWlsaW5nRXNjYXBlZEZvcndhcmRTbGFzaCIsImFkZEFuY2hvcnMiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFxQkE7OzttRUFYRTt1QkFFSTt5QkFDVTt3QkFNYTs7Ozs7O0FBRW5DLE1BQU1BO0lBQ25CLFlBQVlDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxNQUFNLENBQUU7UUFDakMsSUFBSSxDQUFDRixJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNILE9BQU87SUFDckI7SUFFQUksWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO0lBQ3BCO0lBRUFJLFNBQVM7UUFDUCxNQUFNTixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsVUFBVSxJQUFJLENBQUNBLE9BQU8sRUFDdEJNLE9B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