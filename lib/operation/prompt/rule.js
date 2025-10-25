"use strict";
import { shellUtilities } from "necessary";
import { EMPTY_STRING } from "../../constants";
import { validateGlobStringOrPattern } from "../../utilities/validate";
import { GLOB_STRING_OR_REGEX_DESCRIPTION } from "../../descriptions";
import { ruleFromStringAnchoredAndDirectory } from "../../utilities/rule";
import { INVALID_GLOB_REGEX_OR_STRING_MESSAGE } from "../../messages";
var prompt = shellUtilities.prompt;
export default function rulePromptOperation(proceed, abort, context) {
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
    var rule = context.rule, anchored = context.anchored, directory = context.directory, description = GLOB_STRING_OR_REGEX_DESCRIPTION, errorMessage = INVALID_GLOB_REGEX_OR_STRING_MESSAGE, validationFunction = function(answer) {
        var valid = false;
        if (answer !== EMPTY_STRING) {
            valid = validateGlobStringOrPattern(answer, anchored, directory);
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
        var string = answer, rule = ruleFromStringAnchoredAndDirectory(string, anchored, directory);
        Object.assign(context, {
            rule: rule
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNoZWxsVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUdsb2JTdHJpbmdPclBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IHJ1bGVGcm9tU3RyaW5nQW5jaG9yZWRBbmREaXJlY3RvcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IElOVkFMSURfR0xPQl9SRUdFWF9PUl9TVFJJTkdfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IHByb21wdCB9ID0gc2hlbGxVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bGVQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBkcnlSdW4gfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGRyeVJ1bikge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgaW50ZXJhY3RpdmUgfSA9IGNvbnRleHQ7XG5cbiAgaWYgKCFpbnRlcmFjdGl2ZSkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcnVsZSwgYW5jaG9yZWQsIGRpcmVjdG9yeSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBHTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTixcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9HTE9CX1JFR0VYX09SX1NUUklOR19NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSAoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoYW5zd2VyICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIHZhbGlkID0gdmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuKGFuc3dlciwgYW5jaG9yZWQsIGRpcmVjdG9yeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKCksXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IHJ1bGVTdHJpbmc7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICBpbml0aWFsQW5zd2VyXG4gICAgfSk7XG4gIH1cblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHZhbGlkID0gKGFuc3dlciAhPT0gbnVsbCk7XG5cbiAgICBpZighdmFsaWQpIHtcbiAgICAgIGFib3J0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBhbnN3ZXIsICAvLy9cbiAgICAgICAgICBydWxlID0gcnVsZUZyb21TdHJpbmdBbmNob3JlZEFuZERpcmVjdG9yeShzdHJpbmcsIGFuY2hvcmVkLCBkaXJlY3RvcnkpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBydWxlXG4gICAgfSk7XG5cbiAgICBwcm9jZWVkKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInNoZWxsVXRpbGl0aWVzIiwiRU1QVFlfU1RSSU5HIiwidmFsaWRhdGVHbG9iU3RyaW5nT3JQYXR0ZXJuIiwiR0xPQl9TVFJJTkdfT1JfUkVHRVhfREVTQ1JJUFRJT04iLCJydWxlRnJvbVN0cmluZ0FuY2hvcmVkQW5kRGlyZWN0b3J5IiwiSU5WQUxJRF9HTE9CX1JFR0VYX09SX1NUUklOR19NRVNTQUdFIiwicHJvbXB0IiwicnVsZVByb21wdE9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJkcnlSdW4iLCJpbnRlcmFjdGl2ZSIsInJ1bGUiLCJhbmNob3JlZCIsImRpcmVjdG9yeSIsImRlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwiYW5zd2VyIiwidmFsaWQiLCJvcHRpb25zIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwiaW5pdGlhbEFuc3dlciIsIk9iamVjdCIsImFzc2lnbiIsInN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxTQUFTQSxjQUFjLFFBQVEsWUFBWTtBQUUzQyxTQUFTQyxZQUFZLFFBQVEsa0JBQWtCO0FBQy9DLFNBQVNDLDJCQUEyQixRQUFRLDJCQUEyQjtBQUN2RSxTQUFTQyxnQ0FBZ0MsUUFBUSxxQkFBcUI7QUFDdEUsU0FBU0Msa0NBQWtDLFFBQVEsdUJBQXVCO0FBQzFFLFNBQVNDLG9DQUFvQyxRQUFRLGlCQUFpQjtBQUV0RSxJQUFNLEFBQUVDLFNBQVdOLGVBQVhNO0FBRVIsZUFBZSxTQUFTQyxvQkFBb0JDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ2pFLElBQU0sQUFBRUMsU0FBV0QsUUFBWEM7SUFFUixJQUFJQSxRQUFRO1FBQ1ZIO1FBRUE7SUFDRjtJQUVBLElBQU0sQUFBRUksY0FBZ0JGLFFBQWhCRTtJQUVSLElBQUksQ0FBQ0EsYUFBYTtRQUNoQko7UUFFQTtJQUNGO0lBRUEsSUFBUUssT0FBOEJILFFBQTlCRyxNQUFNQyxXQUF3QkosUUFBeEJJLFVBQVVDLFlBQWNMLFFBQWRLLFdBQ2xCQyxjQUFjYixrQ0FDZGMsZUFBZVosc0NBQ2ZhLHFCQUFxQixTQUFDQztRQUNwQixJQUFJQyxRQUFRO1FBRVosSUFBSUQsV0FBV2xCLGNBQWM7WUFDM0JtQixRQUFRbEIsNEJBQTRCaUIsUUFBUUwsVUFBVUM7UUFDeEQ7UUFFQSxPQUFPSztJQUNULEdBQ0FDLFVBQVU7UUFDUkwsYUFBQUE7UUFDQUMsY0FBQUE7UUFDQUMsb0JBQUFBO0lBQ0Y7SUFFTixJQUFJTCxTQUFTLE1BQU07UUFDakIsSUFBTVMsYUFBYVQsS0FBS1UsUUFBUSxJQUMxQkMsZ0JBQWdCRixZQUFZLEdBQUc7UUFFckNHLE9BQU9DLE1BQU0sQ0FBQ0wsU0FBUztZQUNyQkcsZUFBQUE7UUFDRjtJQUNGO0lBRUFsQixPQUFPZSxTQUFTLFNBQUNGO1FBQ2YsSUFBTUMsUUFBU0QsV0FBVztRQUUxQixJQUFHLENBQUNDLE9BQU87WUFDVFg7WUFFQTtRQUNGO1FBRUEsSUFBTWtCLFNBQVNSLFFBQ1ROLE9BQU9ULG1DQUFtQ3VCLFFBQVFiLFVBQVVDO1FBRWxFVSxPQUFPQyxNQUFNLENBQUNoQixTQUFTO1lBQ3JCRyxNQUFBQTtRQUNGO1FBRUFMO0lBQ0Y7QUFDRiJ9