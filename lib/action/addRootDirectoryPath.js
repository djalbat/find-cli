"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return addRootDirectoryPathAction;
    }
});
var _addRootDirectoryPath = /*#__PURE__*/ _interop_require_default(require("../operation/addRootDirectoryPath"));
var _validateRootDirectoryPath = /*#__PURE__*/ _interop_require_default(require("../operation/validateRootDirectoryPath"));
var _addRootDirectoryPath1 = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/addRootDirectoryPath"));
var _operation = require("../utilities/operation");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function addRootDirectoryPathAction(rootDirectoryPath) {
    var operations = [
        _validateRootDirectoryPath.default,
        _addRootDirectoryPath1.default,
        _addRootDirectoryPath.default
    ], context = {
        rootDirectoryPath: rootDirectoryPath
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        if (!completed) {
            console.log(_messages.FAILED_ADD_ROOT_DIRECTORY_MESSAGE);
            return;
        }
        console.log(_messages.SUCCESSFUL_ADD_ROOT_DIRECTORY_MESSAGE);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vYWRkUm9vdERpcmVjdG9yeVBhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBhZGRSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2FkZFJvb3REaXJlY3RvcnlQYXRoXCI7XG5pbXBvcnQgdmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3ZhbGlkYXRlUm9vdERpcmVjdG9yeVBhdGhcIjtcbmltcG9ydCBhZGRSb290RGlyZWN0b3J5UGF0aFByb21wdE9wZXJhdGlvbiAgZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvYWRkUm9vdERpcmVjdG9yeVBhdGhcIjtcblxuaW1wb3J0IHsgZXhlY3V0ZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29wZXJhdGlvblwiO1xuaW1wb3J0IHsgRkFJTEVEX0FERF9ST09UX0RJUkVDVE9SWV9NRVNTQUdFLCBTVUNDRVNTRlVMX0FERF9ST09UX0RJUkVDVE9SWV9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFJvb3REaXJlY3RvcnlQYXRoQWN0aW9uKHJvb3REaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IG9wZXJhdGlvbnMgPSBbXG4gICAgICAgICAgdmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvbixcbiAgICAgICAgICBhZGRSb290RGlyZWN0b3J5UGF0aFByb21wdE9wZXJhdGlvbixcbiAgICAgICAgICBhZGRSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHJvb3REaXJlY3RvcnlQYXRoXG4gICAgICAgIH07XG5cbiAgZXhlY3V0ZU9wZXJhdGlvbnMob3BlcmF0aW9ucywgKGNvbXBsZXRlZCkgPT4ge1xuICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhGQUlMRURfQUREX1JPT1RfRElSRUNUT1JZX01FU1NBR0UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coU1VDQ0VTU0ZVTF9BRERfUk9PVF9ESVJFQ1RPUllfTUVTU0FHRSk7XG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImFkZFJvb3REaXJlY3RvcnlQYXRoQWN0aW9uIiwicm9vdERpcmVjdG9yeVBhdGgiLCJvcGVyYXRpb25zIiwidmFsaWRhdGVSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvbiIsImFkZFJvb3REaXJlY3RvcnlQYXRoUHJvbXB0T3BlcmF0aW9uIiwiYWRkUm9vdERpcmVjdG9yeVBhdGhPcGVyYXRpb24iLCJjb250ZXh0IiwiZXhlY3V0ZU9wZXJhdGlvbnMiLCJjb21wbGV0ZWQiLCJjb25zb2xlIiwibG9nIiwiRkFJTEVEX0FERF9ST09UX0RJUkVDVE9SWV9NRVNTQUdFIiwiU1VDQ0VTU0ZVTF9BRERfUk9PVF9ESVJFQ1RPUllfTUVTU0FHRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7OzsyRUFQa0I7Z0ZBQ0s7NEVBQ0U7eUJBRWY7d0JBQ3VEOzs7Ozs7QUFFMUUsU0FBU0EsMkJBQTJCQyxpQkFBaUI7SUFDbEUsSUFBTUMsYUFBYTtRQUNYQyxrQ0FBa0M7UUFDbENDLDhCQUFtQztRQUNuQ0MsNkJBQTZCO0tBQzlCLEVBQ0RDLFVBQVU7UUFDUkwsbUJBQUFBO0lBQ0Y7SUFFTk0sSUFBQUEsNEJBQWlCLEVBQUNMLFlBQVksU0FBQ007UUFDN0IsSUFBSSxDQUFDQSxXQUFXO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0MsMkNBQWlDO1lBRTdDO1FBQ0Y7UUFFQUYsUUFBUUMsR0FBRyxDQUFDRSwrQ0FBcUM7SUFDbkQsR0FBR047QUFDTCJ9