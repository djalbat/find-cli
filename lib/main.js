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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmluZEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vZmluZFwiO1xuaW1wb3J0IGhlbHBBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2hlbHBcIjtcbmltcG9ydCB2ZXJzaW9uQWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJzaW9uXCI7XG5pbXBvcnQgaW5pdGlhbGlzZUFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaW5pdGlhbGlzZVwiO1xuaW1wb3J0IGFkZFJvb3REaXJlY3RvcnlQYXRoQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9hZGRSb290RGlyZWN0b3J5UGF0aFwiO1xuaW1wb3J0IGxpc3RSb290RGlyZWN0b3J5UGF0aHNBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2xpc3RSb290RGlyZWN0b3J5UGF0aHNcIjtcbmltcG9ydCByZW1vdmVSb290RGlyZWN0b3J5UGF0aEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhcIjtcblxuaW1wb3J0IHsgTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSwgQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfUkVHRVgsIERFRkFVTFRfU1RSSU5HLCBERUZBVUxUX0ZPUk1BVCwgREVGQVVMVF9EUllfUlVOLCBERUZBVUxUX1FVSUVUTFksIERFRkFVTFRfUFJFVklPVVMsIERFRkFVTFRfSU5URVJBQ1RJVkUgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgRklORF9DT01NQU5ELFxuICAgICAgICAgSEVMUF9DT01NQU5ELFxuICAgICAgICAgVkVSU0lPTl9DT01NQU5ELFxuICAgICAgICAgSU5JVElBTElTRV9DT01NQU5ELFxuICAgICAgICAgQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORCxcbiAgICAgICAgIExJU1RfUk9PVF9ESVJFQ1RPUllfUEFUSFNfQ09NTUFORCxcbiAgICAgICAgIFJFTU9WRV9ST09UX0RJUkVDVE9SWV9QQVRIX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZm9ybWF0ID0gREVGQVVMVF9GT1JNQVQsIGRyeVJ1biA9IERFRkFVTFRfRFJZX1JVTiwgcXVpZXRseSA9IERFRkFVTFRfUVVJRVRMWSwgcHJldmlvdXMgPSBERUZBVUxUX1BSRVZJT1VTLCBpbnRlcmFjdGl2ZSA9IERFRkFVTFRfSU5URVJBQ1RJVkUgfSA9IG9wdGlvbnM7XG5cbiAgbGV0IHsgcmVnZXggPSBERUZBVUxUX1JFR0VYLCBzdHJpbmcgPSBERUZBVUxUX1NUUklORyB9ID0gb3B0aW9ucztcblxuICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICBjYXNlIEhFTFBfQ09NTUFORDoge1xuICAgICAgaGVscEFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFZFUlNJT05fQ09NTUFORDoge1xuICAgICAgdmVyc2lvbkFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIElOSVRJQUxJU0VfQ09NTUFORDoge1xuICAgICAgaW5pdGlhbGlzZUFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEFERF9ST09UX0RJUkVDVE9SWV9QQVRIX0NPTU1BTkQ6IHtcbiAgICAgIGNvbnN0IHJvb3REaXJlY3RvcnlQYXRoID0gYXJndW1lbnQ7IC8vL1xuXG4gICAgICBhZGRSb290RGlyZWN0b3J5UGF0aEFjdGlvbihyb290RGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgTElTVF9ST09UX0RJUkVDVE9SWV9QQVRIU19DT01NQU5EOiB7XG4gICAgICBsaXN0Um9vdERpcmVjdG9yeVBhdGhzQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUkVNT1ZFX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORDoge1xuICAgICAgY29uc3Qgcm9vdERpcmVjdG9yeVBhdGggPSBhcmd1bWVudDsgLy8vXG5cbiAgICAgIHJlbW92ZVJvb3REaXJlY3RvcnlQYXRoQWN0aW9uKHJvb3REaXJlY3RvcnlQYXRoKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBGSU5EX0NPTU1BTkQ6IHtcbiAgICAgIGlmIChhcmd1bWVudCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoIWRyeVJ1biAmJiAhcHJldmlvdXMgJiYgIWludGVyYWN0aXZlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKHN0cmluZykge1xuICAgICAgICBhcmd1bWVudCA9IGBcIiR7YXJndW1lbnR9XCJgO1xuICAgICAgfSBlbHNlIGlmIChyZWdleCkge1xuICAgICAgICBhcmd1bWVudCA9IGAvJHthcmd1bWVudH0vYDtcbiAgICAgIH1cblxuICAgICAgc3RyaW5nID0gYXJndW1lbnQ7ICAvLy9cblxuICAgICAgZmluZEFjdGlvbihzdHJpbmcsIGRyeVJ1biwgZm9ybWF0LCBxdWlldGx5LCBwcmV2aW91cywgaW50ZXJhY3RpdmUpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zb2xlLmxvZyhDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYWluIiwiY29tbWFuZCIsImFyZ3VtZW50Iiwib3B0aW9ucyIsImZvcm1hdCIsIkRFRkFVTFRfRk9STUFUIiwiZHJ5UnVuIiwiREVGQVVMVF9EUllfUlVOIiwicXVpZXRseSIsIkRFRkFVTFRfUVVJRVRMWSIsInByZXZpb3VzIiwiREVGQVVMVF9QUkVWSU9VUyIsImludGVyYWN0aXZlIiwiREVGQVVMVF9JTlRFUkFDVElWRSIsInJlZ2V4IiwiREVGQVVMVF9SRUdFWCIsInN0cmluZyIsIkRFRkFVTFRfU1RSSU5HIiwiSEVMUF9DT01NQU5EIiwiaGVscEFjdGlvbiIsIlZFUlNJT05fQ09NTUFORCIsInZlcnNpb25BY3Rpb24iLCJJTklUSUFMSVNFX0NPTU1BTkQiLCJpbml0aWFsaXNlQWN0aW9uIiwiQUREX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORCIsInJvb3REaXJlY3RvcnlQYXRoIiwiYWRkUm9vdERpcmVjdG9yeVBhdGhBY3Rpb24iLCJMSVNUX1JPT1RfRElSRUNUT1JZX1BBVEhTX0NPTU1BTkQiLCJsaXN0Um9vdERpcmVjdG9yeVBhdGhzQWN0aW9uIiwiUkVNT1ZFX1JPT1RfRElSRUNUT1JZX1BBVEhfQ09NTUFORCIsInJlbW92ZVJvb3REaXJlY3RvcnlQYXRoQWN0aW9uIiwiRklORF9DT01NQU5EIiwiY29uc29sZSIsImxvZyIsIk5PX0FSR1VNRU5UX0dJVkVOX01FU1NBR0UiLCJmaW5kQWN0aW9uIiwiQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUF3QkE7OzsyREFsQkQ7MkRBQ0E7OERBQ0c7aUVBQ0c7MkVBQ1U7NkVBQ0U7OEVBQ0M7d0JBRWdDO3dCQUM2RDt3QkFPcEY7Ozs7OztBQUVwQyxTQUFTQSxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNyRCxzQkFBeUpBLFFBQWpKQyxRQUFBQSxzQ0FBU0Msd0JBQWMsc0NBQTBIRixRQUF4SEcsUUFBQUEsc0NBQVNDLHlCQUFlLHVDQUFnR0osUUFBOUZLLFNBQUFBLHdDQUFVQyx5QkFBZSx5Q0FBcUVOLFFBQW5FTyxVQUFBQSwwQ0FBV0MsMEJBQWdCLDZDQUF3Q1IsUUFBdENTLGFBQUFBLGdEQUFjQyw2QkFBbUI7SUFFcEoscUJBQXlEVixRQUFuRFcsT0FBQUEsb0NBQVFDLHVCQUFhLHFDQUE4QlosUUFBNUJhLFFBQUFBLHNDQUFTQyx3QkFBYztJQUVwRCxPQUFRaEI7UUFDTixLQUFLaUIsc0JBQVk7WUFBRTtnQkFDakJDLElBQUFBLGFBQVU7Z0JBRVY7WUFDRjtRQUVBLEtBQUtDLHlCQUFlO1lBQUU7Z0JBQ3BCQyxJQUFBQSxnQkFBYTtnQkFFYjtZQUNGO1FBRUEsS0FBS0MsNEJBQWtCO1lBQUU7Z0JBQ3ZCQyxJQUFBQSxtQkFBZ0I7Z0JBRWhCO1lBQ0Y7UUFFQSxLQUFLQyx5Q0FBK0I7WUFBRTtnQkFDcEMsSUFBTUMsb0JBQW9CdkIsVUFBVSxHQUFHO2dCQUV2Q3dCLElBQUFBLDZCQUEwQixFQUFDRDtnQkFFM0I7WUFDRjtRQUVBLEtBQUtFLDJDQUFpQztZQUFFO2dCQUN0Q0MsSUFBQUEsK0JBQTRCO2dCQUU1QjtZQUNGO1FBRUEsS0FBS0MsNENBQWtDO1lBQUU7Z0JBQ3ZDLElBQU1KLHFCQUFvQnZCLFVBQVUsR0FBRztnQkFFdkM0QixJQUFBQSxnQ0FBNkIsRUFBQ0w7Z0JBRTlCO1lBQ0Y7UUFFQSxLQUFLTSxzQkFBWTtZQUFFO2dCQUNqQixJQUFJN0IsYUFBYSxNQUFNO29CQUNyQixJQUFJLENBQUNJLFVBQVUsQ0FBQ0ksWUFBWSxDQUFDRSxhQUFhO3dCQUN4Q29CLFFBQVFDLEdBQUcsQ0FBQ0MsbUNBQXlCO3dCQUVyQztvQkFDRjtnQkFDRjtnQkFFQSxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUlsQixRQUFRO29CQUNqQmQsV0FBVyxBQUFDLElBQVksT0FBVEEsVUFBUztnQkFDMUIsT0FBTyxJQUFJWSxPQUFPO29CQUNoQlosV0FBVyxBQUFDLElBQVksT0FBVEEsVUFBUztnQkFDMUI7Z0JBRUFjLFNBQVNkLFVBQVcsR0FBRztnQkFFdkJpQyxJQUFBQSxhQUFVLEVBQUNuQixRQUFRVixRQUFRRixRQUFRSSxTQUFTRSxVQUFVRTtnQkFFdEQ7WUFDRjtRQUVBO1lBQVM7Z0JBQ1BvQixRQUFRQyxHQUFHLENBQUNHLHdDQUE4QjtnQkFFMUM7WUFDRjtJQUNGO0FBQ0YifQ==