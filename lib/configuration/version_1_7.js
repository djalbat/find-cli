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
    get createConfiguration () {
        return createConfiguration;
    },
    get migrateConfigurationToVersion_1_7 () {
        return migrateConfigurationToVersion_1_7;
    }
});
var _versions = require("../versions");
var _constants = require("../constants");
function migrateConfigurationToVersion_1_7(configuration) {
    var version = _versions.VERSION_1_7, previousRules = [];
    Object.assign(configuration, {
        version: version,
        previousRules: previousRules
    });
    return configuration;
}
function createConfiguration() {
    var version = _versions.VERSION_1_7, rootDirectoryPaths = [
        _constants.ROOT_DIRECTORY_PATH
    ], previousRules = [], ignoredFilePathRules = [], permittedFilePathRules = [], ignoredDirectoryPathRules = [], permittedDirectoryPathRules = [], configuration = {
        version: version,
        previousRules: previousRules,
        rootDirectoryPaths: rootDirectoryPaths,
        ignoredFilePathRules: ignoredFilePathRules,
        permittedFilePathRules: permittedFilePathRules,
        ignoredDirectoryPathRules: ignoredDirectoryPathRules,
        permittedDirectoryPathRules: permittedDirectoryPathRules
    };
    return configuration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV83LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzFfNyB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuaW1wb3J0IHsgUk9PVF9ESVJFQ1RPUllfUEFUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVDb25maWd1cmF0aW9uVG9WZXJzaW9uXzFfNyhjb25maWd1cmF0aW9uKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzFfNyxcbiAgICAgICAgcHJldmlvdXNSdWxlcyA9IFtdO1xuXG4gIE9iamVjdC5hc3NpZ24oY29uZmlndXJhdGlvbiwge1xuICAgIHZlcnNpb24sXG4gICAgcHJldmlvdXNSdWxlc1xuICB9KTtcblxuICByZXR1cm4gY29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmZpZ3VyYXRpb24oKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzFfNywgIC8vL1xuICAgICAgICByb290RGlyZWN0b3J5UGF0aHMgPSBbXG4gICAgICAgICAgUk9PVF9ESVJFQ1RPUllfUEFUSFxuICAgICAgICBdLFxuICAgICAgICBwcmV2aW91c1J1bGVzID0gW10sXG4gICAgICAgIGlnbm9yZWRGaWxlUGF0aFJ1bGVzID0gW10sXG4gICAgICAgIHBlcm1pdHRlZEZpbGVQYXRoUnVsZXMgPSBbXSxcbiAgICAgICAgaWdub3JlZERpcmVjdG9yeVBhdGhSdWxlcyA9IFtdLFxuICAgICAgICBwZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZXMgPSBbXSxcbiAgICAgICAgY29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIHByZXZpb3VzUnVsZXMsXG4gICAgICAgICAgcm9vdERpcmVjdG9yeVBhdGhzLFxuICAgICAgICAgIGlnbm9yZWRGaWxlUGF0aFJ1bGVzLFxuICAgICAgICAgIHBlcm1pdHRlZEZpbGVQYXRoUnVsZXMsXG4gICAgICAgICAgaWdub3JlZERpcmVjdG9yeVBhdGhSdWxlcyxcbiAgICAgICAgICBwZXJtaXR0ZWREaXJlY3RvcnlQYXRoUnVsZXNcbiAgICAgICAgfTtcblxuICByZXR1cm4gY29uZmlndXJhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb25maWd1cmF0aW9uIiwibWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fMV83IiwiY29uZmlndXJhdGlvbiIsInZlcnNpb24iLCJWRVJTSU9OXzFfNyIsInByZXZpb3VzUnVsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJyb290RGlyZWN0b3J5UGF0aHMiLCJST09UX0RJUkVDVE9SWV9QQVRIIiwiaWdub3JlZEZpbGVQYXRoUnVsZXMiLCJwZXJtaXR0ZWRGaWxlUGF0aFJ1bGVzIiwiaWdub3JlZERpcmVjdG9yeVBhdGhSdWxlcyIsInBlcm1pdHRlZERpcmVjdG9yeVBhdGhSdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBaUJnQkE7ZUFBQUE7O1FBWkFDO2VBQUFBOzs7d0JBSFk7eUJBQ1E7QUFFN0IsU0FBU0Esa0NBQWtDQyxhQUFhO0lBQzdELElBQU1DLFVBQVVDLHFCQUFXLEVBQ3JCQyxnQkFBZ0IsRUFBRTtJQUV4QkMsT0FBT0MsTUFBTSxDQUFDTCxlQUFlO1FBQzNCQyxTQUFBQTtRQUNBRSxlQUFBQTtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNGO0lBQ2QsSUFBTUcsVUFBVUMscUJBQVcsRUFDckJJLHFCQUFxQjtRQUNuQkMsOEJBQW1CO0tBQ3BCLEVBQ0RKLGdCQUFnQixFQUFFLEVBQ2xCSyx1QkFBdUIsRUFBRSxFQUN6QkMseUJBQXlCLEVBQUUsRUFDM0JDLDRCQUE0QixFQUFFLEVBQzlCQyw4QkFBOEIsRUFBRSxFQUNoQ1gsZ0JBQWdCO1FBQ2RDLFNBQUFBO1FBQ0FFLGVBQUFBO1FBQ0FHLG9CQUFBQTtRQUNBRSxzQkFBQUE7UUFDQUMsd0JBQUFBO1FBQ0FDLDJCQUFBQTtRQUNBQyw2QkFBQUE7SUFDRjtJQUVOLE9BQU9YO0FBQ1QifQ==