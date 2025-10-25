"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return removeRootDirectoryPathOperation;
    }
});
var _configuration = require("../configuration");
var _removeRootDirectoryPathByIndex = require("./removeRootDirectoryPathByIndex");
function removeRootDirectoryPathOperation(proceed, abort, context) {
    var rootDirectoryPath = context.rootDirectoryPath;
    if (rootDirectoryPath === null) {
        proceed();
        return;
    }
    var rootDirectoryPaths = (0, _configuration.retrieveRootDirectoryPaths)(), index = rootDirectoryPaths.indexOf(rootDirectoryPath);
    if (index === -1) {
        abort();
        return;
    }
    (0, _removeRootDirectoryPathByIndex.removeRootDirectoryPathByIndex)(index);
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJldHJpZXZlUm9vdERpcmVjdG9yeVBhdGhzIH0gZnJvbSBcIi4uL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IHJlbW92ZVJvb3REaXJlY3RvcnlQYXRoQnlJbmRleCB9IGZyb20gXCIuL3JlbW92ZVJvb3REaXJlY3RvcnlQYXRoQnlJbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVSb290RGlyZWN0b3J5UGF0aE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJvb3REaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0O1xuXG4gIGlmIChyb290RGlyZWN0b3J5UGF0aCA9PT0gbnVsbCkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJvb3REaXJlY3RvcnlQYXRocyA9IHJldHJpZXZlUm9vdERpcmVjdG9yeVBhdGhzKCksXG4gICAgICAgIGluZGV4ID0gcm9vdERpcmVjdG9yeVBhdGhzLmluZGV4T2Yocm9vdERpcmVjdG9yeVBhdGgpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBhYm9ydCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhCeUluZGV4KGluZGV4KTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhPcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0Iiwicm9vdERpcmVjdG9yeVBhdGgiLCJyb290RGlyZWN0b3J5UGF0aHMiLCJyZXRyaWV2ZVJvb3REaXJlY3RvcnlQYXRocyIsImluZGV4IiwiaW5kZXhPZiIsInJlbW92ZVJvb3REaXJlY3RvcnlQYXRoQnlJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozs2QkFIbUI7OENBQ0k7QUFFaEMsU0FBU0EsaUNBQWlDQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUM5RSxJQUFNLEFBQUVDLG9CQUFzQkQsUUFBdEJDO0lBRVIsSUFBSUEsc0JBQXNCLE1BQU07UUFDOUJIO1FBRUE7SUFDRjtJQUVBLElBQU1JLHFCQUFxQkMsSUFBQUEseUNBQTBCLEtBQy9DQyxRQUFRRixtQkFBbUJHLE9BQU8sQ0FBQ0o7SUFFekMsSUFBSUcsVUFBVSxDQUFDLEdBQUc7UUFDaEJMO1FBRUE7SUFDRjtJQUVBTyxJQUFBQSw4REFBOEIsRUFBQ0Y7SUFFL0JOO0FBQ0YifQ==