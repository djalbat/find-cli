"use strict";
import { selectPreviousRule } from "../../utilities/prompt";
import { retrievePreviousRules } from "../../configuration";
import { NO_PREVIOUS_RULES_MESSAGE } from "../../messages";
export default function previousRulePromptOperation(proceed, abort, context) {
    var dryRun = context.dryRun;
    if (dryRun) {
        proceed();
        return;
    }
    var previous = context.previous;
    if (!previous) {
        proceed();
        return;
    }
    var previousRules = retrievePreviousRules(), previousRulesLength = previousRules.length;
    if (previousRulesLength === 0) {
        console.log(NO_PREVIOUS_RULES_MESSAGE);
        abort();
        return;
    }
    selectPreviousRule(previousRules, function(previousRule) {
        if (previousRule === null) {
            abort();
            return;
        }
        var rule = previousRule; ///
        Object.assign(context, {
            rule: rule
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3ByZXZpb3VzUnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2VsZWN0UHJldmlvdXNSdWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wcm9tcHRcIjtcbmltcG9ydCB7IHJldHJpZXZlUHJldmlvdXNSdWxlcyB9IGZyb20gXCIuLi8uLi9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBOT19QUkVWSU9VU19SVUxFU19NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZpb3VzUnVsZVByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IGRyeVJ1biB9ID0gY29udGV4dDtcblxuICBpZiAoZHJ5UnVuKSB7XG4gICAgcHJvY2VlZCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBwcmV2aW91cyB9ID0gY29udGV4dDtcblxuICBpZiAoIXByZXZpb3VzKSB7XG4gICAgcHJvY2VlZCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXNSdWxlcyA9IHJldHJpZXZlUHJldmlvdXNSdWxlcygpLFxuICAgICAgICBwcmV2aW91c1J1bGVzTGVuZ3RoID0gcHJldmlvdXNSdWxlcy5sZW5ndGg7XG5cbiAgaWYgKHByZXZpb3VzUnVsZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zb2xlLmxvZyhOT19QUkVWSU9VU19SVUxFU19NRVNTQUdFKTtcblxuICAgIGFib3J0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzZWxlY3RQcmV2aW91c1J1bGUocHJldmlvdXNSdWxlcywgKHByZXZpb3VzUnVsZSkgPT4ge1xuICAgIGlmIChwcmV2aW91c1J1bGUgPT09IG51bGwpIHtcbiAgICAgIGFib3J0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gcHJldmlvdXNSdWxlOyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHJ1bGVcbiAgICB9KTtcblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsic2VsZWN0UHJldmlvdXNSdWxlIiwicmV0cmlldmVQcmV2aW91c1J1bGVzIiwiTk9fUFJFVklPVVNfUlVMRVNfTUVTU0FHRSIsInByZXZpb3VzUnVsZVByb21wdE9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJkcnlSdW4iLCJwcmV2aW91cyIsInByZXZpb3VzUnVsZXMiLCJwcmV2aW91c1J1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInByZXZpb3VzUnVsZSIsInJ1bGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsU0FBU0Esa0JBQWtCLFFBQVEseUJBQXlCO0FBQzVELFNBQVNDLHFCQUFxQixRQUFRLHNCQUFzQjtBQUM1RCxTQUFTQyx5QkFBeUIsUUFBUSxpQkFBaUI7QUFFM0QsZUFBZSxTQUFTQyw0QkFBNEJDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3pFLElBQU0sQUFBRUMsU0FBV0QsUUFBWEM7SUFFUixJQUFJQSxRQUFRO1FBQ1ZIO1FBRUE7SUFDRjtJQUVBLElBQU0sQUFBRUksV0FBYUYsUUFBYkU7SUFFUixJQUFJLENBQUNBLFVBQVU7UUFDYko7UUFFQTtJQUNGO0lBRUEsSUFBTUssZ0JBQWdCUix5QkFDaEJTLHNCQUFzQkQsY0FBY0UsTUFBTTtJQUVoRCxJQUFJRCx3QkFBd0IsR0FBRztRQUM3QkUsUUFBUUMsR0FBRyxDQUFDWDtRQUVaRztRQUVBO0lBQ0Y7SUFFQUwsbUJBQW1CUyxlQUFlLFNBQUNLO1FBQ2pDLElBQUlBLGlCQUFpQixNQUFNO1lBQ3pCVDtZQUVBO1FBQ0Y7UUFFQSxJQUFNVSxPQUFPRCxjQUFlLEdBQUc7UUFFL0JFLE9BQU9DLE1BQU0sQ0FBQ1gsU0FBUztZQUNyQlMsTUFBQUE7UUFDRjtRQUVBWDtJQUNGO0FBQ0YifQ==