"use strict";
import { ruleFromStringAnchoredAndDirectory } from "../utilities/rule";
export function validateIndex(answer, lastIndex) {
    var valid = true;
    if (valid) {
        valid = /^[1-9][0-9]*$/.test(answer);
    }
    if (valid) {
        var index = Number(answer);
        valid = index <= lastIndex;
    }
    return valid;
}
export function validateIgnoreOrPermit(answer) {
    return /^(:?ignore|permit|i|p)$/i.test(answer);
}
export function validateRootDirectoryPath(answer) {
    var valid = true;
    if (valid) {
        valid = /^\.\.\/(?:[^/]*\/)+$/i.test(answer);
    }
    if (valid) {
        var directory = true, glob = globFromAnswerAndDirectory(answer, directory);
        if (glob === null) {
            valid = false;
        }
    }
    return valid;
}
export function validateGlobStringOrPattern(answer, anchored, directory) {
    var string = answer, rule = ruleFromStringAnchoredAndDirectory(string, anchored, directory), valid = rule !== null;
    return valid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5kZXgoYW5zd2VyLCBsYXN0SW5kZXgpIHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICBpZiAodmFsaWQpIHtcbiAgICB2YWxpZCA9IC9eWzEtOV1bMC05XSokLy50ZXN0KGFuc3dlcik7XG4gIH1cblxuICBpZiAodmFsaWQpIHtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihhbnN3ZXIpO1xuXG4gICAgdmFsaWQgPSAoaW5kZXggPD0gbGFzdEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSWdub3JlT3JQZXJtaXQoYW5zd2VyKSB7IHJldHVybiAvXig6P2lnbm9yZXxwZXJtaXR8aXxwKSQvaS50ZXN0KGFuc3dlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUm9vdERpcmVjdG9yeVBhdGgoYW5zd2VyKSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgaWYgKHZhbGlkKSB7XG4gICAgdmFsaWQgPSAvXlxcLlxcLlxcLyg/OlteL10qXFwvKSskL2kudGVzdChhbnN3ZXIpO1xuICB9XG5cbiAgaWYgKHZhbGlkKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gdHJ1ZSxcbiAgICAgICAgICBnbG9iID0gZ2xvYkZyb21BbnN3ZXJBbmREaXJlY3RvcnkoYW5zd2VyLCBkaXJlY3RvcnkpO1xuXG4gICAgaWYgKGdsb2IgPT09IG51bGwpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuKGFuc3dlciwgYW5jaG9yZWQsIGRpcmVjdG9yeSkge1xuICBjb25zdCBzdHJpbmcgPSBhbnN3ZXIsICAvLy9cbiAgICAgICAgcnVsZSA9IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3Rvcnkoc3RyaW5nLCBhbmNob3JlZCwgZGlyZWN0b3J5KSxcbiAgICAgICAgdmFsaWQgPSAocnVsZSAhPT0gbnVsbClcblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXSwibmFtZXMiOlsicnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsInZhbGlkYXRlSW5kZXgiLCJhbnN3ZXIiLCJsYXN0SW5kZXgiLCJ2YWxpZCIsInRlc3QiLCJpbmRleCIsIk51bWJlciIsInZhbGlkYXRlSWdub3JlT3JQZXJtaXQiLCJ2YWxpZGF0ZVJvb3REaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5IiwiZ2xvYiIsImdsb2JGcm9tQW5zd2VyQW5kRGlyZWN0b3J5IiwidmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuIiwiYW5jaG9yZWQiLCJzdHJpbmciLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLGtDQUFrQyxRQUFRLG9CQUFvQjtBQUV2RSxPQUFPLFNBQVNDLGNBQWNDLE1BQU0sRUFBRUMsU0FBUztJQUM3QyxJQUFJQyxRQUFRO0lBRVosSUFBSUEsT0FBTztRQUNUQSxRQUFRLGdCQUFnQkMsSUFBSSxDQUFDSDtJQUMvQjtJQUVBLElBQUlFLE9BQU87UUFDVCxJQUFNRSxRQUFRQyxPQUFPTDtRQUVyQkUsUUFBU0UsU0FBU0g7SUFDcEI7SUFFQSxPQUFPQztBQUNUO0FBRUEsT0FBTyxTQUFTSSx1QkFBdUJOLE1BQU07SUFBSSxPQUFPLDJCQUEyQkcsSUFBSSxDQUFDSDtBQUFTO0FBRWpHLE9BQU8sU0FBU08sMEJBQTBCUCxNQUFNO0lBQzlDLElBQUlFLFFBQVE7SUFFWixJQUFJQSxPQUFPO1FBQ1RBLFFBQVEsd0JBQXdCQyxJQUFJLENBQUNIO0lBQ3ZDO0lBRUEsSUFBSUUsT0FBTztRQUNULElBQU1NLFlBQVksTUFDWkMsT0FBT0MsMkJBQTJCVixRQUFRUTtRQUVoRCxJQUFJQyxTQUFTLE1BQU07WUFDakJQLFFBQVE7UUFDVjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLE9BQU8sU0FBU1MsNEJBQTRCWCxNQUFNLEVBQUVZLFFBQVEsRUFBRUosU0FBUztJQUNyRSxJQUFNSyxTQUFTYixRQUNUYyxPQUFPaEIsbUNBQW1DZSxRQUFRRCxVQUFVSixZQUM1RE4sUUFBU1ksU0FBUztJQUV4QixPQUFPWjtBQUNUIn0=