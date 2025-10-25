"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return migrateConfigurationToVersion_1_3;
    }
});
var _versions = require("../versions");
var _constants = require("../constants");
function migrateConfigurationToVersion_1_3(configuration) {
    var version = _versions.VERSION_1_3, rootDirectoryPaths = [
        _constants.ROOT_DIRECTORY_PATH
    ];
    Object.assign(configuration, {
        version: version,
        rootDirectoryPaths: rootDirectoryPaths
    });
    return configuration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV8zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzFfMyB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuaW1wb3J0IHsgUk9PVF9ESVJFQ1RPUllfUEFUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fMV8zKGNvbmZpZ3VyYXRpb24pIHtcbiAgY29uc3QgdmVyc2lvbiA9IFZFUlNJT05fMV8zLFxuICAgICAgICByb290RGlyZWN0b3J5UGF0aHMgPSBbXG4gICAgICAgICAgUk9PVF9ESVJFQ1RPUllfUEFUSFxuICAgICAgICBdO1xuXG4gIE9iamVjdC5hc3NpZ24oY29uZmlndXJhdGlvbiwge1xuICAgIHZlcnNpb24sXG4gICAgcm9vdERpcmVjdG9yeVBhdGhzXG4gIH0pO1xuXG4gIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGVDb25maWd1cmF0aW9uVG9WZXJzaW9uXzFfMyIsImNvbmZpZ3VyYXRpb24iLCJ2ZXJzaW9uIiwiVkVSU0lPTl8xXzMiLCJyb290RGlyZWN0b3J5UGF0aHMiLCJST09UX0RJUkVDVE9SWV9QQVRIIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXdCQTs7O3dCQUhJO3lCQUNRO0FBRXJCLFNBQVNBLGtDQUFrQ0MsYUFBYTtJQUNyRSxJQUFNQyxVQUFVQyxxQkFBVyxFQUNyQkMscUJBQXFCO1FBQ25CQyw4QkFBbUI7S0FDcEI7SUFFUEMsT0FBT0MsTUFBTSxDQUFDTixlQUFlO1FBQzNCQyxTQUFBQTtRQUNBRSxvQkFBQUE7SUFDRjtJQUVBLE9BQU9IO0FBQ1QifQ==