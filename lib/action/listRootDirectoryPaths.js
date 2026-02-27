"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return listRootDirectoryPathsAction;
    }
});
const _listRootDirectoryPaths = /*#__PURE__*/ _interop_require_default(require("../operation/listRootDirectoryPaths"));
const _operation = require("../utilities/operation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function listRootDirectoryPathsAction() {
    const operations = [
        _listRootDirectoryPaths.default
    ], context = {};
    (0, _operation.executeOperations)(operations, (completed)=>{
    ///
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vbGlzdFJvb3REaXJlY3RvcnlQYXRocy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpc3RSb290RGlyZWN0b3J5UGF0aHNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9saXN0Um9vdERpcmVjdG9yeVBhdGhzXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFJvb3REaXJlY3RvcnlQYXRoc0FjdGlvbigpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBsaXN0Um9vdERpcmVjdG9yeVBhdGhzT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCAoY29tcGxldGVkKSA9PiB7XG4gICAgLy8vXG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24iLCJvcGVyYXRpb25zIiwibGlzdFJvb3REaXJlY3RvcnlQYXRoc09wZXJhdGlvbiIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsrRUFKb0I7MkJBRVY7Ozs7OztBQUVuQixTQUFTQTtJQUN0QixNQUFNQyxhQUFhO1FBQ1hDLCtCQUErQjtLQUNoQyxFQUNEQyxVQUFVLENBQUM7SUFFakJDLElBQUFBLDRCQUFpQixFQUFDSCxZQUFZLENBQUNJO0lBQzdCLEdBQUc7SUFDTCxHQUFHRjtBQUNMIn0=