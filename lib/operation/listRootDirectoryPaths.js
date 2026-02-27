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
    get default () {
        return listRootDirectoryPathsOperation;
    },
    get listRootDirectoryPaths () {
        return listRootDirectoryPaths;
    }
});
const _configuration = require("../configuration");
const _messages = require("../messages");
function listRootDirectoryPathsOperation(proceed, abort, context) {
    listRootDirectoryPaths();
    proceed();
}
function listRootDirectoryPaths() {
    const rootDirectoryPaths = (0, _configuration.retrieveRootDirectoryPaths)(), rootDirectoryPathsLength = rootDirectoryPaths.length, lastIndex = rootDirectoryPathsLength - 1;
    if (lastIndex === 0) {
        console.log(_messages.NO_ROOT_DIRECTORY_PATHS_MESSAGE);
    }
    rootDirectoryPaths.forEach((rootDirectoryPath, index)=>{
        if (index > 0) {
            console.log(index, rootDirectoryPath);
        }
    });
    return lastIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vbGlzdFJvb3REaXJlY3RvcnlQYXRocy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmV0cmlldmVSb290RGlyZWN0b3J5UGF0aHMgfSBmcm9tIFwiLi4vY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgTk9fUk9PVF9ESVJFQ1RPUllfUEFUSFNfTUVTU0FHRSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0Um9vdERpcmVjdG9yeVBhdGhzT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGxpc3RSb290RGlyZWN0b3J5UGF0aHMoKVxuXG4gIHByb2NlZWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RSb290RGlyZWN0b3J5UGF0aHMoKSB7XG4gIGNvbnN0IHJvb3REaXJlY3RvcnlQYXRocyA9IHJldHJpZXZlUm9vdERpcmVjdG9yeVBhdGhzKCksXG4gICAgICAgIHJvb3REaXJlY3RvcnlQYXRoc0xlbmd0aCA9IHJvb3REaXJlY3RvcnlQYXRocy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IHJvb3REaXJlY3RvcnlQYXRoc0xlbmd0aCAtIDE7XG5cbiAgaWYgKGxhc3RJbmRleCA9PT0gMCkge1xuICAgIGNvbnNvbGUubG9nKE5PX1JPT1RfRElSRUNUT1JZX1BBVEhTX01FU1NBR0UpO1xuICB9XG5cbiAgcm9vdERpcmVjdG9yeVBhdGhzLmZvckVhY2goKHJvb3REaXJlY3RvcnlQYXRoLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4LCByb290RGlyZWN0b3J5UGF0aCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGFzdEluZGV4O1xufVxuIl0sIm5hbWVzIjpbImxpc3RSb290RGlyZWN0b3J5UGF0aHNPcGVyYXRpb24iLCJsaXN0Um9vdERpcmVjdG9yeVBhdGhzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInJvb3REaXJlY3RvcnlQYXRocyIsInJldHJpZXZlUm9vdERpcmVjdG9yeVBhdGhzIiwicm9vdERpcmVjdG9yeVBhdGhzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiY29uc29sZSIsImxvZyIsIk5PX1JPT1RfRElSRUNUT1JZX1BBVEhTX01FU1NBR0UiLCJmb3JFYWNoIiwicm9vdERpcmVjdG9yeVBhdGgiLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBS0E7ZUFBd0JBOztRQU1SQztlQUFBQTs7OytCQVQyQjswQkFDSztBQUVqQyxTQUFTRCxnQ0FBZ0NFLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzdFSDtJQUVBQztBQUNGO0FBRU8sU0FBU0Q7SUFDZCxNQUFNSSxxQkFBcUJDLElBQUFBLHlDQUEwQixLQUMvQ0MsMkJBQTJCRixtQkFBbUJHLE1BQU0sRUFDcERDLFlBQVlGLDJCQUEyQjtJQUU3QyxJQUFJRSxjQUFjLEdBQUc7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0MseUNBQStCO0lBQzdDO0lBRUFQLG1CQUFtQlEsT0FBTyxDQUFDLENBQUNDLG1CQUFtQkM7UUFDN0MsSUFBSUEsUUFBUSxHQUFHO1lBQ2JMLFFBQVFDLEdBQUcsQ0FBQ0ksT0FBT0Q7UUFDckI7SUFDRjtJQUVBLE9BQU9MO0FBQ1QifQ==