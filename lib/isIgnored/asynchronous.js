"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get asynchronousIsDirectoryPathIgnored () {
        return asynchronousIsDirectoryPathIgnored;
    },
    get asynchronousIsFilePathIgnored () {
        return asynchronousIsFilePathIgnored;
    }
});
const _pathRule = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/pathRule"));
const _updatePatRules = /*#__PURE__*/ _interop_require_default(require("../operation/updatePatRules"));
const _ignoreOrPermitPath = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/ignoreOrPermitPath"));
const _operation = require("../utilities/operation");
const _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function asynchronousIsFilePathIgnored(filePath, context, callback) {
    filePath = (0, _path.stripRootDirectoryFromPath)(filePath, context); ///
    const path = filePath, directory = false;
    asynchronousIsPathIgnored(path, directory, context, callback);
}
function asynchronousIsDirectoryPathIgnored(directoryPath, context, callback) {
    directoryPath = (0, _path.stripRootDirectoryFromPath)(directoryPath, context); ///
    const path = directoryPath, directory = true;
    asynchronousIsPathIgnored(path, directory, context, callback);
}
function asynchronousIsPathIgnored(path, directory, context, callback) {
    const operations = [
        _ignoreOrPermitPath.default,
        _pathRule.default,
        _updatePatRules.default
    ], pathRule = null, pathIgnored = null;
    Object.assign(context, {
        path,
        directory,
        pathRule,
        pathIgnored
    });
    (0, _operation.executeOperations)(operations, (completed)=>{
        const { pathIgnored } = context;
        delete context.path;
        delete context.directory;
        delete context.pathRule;
        delete context.pathIgnored;
        callback(pathIgnored);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pc0lnbm9yZWQvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aFJ1bGVQcm9tcHRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvcGF0aFJ1bGVcIjtcbmltcG9ydCB1cGRhdGVQYXRoUnVsZXNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi91cGRhdGVQYXRSdWxlc1wiO1xuaW1wb3J0IGlnbm9yZU9yUGVybWl0UGF0aFByb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC9pZ25vcmVPclBlcm1pdFBhdGhcIjtcblxuaW1wb3J0IHsgZXhlY3V0ZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29wZXJhdGlvblwiO1xuaW1wb3J0IHsgc3RyaXBSb290RGlyZWN0b3J5RnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jaHJvbm91c0lzRmlsZVBhdGhJZ25vcmVkKGZpbGVQYXRoLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBmaWxlUGF0aCA9IHN0cmlwUm9vdERpcmVjdG9yeUZyb21QYXRoKGZpbGVQYXRoLCBjb250ZXh0KTsgLy8vXG5cbiAgY29uc3QgcGF0aCA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgIGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gIGFzeW5jaHJvbm91c0lzUGF0aElnbm9yZWQocGF0aCwgZGlyZWN0b3J5LCBjb250ZXh0LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3luY2hyb25vdXNJc0RpcmVjdG9yeVBhdGhJZ25vcmVkKGRpcmVjdG9yeVBhdGgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGRpcmVjdG9yeVBhdGggPSBzdHJpcFJvb3REaXJlY3RvcnlGcm9tUGF0aChkaXJlY3RvcnlQYXRoLCBjb250ZXh0KTsgIC8vL1xuXG4gIGNvbnN0IHBhdGggPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgIGRpcmVjdG9yeSA9IHRydWU7XG5cbiAgYXN5bmNocm9ub3VzSXNQYXRoSWdub3JlZChwYXRoLCBkaXJlY3RvcnksIGNvbnRleHQsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gYXN5bmNocm9ub3VzSXNQYXRoSWdub3JlZChwYXRoLCBkaXJlY3RvcnksIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG9wZXJhdGlvbnMgPSBbXG4gICAgICAgICAgaWdub3JlT3JQZXJtaXRQYXRoUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIHBhdGhSdWxlUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIHVwZGF0ZVBhdGhSdWxlc09wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBwYXRoUnVsZSA9IG51bGwsXG4gICAgICAgIHBhdGhJZ25vcmVkID0gbnVsbDtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBwYXRoLFxuICAgIGRpcmVjdG9yeSxcbiAgICBwYXRoUnVsZSxcbiAgICBwYXRoSWdub3JlZFxuICB9KTtcblxuICBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCAoY29tcGxldGVkKSA9PiB7XG4gICAgY29uc3QgeyBwYXRoSWdub3JlZCB9ID0gY29udGV4dDtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnBhdGg7XG4gICAgZGVsZXRlIGNvbnRleHQuZGlyZWN0b3J5O1xuICAgIGRlbGV0ZSBjb250ZXh0LnBhdGhSdWxlO1xuICAgIGRlbGV0ZSBjb250ZXh0LnBhdGhJZ25vcmVkO1xuXG4gICAgY2FsbGJhY2socGF0aElnbm9yZWQpO1xuICB9LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJhc3luY2hyb25vdXNJc0RpcmVjdG9yeVBhdGhJZ25vcmVkIiwiYXN5bmNocm9ub3VzSXNGaWxlUGF0aElnbm9yZWQiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJjYWxsYmFjayIsInN0cmlwUm9vdERpcmVjdG9yeUZyb21QYXRoIiwicGF0aCIsImRpcmVjdG9yeSIsImFzeW5jaHJvbm91c0lzUGF0aElnbm9yZWQiLCJkaXJlY3RvcnlQYXRoIiwib3BlcmF0aW9ucyIsImlnbm9yZU9yUGVybWl0UGF0aFByb21wdE9wZXJhdGlvbiIsInBhdGhSdWxlUHJvbXB0T3BlcmF0aW9uIiwidXBkYXRlUGF0aFJ1bGVzT3BlcmF0aW9uIiwicGF0aFJ1bGUiLCJwYXRoSWdub3JlZCIsIk9iamVjdCIsImFzc2lnbiIsImV4ZWN1dGVPcGVyYXRpb25zIiwiY29tcGxldGVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFrQmdCQTtlQUFBQTs7UUFUQUM7ZUFBQUE7OztpRUFQb0I7dUVBQ0M7MkVBQ1M7MkJBRVo7c0JBQ1M7Ozs7OztBQUVwQyxTQUFTQSw4QkFBOEJDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3ZFRixXQUFXRyxJQUFBQSxnQ0FBMEIsRUFBQ0gsVUFBVUMsVUFBVSxHQUFHO0lBRTdELE1BQU1HLE9BQU9KLFVBQ1BLLFlBQVk7SUFFbEJDLDBCQUEwQkYsTUFBTUMsV0FBV0osU0FBU0M7QUFDdEQ7QUFFTyxTQUFTSixtQ0FBbUNTLGFBQWEsRUFBRU4sT0FBTyxFQUFFQyxRQUFRO0lBQ2pGSyxnQkFBZ0JKLElBQUFBLGdDQUEwQixFQUFDSSxlQUFlTixVQUFXLEdBQUc7SUFFeEUsTUFBTUcsT0FBT0csZUFDUEYsWUFBWTtJQUVsQkMsMEJBQTBCRixNQUFNQyxXQUFXSixTQUFTQztBQUN0RDtBQUVBLFNBQVNJLDBCQUEwQkYsSUFBSSxFQUFFQyxTQUFTLEVBQUVKLE9BQU8sRUFBRUMsUUFBUTtJQUNuRSxNQUFNTSxhQUFhO1FBQ1hDLDJCQUFpQztRQUNqQ0MsaUJBQXVCO1FBQ3ZCQyx1QkFBd0I7S0FDekIsRUFDREMsV0FBVyxNQUNYQyxjQUFjO0lBRXBCQyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7UUFDckJHO1FBQ0FDO1FBQ0FPO1FBQ0FDO0lBQ0Y7SUFFQUcsSUFBQUEsNEJBQWlCLEVBQUNSLFlBQVksQ0FBQ1M7UUFDN0IsTUFBTSxFQUFFSixXQUFXLEVBQUUsR0FBR1o7UUFFeEIsT0FBT0EsUUFBUUcsSUFBSTtRQUNuQixPQUFPSCxRQUFRSSxTQUFTO1FBQ3hCLE9BQU9KLFFBQVFXLFFBQVE7UUFDdkIsT0FBT1gsUUFBUVksV0FBVztRQUUxQlgsU0FBU1c7SUFDWCxHQUFHWjtBQUNMIn0=