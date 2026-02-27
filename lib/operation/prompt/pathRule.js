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
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _descriptions = require("../../descriptions");
const _rule = require("../../utilities/rule");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function pathRulePromptOperation(proceed, abort, context) {
    const { path, directory } = context, anchored = true, description = _descriptions.GLOB_STRING_OR_REGEX_DESCRIPTION, errorMessage = _messages.INVALID_GLOB_REGEX_OR_STRING_MESSAGE, initialAnswer = path, validationFunction = (answer)=>{
        const valid = (0, _validate.validateGlobStringOrPattern)(answer, anchored, directory);
        return valid;
    }, options = {
        description,
        errorMessage,
        initialAnswer,
        validationFunction
    };
    prompt(options, (answer)=>{
        const valid = answer !== null;
        if (!valid) {
            abort();
            return;
        }
        const string = answer, rule = (0, _rule.ruleFromStringAnchoredAndDirectory)(string, anchored, directory), pathRule = rule; ///
        Object.assign(context, {
            pathRule
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3BhdGhSdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgR0xPQl9TVFJJTkdfT1JfUkVHRVhfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBydWxlRnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBJTlZBTElEX0dMT0JfUkVHRVhfT1JfU1RSSU5HX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXRoUnVsZVByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHBhdGgsIGRpcmVjdG9yeSB9ID0gY29udGV4dCxcbiAgICAgICAgYW5jaG9yZWQgPSB0cnVlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IEdMT0JfU1RSSU5HX09SX1JFR0VYX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0dMT0JfUkVHRVhfT1JfU1RSSU5HX01FU1NBR0UsXG4gICAgICAgIGluaXRpYWxBbnN3ZXIgPSBwYXRoLCAgLy8vXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IChhbnN3ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlR2xvYlN0cmluZ09yUGF0dGVybihhbnN3ZXIsIGFuY2hvcmVkLCBkaXJlY3RvcnkpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBpbml0aWFsQW5zd2VyLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgY29uc3QgdmFsaWQgPSAoYW5zd2VyICE9PSBudWxsKTtcblxuICAgIGlmKCF2YWxpZCkge1xuICAgICAgYWJvcnQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IGFuc3dlciwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBydWxlRnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5KHN0cmluZywgYW5jaG9yZWQsIGRpcmVjdG9yeSksXG4gICAgICAgICAgcGF0aFJ1bGUgPSBydWxlOyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhdGhSdWxlXG4gICAgfSk7XG5cbiAgICBwcm9jZWVkKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInBhdGhSdWxlUHJvbXB0T3BlcmF0aW9uIiwicHJvbXB0Iiwic2hlbGxVdGlsaXRpZXMiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwicGF0aCIsImRpcmVjdG9yeSIsImFuY2hvcmVkIiwiZGVzY3JpcHRpb24iLCJHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfR0xPQl9SRUdFWF9PUl9TVFJJTkdfTUVTU0FHRSIsImluaXRpYWxBbnN3ZXIiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJhbnN3ZXIiLCJ2YWxpZCIsInZhbGlkYXRlR2xvYlN0cmluZ09yUGF0dGVybiIsIm9wdGlvbnMiLCJzdHJpbmciLCJydWxlIiwicnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSIsInBhdGhSdWxlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzJCQVRPOzBCQUVhOzhCQUNLO3NCQUNFOzBCQUNFO0FBRXJELE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRWxCLFNBQVNGLHdCQUF3QkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDckUsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHRixTQUN0QkcsV0FBVyxNQUNYQyxjQUFjQyw4Q0FBZ0MsRUFDOUNDLGVBQWVDLDhDQUFvQyxFQUNuREMsZ0JBQWdCUCxNQUNoQlEscUJBQXFCLENBQUNDO1FBQ3BCLE1BQU1DLFFBQVFDLElBQUFBLHFDQUEyQixFQUFDRixRQUFRUCxVQUFVRDtRQUU1RCxPQUFPUztJQUNULEdBQ0FFLFVBQVU7UUFDUlQ7UUFDQUU7UUFDQUU7UUFDQUM7SUFDRjtJQUVOYixPQUFPaUIsU0FBUyxDQUFDSDtRQUNmLE1BQU1DLFFBQVNELFdBQVc7UUFFMUIsSUFBRyxDQUFDQyxPQUFPO1lBQ1RaO1lBRUE7UUFDRjtRQUVBLE1BQU1lLFNBQVNKLFFBQ1RLLE9BQU9DLElBQUFBLHdDQUFrQyxFQUFDRixRQUFRWCxVQUFVRCxZQUM1RGUsV0FBV0YsTUFBTyxHQUFHO1FBRTNCRyxPQUFPQyxNQUFNLENBQUNuQixTQUFTO1lBQ3JCaUI7UUFDRjtRQUVBbkI7SUFDRjtBQUNGIn0=