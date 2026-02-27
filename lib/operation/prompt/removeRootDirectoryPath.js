"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return removeRootDirectoryPathPromptOperation;
    }
});
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _listRootDirectoryPaths = require("../../operation/listRootDirectoryPaths");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function removeRootDirectoryPathPromptOperation(proceed, abort, context) {
    const { rootDirectoryPath } = context;
    if (rootDirectoryPath !== null) {
        proceed();
        return;
    }
    const lastIndex = (0, _listRootDirectoryPaths.listRootDirectoryPaths)();
    if (lastIndex === 0) {
        abort();
        return;
    }
    const description = _descriptions.REMOVE_ROOT_DIRECTORY_PATH_DESCRIPTION, errorMessage = _messages.INVALID_ROOT_DIRECTORY_PATH_INDEX_MESSAGE, validationFunction = (answer)=>{
        const valid = (0, _validate.validateIndex)(answer, lastIndex);
        return valid;
    }, options = {
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const valid = answer !== null;
        if (!valid) {
            abort();
            return;
        }
        const index = answer; ///
        Object.assign(context, {
            index
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3JlbW92ZVJvb3REaXJlY3RvcnlQYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVJbmRleCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IGxpc3RSb290RGlyZWN0b3J5UGF0aHMgfSBmcm9tIFwiLi4vLi4vb3BlcmF0aW9uL2xpc3RSb290RGlyZWN0b3J5UGF0aHNcIjtcbmltcG9ydCB7IFJFTU9WRV9ST09UX0RJUkVDVE9SWV9QQVRIX0RFU0NSSVBUSU9OIH0gZnJvbSBcIi4uLy4uL2Rlc2NyaXB0aW9uc1wiO1xuaW1wb3J0IHsgSU5WQUxJRF9ST09UX0RJUkVDVE9SWV9QQVRIX0lOREVYX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVSb290RGlyZWN0b3J5UGF0aFByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJvb3REaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0O1xuXG4gIGlmIChyb290RGlyZWN0b3J5UGF0aCAhPT0gbnVsbCkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGxhc3RJbmRleCA9IGxpc3RSb290RGlyZWN0b3J5UGF0aHMoKTtcblxuICBpZiAobGFzdEluZGV4ID09PSAwKSB7XG4gICAgYWJvcnQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gUkVNT1ZFX1JPT1RfRElSRUNUT1JZX1BBVEhfREVTQ1JJUFRJT04sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IElOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9JTkRFWF9NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSAoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUluZGV4KGFuc3dlciwgbGFzdEluZGV4KTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgICAgfSwgLy8vXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgY29uc3QgdmFsaWQgPSAoYW5zd2VyICE9PSBudWxsKTtcblxuICAgIGlmKCF2YWxpZCkge1xuICAgICAgYWJvcnQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gYW5zd2VyOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgaW5kZXhcbiAgICB9KTtcblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyb290RGlyZWN0b3J5UGF0aCIsImxhc3RJbmRleCIsImxpc3RSb290RGlyZWN0b3J5UGF0aHMiLCJkZXNjcmlwdGlvbiIsIlJFTU9WRV9ST09UX0RJUkVDVE9SWV9QQVRIX0RFU0NSSVBUSU9OIiwiZXJyb3JNZXNzYWdlIiwiSU5WQUxJRF9ST09UX0RJUkVDVE9SWV9QQVRIX0lOREVYX01FU1NBR0UiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJhbnN3ZXIiLCJ2YWxpZCIsInZhbGlkYXRlSW5kZXgiLCJvcHRpb25zIiwiaW5kZXgiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7MkJBVE87MEJBRUQ7d0NBQ1M7OEJBQ2dCOzBCQUNHO0FBRTFELE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRWxCLFNBQVNGLHVDQUF1Q0csT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDcEYsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHRDtJQUU5QixJQUFJQyxzQkFBc0IsTUFBTTtRQUM5Qkg7UUFFQTtJQUNGO0lBRUEsTUFBTUksWUFBWUMsSUFBQUEsOENBQXNCO0lBRXhDLElBQUlELGNBQWMsR0FBRztRQUNuQkg7UUFFQTtJQUNGO0lBRUEsTUFBTUssY0FBY0Msb0RBQXNDLEVBQ3BEQyxlQUFlQyxtREFBeUMsRUFDeERDLHFCQUFxQixDQUFDQztRQUNwQixNQUFNQyxRQUFRQyxJQUFBQSx1QkFBYSxFQUFDRixRQUFRUDtRQUVwQyxPQUFPUTtJQUNULEdBQ0FFLFVBQVU7UUFDUlI7UUFDQUU7UUFDQUU7SUFDRjtJQUVOWixPQUFPZ0IsU0FBUyxDQUFDSDtRQUNmLE1BQU1DLFFBQVNELFdBQVc7UUFFMUIsSUFBRyxDQUFDQyxPQUFPO1lBQ1RYO1lBRUE7UUFDRjtRQUVBLE1BQU1jLFFBQVFKLFFBQVEsR0FBRztRQUV6QkssT0FBT0MsTUFBTSxDQUFDZixTQUFTO1lBQ3JCYTtRQUNGO1FBRUFmO0lBQ0Y7QUFDRiJ9