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
var _find = /*#__PURE__*/ _interop_require_default(require("./action/find"));
var _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
var _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
var _initialise = /*#__PURE__*/ _interop_require_default(require("./action/initialise"));
var _addRootDirectoryPath = /*#__PURE__*/ _interop_require_default(require("./action/addRootDirectoryPath"));
var _listRootDirectoryPaths = /*#__PURE__*/ _interop_require_default(require("./action/listRootDirectoryPaths"));
var _removeRootDirectoryPath = /*#__PURE__*/ _interop_require_default(require("./action/removeRootDirectoryPath"));
var _messages = require("./messages");
var _defaults = require("./defaults");
var _commands = require("./commands");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    var _options_format = options.format, format = _options_format === void 0 ? _defaults.DEFAULT_FORMAT : _options_format, _options_dryRun = options.dryRun, dryRun = _options_dryRun === void 0 ? _defaults.DEFAULT_DRY_RUN : _options_dryRun, _options_quietly = options.quietly, quietly = _options_quietly === void 0 ? _defaults.DEFAULT_QUIETLY : _options_quietly, _options_previous = options.previous, previous = _options_previous === void 0 ? _defaults.DEFAULT_PREVIOUS : _options_previous, _options_interactive = options.interactive, interactive = _options_interactive === void 0 ? _defaults.DEFAULT_INTERACTIVE : _options_interactive;
    var _options_regex = options.regex, regex = _options_regex === void 0 ? _defaults.DEFAULT_REGEX : _options_regex, _options_string = options.string, string = _options_string === void 0 ? _defaults.DEFAULT_STRING : _options_string;
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
                var rootDirectoryPath = argument; ///
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
                var rootDirectoryPath1 = argument; ///
                (0, _removeRootDirectoryPath.default)(rootDirectoryPath1);
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
                    argument = '"'.concat(argument, '"');
                } else if (regex) {
                    argument = "/".concat(argument, "/");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmluZEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vZmluZFwiO1xuaW1wb3J0IGhlbHBBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2hlbHBcIjtcbmltcG9ydCB2ZXJzaW9uQWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJzaW9uXCI7XG5pbXBvcnQgaW5pdGlhbGlzZUFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaW5pdGlhbGlzZVwiO1xuaW1wb3J0IGFkZFJvb3REaXJlY3RvcnlQYXRoQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9hZGRSb290RGlyZWN0b3J5UGF0aFwiO1xuaW1wb3J0IGxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2xpc3RSb290RGlyZWN0b3J5UGF0aHNcIjtcbmltcG9ydCByZW1vdmVSb290RGlyZWN0b3J5UGF0aEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhcIjtcblxuaW1wb3J0IHsgTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSwgQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfUkVHRVgsIERFRkFVTFRfU1RSSU5HLCBERUZBVUxUX0ZPUk1BVCwgREVGQVVMVF9EUllfUlVOLCBERUZBVUxUX1FVSUVUTFksIERFRkFVTFRfUFJFVklPVVMsIERFRkFVTFRfSU5URVJBQ1RJVkUgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgRklORF9DT01NQU5ELFxuICAgICAgICAgSEVMUF9DT01NQU5ELFxuICAgICAgICAgVkVSU0lPTl9DT01NQU5ELFxuICAgICAgICAgSU5JVElBTElTRV9DT01NQU5ELFxuICAgICAgICAgQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORCxcbiAgICAgICAgIExJU1RfUk9PVF9ESVJFQ1RPUllfUEFUSFNfQ09NTUFORCxcbiAgICAgICAgIFJFTU9WRV9ST09UX0RJUkVDVE9SWV9QQVRIX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZm9ybWF0ID0gREVGQVVMVF9GT1JNQVQsXG4gICAgICAgICAgZHJ5UnVuID0gREVGQVVMVF9EUllfUlVOLFxuICAgICAgICAgIHF1aWV0bHkgPSBERUZBVUxUX1FVSUVUTFksXG4gICAgICAgICAgcHJldmlvdXMgPSBERUZBVUxUX1BSRVZJT1VTLFxuICAgICAgICAgIGludGVyYWN0aXZlID0gREVGQVVMVF9JTlRFUkFDVElWRSB9ID0gb3B0aW9ucztcblxuICBsZXQgeyByZWdleCA9IERFRkFVTFRfUkVHRVgsIHN0cmluZyA9IERFRkFVTFRfU1RSSU5HIH0gPSBvcHRpb25zO1xuXG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgSEVMUF9DT01NQU5EOiB7XG4gICAgICBoZWxwQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVkVSU0lPTl9DT01NQU5EOiB7XG4gICAgICB2ZXJzaW9uQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgSU5JVElBTElTRV9DT01NQU5EOiB7XG4gICAgICBpbml0aWFsaXNlQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORDoge1xuICAgICAgY29uc3Qgcm9vdERpcmVjdG9yeVBhdGggPSBhcmd1bWVudDsgLy8vXG5cbiAgICAgIGFkZFJvb3REaXJlY3RvcnlQYXRoQWN0aW9uKHJvb3REaXJlY3RvcnlQYXRoKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBMSVNUX1JPT1RfRElSRUNUT1JZX1BBVEhTX0NPTU1BTkQ6IHtcbiAgICAgIGxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBSRU1PVkVfUk9PVF9ESVJFQ1RPUllfUEFUSF9DT01NQU5EOiB7XG4gICAgICBjb25zdCByb290RGlyZWN0b3J5UGF0aCA9IGFyZ3VtZW50OyAvLy9cblxuICAgICAgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhBY3Rpb24ocm9vdERpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEZJTkRfQ09NTUFORDoge1xuICAgICAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGlmICghZHJ5UnVuICYmICFwcmV2aW91cyAmJiAhaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhOT19BUkdVTUVOVF9HSVZFTl9NRVNTQUdFKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoc3RyaW5nKSB7XG4gICAgICAgIGFyZ3VtZW50ID0gYFwiJHthcmd1bWVudH1cImA7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2V4KSB7XG4gICAgICAgIGFyZ3VtZW50ID0gYC8ke2FyZ3VtZW50fS9gO1xuICAgICAgfVxuXG4gICAgICBzdHJpbmcgPSBhcmd1bWVudDsgIC8vL1xuXG4gICAgICBmaW5kQWN0aW9uKHN0cmluZywgZHJ5UnVuLCBmb3JtYXQsIHF1aWV0bHksIHByZXZpb3VzLCBpbnRlcmFjdGl2ZSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnNvbGUubG9nKENPTU1BTkRfTk9UX1JFQ09HTklTRURfTUVTU0FHRSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1haW4iLCJjb21tYW5kIiwiYXJndW1lbnQiLCJvcHRpb25zIiwiZm9ybWF0IiwiREVGQVVMVF9GT1JNQVQiLCJkcnlSdW4iLCJERUZBVUxUX0RSWV9SVU4iLCJxdWlldGx5IiwiREVGQVVMVF9RVUlFVExZIiwicHJldmlvdXMiLCJERUZBVUxUX1BSRVZJT1VTIiwiaW50ZXJhY3RpdmUiLCJERUZBVUxUX0lOVEVSQUNUSVZFIiwicmVnZXgiLCJERUZBVUxUX1JFR0VYIiwic3RyaW5nIiwiREVGQVVMVF9TVFJJTkciLCJIRUxQX0NPTU1BTkQiLCJoZWxwQWN0aW9uIiwiVkVSU0lPTl9DT01NQU5EIiwidmVyc2lvbkFjdGlvbiIsIklOSVRJQUxJU0VfQ09NTUFORCIsImluaXRpYWxpc2VBY3Rpb24iLCJBRERfUk9PVF9ESVJFQ1RPUllfUEFUSF9DT01NQU5EIiwicm9vdERpcmVjdG9yeVBhdGgiLCJhZGRSb290RGlyZWN0b3J5UGF0aEFjdGlvbiIsIkxJU1RfUk9PVF9ESVJFQ1RPUllfUEFUSFNfQ09NTUFORCIsImxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24iLCJSRU1PVkVfUk9PVF9ESVJFQ1RPUllfUEFUSF9DT01NQU5EIiwicmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhBY3Rpb24iLCJGSU5EX0NPTU1BTkQiLCJjb25zb2xlIiwibG9nIiwiTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSIsImZpbmRBY3Rpb24iLCJDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9CQTs7O2VBQXdCQTs7OzJEQWxCRDsyREFDQTs4REFDRztpRUFDRzsyRUFDVTs2RUFDRTs4RUFDQzt3QkFFZ0M7d0JBQzZEO3dCQU9wRjs7Ozs7O0FBRXBDLFNBQVNBLEtBQUtDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQ3JELHNCQUk4Q0EsUUFKdENDLFFBQUFBLHNDQUFTQyx3QkFBYyxzQ0FJZUYsUUFIdENHLFFBQUFBLHNDQUFTQyx5QkFBZSx1Q0FHY0osUUFGdENLLFNBQUFBLHdDQUFVQyx5QkFBZSx5Q0FFYU4sUUFEdENPLFVBQUFBLDBDQUFXQywwQkFBZ0IsNkNBQ1dSLFFBQXRDUyxhQUFBQSxnREFBY0MsNkJBQW1CO0lBRXpDLHFCQUF5RFYsUUFBbkRXLE9BQUFBLG9DQUFRQyx1QkFBYSxxQ0FBOEJaLFFBQTVCYSxRQUFBQSxzQ0FBU0Msd0JBQWM7SUFFcEQsT0FBUWhCO1FBQ04sS0FBS2lCLHNCQUFZO1lBQUU7Z0JBQ2pCQyxJQUFBQSxhQUFVO2dCQUVWO1lBQ0Y7UUFFQSxLQUFLQyx5QkFBZTtZQUFFO2dCQUNwQkMsSUFBQUEsZ0JBQWE7Z0JBRWI7WUFDRjtRQUVBLEtBQUtDLDRCQUFrQjtZQUFFO2dCQUN2QkMsSUFBQUEsbUJBQWdCO2dCQUVoQjtZQUNGO1FBRUEsS0FBS0MseUNBQStCO1lBQUU7Z0JBQ3BDLElBQU1DLG9CQUFvQnZCLFVBQVUsR0FBRztnQkFFdkN3QixJQUFBQSw2QkFBMEIsRUFBQ0Q7Z0JBRTNCO1lBQ0Y7UUFFQSxLQUFLRSwyQ0FBaUM7WUFBRTtnQkFDdENDLElBQUFBLCtCQUE0QjtnQkFFNUI7WUFDRjtRQUVBLEtBQUtDLDRDQUFrQztZQUFFO2dCQUN2QyxJQUFNSixxQkFBb0J2QixVQUFVLEdBQUc7Z0JBRXZDNEIsSUFBQUEsZ0NBQTZCLEVBQUNMO2dCQUU5QjtZQUNGO1FBRUEsS0FBS00sc0JBQVk7WUFBRTtnQkFDakIsSUFBSTdCLGFBQWEsTUFBTTtvQkFDckIsSUFBSSxDQUFDSSxVQUFVLENBQUNJLFlBQVksQ0FBQ0UsYUFBYTt3QkFDeENvQixRQUFRQyxHQUFHLENBQUNDLG1DQUF5Qjt3QkFFckM7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJbEIsUUFBUTtvQkFDakJkLFdBQVcsQUFBQyxJQUFZLE9BQVRBLFVBQVM7Z0JBQzFCLE9BQU8sSUFBSVksT0FBTztvQkFDaEJaLFdBQVcsQUFBQyxJQUFZLE9BQVRBLFVBQVM7Z0JBQzFCO2dCQUVBYyxTQUFTZCxVQUFXLEdBQUc7Z0JBRXZCaUMsSUFBQUEsYUFBVSxFQUFDbkIsUUFBUVYsUUFBUUYsUUFBUUksU0FBU0UsVUFBVUU7Z0JBRXREO1lBQ0Y7UUFFQTtZQUFTO2dCQUNQb0IsUUFBUUMsR0FBRyxDQUFDRyx3Q0FBOEI7Z0JBRTFDO1lBQ0Y7SUFDRjtBQUNGIn0=