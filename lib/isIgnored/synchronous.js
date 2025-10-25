"use strict";
import { EMPTY_STRING } from "../constants";
import { addTrailingForwardSlash } from "../utilities/string";
import { stripRootDirectoryFromPath } from "../utilities/path";
export function synchronousIsFilePathIgnored(filePath, context) {
    var filePathIgnored = null;
    filePath = stripRootDirectoryFromPath(filePath, context); ///
    var ignoredFilePathRules = context.ignoredFilePathRules, permittedFilePathRules = context.permittedFilePathRules, string = filePath; ///
    ignoredFilePathRules.some(function(ignoredFilePathRule) {
        var matches = ignoredFilePathRule.match(string);
        if (matches) {
            var rule = ignoredFilePathRule, ruleString = rule.asString();
            Object.assign(context, {
                ruleString: ruleString
            });
            filePathIgnored = true;
            return true;
        }
    });
    permittedFilePathRules.some(function(permittedFilePathRule) {
        var matches = permittedFilePathRule.match(string);
        if (matches) {
            var rule = permittedFilePathRule, ruleString = rule.asString();
            Object.assign(context, {
                ruleString: ruleString
            });
            filePathIgnored = false;
            return true;
        }
    });
    return filePathIgnored;
}
export function synchronousIsDirectoryPathIgnored(directoryPath, context) {
    var directoryPathIgnored = null;
    directoryPath = stripRootDirectoryFromPath(directoryPath, context); ///
    if (directoryPath === EMPTY_STRING) {
        directoryPathIgnored = false;
    } else {
        var ignoredDirectoryPathRules = context.ignoredDirectoryPathRules, permittedDirectoryPathRules = context.permittedDirectoryPathRules, string = addTrailingForwardSlash(directoryPath); ///
        ignoredDirectoryPathRules.some(function(ignoredDirectoryPathRule) {
            var matches = ignoredDirectoryPathRule.match(string);
            if (matches) {
                var rule = ignoredDirectoryPathRule, ruleString = rule.asString();
                Object.assign(context, {
                    ruleString: ruleString
                });
                directoryPathIgnored = true;
                return true;
            }
        });
        permittedDirectoryPathRules.some(function(permittedDirectoryPathRule) {
            var matches = permittedDirectoryPathRule.match(string);
            if (matches) {
                var rule = permittedDirectoryPathRule, ruleString = rule.asString();
                Object.assign(context, {
                    ruleString: ruleString
                });
                directoryPathIgnored = false;
                return true;
            }
        });
    }
    return directoryPathIgnored;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pc0lnbm9yZWQvc3luY2hyb25vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHN0cmlwUm9vdERpcmVjdG9yeUZyb21QYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jaHJvbm91c0lzRmlsZVBhdGhJZ25vcmVkKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gIGxldCBmaWxlUGF0aElnbm9yZWQgPSBudWxsO1xuXG4gIGZpbGVQYXRoID0gc3RyaXBSb290RGlyZWN0b3J5RnJvbVBhdGgoZmlsZVBhdGgsIGNvbnRleHQpOyAgLy8vXG5cbiAgY29uc3QgeyBpZ25vcmVkRmlsZVBhdGhSdWxlcywgcGVybWl0dGVkRmlsZVBhdGhSdWxlcyB9ID0gY29udGV4dCxcbiAgICAgICAgc3RyaW5nID0gZmlsZVBhdGg7ICAvLy9cblxuICBpZ25vcmVkRmlsZVBhdGhSdWxlcy5zb21lKChpZ25vcmVkRmlsZVBhdGhSdWxlKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGlnbm9yZWRGaWxlUGF0aFJ1bGUubWF0Y2goc3RyaW5nKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBydWxlID0gaWdub3JlZEZpbGVQYXRoUnVsZSwgLy8vXG4gICAgICAgICAgICBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZygpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcnVsZVN0cmluZ1xuICAgICAgfSk7XG5cbiAgICAgIGZpbGVQYXRoSWdub3JlZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcGVybWl0dGVkRmlsZVBhdGhSdWxlcy5zb21lKChwZXJtaXR0ZWRGaWxlUGF0aFJ1bGUpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGVybWl0dGVkRmlsZVBhdGhSdWxlLm1hdGNoKHN0cmluZyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgcnVsZSA9IHBlcm1pdHRlZEZpbGVQYXRoUnVsZSwgLy8vXG4gICAgICAgICAgICBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZygpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcnVsZVN0cmluZ1xuICAgICAgfSk7XG5cbiAgICAgIGZpbGVQYXRoSWdub3JlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmaWxlUGF0aElnbm9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jaHJvbm91c0lzRGlyZWN0b3J5UGF0aElnbm9yZWQoZGlyZWN0b3J5UGF0aCwgY29udGV4dCkge1xuICBsZXQgZGlyZWN0b3J5UGF0aElnbm9yZWQgPSBudWxsO1xuXG4gIGRpcmVjdG9yeVBhdGggPSBzdHJpcFJvb3REaXJlY3RvcnlGcm9tUGF0aChkaXJlY3RvcnlQYXRoLCBjb250ZXh0KTsgIC8vL1xuXG4gIGlmIChkaXJlY3RvcnlQYXRoID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICBkaXJlY3RvcnlQYXRoSWdub3JlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgaWdub3JlZERpcmVjdG9yeVBhdGhSdWxlcywgcGVybWl0dGVkRGlyZWN0b3J5UGF0aFJ1bGVzIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHN0cmluZyA9IGFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoKGRpcmVjdG9yeVBhdGgpOyAgLy8vXG5cbiAgICBpZ25vcmVkRGlyZWN0b3J5UGF0aFJ1bGVzLnNvbWUoKGlnbm9yZWREaXJlY3RvcnlQYXRoUnVsZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGlnbm9yZWREaXJlY3RvcnlQYXRoUnVsZS5tYXRjaChzdHJpbmcpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICBjb25zdCBydWxlID0gaWdub3JlZERpcmVjdG9yeVBhdGhSdWxlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZVN0cmluZyA9IHJ1bGUuYXNTdHJpbmcoKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICBydWxlU3RyaW5nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhJZ25vcmVkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlcy5zb21lKChwZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlLm1hdGNoKHN0cmluZyk7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBwZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgICAgcnVsZVN0cmluZ1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRoSWdub3JlZCA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGhJZ25vcmVkO1xufVxuIl0sIm5hbWVzIjpbIkVNUFRZX1NUUklORyIsImFkZFRyYWlsaW5nRm9yd2FyZFNsYXNoIiwic3RyaXBSb290RGlyZWN0b3J5RnJvbVBhdGgiLCJzeW5jaHJvbm91c0lzRmlsZVBhdGhJZ25vcmVkIiwiZmlsZVBhdGgiLCJjb250ZXh0IiwiZmlsZVBhdGhJZ25vcmVkIiwiaWdub3JlZEZpbGVQYXRoUnVsZXMiLCJwZXJtaXR0ZWRGaWxlUGF0aFJ1bGVzIiwic3RyaW5nIiwic29tZSIsImlnbm9yZWRGaWxlUGF0aFJ1bGUiLCJtYXRjaGVzIiwibWF0Y2giLCJydWxlIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwicGVybWl0dGVkRmlsZVBhdGhSdWxlIiwic3luY2hyb25vdXNJc0RpcmVjdG9yeVBhdGhJZ25vcmVkIiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGhJZ25vcmVkIiwiaWdub3JlZERpcmVjdG9yeVBhdGhSdWxlcyIsInBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlcyIsImlnbm9yZWREaXJlY3RvcnlQYXRoUnVsZSIsInBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLFlBQVksUUFBUSxlQUFlO0FBQzVDLFNBQVNDLHVCQUF1QixRQUFRLHNCQUFzQjtBQUM5RCxTQUFTQywwQkFBMEIsUUFBUSxvQkFBb0I7QUFFL0QsT0FBTyxTQUFTQyw2QkFBNkJDLFFBQVEsRUFBRUMsT0FBTztJQUM1RCxJQUFJQyxrQkFBa0I7SUFFdEJGLFdBQVdGLDJCQUEyQkUsVUFBVUMsVUFBVyxHQUFHO0lBRTlELElBQVFFLHVCQUFpREYsUUFBakRFLHNCQUFzQkMseUJBQTJCSCxRQUEzQkcsd0JBQ3hCQyxTQUFTTCxVQUFXLEdBQUc7SUFFN0JHLHFCQUFxQkcsSUFBSSxDQUFDLFNBQUNDO1FBQ3pCLElBQU1DLFVBQVVELG9CQUFvQkUsS0FBSyxDQUFDSjtRQUUxQyxJQUFJRyxTQUFTO1lBQ1gsSUFBTUUsT0FBT0gscUJBQ1BJLGFBQWFELEtBQUtFLFFBQVE7WUFFaENDLE9BQU9DLE1BQU0sQ0FBQ2IsU0FBUztnQkFDckJVLFlBQUFBO1lBQ0Y7WUFFQVQsa0JBQWtCO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUFFLHVCQUF1QkUsSUFBSSxDQUFDLFNBQUNTO1FBQzNCLElBQU1QLFVBQVVPLHNCQUFzQk4sS0FBSyxDQUFDSjtRQUU1QyxJQUFJRyxTQUFTO1lBQ1gsSUFBTUUsT0FBT0ssdUJBQ1BKLGFBQWFELEtBQUtFLFFBQVE7WUFFaENDLE9BQU9DLE1BQU0sQ0FBQ2IsU0FBUztnQkFDckJVLFlBQUFBO1lBQ0Y7WUFFQVQsa0JBQWtCO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLE9BQU8sU0FBU2Msa0NBQWtDQyxhQUFhLEVBQUVoQixPQUFPO0lBQ3RFLElBQUlpQix1QkFBdUI7SUFFM0JELGdCQUFnQm5CLDJCQUEyQm1CLGVBQWVoQixVQUFXLEdBQUc7SUFFeEUsSUFBSWdCLGtCQUFrQnJCLGNBQWM7UUFDbENzQix1QkFBdUI7SUFDekIsT0FBTztRQUNMLElBQVFDLDRCQUEyRGxCLFFBQTNEa0IsMkJBQTJCQyw4QkFBZ0NuQixRQUFoQ21CLDZCQUM3QmYsU0FBU1Isd0JBQXdCb0IsZ0JBQWlCLEdBQUc7UUFFM0RFLDBCQUEwQmIsSUFBSSxDQUFDLFNBQUNlO1lBQzlCLElBQU1iLFVBQVVhLHlCQUF5QlosS0FBSyxDQUFDSjtZQUUvQyxJQUFJRyxTQUFTO2dCQUNYLElBQU1FLE9BQU9XLDBCQUNQVixhQUFhRCxLQUFLRSxRQUFRO2dCQUVoQ0MsT0FBT0MsTUFBTSxDQUFDYixTQUFTO29CQUNyQlUsWUFBQUE7Z0JBQ0Y7Z0JBRUFPLHVCQUF1QjtnQkFFdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQUUsNEJBQTRCZCxJQUFJLENBQUMsU0FBQ2dCO1lBQ2hDLElBQU1kLFVBQVVjLDJCQUEyQmIsS0FBSyxDQUFDSjtZQUVqRCxJQUFJRyxTQUFTO2dCQUNYLElBQU1FLE9BQU9ZLDRCQUNQWCxhQUFhRCxLQUFLRSxRQUFRO2dCQUVoQ0MsT0FBT0MsTUFBTSxDQUFDYixTQUFTO29CQUNyQlUsWUFBQUE7Z0JBQ0Y7Z0JBRUFPLHVCQUF1QjtnQkFFdkIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==