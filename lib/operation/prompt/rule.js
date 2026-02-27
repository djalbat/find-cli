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
const _necessary = require("necessary");
const _constants = require("../../constants");
const _validate = require("../../utilities/validate");
const _descriptions = require("../../descriptions");
const _rule = require("../../utilities/rule");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function rulePromptOperation(proceed, abort, context) {
    const { dryRun } = context;
    if (dryRun) {
        proceed();
        return;
    }
    const { interactive } = context;
    if (!interactive) {
        proceed();
        return;
    }
    const { rule, anchored, directory } = context, description = _descriptions.GLOB_STRING_OR_REGEX_DESCRIPTION, errorMessage = _messages.INVALID_GLOB_REGEX_OR_STRING_MESSAGE, validationFunction = (answer)=>{
        let valid = false;
        if (answer !== _constants.EMPTY_STRING) {
            valid = (0, _validate.validateGlobStringOrPattern)(answer, anchored, directory);
        }
        return valid;
    }, options = {
        description,
        errorMessage,
        validationFunction
    };
    if (rule !== null) {
        const ruleString = rule.asString(), initialAnswer = ruleString; ///
        Object.assign(options, {
            initialAnswer
        });
    }
    prompt(options, (answer)=>{
        const valid = answer !== null;
        if (!valid) {
            abort();
            return;
        }
        const string = answer, rule = (0, _rule.ruleFromStringAnchoredAndDirectory)(string, anchored, directory);
        Object.assign(context, {
            rule
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNoZWxsVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUdsb2JTdHJpbmdPclBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IElOVkFMSURfR0xPQl9SRUdFWF9PUl9TVFJJTkdfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IHByb21wdCB9ID0gc2hlbGxVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bGVQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBkcnlSdW4gfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGRyeVJ1bikge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgaW50ZXJhY3RpdmUgfSA9IGNvbnRleHQ7XG5cbiAgaWYgKCFpbnRlcmFjdGl2ZSkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcnVsZSwgYW5jaG9yZWQsIGRpcmVjdG9yeSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTixcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9HTE9CX1JFR0VYX09SX1NUUklOR19NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSAoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoYW5zd2VyICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIHZhbGlkID0gdmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuKGFuc3dlciwgYW5jaG9yZWQsIGRpcmVjdG9yeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKCksXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IHJ1bGVTdHJpbmc7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICBpbml0aWFsQW5zd2VyXG4gICAgfSk7XG4gIH1cblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHZhbGlkID0gKGFuc3dlciAhPT0gbnVsbCk7XG5cbiAgICBpZighdmFsaWQpIHtcbiAgICAgIGFib3J0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBhbnN3ZXIsICAvLy9cbiAgICAgICAgICBydWxlID0gcnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBydWxlXG4gICAgfSk7XG5cbiAgICBwcm9jZWVkKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJkcnlSdW4iLCJpbnRlcmFjdGl2ZSIsInJ1bGUiLCJhbmNob3JlZCIsImRpcmVjdG9yeSIsImRlc2NyaXB0aW9uIiwiR0xPQl9TVFJJTkdfT1JfUkVHRVhfREVTQ1JJUFRJT04iLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX0dMT0JfUkVHRVhfT1JfU1RSSU5HX01FU1NBR0UiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJhbnN3ZXIiLCJ2YWxpZCIsIkVNUFRZX1NUUklORyIsInZhbGlkYXRlR2xvYlN0cmluZ09yUGF0dGVybiIsIm9wdGlvbnMiLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJpbml0aWFsQW5zd2VyIiwiT2JqZWN0IiwiYXNzaWduIiwic3RyaW5nIiwicnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7OzsyQkFWTzsyQkFFRjswQkFDZTs4QkFDSztzQkFDRTswQkFDRTtBQUVyRCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztBQUVsQixTQUFTRixvQkFBb0JHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ2pFLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdEO0lBRW5CLElBQUlDLFFBQVE7UUFDVkg7UUFFQTtJQUNGO0lBRUEsTUFBTSxFQUFFSSxXQUFXLEVBQUUsR0FBR0Y7SUFFeEIsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCSjtRQUVBO0lBQ0Y7SUFFQSxNQUFNLEVBQUVLLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR0wsU0FDaENNLGNBQWNDLDhDQUFnQyxFQUM5Q0MsZUFBZUMsOENBQW9DLEVBQ25EQyxxQkFBcUIsQ0FBQ0M7UUFDcEIsSUFBSUMsUUFBUTtRQUVaLElBQUlELFdBQVdFLHVCQUFZLEVBQUU7WUFDM0JELFFBQVFFLElBQUFBLHFDQUEyQixFQUFDSCxRQUFRUCxVQUFVQztRQUN4RDtRQUVBLE9BQU9PO0lBQ1QsR0FDQUcsVUFBVTtRQUNSVDtRQUNBRTtRQUNBRTtJQUNGO0lBRU4sSUFBSVAsU0FBUyxNQUFNO1FBQ2pCLE1BQU1hLGFBQWFiLEtBQUtjLFFBQVEsSUFDMUJDLGdCQUFnQkYsWUFBWSxHQUFHO1FBRXJDRyxPQUFPQyxNQUFNLENBQUNMLFNBQVM7WUFDckJHO1FBQ0Y7SUFDRjtJQUVBdEIsT0FBT21CLFNBQVMsQ0FBQ0o7UUFDZixNQUFNQyxRQUFTRCxXQUFXO1FBRTFCLElBQUcsQ0FBQ0MsT0FBTztZQUNUYjtZQUVBO1FBQ0Y7UUFFQSxNQUFNc0IsU0FBU1YsUUFDVFIsT0FBT21CLElBQUFBLHdDQUFrQyxFQUFDRCxRQUFRakIsVUFBVUM7UUFFbEVjLE9BQU9DLE1BQU0sQ0FBQ3BCLFNBQVM7WUFDckJHO1FBQ0Y7UUFFQUw7SUFDRjtBQUNGIn0=