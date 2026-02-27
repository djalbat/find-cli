"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return removeRootDirectoryPathAction;
    }
});
const _removeRootDirectoryPath = /*#__PURE__*/ _interop_require_default(require("../operation/removeRootDirectoryPath"));
const _removeRootDirectoryPath1 = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/removeRootDirectoryPath"));
const _removeRootDirectoryPathByIndex = /*#__PURE__*/ _interop_require_default(require("../operation/removeRootDirectoryPathByIndex"));
const _operation = require("../utilities/operation");
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function removeRootDirectoryPathAction(rootDirectoryPath) {
    const operations = [
        _removeRootDirectoryPath.default,
        _removeRootDirectoryPath1.default,
        _removeRootDirectoryPathByIndex.default
    ], index = null, context = {
        index,
        rootDirectoryPath
    };
    (0, _operation.executeOperations)(operations, (completed)=>{
        if (!completed) {
            console.log(_messages.FAILED_REMOVE_ROOT_DIRECTORY_MESSAGE);
            return;
        }
        console.log(_messages.SUCCESSFUL_REMOVE_ROOT_DIRECTORY_MESSAGE);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZW1vdmVSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3JlbW92ZVJvb3REaXJlY3RvcnlQYXRoXCI7XG5pbXBvcnQgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhQcm9tcHRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhcIjtcbmltcG9ydCByZW1vdmVSb290RGlyZWN0b3J5UGF0aEJ5SW5kZXhPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9yZW1vdmVSb290RGlyZWN0b3J5UGF0aEJ5SW5kZXhcIjtcblxuaW1wb3J0IHsgZXhlY3V0ZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29wZXJhdGlvblwiO1xuaW1wb3J0IHsgRkFJTEVEX1JFTU9WRV9ST09UX0RJUkVDVE9SWV9NRVNTQUdFLCBTVUNDRVNTRlVMX1JFTU9WRV9ST09UX0RJUkVDVE9SWV9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVJvb3REaXJlY3RvcnlQYXRoQWN0aW9uKHJvb3REaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IG9wZXJhdGlvbnMgPSBbXG4gICAgICAgICAgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhPcGVyYXRpb24sXG4gICAgICAgICAgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhQcm9tcHRPcGVyYXRpb24sXG4gICAgICAgICAgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhCeUluZGV4T3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGluZGV4ID0gbnVsbCxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICByb290RGlyZWN0b3J5UGF0aFxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgY29uc29sZS5sb2coRkFJTEVEX1JFTU9WRV9ST09UX0RJUkVDVE9SWV9NRVNTQUdFKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFNVQ0NFU1NGVUxfUkVNT1ZFX1JPT1RfRElSRUNUT1JZX01FU1NBR0UpO1xuICB9LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJyZW1vdmVSb290RGlyZWN0b3J5UGF0aEFjdGlvbiIsInJvb3REaXJlY3RvcnlQYXRoIiwib3BlcmF0aW9ucyIsInJlbW92ZVJvb3REaXJlY3RvcnlQYXRoT3BlcmF0aW9uIiwicmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhQcm9tcHRPcGVyYXRpb24iLCJyZW1vdmVSb290RGlyZWN0b3J5UGF0aEJ5SW5kZXhPcGVyYXRpb24iLCJpbmRleCIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCIsImNvbnNvbGUiLCJsb2ciLCJGQUlMRURfUkVNT1ZFX1JPT1RfRElSRUNUT1JZX01FU1NBR0UiLCJTVUNDRVNTRlVMX1JFTU9WRV9ST09UX0RJUkVDVE9SWV9NRVNTQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7O2dGQVBxQjtpRkFDTTt1RkFDQzsyQkFFbEI7MEJBQzZEOzs7Ozs7QUFFaEYsU0FBU0EsOEJBQThCQyxpQkFBaUI7SUFDckUsTUFBTUMsYUFBYTtRQUNYQyxnQ0FBZ0M7UUFDaENDLGlDQUFzQztRQUN0Q0MsdUNBQXVDO0tBQ3hDLEVBQ0RDLFFBQVEsTUFDUkMsVUFBVTtRQUNSRDtRQUNBTDtJQUNGO0lBRU5PLElBQUFBLDRCQUFpQixFQUFDTixZQUFZLENBQUNPO1FBQzdCLElBQUksQ0FBQ0EsV0FBVztZQUNkQyxRQUFRQyxHQUFHLENBQUNDLDhDQUFvQztZQUVoRDtRQUNGO1FBRUFGLFFBQVFDLEdBQUcsQ0FBQ0Usa0RBQXdDO0lBQ3RELEdBQUdOO0FBQ0wifQ==