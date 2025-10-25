"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findOperation;
    }
});
var _find = require("../utilities/find");
var _configuration = require("../configuration");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function findOperation(proceed, abort, context) {
    var rootDirectoryPaths = (0, _configuration.retrieveRootDirectoryPaths)(), ignoredFilePathRules = (0, _configuration.retrieveIgnoredFilePathRules)(), permittedFilePathRules = (0, _configuration.retrievePermittedFilePathRules)(), ignoredDirectoryPathRules = (0, _configuration.retrieveIgnoredDirectoryPathRules)(), permittedDirectoryPathRules = (0, _configuration.retrievePermittedDirectoryPathRules)();
    Object.assign(context, {
        rootDirectoryPaths: rootDirectoryPaths,
        ignoredFilePathRules: ignoredFilePathRules,
        permittedFilePathRules: permittedFilePathRules,
        ignoredDirectoryPathRules: ignoredDirectoryPathRules,
        permittedDirectoryPathRules: permittedDirectoryPathRules
    });
    var entryPaths = _to_consumable_array(rootDirectoryPaths), synchronous = (0, _find.findInEntries)(entryPaths, function(pathIgnored) {
        delete context.rootDirectoryPaths;
        delete context.ignoredFilePathRules;
        delete context.permittedFilePathRules;
        delete context.ignoredDirectoryPathRules;
        delete context.permittedDirectoryPathRules;
        if (pathIgnored === null) {
            abort();
            return;
        }
        proceed();
    }, context);
    if (synchronous) {
        delete context.rootDirectoryPaths;
        delete context.ignoredFilePathRules;
        delete context.permittedFilePathRules;
        delete context.ignoredDirectoryPathRules;
        delete context.permittedDirectoryPathRules;
        proceed();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vZmluZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmluZEluRW50cmllcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmluZFwiO1xuaW1wb3J0IHsgcmV0cmlldmVSb290RGlyZWN0b3J5UGF0aHMsXG4gICAgICAgICByZXRyaWV2ZUlnbm9yZWRGaWxlUGF0aFJ1bGVzLFxuICAgICAgICAgcmV0cmlldmVQZXJtaXR0ZWRGaWxlUGF0aFJ1bGVzLFxuICAgICAgICAgcmV0cmlldmVJZ25vcmVkRGlyZWN0b3J5UGF0aFJ1bGVzLFxuICAgICAgICAgcmV0cmlldmVQZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZXMgfSBmcm9tIFwiLi4vY29uZmlndXJhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJvb3REaXJlY3RvcnlQYXRocyA9IHJldHJpZXZlUm9vdERpcmVjdG9yeVBhdGhzKCksXG4gICAgICAgIGlnbm9yZWRGaWxlUGF0aFJ1bGVzID0gcmV0cmlldmVJZ25vcmVkRmlsZVBhdGhSdWxlcygpLFxuICAgICAgICBwZXJtaXR0ZWRGaWxlUGF0aFJ1bGVzID0gcmV0cmlldmVQZXJtaXR0ZWRGaWxlUGF0aFJ1bGVzKCksXG4gICAgICAgIGlnbm9yZWREaXJlY3RvcnlQYXRoUnVsZXMgPSByZXRyaWV2ZUlnbm9yZWREaXJlY3RvcnlQYXRoUnVsZXMoKSxcbiAgICAgICAgcGVybWl0dGVkRGlyZWN0b3J5UGF0aFJ1bGVzID0gcmV0cmlldmVQZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZXMoKTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICByb290RGlyZWN0b3J5UGF0aHMsXG4gICAgaWdub3JlZEZpbGVQYXRoUnVsZXMsXG4gICAgcGVybWl0dGVkRmlsZVBhdGhSdWxlcyxcbiAgICBpZ25vcmVkRGlyZWN0b3J5UGF0aFJ1bGVzLFxuICAgIHBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlc1xuICB9KTtcblxuICBjb25zdCBlbnRyeVBhdGhzID0gWyAgLy8vXG4gICAgICAgICAgLi4ucm9vdERpcmVjdG9yeVBhdGhzXG4gICAgICAgIF0sXG4gICAgICAgIHN5bmNocm9ub3VzID0gZmluZEluRW50cmllcyhlbnRyeVBhdGhzLCAocGF0aElnbm9yZWQpID0+IHtcbiAgICAgICAgICBkZWxldGUgY29udGV4dC5yb290RGlyZWN0b3J5UGF0aHM7XG4gICAgICAgICAgZGVsZXRlIGNvbnRleHQuaWdub3JlZEZpbGVQYXRoUnVsZXM7XG4gICAgICAgICAgZGVsZXRlIGNvbnRleHQucGVybWl0dGVkRmlsZVBhdGhSdWxlcztcbiAgICAgICAgICBkZWxldGUgY29udGV4dC5pZ25vcmVkRGlyZWN0b3J5UGF0aFJ1bGVzO1xuICAgICAgICAgIGRlbGV0ZSBjb250ZXh0LnBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlcztcblxuICAgICAgICAgIGlmIChwYXRoSWdub3JlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYWJvcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb2NlZWQoKTtcbiAgICAgICAgfSwgY29udGV4dCk7XG5cbiAgaWYgKHN5bmNocm9ub3VzKSB7XG4gICAgZGVsZXRlIGNvbnRleHQucm9vdERpcmVjdG9yeVBhdGhzO1xuICAgIGRlbGV0ZSBjb250ZXh0Lmlnbm9yZWRGaWxlUGF0aFJ1bGVzO1xuICAgIGRlbGV0ZSBjb250ZXh0LnBlcm1pdHRlZEZpbGVQYXRoUnVsZXM7XG4gICAgZGVsZXRlIGNvbnRleHQuaWdub3JlZERpcmVjdG9yeVBhdGhSdWxlcztcbiAgICBkZWxldGUgY29udGV4dC5wZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZXM7XG5cbiAgICBwcm9jZWVkKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaW5kT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInJvb3REaXJlY3RvcnlQYXRocyIsInJldHJpZXZlUm9vdERpcmVjdG9yeVBhdGhzIiwiaWdub3JlZEZpbGVQYXRoUnVsZXMiLCJyZXRyaWV2ZUlnbm9yZWRGaWxlUGF0aFJ1bGVzIiwicGVybWl0dGVkRmlsZVBhdGhSdWxlcyIsInJldHJpZXZlUGVybWl0dGVkRmlsZVBhdGhSdWxlcyIsImlnbm9yZWREaXJlY3RvcnlQYXRoUnVsZXMiLCJyZXRyaWV2ZUlnbm9yZWREaXJlY3RvcnlQYXRoUnVsZXMiLCJwZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZXMiLCJyZXRyaWV2ZVBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsImVudHJ5UGF0aHMiLCJzeW5jaHJvbm91cyIsImZpbmRJbkVudHJpZXMiLCJwYXRoSWdub3JlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7OztvQkFQTTs2QkFLc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLFNBQVNBLGNBQWNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzNELElBQU1DLHFCQUFxQkMsSUFBQUEseUNBQTBCLEtBQy9DQyx1QkFBdUJDLElBQUFBLDJDQUE0QixLQUNuREMseUJBQXlCQyxJQUFBQSw2Q0FBOEIsS0FDdkRDLDRCQUE0QkMsSUFBQUEsZ0RBQWlDLEtBQzdEQyw4QkFBOEJDLElBQUFBLGtEQUFtQztJQUV2RUMsT0FBT0MsTUFBTSxDQUFDWixTQUFTO1FBQ3JCQyxvQkFBQUE7UUFDQUUsc0JBQUFBO1FBQ0FFLHdCQUFBQTtRQUNBRSwyQkFBQUE7UUFDQUUsNkJBQUFBO0lBQ0Y7SUFFQSxJQUFNSSxhQUNFLHFCQUFHWixxQkFFTGEsY0FBY0MsSUFBQUEsbUJBQWEsRUFBQ0YsWUFBWSxTQUFDRztRQUN2QyxPQUFPaEIsUUFBUUMsa0JBQWtCO1FBQ2pDLE9BQU9ELFFBQVFHLG9CQUFvQjtRQUNuQyxPQUFPSCxRQUFRSyxzQkFBc0I7UUFDckMsT0FBT0wsUUFBUU8seUJBQXlCO1FBQ3hDLE9BQU9QLFFBQVFTLDJCQUEyQjtRQUUxQyxJQUFJTyxnQkFBZ0IsTUFBTTtZQUN4QmpCO1lBRUE7UUFDRjtRQUVBRDtJQUNGLEdBQUdFO0lBRVQsSUFBSWMsYUFBYTtRQUNmLE9BQU9kLFFBQVFDLGtCQUFrQjtRQUNqQyxPQUFPRCxRQUFRRyxvQkFBb0I7UUFDbkMsT0FBT0gsUUFBUUssc0JBQXNCO1FBQ3JDLE9BQU9MLFFBQVFPLHlCQUF5QjtRQUN4QyxPQUFPUCxRQUFRUywyQkFBMkI7UUFFMUNYO0lBQ0Y7QUFDRiJ9