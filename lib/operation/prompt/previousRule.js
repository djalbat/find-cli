"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return previousRulePromptOperation;
    }
});
const _prompt = require("../../utilities/prompt");
const _configuration = require("../../configuration");
const _messages = require("../../messages");
function previousRulePromptOperation(proceed, abort, context) {
    const { dryRun } = context;
    if (dryRun) {
        proceed();
        return;
    }
    const { previous } = context;
    if (!previous) {
        proceed();
        return;
    }
    const previousRules = (0, _configuration.retrievePreviousRules)(), previousRulesLength = previousRules.length;
    if (previousRulesLength === 0) {
        console.log(_messages.NO_PREVIOUS_RULES_MESSAGE);
        abort();
        return;
    }
    (0, _prompt.selectPreviousRule)(previousRules, (previousRule)=>{
        if (previousRule === null) {
            abort();
            return;
        }
        const rule = previousRule; ///
        Object.assign(context, {
            rule
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3ByZXZpb3VzUnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2VsZWN0UHJldmlvdXNSdWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wcm9tcHRcIjtcbmltcG9ydCB7IHJldHJpZXZlUHJldmlvdXNSdWxlcyB9IGZyb20gXCIuLi8uLi9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBOT19QUkVWSU9VU19SVUxFU19NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZpb3VzUnVsZVByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IGRyeVJ1biB9ID0gY29udGV4dDtcblxuICBpZiAoZHJ5UnVuKSB7XG4gICAgcHJvY2VlZCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBwcmV2aW91cyB9ID0gY29udGV4dDtcblxuICBpZiAoIXByZXZpb3VzKSB7XG4gICAgcHJvY2VlZCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXNSdWxlcyA9IHJldHJpZXZlUHJldmlvdXNSdWxlcygpLFxuICAgICAgICBwcmV2aW91c1J1bGVzTGVuZ3RoID0gcHJldmlvdXNSdWxlcy5sZW5ndGg7XG5cbiAgaWYgKHByZXZpb3VzUnVsZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zb2xlLmxvZyhOT19QUkVWSU9VU19SVUxFU19NRVNTQUdFKTtcblxuICAgIGFib3J0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzZWxlY3RQcmV2aW91c1J1bGUocHJldmlvdXNSdWxlcywgKHByZXZpb3VzUnVsZSkgPT4ge1xuICAgIGlmIChwcmV2aW91c1J1bGUgPT09IG51bGwpIHtcbiAgICAgIGFib3J0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gcHJldmlvdXNSdWxlOyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHJ1bGVcbiAgICB9KTtcblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicHJldmlvdXNSdWxlUHJvbXB0T3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImRyeVJ1biIsInByZXZpb3VzIiwicHJldmlvdXNSdWxlcyIsInJldHJpZXZlUHJldmlvdXNSdWxlcyIsInByZXZpb3VzUnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiTk9fUFJFVklPVVNfUlVMRVNfTUVTU0FHRSIsInNlbGVjdFByZXZpb3VzUnVsZSIsInByZXZpb3VzUnVsZSIsInJ1bGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7d0JBSlc7K0JBQ0c7MEJBQ0k7QUFFM0IsU0FBU0EsNEJBQTRCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUN6RSxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRDtJQUVuQixJQUFJQyxRQUFRO1FBQ1ZIO1FBRUE7SUFDRjtJQUVBLE1BQU0sRUFBRUksUUFBUSxFQUFFLEdBQUdGO0lBRXJCLElBQUksQ0FBQ0UsVUFBVTtRQUNiSjtRQUVBO0lBQ0Y7SUFFQSxNQUFNSyxnQkFBZ0JDLElBQUFBLG9DQUFxQixLQUNyQ0Msc0JBQXNCRixjQUFjRyxNQUFNO0lBRWhELElBQUlELHdCQUF3QixHQUFHO1FBQzdCRSxRQUFRQyxHQUFHLENBQUNDLG1DQUF5QjtRQUVyQ1Y7UUFFQTtJQUNGO0lBRUFXLElBQUFBLDBCQUFrQixFQUFDUCxlQUFlLENBQUNRO1FBQ2pDLElBQUlBLGlCQUFpQixNQUFNO1lBQ3pCWjtZQUVBO1FBQ0Y7UUFFQSxNQUFNYSxPQUFPRCxjQUFlLEdBQUc7UUFFL0JFLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztZQUNyQlk7UUFDRjtRQUVBZDtJQUNGO0FBQ0YifQ==