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
const _converters = /*#__PURE__*/ _interop_require_default(require("../converters"));
const _occurrence = /*#__PURE__*/ _interop_require_default(require("../occurrence"));
const _types = require("../types");
const _constants = require("../constants");
const _literal = require("../utilities/literal");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class GlobRule {
    constructor(type, glob, pattern, regExp){
        this.type = type;
        this.glob = glob;
        this.pattern = pattern;
        this.regExp = regExp;
    }
    getType() {
        return this.type;
    }
    getGlob() {
        return this.glob;
    }
    getPattern() {
        return this.pattern;
    }
    getRegExp() {
        return this.regExp;
    }
    toJSON() {
        const type = this.type, glob = this.glob, pattern = this.pattern, json = {
            type,
            glob,
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
            const ruleGlob = rule.getGlob();
            if (ruleGlob === this.glob) {
                equalTo = true;
            }
        }
        return equalTo;
    }
    asString() {
        const string = this.glob; ///
        return string;
    }
    static fromJSON(json) {
        let globRule = null;
        const { type } = json;
        if (type === _types.GLOB_TYPE) {
            const { glob, pattern } = json, regExp = new RegExp(pattern);
            globRule = new GlobRule(type, glob, pattern, regExp);
        }
        return globRule;
    }
    static fromStringAnchoredAndDirectory(string, anchored, directory) {
        let globRule = null;
        const glob = globFromStringAndDirectory(string, directory);
        if (glob !== null) {
            const type = _types.GLOB_TYPE, pattern = patternFromGlobAndAnchored(glob, anchored), regExp = new RegExp(pattern);
            globRule = new GlobRule(type, glob, pattern, regExp);
        }
        return globRule;
    }
}
function patternFromGlobAndAnchored(glob, anchored) {
    let pattern = _constants.EMPTY_STRING;
    const characters = [
        ...glob
    ];
    for(;;){
        const converted = _converters.default.some((converter)=>{
            const result = converter.match(characters);
            if (result !== null) {
                pattern = `${pattern}${result}`;
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
    let glob;
    const stringGlobLiteral = (0, _literal.isStringGlobLiteral)(string);
    if (stringGlobLiteral) {
        const globLiteral = string; ///
        glob = globLiteral; ///
        glob = (0, _string.removeTrailingForwardSlash)(glob); ///
        if (directory) {
            glob = (0, _string.addTrailingForwardSlash)(glob); ///
        }
        try {
            const anchored = false, pattern = patternFromGlobAndAnchored(glob, anchored);
            new RegExp(pattern);
        } catch (error) {
            glob = null;
        }
    } else {
        glob = null;
    }
    return glob;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2dsb2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjb252ZXJ0ZXJzIGZyb20gXCIuLi9jb252ZXJ0ZXJzXCI7XG5pbXBvcnQgT2NjdXJyZW5jZSBmcm9tIFwiLi4vb2NjdXJyZW5jZVwiO1xuXG5pbXBvcnQgeyBHTE9CX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzU3RyaW5nR2xvYkxpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xpdGVyYWxcIjtcbmltcG9ydCB7IGFkZEFuY2hvcnMsIGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoLCByZW1vdmVUcmFpbGluZ0ZvcndhcmRTbGFzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgZ2xvYiwgcGF0dGVybiwgcmVnRXhwKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdsb2IgPSBnbG9iO1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRHbG9iKCkge1xuICAgIHJldHVybiB0aGlzLmdsb2I7XG4gIH1cblxuICBnZXRQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gIH1cblxuICBnZXRSZWdFeHAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnRXhwO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUsXG4gICAgICAgICAgZ2xvYiA9IHRoaXMuZ2xvYixcbiAgICAgICAgICBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZ2xvYixcbiAgICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBmaW5kKGxpbmUpIHtcbiAgICBjb25zdCBvY2N1cnJlbmNlcyA9IFtdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmdldENvbnRlbnQoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgcmVzdWx0ID0gc3RyaW5nLm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgIHdoaWxlIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG9jY3VycmVuY2UgPSBPY2N1cnJlbmNlLmZyb21SZXN1bHRBbmRPZmZzZXQocmVzdWx0LCBvZmZzZXQpLFxuICAgICAgICAgICAgZW5kID0gb2NjdXJyZW5jZS5nZXRFbmQoKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZW5kOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQpOyAvLy9cblxuICAgICAgb2Zmc2V0ICs9IHN0YXJ0O1xuXG4gICAgICBvY2N1cnJlbmNlcy5wdXNoKG9jY3VycmVuY2UpO1xuXG4gICAgICByZXN1bHQgPSBzdHJpbmcubWF0Y2godGhpcy5yZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiBvY2N1cnJlbmNlcztcbiAgfVxuXG4gIG1hdGNoKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC50ZXN0KHN0cmluZyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyhydWxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVUeXBlID0gcnVsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAocnVsZVR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgY29uc3QgcnVsZUdsb2IgPSBydWxlLmdldEdsb2IoKTtcblxuICAgICAgaWYgKHJ1bGVHbG9iID09PSB0aGlzLmdsb2IpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdsb2I7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGdsb2JSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBHTE9CX1RZUEUpIHtcbiAgICAgIGNvbnN0IHsgZ2xvYiwgcGF0dGVybiB9ID0ganNvbixcbiAgICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIGdsb2JSdWxlID0gbmV3IEdsb2JSdWxlKHR5cGUsIGdsb2IsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpIHtcbiAgICBsZXQgZ2xvYlJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZ2xvYiA9IGdsb2JGcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgZGlyZWN0b3J5KTtcblxuICAgIGlmIChnbG9iICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gR0xPQl9UWVBFLFxuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKSxcbiAgICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIGdsb2JSdWxlID0gbmV3IEdsb2JSdWxlKHR5cGUsIGdsb2IsIHBhdHRlcm4sIHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKSB7XG4gIGxldCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBbIC4uLmdsb2IgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgY29udmVydGVkID0gY29udmVydGVycy5zb21lKChjb252ZXJ0ZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnZlcnRlci5tYXRjaChjaGFyYWN0ZXJzKTtcblxuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBwYXR0ZXJuID0gYCR7cGF0dGVybn0ke3Jlc3VsdH1gO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFjb252ZXJ0ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhbmNob3JlZCkge1xuICAgIHBhdHRlcm4gPSBhZGRBbmNob3JzKHBhdHRlcm4pO1xuICB9XG5cbiAgcmV0dXJuIHBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIGdsb2JGcm9tU3RyaW5nQW5kRGlyZWN0b3J5KHN0cmluZywgZGlyZWN0b3J5KSB7XG4gIGxldCBnbG9iO1xuXG4gIGNvbnN0IHN0cmluZ0dsb2JMaXRlcmFsID0gaXNTdHJpbmdHbG9iTGl0ZXJhbChzdHJpbmcpO1xuXG4gIGlmIChzdHJpbmdHbG9iTGl0ZXJhbCkge1xuICAgIGNvbnN0IGdsb2JMaXRlcmFsID0gc3RyaW5nOyAvLy9cblxuICAgIGdsb2IgPSBnbG9iTGl0ZXJhbDsgIC8vL1xuXG4gICAgZ2xvYiA9IHJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoKGdsb2IpOyAgLy8vXG5cbiAgICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgICBnbG9iID0gYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2goZ2xvYik7IC8vL1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbmNob3JlZCA9IGZhbHNlLFxuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm5Gcm9tR2xvYkFuZEFuY2hvcmVkKGdsb2IsIGFuY2hvcmVkKTtcblxuICAgICAgbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZ2xvYiA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGdsb2IgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGdsb2I7XG59XG4iXSwibmFtZXMiOlsiR2xvYlJ1bGUiLCJ0eXBlIiwiZ2xvYiIsInBhdHRlcm4iLCJyZWdFeHAiLCJnZXRUeXBlIiwiZ2V0R2xvYiIsImdldFBhdHRlcm4iLCJnZXRSZWdFeHAiLCJ0b0pTT04iLCJqc29uIiwiZmluZCIsImxpbmUiLCJvY2N1cnJlbmNlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwib2Zmc2V0Iiwic3RyaW5nIiwicmVzdWx0IiwibWF0Y2giLCJvY2N1cnJlbmNlIiwiT2NjdXJyZW5jZSIsImZyb21SZXN1bHRBbmRPZmZzZXQiLCJlbmQiLCJnZXRFbmQiLCJzdGFydCIsInN1YnN0cmluZyIsInB1c2giLCJtYXRjaGVzIiwidGVzdCIsImlzRXF1YWxUbyIsInJ1bGUiLCJlcXVhbFRvIiwicnVsZVR5cGUiLCJydWxlR2xvYiIsImFzU3RyaW5nIiwiZnJvbUpTT04iLCJnbG9iUnVsZSIsIkdMT0JfVFlQRSIsIlJlZ0V4cCIsImZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsImFuY2hvcmVkIiwiZGlyZWN0b3J5IiwiZ2xvYkZyb21TdHJpbmdBbmREaXJlY3RvcnkiLCJwYXR0ZXJuRnJvbUdsb2JBbmRBbmNob3JlZCIsIkVNUFRZX1NUUklORyIsImNoYXJhY3RlcnMiLCJjb252ZXJ0ZWQiLCJjb252ZXJ0ZXJzIiwic29tZSIsImNvbnZlcnRlciIsImFkZEFuY2hvcnMiLCJzdHJpbmdHbG9iTGl0ZXJhbCIsImlzU3RyaW5nR2xvYkxpdGVyYWwiLCJnbG9iTGl0ZXJhbCIsInJlbW92ZVRyYWlsaW5nRm9yd2FyZFNsYXNoIiwiYWRkVHJhaWxpbmdGb3J3YXJkU2xhc2giLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7OzttRUFSRTttRUFDQTt1QkFFRzsyQkFDRzt5QkFDTzt3QkFDNEM7Ozs7OztBQUVqRSxNQUFNQTtJQUNuQixZQUFZQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxNQUFNLENBQUU7UUFDdkMsSUFBSSxDQUFDSCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSixPQUFPO0lBQ3JCO0lBRUFLLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtJQUNwQjtJQUVBSyxTQUFTO1FBQ1AsTUFBTVIsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxFQUN0Qk8sT0FBTztZQUNMVDtZQUNBQztZQUNBQztRQUNGO1FBRU4sT0FBT087SUFDVDtJQUVBQyxLQUFLQyxJQUFJLEVBQUU7UUFDVCxNQUFNQyxjQUFjLEVBQUUsRUFDaEJDLFVBQVVGLEtBQUtHLFVBQVU7UUFFL0IsSUFBSUMsU0FBUyxHQUNUQyxTQUFTSCxTQUNUSSxTQUFTRCxPQUFPRSxLQUFLLENBQUMsSUFBSSxDQUFDZixNQUFNO1FBRXJDLE1BQU9jLFdBQVcsS0FBTTtZQUN0QixNQUFNRSxhQUFhQyxtQkFB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