"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ruleOperation;
    }
});
var _rule = require("../utilities/rule");
function ruleOperation(proceed, abort, context) {
    var dryRun = context.dryRun;
    if (dryRun) {
        proceed();
        return;
    }
    var previous = context.previous, interactive = context.interactive;
    if (previous || interactive) {
        proceed();
        return;
    }
    var string = context.string, anchored = true, directory = false, rule = (0, _rule.ruleFromStringAnchoredAndDirectory)(string, anchored, directory);
    if (rule === null) {
        abort();
        return;
    }
    Object.assign(context, {
        rule: rule
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydWxlT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgZHJ5UnVuIH0gPSBjb250ZXh0O1xuXG4gIGlmIChkcnlSdW4pIHtcbiAgICBwcm9jZWVkKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHByZXZpb3VzLCBpbnRlcmFjdGl2ZSB9ID0gY29udGV4dDtcblxuICBpZiAocHJldmlvdXMgfHwgaW50ZXJhY3RpdmUpIHtcbiAgICBwcm9jZWVkKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHN0cmluZyB9ID0gY29udGV4dCxcbiAgICAgICAgYW5jaG9yZWQgPSB0cnVlLFxuICAgICAgICBkaXJlY3RvcnkgPSBmYWxzZSxcbiAgICAgICAgcnVsZSA9IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3Rvcnkoc3RyaW5nLCBhbmNob3JlZCwgZGlyZWN0b3J5KTtcblxuICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgIGFib3J0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBydWxlXG4gIH0pO1xuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJydWxlT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImRyeVJ1biIsInByZXZpb3VzIiwiaW50ZXJhY3RpdmUiLCJzdHJpbmciLCJhbmNob3JlZCIsImRpcmVjdG9yeSIsInJ1bGUiLCJydWxlRnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O29CQUYyQjtBQUVwQyxTQUFTQSxjQUFjQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUMzRCxJQUFNLEFBQUVDLFNBQVdELFFBQVhDO0lBRVIsSUFBSUEsUUFBUTtRQUNWSDtRQUVBO0lBQ0Y7SUFFQSxJQUFRSSxXQUEwQkYsUUFBMUJFLFVBQVVDLGNBQWdCSCxRQUFoQkc7SUFFbEIsSUFBSUQsWUFBWUMsYUFBYTtRQUMzQkw7UUFFQTtJQUNGO0lBRUEsSUFBTSxBQUFFTSxTQUFXSixRQUFYSSxRQUNGQyxXQUFXLE1BQ1hDLFlBQVksT0FDWkMsT0FBT0MsSUFBQUEsd0NBQWtDLEVBQUNKLFFBQVFDLFVBQVVDO0lBRWxFLElBQUlDLFNBQVMsTUFBTTtRQUNqQlI7UUFFQTtJQUNGO0lBRUFVLE9BQU9DLE1BQU0sQ0FBQ1YsU0FBUztRQUNyQk8sTUFBQUE7SUFDRjtJQUVBVDtBQUNGIn0=