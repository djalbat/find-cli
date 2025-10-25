"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return pathRulePromptOperation;
    }
});
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _rule = require("../../utilities/rule");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function pathRulePromptOperation(proceed, abort, context) {
    var path = context.path, directory = context.directory, anchored = true, description = _descriptions.GLOB_STRING_OR_REGEX_DESCRIPTION, errorMessage = _messages.INVALID_GLOB_REGEX_OR_STRING_MESSAGE, initialAnswer = path, validationFunction = function(answer) {
        var valid = (0, _validate.validateGlobStringOrPattern)(answer, anchored, directory);
        return valid;
    }, options = {
        description: description,
        errorMessage: errorMessage,
        initialAnswer: initialAnswer,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var valid = answer !== null;
        if (!valid) {
            abort();
            return;
        }
        var string = answer, rule = (0, _rule.ruleFromStringAnchoredAndDirectory)(string, anchored, directory), pathRule = rule; ///
        Object.assign(context, {
            pathRule: pathRule
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3BhdGhSdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgR0xPQl9TVFJJTkdfT1JfUkVHRVhfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBydWxlRnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBJTlZBTElEX0dMT0JfUkVHRVhfT1JfU1RSSU5HX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXRoUnVsZVByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHBhdGgsIGRpcmVjdG9yeSB9ID0gY29udGV4dCxcbiAgICAgICAgYW5jaG9yZWQgPSB0cnVlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IEdMT0JfU1RSSU5HX09SX1JFR0VYX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0dMT0JfUkVHRVhfT1JfU1RSSU5HX01FU1NBR0UsXG4gICAgICAgIGluaXRpYWxBbnN3ZXIgPSBwYXRoLCAgLy8vXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IChhbnN3ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlR2xvYlN0cmluZ09yUGF0dGVybihhbnN3ZXIsIGFuY2hvcmVkLCBkaXJlY3RvcnkpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBpbml0aWFsQW5zd2VyLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgY29uc3QgdmFsaWQgPSAoYW5zd2VyICE9PSBudWxsKTtcblxuICAgIGlmKCF2YWxpZCkge1xuICAgICAgYWJvcnQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IGFuc3dlciwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBydWxlRnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSksXG4gICAgICAgICAgcGF0aFJ1bGUgPSBydWxlOyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhdGhSdWxlXG4gICAgfSk7XG5cbiAgICBwcm9jZWVkKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInBhdGhSdWxlUHJvbXB0T3BlcmF0aW9uIiwicHJvbXB0Iiwic2hlbGxVdGlsaXRpZXMiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwicGF0aCIsImRpcmVjdG9yeSIsImFuY2hvcmVkIiwiZGVzY3JpcHRpb24iLCJHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfR0xPQl9SRUdFWF9PUl9TVFJJTkdfTUVTU0FHRSIsImluaXRpYWxBbnN3ZXIiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJhbnN3ZXIiLCJ2YWxpZCIsInZhbGlkYXRlR2xvYlN0cmluZ09yUGF0dGVybiIsIm9wdGlvbnMiLCJzdHJpbmciLCJydWxlIiwicnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsInBhdGhSdWxlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7O3lCQVRPO3dCQUVhOzRCQUNLO29CQUNFO3dCQUNFO0FBRXJELElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sU0FBU0Qsd0JBQXdCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNyRSxJQUFRQyxPQUFvQkQsUUFBcEJDLE1BQU1DLFlBQWNGLFFBQWRFLFdBQ1JDLFdBQVcsTUFDWEMsY0FBY0MsOENBQWdDLEVBQzlDQyxlQUFlQyw4Q0FBb0MsRUFDbkRDLGdCQUFnQlAsTUFDaEJRLHFCQUFxQixTQUFDQztRQUNwQixJQUFNQyxRQUFRQyxJQUFBQSxxQ0FBMkIsRUFBQ0YsUUFBUVAsVUFBVUQ7UUFFNUQsT0FBT1M7SUFDVCxHQUNBRSxVQUFVO1FBQ1JULGFBQUFBO1FBQ0FFLGNBQUFBO1FBQ0FFLGVBQUFBO1FBQ0FDLG9CQUFBQTtJQUNGO0lBRU5iLE9BQU9pQixTQUFTLFNBQUNIO1FBQ2YsSUFBTUMsUUFBU0QsV0FBVztRQUUxQixJQUFHLENBQUNDLE9BQU87WUFDVFo7WUFFQTtRQUNGO1FBRUEsSUFBTWUsU0FBU0osUUFDVEssT0FBT0MsSUFBQUEsd0NBQWtDLEVBQUNGLFFBQVFYLFVBQVVELFlBQzVEZSxXQUFXRixNQUFPLEdBQUc7UUFFM0JHLE9BQU9DLE1BQU0sQ0FBQ25CLFNBQVM7WUFDckJpQixVQUFBQTtRQUNGO1FBRUFuQjtJQUNGO0FBQ0YifQ==