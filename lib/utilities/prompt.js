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
    get isAnswerIgnore () {
        return isAnswerIgnore;
    },
    get selectPreviousRule () {
        return selectPreviousRule;
    }
});
const _necessary = require("necessary");
const _constants = require("../constants");
const _descriptions = require("../descriptions");
const { UTF8_ENCODING } = _necessary.encodings, { UP_CHARACTER, ETX_CHARACTER, DOWN_CHARACTER, ESCAPE_CHARACTER, CTRL_C_CHARACTER, NEW_LINE_CHARACTER, CARRIAGE_RETURN_CHARACTER } = _necessary.characters;
function isAnswerIgnore(answer) {
    return /^(:?ignore|i)$/i.test(answer);
}
function selectPreviousRule(previousRules, callback) {
    let index = 0, previousRule = previousRules[index];
    writePreviousRule(previousRule);
    const rawMode = true, encoding = UTF8_ENCODING, previousRulesLength = previousRules.length;
    process.stdin.setRawMode(rawMode);
    process.stdin.setEncoding(encoding);
    process.stdin.addListener(_constants.DATA, listener);
    process.stdin.resume();
    function listener(data) {
        const character = data.toString(encoding);
        switch(character){
            case UP_CHARACTER:
                {
                    const firstIndex = 0;
                    if (index > firstIndex) {
                        index--;
                        previousRule = previousRules[index];
                        writePreviousRule(previousRule);
                    }
                    break;
                }
            case DOWN_CHARACTER:
                {
                    const lastIndex = previousRulesLength - 1;
                    if (index < lastIndex) {
                        index++;
                        previousRule = previousRules[index];
                        writePreviousRule(previousRule);
                    }
                    break;
                }
            case ESCAPE_CHARACTER:
                {
                    previousRule = null;
                    console.log(CARRIAGE_RETURN_CHARACTER);
                    process.stdin.removeListener(_constants.DATA, listener);
                    process.stdin.pause();
                    callback(previousRule);
                    break;
                }
            case NEW_LINE_CHARACTER:
            case CARRIAGE_RETURN_CHARACTER:
                {
                    process.stdout.clearLine();
                    process.stdout.cursorTo(0);
                    process.stdin.removeListener(_constants.DATA, listener);
                    process.stdin.pause();
                    callback(previousRule);
                    break;
                }
            case ETX_CHARACTER:
                {
                    console.log(CTRL_C_CHARACTER);
                    process.exit();
                    break;
                }
            default:
                {
                    break;
                }
        }
    }
}
function writePreviousRule(previousRule) {
    const description = _descriptions.PREVIOUS_GLOB_STRING_OR_REGEX_DESCRIPTION, previousRuleString = previousRule.asString();
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(description);
    process.stdout.write(previousRuleString);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvbXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlbmNvZGluZ3MsIGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERBVEEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQUkVWSU9VU19HTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTiB9IGZyb20gXCIuLi9kZXNjcmlwdGlvbnNcIjtcblxuY29uc3QgeyBVVEY4X0VOQ09ESU5HIH0gPSBlbmNvZGluZ3MsXG4gICAgICB7IFVQX0NIQVJBQ1RFUixcbiAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgRE9XTl9DSEFSQUNURVIsXG4gICAgICAgIEVTQ0FQRV9DSEFSQUNURVIsXG4gICAgICAgIENUUkxfQ19DSEFSQUNURVIsXG4gICAgICAgIE5FV19MSU5FX0NIQVJBQ1RFUixcbiAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQW5zd2VySWdub3JlKGFuc3dlcikgeyByZXR1cm4gL14oOj9pZ25vcmV8aSkkL2kudGVzdChhbnN3ZXIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RQcmV2aW91c1J1bGUocHJldmlvdXNSdWxlcywgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIHByZXZpb3VzUnVsZSA9IHByZXZpb3VzUnVsZXNbaW5kZXhdO1xuXG4gIHdyaXRlUHJldmlvdXNSdWxlKHByZXZpb3VzUnVsZSk7XG5cbiAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgIGVuY29kaW5nID0gVVRGOF9FTkNPRElORyxcbiAgICAgICAgcHJldmlvdXNSdWxlc0xlbmd0aCA9IHByZXZpb3VzUnVsZXMubGVuZ3RoO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICBwcm9jZXNzLnN0ZGluLmFkZExpc3RlbmVyKERBVEEsIGxpc3RlbmVyKTtcblxuICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKGRhdGEpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIFVQX0NIQVJBQ1RFUjoge1xuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gMDtcblxuICAgICAgICBpZiAoaW5kZXggPiBmaXJzdEluZGV4KSB7XG4gICAgICAgICAgaW5kZXgtLTtcblxuICAgICAgICAgIHByZXZpb3VzUnVsZSA9IHByZXZpb3VzUnVsZXNbaW5kZXhdO1xuXG4gICAgICAgICAgd3JpdGVQcmV2aW91c1J1bGUocHJldmlvdXNSdWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERPV05fQ0hBUkFDVEVSOiB7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHByZXZpb3VzUnVsZXNMZW5ndGggLSAxO1xuXG4gICAgICAgIGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgICBwcmV2aW91c1J1bGUgPSBwcmV2aW91c1J1bGVzW2luZGV4XTtcblxuICAgICAgICAgIHdyaXRlUHJldmlvdXNSdWxlKHByZXZpb3VzUnVsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFU0NBUEVfQ0hBUkFDVEVSOiB7XG4gICAgICAgIHByZXZpb3VzUnVsZSA9IG51bGw7XG5cbiAgICAgICAgY29uc29sZS5sb2coQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihEQVRBLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgICAgIGNhbGxiYWNrKHByZXZpb3VzUnVsZSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgTkVXX0xJTkVfQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSOiB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoREFUQSwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBjYWxsYmFjayhwcmV2aW91c1J1bGUpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVI6IHtcbiAgICAgICAgY29uc29sZS5sb2coQ1RSTF9DX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHdyaXRlUHJldmlvdXNSdWxlKHByZXZpb3VzUnVsZSkge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IFBSRVZJT1VTX0dMT0JfU1RSSU5HX09SX1JFR0VYX0RFU0NSSVBUSU9OLCAgLy8vXG4gICAgICAgIHByZXZpb3VzUnVsZVN0cmluZyA9IHByZXZpb3VzUnVsZS5hc1N0cmluZygpO1xuXG4gIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShwcmV2aW91c1J1bGVTdHJpbmcpO1xufVxuXG4iXSwibmFtZXMiOlsiaXNBbnN3ZXJJZ25vcmUiLCJzZWxlY3RQcmV2aW91c1J1bGUiLCJVVEY4X0VOQ09ESU5HIiwiZW5jb2RpbmdzIiwiVVBfQ0hBUkFDVEVSIiwiRVRYX0NIQVJBQ1RFUiIsIkRPV05fQ0hBUkFDVEVSIiwiRVNDQVBFX0NIQVJBQ1RFUiIsIkNUUkxfQ19DSEFSQUNURVIiLCJORVdfTElORV9DSEFSQUNURVIiLCJDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsImFuc3dlciIsInRlc3QiLCJwcmV2aW91c1J1bGVzIiwiY2FsbGJhY2siLCJpbmRleCIsInByZXZpb3VzUnVsZSIsIndyaXRlUHJldmlvdXNSdWxlIiwicmF3TW9kZSIsImVuY29kaW5nIiwicHJldmlvdXNSdWxlc0xlbmd0aCIsImxlbmd0aCIsInByb2Nlc3MiLCJzdGRpbiIsInNldFJhd01vZGUiLCJzZXRFbmNvZGluZyIsImFkZExpc3RlbmVyIiwiREFUQSIsImxpc3RlbmVyIiwicmVzdW1lIiwiZGF0YSIsImNoYXJhY3RlciIsInRvU3RyaW5nIiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVMaXN0ZW5lciIsInBhdXNlIiwic3Rkb3V0IiwiY2xlYXJMaW5lIiwiY3Vyc29yVG8iLCJleGl0IiwiZGVzY3JpcHRpb24iLCJQUkVWSU9VU19HTE9CX1NUUklOR19PUl9SRUdFWF9ERVNDUklQVElPTiIsInByZXZpb3VzUnVsZVN0cmluZyIsImFzU3RyaW5nIiwid3JpdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdCZ0JBO2VBQUFBOztRQUVBQztlQUFBQTs7OzJCQWhCc0I7MkJBRWpCOzhCQUNxQztBQUUxRCxNQUFNLEVBQUVDLGFBQWEsRUFBRSxHQUFHQyxvQkFBUyxFQUM3QixFQUFFQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsY0FBYyxFQUNkQyxnQkFBZ0IsRUFDaEJDLGdCQUFnQixFQUNoQkMsa0JBQWtCLEVBQ2xCQyx5QkFBeUIsRUFBRSxHQUFHQyxxQkFBVTtBQUV6QyxTQUFTWCxlQUFlWSxNQUFNO0lBQUksT0FBTyxrQkFBa0JDLElBQUksQ0FBQ0Q7QUFBUztBQUV6RSxTQUFTWCxtQkFBbUJhLGFBQWEsRUFBRUMsUUFBUTtJQUN4RCxJQUFJQyxRQUFRLEdBQ1JDLGVBQWVILGFBQWEsQ0FBQ0UsTUFBTTtJQUV2Q0Usa0JBQWtCRDtJQUVsQixNQUFNRSxVQUFVLE1BQ1ZDLFdBQVdsQixlQUNYbUIsc0JBQXNCUCxjQUFjUSxNQUFNO0lBRWhEQyxRQUFRQyxLQUFLLENBQUNDLFVBQVUsQ0FBQ047SUFFekJJLFFBQVFDLEtBQUssQ0FBQ0UsV0FBVyxDQUFDTjtJQUUxQkcsUUFBUUMsS0FBSyxDQUFDRyxXQUFXLENBQUNDLGVBQUksRUFBRUM7SUFFaENOLFFBQVFDLEtBQUssQ0FBQ00sTUFBTTtJQUVwQixTQUFTRCxTQUFTRSxJQUFJO1FBQ3BCLE1BQU1DLFlBQVlELEtBQUtFLFFBQVEsQ0FBQ2I7UUFFaEMsT0FBUVk7WUFDTixLQUFLNUI7Z0JBQWM7b0JBQ2pCLE1BQU04QixhQUFhO29CQUVuQixJQUFJbEIsUUFBUWtCLFlBQVk7d0JBQ3RCbEI7d0JBRUFDLGVBQWVILGFBQWEsQ0FBQ0UsTUFBTTt3QkFFbkNFLGtCQUFrQkQ7b0JBQ3BCO29CQUVBO2dCQUNGO1lBRUEsS0FBS1g7Z0JBQWdCO29CQUNuQixNQUFNNkIsWUFBWWQsc0JBQXNCO29CQUV4QyxJQUFJTCxRQUFRbUIsV0FBVzt3QkFDckJuQjt3QkFFQUMsZUFBZUgsYUFBYSxDQUFDRSxNQUFNO3dCQUVuQ0Usa0JBQWtCRDtvQkFDcEI7b0JBRUE7Z0JBQ0Y7WUFFQSxLQUFLVjtnQkFBa0I7b0JBQ3JCVSxlQUFlO29CQUVmbUIsUUFBUUMsR0FBRyxDQUFDM0I7b0JBRVphLFFBQVFDLEtBQUssQ0FBQ2MsY0FBYyxDQUFDVixlQUFJLEVBQUVDO29CQUVuQ04sUUFBUUMsS0FBSyxDQUFDZSxLQUFLO29CQUVuQnhCLFNBQVNFO29CQUVUO2dCQUNGO1lBRUEsS0FBS1I7WUFDTCxLQUFLQztnQkFBMkI7b0JBQzlCYSxRQUFRaUIsTUFBTSxDQUFDQyxTQUFTO29CQUV4QmxCLFFBQVFpQixNQUFNLENBQUNFLFFBQVEsQ0FBQztvQkFFeEJuQixRQUFRQyxLQUFLLENBQUNjLGNBQWMsQ0FBQ1YsZUFBSSxFQUFFQztvQkFFbkNOLFFBQVFDLEtBQUssQ0FBQ2UsS0FBSztvQkFFbkJ4QixTQUFTRTtvQkFFVDtnQkFDRjtZQUVBLEtBQUtaO2dCQUFlO29CQUNsQitCLFFBQVFDLEdBQUcsQ0FBQzdCO29CQUVaZSxRQUFRb0IsSUFBSTtvQkFFWjtnQkFDRjtZQUVBO2dCQUFTO29CQUdQO2dCQUNGO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsU0FBU3pCLGtCQUFrQkQsWUFBWTtJQUNyQyxNQUFNMkIsY0FBY0MsdURBQXlDLEVBQ3ZEQyxxQkFBcUI3QixhQUFhOEIsUUFBUTtJQUVoRHhCLFFBQVFpQixNQUFNLENBQUNDLFNBQVM7SUFFeEJsQixRQUFRaUIsTUFBTSxDQUFDRSxRQUFRLENBQUM7SUFFeEJuQixRQUFRaUIsTUFBTSxDQUFDUSxLQUFLLENBQUNKO0lBRXJCckIsUUFBUWlCLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDRjtBQUN2QiJ9