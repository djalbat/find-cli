"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return main;
    }
});
const _find = /*#__PURE__*/ _interop_require_default(require("./action/find"));
const _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
const _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
const _initialise = /*#__PURE__*/ _interop_require_default(require("./action/initialise"));
const _addRootDirectoryPath = /*#__PURE__*/ _interop_require_default(require("./action/addRootDirectoryPath"));
const _listRootDirectoryPaths = /*#__PURE__*/ _interop_require_default(require("./action/listRootDirectoryPaths"));
const _removeRootDirectoryPath = /*#__PURE__*/ _interop_require_default(require("./action/removeRootDirectoryPath"));
const _messages = require("./messages");
const _defaults = require("./defaults");
const _commands = require("./commands");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    const { format = _defaults.DEFAULT_FORMAT, dryRun = _defaults.DEFAULT_DRY_RUN, quietly = _defaults.DEFAULT_QUIETLY, previous = _defaults.DEFAULT_PREVIOUS, interactive = _defaults.DEFAULT_INTERACTIVE } = options;
    let { regex = _defaults.DEFAULT_REGEX, string = _defaults.DEFAULT_STRING } = options;
    switch(command){
        case _commands.HELP_COMMAND:
            {
                (0, _help.default)();
                break;
            }
        case _commands.VERSION_COMMAND:
            {
                (0, _version.default)();
                break;
            }
        case _commands.INITIALISE_COMMAND:
            {
                (0, _initialise.default)();
                break;
            }
        case _commands.ADD_ROOT_DIRECTORY_PATH_COMMAND:
            {
                const rootDirectoryPath = argument; ///
                (0, _addRootDirectoryPath.default)(rootDirectoryPath);
                break;
            }
        case _commands.LIST_ROOT_DIRECTORY_PATHS_COMMAND:
            {
                (0, _listRootDirectoryPaths.default)();
                break;
            }
        case _commands.REMOVE_ROOT_DIRECTORY_PATH_COMMAND:
            {
                const rootDirectoryPath = argument; ///
                (0, _removeRootDirectoryPath.default)(rootDirectoryPath);
                break;
            }
        case _commands.FIND_COMMAND:
            {
                if (argument === null) {
                    if (!dryRun && !previous && !interactive) {
                        console.log(_messages.NO_ARGUMENT_GIVEN_MESSAGE);
                        break;
                    }
                }
                if (false) {
                ///
                } else if (string) {
                    argument = `"${argument}"`;
                } else if (regex) {
                    argument = `/${argument}/`;
                }
                string = argument; ///
                (0, _find.default)(string, dryRun, format, quietly, previous, interactive);
                break;
            }
        default:
            {
                console.log(_messages.COMMAND_NOT_RECOGNISED_MESSAGE);
                break;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmluZEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vZmluZFwiO1xuaW1wb3J0IGhlbHBBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2hlbHBcIjtcbmltcG9ydCB2ZXJzaW9uQWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJzaW9uXCI7XG5pbXBvcnQgaW5pdGlhbGlzZUFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaW5pdGlhbGlzZVwiO1xuaW1wb3J0IGFkZFJvb3REaXJlY3RvcnlQYXRoQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9hZGRSb290RGlyZWN0b3J5UGF0aFwiO1xuaW1wb3J0IGxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2xpc3RSb290RGlyZWN0b3J5UGF0aHNcIjtcbmltcG9ydCByZW1vdmVSb290RGlyZWN0b3J5UGF0aEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhcIjtcblxuaW1wb3J0IHsgTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSwgQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfUkVHRVgsIERFRkFVTFRfU1RSSU5HLCBERUZBVUxUX0ZPUk1BVCwgREVGQVVMVF9EUllfUlVOLCBERUZBVUxUX1FVSUVUTFksIERFRkFVTFRfUFJFVklPVVMsIERFRkFVTFRfSU5URVJBQ1RJVkUgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgRklORF9DT01NQU5ELFxuICAgICAgICAgSEVMUF9DT01NQU5ELFxuICAgICAgICAgVkVSU0lPTl9DT01NQU5ELFxuICAgICAgICAgSU5JVElBTElTRV9DT01NQU5ELFxuICAgICAgICAgQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORCxcbiAgICAgICAgIExJU1RfUk9PVF9ESVJFQ1RPUllfUEFUSFNfQ09NTUFORCxcbiAgICAgICAgIFJFTU9WRV9ST09UX0RJUkVDVE9SWV9QQVRIX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZm9ybWF0ID0gREVGQVVMVF9GT1JNQVQsXG4gICAgICAgICAgZHJ5UnVuID0gREVGQVVMVF9EUllfUlVOLFxuICAgICAgICAgIHF1aWV0bHkgPSBERUZBVUxUX1FVSUVUTFksXG4gICAgICAgICAgcHJldmlvdXMgPSBERUZBVUxUX1BSRVZJT1VTLFxuICAgICAgICAgIGludGVyYWN0aXZlID0gREVGQVVMVF9JTlRFUkFDVElWRSB9ID0gb3B0aW9ucztcblxuICBsZXQgeyByZWdleCA9IERFRkFVTFRfUkVHRVgsIHN0cmluZyA9IERFRkFVTFRfU1RSSU5HIH0gPSBvcHRpb25zO1xuXG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgSEVMUF9DT01NQU5EOiB7XG4gICAgICBoZWxwQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVkVSU0lPTl9DT01NQU5EOiB7XG4gICAgICB2ZXJzaW9uQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgSU5JVElBTElTRV9DT01NQU5EOiB7XG4gICAgICBpbml0aWFsaXNlQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORDoge1xuICAgICAgY29uc3Qgcm9vdERpcmVjdG9yeVBhdGggPSBhcmd1bWVudDsgLy8vXG5cbiAgICAgIGFkZFJvb3REaXJlY3RvcnlQYXRoQWN0aW9uKHJvb3REaXJlY3RvcnlQYXRoKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBMSVNUX1JPT1RfRElSRUNUT1JZX1BBVEhTX0NPTU1BTkQ6IHtcbiAgICAgIGxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBSRU1PVkVfUk9PVF9ESVJFQ1RPUllfUEFUSF9DT01NQU5EOiB7XG4gICAgICBjb25zdCByb290RGlyZWN0b3J5UGF0aCA9IGFyZ3VtZW50OyAvLy9cblxuICAgICAgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhBY3Rpb24ocm9vdERpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEZJTkRfQ09NTUFORDoge1xuICAgICAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGlmICghZHJ5UnVuICYmICFwcmV2aW91cyAmJiAhaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhOT19BUkdVTUVOVF9HSVZFTl9NRVNTQUdFKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoc3RyaW5nKSB7XG4gICAgICAgIGFyZ3VtZW50ID0gYFwiJHthcmd1bWVudH1cImA7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2V4KSB7XG4gICAgICAgIGFyZ3VtZW50ID0gYC8ke2FyZ3VtZW50fS9gO1xuICAgICAgfVxuXG4gICAgICBzdHJpbmcgPSBhcmd1bWVudDsgIC8vL1xuXG4gICAgICBmaW5kQWN0aW9uKHN0cmluZywgZHJ5UnVuLCBmb3JtYXQsIHF1aWV0bHksIHByZXZpb3VzLCBpbnRlcmFjdGl2ZSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnNvbGUubG9nKENPTU1BTkRfTk9UX1JFQ09HTklTRURfTUVTU0FHRSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1haW4iLCJjb21tYW5kIiwiYXJndW1lbnQiLCJvcHRpb25zIiwiZm9ybWF0IiwiREVGQVVMVF9GT1JNQVQiLCJkcnlSdW4iLCJERUZBVUxUX0RSWV9SVU4iLCJxdWlldGx5IiwiREVGQVVMVF9RVUlFVExZIiwicHJldmlvdXMiLCJERUZBVUxUX1BSRVZJT1VTIiwiaW50ZXJhY3RpdmUiLCJERUZBVUxUX0lOVEVSQUNUSVZFIiwicmVnZXgiLCJERUZBVUxUX1JFR0VYIiwic3RyaW5nIiwiREVGQVVMVF9TVFJJTkciLCJIRUxQX0NPTU1BTkQiLCJoZWxwQWN0aW9uIiwiVkVSU0lPTl9DT01NQU5EIiwidmVyc2lvbkFjdGlvbiIsIklOSVRJQUxJU0VfQ09NTUFORCIsImluaXRpYWxpc2VBY3Rpb24iLCJBRERfUk9PVF9ESVJFQ1RPUllfUEFUSF9DT01NQU5EIiwicm9vdERpcmVjdG9yeVBhdGgiLCJhZGRSb290RGlyZWN0b3J5UGF0aEFjdGlvbiIsIkxJU1RfUk9PVF9ESVJFQ1RPUllfUEFUSFNfQ09NTUFORCIsImxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24iLCJSRU1PVkVfUk9PVF9ESVJFQ1RPUllfUEFUSF9DT01NQU5EIiwicmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhBY3Rpb24iLCJGSU5EX0NPTU1BTkQiLCJjb25zb2xlIiwibG9nIiwiTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSIsImZpbmRBY3Rpb24iLCJDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9CQTs7O2VBQXdCQTs7OzZEQWxCRDs2REFDQTtnRUFDRzttRUFDRzs2RUFDVTsrRUFDRTtnRkFDQzswQkFFZ0M7MEJBQzZEOzBCQU9wRjs7Ozs7O0FBRXBDLFNBQVNBLEtBQUtDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQ3JELE1BQU0sRUFBRUMsU0FBU0Msd0JBQWMsRUFDdkJDLFNBQVNDLHlCQUFlLEVBQ3hCQyxVQUFVQyx5QkFBZSxFQUN6QkMsV0FBV0MsMEJBQWdCLEVBQzNCQyxjQUFjQyw2QkFBbUIsRUFBRSxHQUFHVjtJQUU5QyxJQUFJLEVBQUVXLFFBQVFDLHVCQUFhLEVBQUVDLFNBQVNDLHdCQUFjLEVBQUUsR0FBR2Q7SUFFekQsT0FBUUY7UUFDTixLQUFLaUIsc0JBQVk7WUFBRTtnQkFDakJDLElBQUFBLGFBQVU7Z0JBRVY7WUFDRjtRQUVBLEtBQUtDLHlCQUFlO1lBQUU7Z0JBQ3BCQyxJQUFBQSxnQkFBYTtnQkFFYjtZQUNGO1FBRUEsS0FBS0MsNEJBQWtCO1lBQUU7Z0JBQ3ZCQyxJQUFBQSxtQkFBZ0I7Z0JBRWhCO1lBQ0Y7UUFFQSxLQUFLQyx5Q0FBK0I7WUFBRTtnQkFDcEMsTUFBTUMsb0JBQW9CdkIsVUFBVSxHQUFHO2dCQUV2Q3dCLElBQUFBLDZCQUEwQixFQUFDRDtnQkFFM0I7WUFDRjtRQUVBLEtBQUtFLDJDQUFpQztZQUFFO2dCQUN0Q0MsSUFBQUEsK0JBQTRCO2dCQUU1QjtZQUNGO1FBRUEsS0FBS0MsNENBQWtDO1lBQUU7Z0JBQ3ZDLE1BQU1KLG9CQUFvQnZCLFVBQVUsR0FBRztnQkFFdkM0QixJQUFBQSxnQ0FBNkIsRUFBQ0w7Z0JBRTlCO1lBQ0Y7UUFFQSxLQUFLTSxzQkFBWTtZQUFFO2dCQUNqQixJQUFJN0IsYUFBYSxNQUFNO29CQUNyQixJQUFJLENBQUNJLFVBQVUsQ0FBQ0ksWUFBWSxDQUFDRSxhQUFhO3dCQUN4Q29CLFFBQVFDLEdBQUcsQ0FBQ0MsbUNBQXlCO3dCQUVyQztvQkFDRjtnQkFDRjtnQkFFQSxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUlsQixRQUFRO29CQUNqQmQsV0FBVyxDQUFDLENBQUMsRUFBRUEsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sSUFBSVksT0FBTztvQkFDaEJaLFdBQVcsQ0FBQyxDQUFDLEVBQUVBLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QjtnQkFFQWMsU0FBU2QsVUFBVyxHQUFHO2dCQUV2QmlDLElBQUFBLGFBQVUsRUFBQ25CLFFBQVFWLFFBQVFGLFFBQVFJLFNBQVNFLFVBQVVFO2dCQUV0RDtZQUNGO1FBRUE7WUFBUztnQkFDUG9CLFFBQVFDLEdBQUcsQ0FBQ0csd0NBQThCO2dCQUUxQztZQUNGO0lBQ0Y7QUFDRiJ9