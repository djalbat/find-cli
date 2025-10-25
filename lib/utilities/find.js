"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findInEntries;
    }
});
var _necessary = require("necessary");
var _find = /*#__PURE__*/ _interop_require_default(require("../find"));
var _log = require("../utilities/log");
var _synchronous = require("../isIgnored/synchronous");
var _asynchronous = require("../isIgnored/asynchronous");
var _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
function findInEntries(entryPaths, callback, context) {
    var synchronous = true;
    var entryNamesLength;
    entryNamesLength = entryPaths.length;
    while(entryNamesLength > 0){
        var entryPath = entryPaths.shift();
        synchronous = findInEntry(entryPath, entryPaths, callback, context);
        if (!synchronous) {
            break;
        }
        entryNamesLength = entryPaths.length;
    }
    return synchronous;
}
function findInEntry(entryPath, entryPaths, callback, context) {
    var synchronous;
    var path = entryPath, directory = isEntryDirectory(path);
    if (directory) {
        var directoryPath = entryPath; ///
        synchronous = findInDirectory(directoryPath, function(pathIgnored) {
            var synchronous = pathIgnored !== null ? findInEntries(entryPaths, callback, context) : true;
            if (synchronous) {
                callback(pathIgnored);
            }
        }, context);
    } else {
        var filePath = entryPath; ///
        synchronous = findInFile(filePath, function(pathIgnored) {
            var synchronous = pathIgnored !== null ? findInEntries(entryPaths, callback, context) : true;
            if (synchronous) {
                callback(pathIgnored);
            }
        }, context);
    }
    if (synchronous) {
        synchronous = findInEntries(entryPaths, callback, context);
    }
    return synchronous;
}
function findInFile(filePath, callback, context) {
    var synchronous;
    var filePathIgnored = (0, _synchronous.synchronousIsFilePathIgnored)(filePath, context);
    if (filePathIgnored !== null) {
        synchronous = true;
        var quietly = context.quietly;
        if (!quietly) {
            var message;
            var format = context.format, ruleString = context.ruleString;
            message = filePathIgnored ? "Ignore ".concat(filePath) : "Permit ".concat(filePath);
            if (format) {
                message = filePathIgnored ? (0, _log.red)(message) : (0, _log.green)(message);
            }
            message = "".concat(message, " ").concat(ruleString);
            console.log(message);
        }
        if (!filePathIgnored) {
            var filesTotal = context.filesTotal;
            filesTotal++;
            Object.assign(context, {
                filesTotal: filesTotal
            });
            var dryRun = context.dryRun;
            if (!dryRun) {
                (0, _find.default)(filePath, context);
            }
        }
    } else {
        synchronous = false;
        (0, _asynchronous.asynchronousIsFilePathIgnored)(filePath, context, function(pathIgnored) {
            var synchronous = pathIgnored !== null ? findInFile(filePath, callback, context) : true;
            if (synchronous) {
                callback(pathIgnored);
            }
        });
    }
    return synchronous;
}
function findInDirectory(directoryPath, callback, context) {
    var synchronous;
    var directoryPathIgnored = (0, _synchronous.synchronousIsDirectoryPathIgnored)(directoryPath, context);
    if (directoryPathIgnored !== null) {
        synchronous = true;
        var directoryPathRootDirectoryPath = (0, _path.isDirectoryPathRootDirectoryPath)(directoryPath, context);
        if (!directoryPathRootDirectoryPath) {
            var quietly = context.quietly;
            if (!quietly) {
                var message;
                var format = context.format, ruleString = context.ruleString;
                message = directoryPathIgnored ? "Ignore ".concat(directoryPath, "/") : "Permit ".concat(directoryPath, "/");
                if (format) {
                    message = directoryPathIgnored ? (0, _log.red)(message) : (0, _log.green)(message);
                }
                message = "".concat(message, " ").concat(ruleString);
                console.log(message);
            }
        }
        if (!directoryPathIgnored) {
            var directoriesTotal = context.directoriesTotal;
            directoriesTotal++;
            Object.assign(context, {
                directoriesTotal: directoriesTotal
            });
            var entryNames = readDirectory(directoryPath), entryPaths = (0, _path.entryPathsFromEntryNamesAndDirectoryPath)(entryNames, directoryPath);
            synchronous = findInEntries(entryPaths, callback, context);
        }
    } else {
        synchronous = false;
        (0, _asynchronous.asynchronousIsDirectoryPathIgnored)(directoryPath, context, function(pathIgnored) {
            var synchronous = pathIgnored !== null ? findInDirectory(directoryPath, callback, context) : true;
            if (synchronous) {
                callback(pathIgnored);
            }
        });
    }
    return synchronous;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmluZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGZpbmQgZnJvbSBcIi4uL2ZpbmRcIjtcblxuaW1wb3J0IHsgcmVkLCBncmVlbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvbG9nXCI7XG5pbXBvcnQgeyBzeW5jaHJvbm91c0lzRmlsZVBhdGhJZ25vcmVkLCBzeW5jaHJvbm91c0lzRGlyZWN0b3J5UGF0aElnbm9yZWQgfSBmcm9tIFwiLi4vaXNJZ25vcmVkL3N5bmNocm9ub3VzXCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNJc0ZpbGVQYXRoSWdub3JlZCwgYXN5bmNocm9ub3VzSXNEaXJlY3RvcnlQYXRoSWdub3JlZCB9IGZyb20gXCIuLi9pc0lnbm9yZWQvYXN5bmNocm9ub3VzXCI7XG5pbXBvcnQgeyBpc0RpcmVjdG9yeVBhdGhSb290RGlyZWN0b3J5UGF0aCwgZW50cnlQYXRoc0Zyb21FbnRyeU5hbWVzQW5kRGlyZWN0b3J5UGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5jb25zdCB7IHJlYWREaXJlY3RvcnksIGlzRW50cnlEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRJbkVudHJpZXMoZW50cnlQYXRocywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgbGV0IHN5bmNocm9ub3VzID0gdHJ1ZTtcblxuICBsZXQgZW50cnlOYW1lc0xlbmd0aDtcblxuICBlbnRyeU5hbWVzTGVuZ3RoID0gZW50cnlQYXRocy5sZW5ndGg7XG5cbiAgd2hpbGUgKGVudHJ5TmFtZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZW50cnlQYXRoID0gZW50cnlQYXRocy5zaGlmdCgpO1xuXG4gICAgc3luY2hyb25vdXMgPSBmaW5kSW5FbnRyeShlbnRyeVBhdGgsIGVudHJ5UGF0aHMsIGNhbGxiYWNrLCBjb250ZXh0KTtcblxuICAgIGlmICghc3luY2hyb25vdXMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVudHJ5TmFtZXNMZW5ndGggPSBlbnRyeVBhdGhzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBzeW5jaHJvbm91cztcbn1cblxuZnVuY3Rpb24gZmluZEluRW50cnkoZW50cnlQYXRoLCBlbnRyeVBhdGhzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICBsZXQgc3luY2hyb25vdXM7XG5cbiAgY29uc3QgcGF0aCA9IGVudHJ5UGF0aCxcbiAgICAgICAgZGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShwYXRoKTtcblxuICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGVudHJ5UGF0aDsgLy8vXG5cbiAgICBzeW5jaHJvbm91cyA9IGZpbmRJbkRpcmVjdG9yeShkaXJlY3RvcnlQYXRoLCAocGF0aElnbm9yZWQpID0+IHtcbiAgICAgIGNvbnN0IHN5bmNocm9ub3VzID0gKHBhdGhJZ25vcmVkICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZEluRW50cmllcyhlbnRyeVBhdGhzLCBjYWxsYmFjaywgY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcblxuICAgICAgaWYgKHN5bmNocm9ub3VzKSB7XG4gICAgICAgIGNhbGxiYWNrKHBhdGhJZ25vcmVkKTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGVudHJ5UGF0aDsgIC8vL1xuXG4gICAgc3luY2hyb25vdXMgPSBmaW5kSW5GaWxlKGZpbGVQYXRoLCAocGF0aElnbm9yZWQpID0+IHtcbiAgICAgIGNvbnN0IHN5bmNocm9ub3VzID0gKHBhdGhJZ25vcmVkICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZEluRW50cmllcyhlbnRyeVBhdGhzLCBjYWxsYmFjaywgY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgICAgIGlmIChzeW5jaHJvbm91cykge1xuICAgICAgICBjYWxsYmFjayhwYXRoSWdub3JlZCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBpZiAoc3luY2hyb25vdXMpIHtcbiAgICBzeW5jaHJvbm91cyA9IGZpbmRJbkVudHJpZXMoZW50cnlQYXRocywgY2FsbGJhY2ssIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN5bmNocm9ub3VzO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5GaWxlKGZpbGVQYXRoLCBjYWxsYmFjaywgY29udGV4dCkge1xuICBsZXQgc3luY2hyb25vdXM7XG5cbiAgY29uc3QgZmlsZVBhdGhJZ25vcmVkID0gc3luY2hyb25vdXNJc0ZpbGVQYXRoSWdub3JlZChmaWxlUGF0aCwgY29udGV4dCk7XG5cbiAgaWYgKGZpbGVQYXRoSWdub3JlZCAhPT0gbnVsbCkge1xuICAgIHN5bmNocm9ub3VzID0gdHJ1ZTtcblxuICAgIGNvbnN0IHsgcXVpZXRseSB9ID0gY29udGV4dDtcblxuICAgIGlmICghcXVpZXRseSkge1xuICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgIGNvbnN0IHsgZm9ybWF0LCBydWxlU3RyaW5nIH0gPSBjb250ZXh0O1xuXG4gICAgICBtZXNzYWdlID0gZmlsZVBhdGhJZ25vcmVkID9cbiAgICAgICAgICAgICAgICAgIGBJZ25vcmUgJHtmaWxlUGF0aH1gOlxuICAgICAgICAgICAgICAgICAgICBgUGVybWl0ICR7ZmlsZVBhdGh9YDtcblxuICAgICAgaWYgKGZvcm1hdCkge1xuICAgICAgICBtZXNzYWdlID0gZmlsZVBhdGhJZ25vcmVkID9cbiAgICAgICAgICAgICAgICAgICAgcmVkKG1lc3NhZ2UpIDpcbiAgICAgICAgICAgICAgICAgICAgICBncmVlbihtZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbWVzc2FnZSA9IGAke21lc3NhZ2V9ICR7cnVsZVN0cmluZ31gO1xuXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoIWZpbGVQYXRoSWdub3JlZCkge1xuICAgICAgbGV0IHsgZmlsZXNUb3RhbCB9ID0gY29udGV4dDtcblxuICAgICAgZmlsZXNUb3RhbCsrO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgZmlsZXNUb3RhbFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgZHJ5UnVuIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoIWRyeVJ1bikge1xuICAgICAgICBmaW5kKGZpbGVQYXRoLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3luY2hyb25vdXMgPSBmYWxzZTtcblxuICAgIGFzeW5jaHJvbm91c0lzRmlsZVBhdGhJZ25vcmVkKGZpbGVQYXRoLCBjb250ZXh0LCAocGF0aElnbm9yZWQpID0+IHtcbiAgICAgIGNvbnN0IHN5bmNocm9ub3VzID0gKHBhdGhJZ25vcmVkICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZEluRmlsZShmaWxlUGF0aCwgY2FsbGJhY2ssIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWU7XG5cbiAgICAgIGlmIChzeW5jaHJvbm91cykge1xuICAgICAgICBjYWxsYmFjayhwYXRoSWdub3JlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3luY2hyb25vdXM7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbkRpcmVjdG9yeShkaXJlY3RvcnlQYXRoLCBjYWxsYmFjaywgY29udGV4dCkge1xuICBsZXQgc3luY2hyb25vdXM7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aElnbm9yZWQgPSBzeW5jaHJvbm91c0lzRGlyZWN0b3J5UGF0aElnbm9yZWQoZGlyZWN0b3J5UGF0aCwgY29udGV4dCk7XG5cbiAgaWYgKGRpcmVjdG9yeVBhdGhJZ25vcmVkICE9PSBudWxsKSB7XG4gICAgc3luY2hyb25vdXMgPSB0cnVlO1xuXG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aFJvb3REaXJlY3RvcnlQYXRoID0gaXNEaXJlY3RvcnlQYXRoUm9vdERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29udGV4dCk7XG5cbiAgICBpZiAoIWRpcmVjdG9yeVBhdGhSb290RGlyZWN0b3J5UGF0aCkge1xuICAgICAgY29uc3QgeyBxdWlldGx5IH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtYXQsIHJ1bGVTdHJpbmcgfSA9IGNvbnRleHQ7XG5cbiAgICAgICAgbWVzc2FnZSA9IGRpcmVjdG9yeVBhdGhJZ25vcmVkID9cbiAgICAgICAgICAgICAgICAgICBgSWdub3JlICR7ZGlyZWN0b3J5UGF0aH0vYCA6XG4gICAgICAgICAgICAgICAgICAgICBgUGVybWl0ICR7ZGlyZWN0b3J5UGF0aH0vYDtcblxuICAgICAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGRpcmVjdG9yeVBhdGhJZ25vcmVkID9cbiAgICAgICAgICAgICAgICAgICAgICByZWQobWVzc2FnZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlZW4obWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gYCR7bWVzc2FnZX0gJHtydWxlU3RyaW5nfWA7XG5cbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkaXJlY3RvcnlQYXRoSWdub3JlZCkge1xuICAgICAgbGV0IHsgZGlyZWN0b3JpZXNUb3RhbCB9ID0gY29udGV4dDtcblxuICAgICAgZGlyZWN0b3JpZXNUb3RhbCsrO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgZGlyZWN0b3JpZXNUb3RhbFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgICAgZW50cnlQYXRocyA9IGVudHJ5UGF0aHNGcm9tRW50cnlOYW1lc0FuZERpcmVjdG9yeVBhdGgoZW50cnlOYW1lcywgZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIHN5bmNocm9ub3VzID0gZmluZEluRW50cmllcyhlbnRyeVBhdGhzLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN5bmNocm9ub3VzID0gZmFsc2U7XG5cbiAgICBhc3luY2hyb25vdXNJc0RpcmVjdG9yeVBhdGhJZ25vcmVkKGRpcmVjdG9yeVBhdGgsIGNvbnRleHQsIChwYXRoSWdub3JlZCkgPT4ge1xuICAgICAgY29uc3Qgc3luY2hyb25vdXMgPSAocGF0aElnbm9yZWQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kSW5EaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgY2FsbGJhY2ssIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWU7XG5cbiAgICAgIGlmIChzeW5jaHJvbm91cykge1xuICAgICAgICBjYWxsYmFjayhwYXRoSWdub3JlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3luY2hyb25vdXM7XG59XG4iXSwibmFtZXMiOlsiZmluZEluRW50cmllcyIsInJlYWREaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiaXNFbnRyeURpcmVjdG9yeSIsImVudHJ5UGF0aHMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJzeW5jaHJvbm91cyIsImVudHJ5TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJlbnRyeVBhdGgiLCJzaGlmdCIsImZpbmRJbkVudHJ5IiwicGF0aCIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJmaW5kSW5EaXJlY3RvcnkiLCJwYXRoSWdub3JlZCIsImZpbGVQYXRoIiwiZmluZEluRmlsZSIsImZpbGVQYXRoSWdub3JlZCIsInN5bmNocm9ub3VzSXNGaWxlUGF0aElnbm9yZWQiLCJxdWlldGx5IiwibWVzc2FnZSIsImZvcm1hdCIsInJ1bGVTdHJpbmciLCJyZWQiLCJncmVlbiIsImNvbnNvbGUiLCJsb2ciLCJmaWxlc1RvdGFsIiwiT2JqZWN0IiwiYXNzaWduIiwiZHJ5UnVuIiwiZmluZCIsImFzeW5jaHJvbm91c0lzRmlsZVBhdGhJZ25vcmVkIiwiZGlyZWN0b3J5UGF0aElnbm9yZWQiLCJzeW5jaHJvbm91c0lzRGlyZWN0b3J5UGF0aElnbm9yZWQiLCJkaXJlY3RvcnlQYXRoUm9vdERpcmVjdG9yeVBhdGgiLCJpc0RpcmVjdG9yeVBhdGhSb290RGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yaWVzVG90YWwiLCJlbnRyeU5hbWVzIiwiZW50cnlQYXRoc0Zyb21FbnRyeU5hbWVzQW5kRGlyZWN0b3J5UGF0aCIsImFzeW5jaHJvbm91c0lzRGlyZWN0b3J5UGF0aElnbm9yZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7eUJBWFk7MkRBRW5CO21CQUVVOzJCQUNxRDs0QkFDRTtvQkFDUzs7Ozs7O0FBRTNGLElBQVFDLGdCQUFvQ0MsOEJBQW1CLENBQXZERCxlQUFlRSxtQkFBcUJELDhCQUFtQixDQUF4Q0M7QUFFUixTQUFTSCxjQUFjSSxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNqRSxJQUFJQyxjQUFjO0lBRWxCLElBQUlDO0lBRUpBLG1CQUFtQkosV0FBV0ssTUFBTTtJQUVwQyxNQUFPRCxtQkFBbUIsRUFBRztRQUMzQixJQUFNRSxZQUFZTixXQUFXTyxLQUFLO1FBRWxDSixjQUFjSyxZQUFZRixXQUFXTixZQUFZQyxVQUFVQztRQUUzRCxJQUFJLENBQUNDLGFBQWE7WUFDaEI7UUFDRjtR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