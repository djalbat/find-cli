"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return validateRootDirectoryPathOperation;
    }
});
var _validate = require("../utilities/validate");
var _messages = require("../messages");
function validateRootDirectoryPathOperation(proceed, abort, context) {
    var rootDirectoryPath = context.rootDirectoryPath;
    if (rootDirectoryPath === null) {
        proceed();
        return;
    }
    var valid = (0, _validate.validateRootDirectoryPath)(rootDirectoryPath);
    if (!valid) {
        console.log(_messages.INVALID_ROOT_DIRECTORY_PATH_MESSAGE);
        var rootDirectoryPath1 = null;
        Object.assign(context, {
            rootDirectoryPath: rootDirectoryPath1
        });
    }
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vdmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IElOVkFMSURfUk9PVF9ESVJFQ1RPUllfUEFUSF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlUm9vdERpcmVjdG9yeVBhdGhPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyByb290RGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dDtcblxuICBpZiAocm9vdERpcmVjdG9yeVBhdGggPT09IG51bGwpIHtcbiAgICBwcm9jZWVkKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlUm9vdERpcmVjdG9yeVBhdGgocm9vdERpcmVjdG9yeVBhdGgpO1xuXG4gIGlmICghdmFsaWQpIHtcbiAgICBjb25zb2xlLmxvZyhJTlZBTElEX1JPT1RfRElSRUNUT1JZX1BBVEhfTUVTU0FHRSk7XG5cbiAgICBjb25zdCByb290RGlyZWN0b3J5UGF0aCA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHJvb3REaXJlY3RvcnlQYXRoXG4gICAgfSk7XG4gIH1cblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyb290RGlyZWN0b3J5UGF0aCIsInZhbGlkIiwidmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aCIsImNvbnNvbGUiLCJsb2ciLCJJTlZBTElEX1JPT1RfRElSRUNUT1JZX1BBVEhfTUVTU0FHRSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt3QkFIa0I7d0JBQ1U7QUFFckMsU0FBU0EsbUNBQW1DQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNoRixJQUFNLEFBQUVDLG9CQUFzQkQsUUFBdEJDO0lBRVIsSUFBSUEsc0JBQXNCLE1BQU07UUFDOUJIO1FBRUE7SUFDRjtJQUVBLElBQU1JLFFBQVFDLElBQUFBLG1DQUF5QixFQUFDRjtJQUV4QyxJQUFJLENBQUNDLE9BQU87UUFDVkUsUUFBUUMsR0FBRyxDQUFDQyw2Q0FBbUM7UUFFL0MsSUFBTUwscUJBQW9CO1FBRTFCTSxPQUFPQyxNQUFNLENBQUNSLFNBQVM7WUFDckJDLG1CQUFBQTtRQUNGO0lBQ0Y7SUFFQUg7QUFDRiJ9