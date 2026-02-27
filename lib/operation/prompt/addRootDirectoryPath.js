"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return addRootDirectoryPathPromptOperation;
    }
});
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _messages = require("../../messages");
const _descriptions = require("../../descriptions");
const { prompt } = _necessary.shellUtilities;
function addRootDirectoryPathPromptOperation(proceed, abort, context) {
    const { rootDirectoryPath } = context;
    if (rootDirectoryPath !== null) {
        proceed();
        return;
    }
    const description = _descriptions.ADD_ROOT_DIRECTORY_PATH_DESCRIPTION, errorMessage = _messages.INVALID_ROOT_DIRECTORY_PATH_MESSAGE, validationFunction = _validate.validateRootDirectoryPath, options = {
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
        const rootDirectoryPath = answer; ///
        Object.assign(context, {
            rootDirectoryPath
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2FkZFJvb3REaXJlY3RvcnlQYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IElOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBBRERfUk9PVF9ESVJFQ1RPUllfUEFUSF9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRSb290RGlyZWN0b3J5UGF0aFByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJvb3REaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0O1xuXG4gIGlmIChyb290RGlyZWN0b3J5UGF0aCAhPT0gbnVsbCkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfREVTQ1JJUFRJT04sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IElOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSB2YWxpZGF0ZVJvb3REaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB2YWxpZCA9IChhbnN3ZXIgIT09IG51bGwpO1xuXG4gICAgaWYoIXZhbGlkKSB7XG4gICAgICBhYm9ydCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdERpcmVjdG9yeVBhdGggPSBhbnN3ZXI7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICByb290RGlyZWN0b3J5UGF0aFxuICAgIH0pO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJhZGRSb290RGlyZWN0b3J5UGF0aFByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInJvb3REaXJlY3RvcnlQYXRoIiwiZGVzY3JpcHRpb24iLCJBRERfUk9PVF9ESVJFQ1RPUllfUEFUSF9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9NRVNTQUdFIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwidmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aCIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJ2YWxpZCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyQkFSTzswQkFFVzswQkFDVTs4QkFDQTtBQUVwRCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztBQUVsQixTQUFTRixvQ0FBb0NHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ2pGLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUUsR0FBR0Q7SUFFOUIsSUFBSUMsc0JBQXNCLE1BQU07UUFDOUJIO1FBRUE7SUFDRjtJQUVBLE1BQU1JLGNBQWNDLGlEQUFtQyxFQUNqREMsZUFBZUMsNkNBQW1DLEVBQ2xEQyxxQkFBcUJDLG1DQUF5QixFQUM5Q0MsVUFBVTtRQUNSTjtRQUNBRTtRQUNBRTtJQUNGO0lBRU5WLE9BQU9ZLFNBQVMsQ0FBQ0M7UUFDZixNQUFNQyxRQUFTRCxXQUFXO1FBRTFCLElBQUcsQ0FBQ0MsT0FBTztZQUNUWDtZQUVBO1FBQ0Y7UUFFQSxNQUFNRSxvQkFBb0JRLFFBQVEsR0FBRztRQUVyQ0UsT0FBT0MsTUFBTSxDQUFDWixTQUFTO1lBQ3JCQztRQUNGO1FBRUFIO0lBQ0Y7QUFDRiJ9