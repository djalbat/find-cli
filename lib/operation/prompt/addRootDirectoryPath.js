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
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _messages = require("../../messages");
var _descriptions = require("../../descriptions");
var prompt = _necessary.shellUtilities.prompt;
function addRootDirectoryPathPromptOperation(proceed, abort, context) {
    var rootDirectoryPath = context.rootDirectoryPath;
    if (rootDirectoryPath !== null) {
        proceed();
        return;
    }
    var description = _descriptions.ADD_ROOT_DIRECTORY_PATH_DESCRIPTION, errorMessage = _messages.INVALID_ROOT_DIRECTORY_PATH_MESSAGE, validationFunction = _validate.validateRootDirectoryPath, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var valid = answer !== null;
        if (!valid) {
            abort();
            return;
        }
        var rootDirectoryPath = answer; ///
        Object.assign(context, {
            rootDirectoryPath: rootDirectoryPath
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2FkZFJvb3REaXJlY3RvcnlQYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IElOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBBRERfUk9PVF9ESVJFQ1RPUllfUEFUSF9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRSb290RGlyZWN0b3J5UGF0aFByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJvb3REaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0O1xuXG4gIGlmIChyb290RGlyZWN0b3J5UGF0aCAhPT0gbnVsbCkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfREVTQ1JJUFRJT04sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IElOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSB2YWxpZGF0ZVJvb3REaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB2YWxpZCA9IChhbnN3ZXIgIT09IG51bGwpO1xuXG4gICAgaWYoIXZhbGlkKSB7XG4gICAgICBhYm9ydCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdERpcmVjdG9yeVBhdGggPSBhbnN3ZXI7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICByb290RGlyZWN0b3J5UGF0aFxuICAgIH0pO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJhZGRSb290RGlyZWN0b3J5UGF0aFByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInJvb3REaXJlY3RvcnlQYXRoIiwiZGVzY3JpcHRpb24iLCJBRERfUk9PVF9ESVJFQ1RPUllfUEFUSF9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9NRVNTQUdFIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwidmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aCIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJ2YWxpZCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozt5QkFSTzt3QkFFVzt3QkFDVTs0QkFDQTtBQUVwRCxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLFNBQVNELG9DQUFvQ0csT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDakYsSUFBTSxBQUFFQyxvQkFBc0JELFFBQXRCQztJQUVSLElBQUlBLHNCQUFzQixNQUFNO1FBQzlCSDtRQUVBO0lBQ0Y7SUFFQSxJQUFNSSxjQUFjQyxpREFBbUMsRUFDakRDLGVBQWVDLDZDQUFtQyxFQUNsREMscUJBQXFCQyxtQ0FBeUIsRUFDOUNDLFVBQVU7UUFDUk4sYUFBQUE7UUFDQUUsY0FBQUE7UUFDQUUsb0JBQUFBO0lBQ0Y7SUFFTlYsT0FBT1ksU0FBUyxTQUFDQztRQUNmLElBQU1DLFFBQVNELFdBQVc7UUFFMUIsSUFBRyxDQUFDQyxPQUFPO1lBQ1RYO1lBRUE7UUFDRjtRQUVBLElBQU1FLG9CQUFvQlEsUUFBUSxHQUFHO1FBRXJDRSxPQUFPQyxNQUFNLENBQUNaLFNBQVM7WUFDckJDLG1CQUFBQTtRQUNGO1FBRUFIO0lBQ0Y7QUFDRiJ9