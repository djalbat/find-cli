"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return rulePromptOperation;
    }
});
var _necessary = require("necessary");
var _constants = require("../../constants");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _rule = require("../../utilities/rule");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function rulePromptOperation(proceed, abort, context) {
    var dryRun = context.dryRun;
    if (dryRun) {
        proceed();
        return;
    }
    var interactive = context.interactive;
    if (!interactive) {
        proceed();
        return;
    }
    var rule = context.rule, anchored = context.anchored, directory = context.directory, description = _descriptions.GLOB_STRING_OR_REGEX_DESCRIPTION, errorMessage = _messages.INVALID_GLOB_REGEX_OR_STRING_MESSAGE, validationFunction = function(answer) {
        var valid = false;
        if (answer !== _constants.EMPTY_STRING) {
            valid = (0, _validate.validateGlobStringOrPattern)(answer, anchored, directory);
        }
        return valid;
    }, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    if (rule !== null) {
        var ruleString = rule.asString(), initialAnswer = ruleString; ///
        Object.assign(options, {
            initialAnswer: initialAnswer
        });
    }
    prompt(options, function(answer) {
        var valid = answer !== null;
        if (!valid) {
            abort();
            return;
        }
        var string = answer, rule = (0, _rule.ruleFromStringAnchoredAndDirectory)(string, anchored, directory);
        Object.assign(context, {
            rule: rule
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNoZWxsVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUdsb2JTdHJpbmdPclBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IElOVkFMSURfR0xPQl9SRUdFWF9PUl9TVFJJTkdfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IHByb21wdCB9ID0gc2hlbGxVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bGVQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBkcnlSdW4gfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGRyeVJ1bikge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgaW50ZXJhY3RpdmUgfSA9IGNvbnRleHQ7XG5cbiAgaWYgKCFpbnRlcmFjdGl2ZSkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcnVsZSwgYW5jaG9yZWQsIGRpcmVjdG9yeSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTixcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9HTE9CX1JFR0VYX09SX1NUUklOR19NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSAoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoYW5zd2VyICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIHZhbGlkID0gdmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuKGFuc3dlciwgYW5jaG9yZWQsIGRpcmVjdG9yeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKCksXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IHJ1bGVTdHJpbmc7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICBpbml0aWFsQW5zd2VyXG4gICAgfSk7XG4gIH1cblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHZhbGlkID0gKGFuc3dlciAhPT0gbnVsbCk7XG5cbiAgICBpZighdmFsaWQpIHtcbiAgICAgIGFib3J0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBhbnN3ZXIsICAvLy9cbiAgICAgICAgICBydWxlID0gcnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBydWxlXG4gICAgfSk7XG5cbiAgICBwcm9jZWVkKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJkcnlSdW4iLCJpbnRlcmFjdGl2ZSIsInJ1bGUiLCJhbmNob3JlZCIsImRpcmVjdG9yeSIsImRlc2NyaXB0aW9uIiwiR0xPQl9TVFJJTkdfT1JfUkVHRVhfREVTQ1JJUFRJT04iLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX0dMT0JfUkVHRVhfT1JfU1RSSU5HX01FU1NBR0UiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJhbnN3ZXIiLCJ2YWxpZCIsIkVNUFRZX1NUUklORyIsInZhbGlkYXRlR2xvYlN0cmluZ09yUGF0dGVybiIsIm9wdGlvbnMiLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJpbml0aWFsQW5zd2VyIiwiT2JqZWN0IiwiYXNzaWduIiwic3RyaW5nIiwicnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozt5QkFWTzt5QkFFRjt3QkFDZTs0QkFDSztvQkFDRTt3QkFDRTtBQUVyRCxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLFNBQVNELG9CQUFvQkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDakUsSUFBTSxBQUFFQyxTQUFXRCxRQUFYQztJQUVSLElBQUlBLFFBQVE7UUFDVkg7UUFFQTtJQUNGO0lBRUEsSUFBTSxBQUFFSSxjQUFnQkYsUUFBaEJFO0lBRVIsSUFBSSxDQUFDQSxhQUFhO1FBQ2hCSjtRQUVBO0lBQ0Y7SUFFQSxJQUFRSyxPQUE4QkgsUUFBOUJHLE1BQU1DLFdBQXdCSixRQUF4QkksVUFBVUMsWUFBY0wsUUFBZEssV0FDbEJDLGNBQWNDLDhDQUFnQyxFQUM5Q0MsZUFBZUMsOENBQW9DLEVBQ25EQyxxQkFBcUIsU0FBQ0M7UUFDcEIsSUFBSUMsUUFBUTtRQUVaLElBQUlELFdBQVdFLHVCQUFZLEVBQUU7WUFDM0JELFFBQVFFLElBQUFBLHFDQUEyQixFQUFDSCxRQUFRUCxVQUFVQztRQUN4RDtRQUVBLE9BQU9PO0lBQ1QsR0FDQUcsVUFBVTtRQUNSVCxhQUFBQTtRQUNBRSxjQUFBQTtRQUNBRSxvQkFBQUE7SUFDRjtJQUVOLElBQUlQLFNBQVMsTUFBTTtRQUNqQixJQUFNYSxhQUFhYixLQUFLYyxRQUFRLElBQzFCQyxnQkFBZ0JGLFlBQVksR0FBRztRQUVyQ0csT0FBT0MsTUFBTSxDQUFDTCxTQUFTO1lBQ3JCRyxlQUFBQTtRQUNGO0lBQ0Y7SUFFQXRCLE9BQU9tQixTQUFTLFNBQUNKO1FBQ2YsSUFBTUMsUUFBU0QsV0FBVztRQUUxQixJQUFHLENBQUNDLE9BQU87WUFDVGI7WUFFQTtRQUNGO1FBRUEsSUFBTXNCLFNBQVNWLFFBQ1RSLE9BQU9tQixJQUFBQSx3Q0FBa0MsRUFBQ0QsUUFBUWpCLFVBQVVDO1FBRWxFYyxPQUFPQyxNQUFNLENBQUNwQixTQUFTO1lBQ3JCRyxNQUFBQTtRQUNGO1FBRUFMO0lBQ0Y7QUFDRiJ9