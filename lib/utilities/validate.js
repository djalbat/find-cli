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
    get validateGlobStringOrPattern () {
        return validateGlobStringOrPattern;
    },
    get validateIgnoreOrPermit () {
        return validateIgnoreOrPermit;
    },
    get validateIndex () {
        return validateIndex;
    },
    get validateRootDirectoryPath () {
        return validateRootDirectoryPath;
    }
});
const _rule = require("../utilities/rule");
function validateIndex(answer, lastIndex) {
    let valid = true;
    if (valid) {
        valid = /^[1-9][0-9]*$/.test(answer);
    }
    if (valid) {
        const index = Number(answer);
        valid = index <= lastIndex;
    }
    return valid;
}
function validateIgnoreOrPermit(answer) {
    return /^(:?ignore|permit|i|p)$/i.test(answer);
}
function validateRootDirectoryPath(answer) {
    let valid = true;
    if (valid) {
        valid = /^\.\.\/(?:[^/]*\/)+$/i.test(answer);
    }
    if (valid) {
        const directory = true, glob = globFromAnswerAndDirectory(answer, directory);
        if (glob === null) {
            valid = false;
        }
    }
    return valid;
}
function validateGlobStringOrPattern(answer, anchored, directory) {
    const string = answer, rule = (0, _rule.ruleFromStringAnchoredAndDirectory)(string, anchored, directory), valid = rule !== null;
    return valid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5kZXgoYW5zd2VyLCBsYXN0SW5kZXgpIHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICBpZiAodmFsaWQpIHtcbiAgICB2YWxpZCA9IC9eWzEtOV1bMC05XSokLy50ZXN0KGFuc3dlcik7XG4gIH1cblxuICBpZiAodmFsaWQpIHtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihhbnN3ZXIpO1xuXG4gICAgdmFsaWQgPSAoaW5kZXggPD0gbGFzdEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSWdub3JlT3JQZXJtaXQoYW5zd2VyKSB7IHJldHVybiAvXig6P2lnbm9yZXxwZXJtaXR8aXxwKSQvaS50ZXN0KGFuc3dlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUm9vdERpcmVjdG9yeVBhdGgoYW5zd2VyKSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgaWYgKHZhbGlkKSB7XG4gICAgdmFsaWQgPSAvXlxcLlxcLlxcLyg/OlteL10qXFwvKSskL2kudGVzdChhbnN3ZXIpO1xuICB9XG5cbiAgaWYgKHZhbGlkKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gdHJ1ZSxcbiAgICAgICAgICBnbG9iID0gZ2xvYkZyb21BbnN3ZXJBbmREaXJlY3RvcnkoYW5zd2VyLCBkaXJlY3RvcnkpO1xuXG4gICAgaWYgKGdsb2IgPT09IG51bGwpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuKGFuc3dlciwgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICBjb25zdCBzdHJpbmcgPSBhbnN3ZXIsICAvLy9cbiAgICAgICAgcnVsZSA9IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3Rvcnkoc3RyaW5nLCBhbmNob3JlZCwgZGlyZWN0b3J5KSxcbiAgICAgICAgdmFsaWQgPSAocnVsZSAhPT0gbnVsbClcblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuIiwidmFsaWRhdGVJZ25vcmVPclBlcm1pdCIsInZhbGlkYXRlSW5kZXgiLCJ2YWxpZGF0ZVJvb3REaXJlY3RvcnlQYXRoIiwiYW5zd2VyIiwibGFzdEluZGV4IiwidmFsaWQiLCJ0ZXN0IiwiaW5kZXgiLCJOdW1iZXIiLCJkaXJlY3RvcnkiLCJnbG9iIiwiZ2xvYkZyb21BbnN3ZXJBbmREaXJlY3RvcnkiLCJhbmNob3JlZCIsInN0cmluZyIsInJ1bGUiLCJydWxlRnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5Q2dCQTtlQUFBQTs7UUFyQkFDO2VBQUFBOztRQWhCQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7O3NCQXBCbUM7QUFFNUMsU0FBU0QsY0FBY0UsTUFBTSxFQUFFQyxTQUFTO0lBQzdDLElBQUlDLFFBQVE7SUFFWixJQUFJQSxPQUFPO1FBQ1RBLFFBQVEsZ0JBQWdCQyxJQUFJLENBQUNIO0lBQy9CO0lBRUEsSUFBSUUsT0FBTztRQUNULE1BQU1FLFFBQVFDLE9BQU9MO1FBRXJCRSxRQUFTRSxTQUFTSDtJQUNwQjtJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTTCx1QkFBdUJHLE1BQU07SUFBSSxPQUFPLDJCQUEyQkcsSUFBSSxDQUFDSDtBQUFTO0FBRTFGLFNBQVNELDBCQUEwQkMsTUFBTTtJQUM5QyxJQUFJRSxRQUFRO0lBRVosSUFBSUEsT0FBTztRQUNUQSxRQUFRLHdCQUF3QkMsSUFBSSxDQUFDSDtJQUN2QztJQUVBLElBQUlFLE9BQU87UUFDVCxNQUFNSSxZQUFZLE1BQ1pDLE9BQU9DLDJCQUEyQlIsUUFBUU07UUFFaEQsSUFBSUMsU0FBUyxNQUFNO1lBQ2pCTCxRQUFRO1FBQ1Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTTiw0QkFBNEJJLE1BQU0sRUFBRVMsUUFBUSxFQUFFSCxTQUFTO0lBQ3JFLE1BQU1JLFNBQVNWLFFBQ1RXLE9BQU9DLElBQUFBLHdDQUFrQyxFQUFDRixRQUFRRCxVQUFVSCxZQUM1REosUUFBU1MsU0FBUztJQUV4QixPQUFPVDtBQUNUIn0=