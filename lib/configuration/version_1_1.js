"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return migrateConfigurationToVersion_1_1;
    }
});
var _versions = require("../versions");
function migrateConfigurationToVersion_1_1(configuration) {
    var version = _versions.VERSION_1_1;
    var ignoredFilePaths = [], permittedFilePaths = [], ignoredDirectoryPaths = [], permittedDirectoryPaths = [];
    configuration = Object.assign(configuration, {
        version: version,
        ignoredFilePaths: ignoredFilePaths,
        permittedFilePaths: permittedFilePaths,
        ignoredDirectoryPaths: ignoredDirectoryPaths,
        permittedDirectoryPaths: permittedDirectoryPaths
    });
    return configuration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV8xLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzFfMSB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWdyYXRlQ29uZmlndXJhdGlvblRvVmVyc2lvbl8xXzEoY29uZmlndXJhdGlvbikge1xuICBjb25zdCB2ZXJzaW9uID0gVkVSU0lPTl8xXzE7XG5cbiAgY29uc3QgaWdub3JlZEZpbGVQYXRocyA9IFtdLFxuICAgICAgICBwZXJtaXR0ZWRGaWxlUGF0aHMgPSBbXSxcbiAgICAgICAgaWdub3JlZERpcmVjdG9yeVBhdGhzID0gW10sXG4gICAgICAgIHBlcm1pdHRlZERpcmVjdG9yeVBhdGhzID0gW107XG5cbiAgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oY29uZmlndXJhdGlvbiwge1xuICAgIHZlcnNpb24sXG4gICAgaWdub3JlZEZpbGVQYXRocyxcbiAgICBwZXJtaXR0ZWRGaWxlUGF0aHMsXG4gICAgaWdub3JlZERpcmVjdG9yeVBhdGhzLFxuICAgIHBlcm1pdHRlZERpcmVjdG9yeVBhdGhzXG4gIH0pO1xuXG4gIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGVDb25maWd1cmF0aW9uVG9WZXJzaW9uXzFfMSIsImNvbmZpZ3VyYXRpb24iLCJ2ZXJzaW9uIiwiVkVSU0lPTl8xXzEiLCJpZ25vcmVkRmlsZVBhdGhzIiwicGVybWl0dGVkRmlsZVBhdGhzIiwiaWdub3JlZERpcmVjdG9yeVBhdGhzIiwicGVybWl0dGVkRGlyZWN0b3J5UGF0aHMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7d0JBRkk7QUFFYixTQUFTQSxrQ0FBa0NDLGFBQWE7SUFDckUsSUFBTUMsVUFBVUMscUJBQVc7SUFFM0IsSUFBTUMsbUJBQW1CLEVBQUUsRUFDckJDLHFCQUFxQixFQUFFLEVBQ3ZCQyx3QkFBd0IsRUFBRSxFQUMxQkMsMEJBQTBCLEVBQUU7SUFFbENOLGdCQUFnQk8sT0FBT0MsTUFBTSxDQUFDUixlQUFlO1FBQzNDQyxTQUFBQTtRQUNBRSxrQkFBQUE7UUFDQUMsb0JBQUFBO1FBQ0FDLHVCQUFBQTtRQUNBQyx5QkFBQUE7SUFDRjtJQUVBLE9BQU9OO0FBQ1QifQ==