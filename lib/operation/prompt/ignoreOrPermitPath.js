"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ignoreOrPermitPathPromptOperation;
    }
});
var _necessary = require("necessary");
var _prompt = require("../../utilities/prompt");
var _constants = require("../../constants");
var _validate = require("../../utilities/validate");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function ignoreOrPermitPathPromptOperation(proceed, abort, context) {
    var path = context.path, directory = context.directory, fileOrDirectory = directory ? _constants.DIRECTORY : _constants.FILE, description = "Ignore or permit the '".concat(path, "' ").concat(fileOrDirectory, "? (i)gnore (p)ermit: "), errorMessage = _messages.INVALID_IGNORE_OR_PERMIT_MESSAGE, validationFunction = _validate.validateIgnoreOrPermit, options = {
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
        var ignore = (0, _prompt.isAnswerIgnore)(answer), pathIgnored = ignore; ///
        Object.assign(context, {
            pathIgnored: pathIgnored
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2lnbm9yZU9yUGVybWl0UGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2hlbGxVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGlzQW5zd2VySWdub3JlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wcm9tcHRcIjtcbmltcG9ydCB7IEZJTEUsIERJUkVDVE9SWSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZhbGlkYXRlSWdub3JlT3JQZXJtaXQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBJTlZBTElEX0lHTk9SRV9PUl9QRVJNSVRfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IHByb21wdCB9ID0gc2hlbGxVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlnbm9yZU9yUGVybWl0UGF0aFByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHBhdGgsIGRpcmVjdG9yeSB9ID0gY29udGV4dCxcbiAgICAgICAgZmlsZU9yRGlyZWN0b3J5ID0gZGlyZWN0b3J5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBESVJFQ1RPUlkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRklMRSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBgSWdub3JlIG9yIHBlcm1pdCB0aGUgJyR7cGF0aH0nICR7ZmlsZU9yRGlyZWN0b3J5fT8gKGkpZ25vcmUgKHApZXJtaXQ6IGAsXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IElOVkFMSURfSUdOT1JFX09SX1BFUk1JVF9NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSB2YWxpZGF0ZUlnbm9yZU9yUGVybWl0LCAgLy8vXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgY29uc3QgdmFsaWQgPSAoYW5zd2VyICE9PSBudWxsKTtcblxuICAgIGlmKCF2YWxpZCkge1xuICAgICAgYWJvcnQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlnbm9yZSA9IGlzQW5zd2VySWdub3JlKGFuc3dlciksXG4gICAgICAgICAgcGF0aElnbm9yZWQgPSBpZ25vcmU7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYXRoSWdub3JlZFxuICAgIH0pO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJpZ25vcmVPclBlcm1pdFBhdGhQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJwYXRoIiwiZGlyZWN0b3J5IiwiZmlsZU9yRGlyZWN0b3J5IiwiRElSRUNUT1JZIiwiRklMRSIsImRlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwiSU5WQUxJRF9JR05PUkVfT1JfUEVSTUlUX01FU1NBR0UiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJ2YWxpZGF0ZUlnbm9yZU9yUGVybWl0Iiwib3B0aW9ucyIsImFuc3dlciIsInZhbGlkIiwiaWdub3JlIiwiaXNBbnN3ZXJJZ25vcmUiLCJwYXRoSWdub3JlZCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozt5QkFUTztzQkFFQTt5QkFDQzt3QkFDTzt3QkFDVTtBQUVqRCxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLFNBQVNELGtDQUFrQ0csT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDL0UsSUFBUUMsT0FBb0JELFFBQXBCQyxNQUFNQyxZQUFjRixRQUFkRSxXQUNSQyxrQkFBa0JELFlBQ0VFLG9CQUFTLEdBQ1BDLGVBQUksRUFDMUJDLGNBQWMsQUFBQyx5QkFBaUNILE9BQVRGLE1BQUssTUFBb0IsT0FBaEJFLGlCQUFnQiwwQkFDaEVJLGVBQWVDLDBDQUFnQyxFQUMvQ0MscUJBQXFCQyxnQ0FBc0IsRUFDM0NDLFVBQVU7UUFDUkwsYUFBQUE7UUFDQUMsY0FBQUE7UUFDQUUsb0JBQUFBO0lBQ0Y7SUFFTmIsT0FBT2UsU0FBUyxTQUFDQztRQUNmLElBQU1DLFFBQVNELFdBQVc7UUFFMUIsSUFBRyxDQUFDQyxPQUFPO1lBQ1RkO1lBRUE7UUFDRjtRQUVBLElBQU1lLFNBQVNDLElBQUFBLHNCQUFjLEVBQUNILFNBQ3hCSSxjQUFjRixRQUFRLEdBQUc7UUFFL0JHLE9BQU9DLE1BQU0sQ0FBQ2xCLFNBQVM7WUFDckJnQixhQUFBQTtRQUNGO1FBRUFsQjtJQUNGO0FBQ0YifQ==