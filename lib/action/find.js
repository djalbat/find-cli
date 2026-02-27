"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findAction;
    }
});
const _find = /*#__PURE__*/ _interop_require_default(require("../operation/find"));
const _rule = /*#__PURE__*/ _interop_require_default(require("../operation/rule"));
const _rule1 = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/rule"));
const _previousRule = /*#__PURE__*/ _interop_require_default(require("../operation/previousRule"));
const _previousRule1 = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/previousRule"));
const _constants = require("../constants");
const _operation = require("../utilities/operation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findAction(string, dryRun, format, quietly, previous, interactive) {
    const operations = [
        _rule.default,
        _previousRule1.default,
        _rule1.default,
        _previousRule.default,
        _find.default
    ], rule = null, lines = [], linesTotal = 0, filesTotal = 0, directoriesTotal = 0, occurrencesTotal = 0, context = {
        string,
        dryRun,
        format,
        quietly,
        previous,
        interactive,
        rule,
        lines,
        linesTotal,
        filesTotal,
        directoriesTotal,
        occurrencesTotal
    };
    (0, _operation.executeOperations)(operations, (completed)=>{
        if (format) {
            logLines(context);
        }
        if (!completed) {
            return;
        }
        logTotals(context);
    }, context);
}
function logLines(context) {
    const { lines } = context;
    let maximumIndexLength = 0, maximumContentLength = 0;
    lines.forEach((line)=>{
        const indexLength = line.getIndexLength(), filePathLength = line.getFilePathLength();
        maximumIndexLength = Math.max(indexLength, maximumIndexLength);
        maximumContentLength = Math.max(filePathLength, maximumContentLength);
    });
    const requiredIndexLength = maximumIndexLength, requiredContentLength = maximumContentLength; ///
    lines.forEach((line)=>{
        const formattedMessage = line.asFormattedMessage(requiredIndexLength, requiredContentLength);
        console.log(formattedMessage);
    });
}
function logTotals(context) {
    const { linesTotal, filesTotal, directoriesTotal, occurrencesTotal } = context, optionalS = occurrencesTotal === 1 ? _constants.EMPTY_STRING : _constants.S, message = `Found ${occurrencesTotal} occurrence${optionalS} across ${directoriesTotal} directories, ${filesTotal} files and ${linesTotal} lines.`;
    console.log(message);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vZmluZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbmRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9maW5kXCI7XG5pbXBvcnQgcnVsZU9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3J1bGVcIjtcbmltcG9ydCBydWxlUHJvbXB0T3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vcHJvbXB0L3J1bGVcIjtcbmltcG9ydCBwcmV2aW91c1J1bGVPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcmV2aW91c1J1bGVcIjtcbmltcG9ydCBwcmV2aW91c1J1bGVQcm9tcHRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvcHJldmlvdXNSdWxlXCI7XG5cbmltcG9ydCB7IFMsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEFjdGlvbihzdHJpbmcsIGRyeVJ1biwgZm9ybWF0LCBxdWlldGx5LCBwcmV2aW91cywgaW50ZXJhY3RpdmUpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBydWxlT3BlcmF0aW9uLFxuICAgICAgICAgIHByZXZpb3VzUnVsZVByb21wdE9wZXJhdGlvbixcbiAgICAgICAgICBydWxlUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIHByZXZpb3VzUnVsZU9wZXJhdGlvbixcbiAgICAgICAgICBmaW5kT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIHJ1bGUgPSBudWxsLFxuICAgICAgICBsaW5lcyA9IFtdLFxuICAgICAgICBsaW5lc1RvdGFsID0gMCxcbiAgICAgICAgZmlsZXNUb3RhbCA9IDAsXG4gICAgICAgIGRpcmVjdG9yaWVzVG90YWwgPSAwLFxuICAgICAgICBvY2N1cnJlbmNlc1RvdGFsID0gMCxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgZHJ5UnVuLFxuICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICBxdWlldGx5LFxuICAgICAgICAgIHByZXZpb3VzLFxuICAgICAgICAgIGludGVyYWN0aXZlLFxuICAgICAgICAgIHJ1bGUsXG4gICAgICAgICAgbGluZXMsXG4gICAgICAgICAgbGluZXNUb3RhbCxcbiAgICAgICAgICBmaWxlc1RvdGFsLFxuICAgICAgICAgIGRpcmVjdG9yaWVzVG90YWwsXG4gICAgICAgICAgb2NjdXJyZW5jZXNUb3RhbFxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBpZiAoZm9ybWF0KSB7XG4gICAgICBsb2dMaW5lcyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvZ1RvdGFscyhjb250ZXh0KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGxvZ0xpbmVzKGNvbnRleHQpIHtcbiAgY29uc3QgeyBsaW5lcyB9ID0gY29udGV4dDtcblxuICBsZXQgbWF4aW11bUluZGV4TGVuZ3RoID0gMCxcbiAgICAgIG1heGltdW1Db250ZW50TGVuZ3RoID0gMDtcblxuICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgaW5kZXhMZW5ndGggPSBsaW5lLmdldEluZGV4TGVuZ3RoKCksXG4gICAgICAgICAgZmlsZVBhdGhMZW5ndGggPSBsaW5lLmdldEZpbGVQYXRoTGVuZ3RoKCk7XG5cbiAgICBtYXhpbXVtSW5kZXhMZW5ndGggPSBNYXRoLm1heChpbmRleExlbmd0aCwgbWF4aW11bUluZGV4TGVuZ3RoKTtcbiAgICBtYXhpbXVtQ29udGVudExlbmd0aCA9IE1hdGgubWF4KGZpbGVQYXRoTGVuZ3RoLCBtYXhpbXVtQ29udGVudExlbmd0aCk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlcXVpcmVkSW5kZXhMZW5ndGggPSBtYXhpbXVtSW5kZXhMZW5ndGgsIC8vL1xuICAgICAgICByZXF1aXJlZENvbnRlbnRMZW5ndGggPSBtYXhpbXVtQ29udGVudExlbmd0aDsgLy8vXG5cbiAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZE1lc3NhZ2UgPSBsaW5lLmFzRm9ybWF0dGVkTWVzc2FnZShyZXF1aXJlZEluZGV4TGVuZ3RoLCByZXF1aXJlZENvbnRlbnRMZW5ndGgpO1xuXG4gICAgY29uc29sZS5sb2coZm9ybWF0dGVkTWVzc2FnZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2dUb3RhbHMoY29udGV4dCkge1xuICBjb25zdCB7IGxpbmVzVG90YWwsIGZpbGVzVG90YWwsIGRpcmVjdG9yaWVzVG90YWwsIG9jY3VycmVuY2VzVG90YWwgfSA9IGNvbnRleHQsXG4gICAgICAgIG9wdGlvbmFsUyA9IChvY2N1cnJlbmNlc1RvdGFsID09PSAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFMsXG4gICAgICAgIG1lc3NhZ2UgPSBgRm91bmQgJHtvY2N1cnJlbmNlc1RvdGFsfSBvY2N1cnJlbmNlJHtvcHRpb25hbFN9IGFjcm9zcyAke2RpcmVjdG9yaWVzVG90YWx9IGRpcmVjdG9yaWVzLCAke2ZpbGVzVG90YWx9IGZpbGVzIGFuZCAke2xpbmVzVG90YWx9IGxpbmVzLmA7XG5cbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG4iXSwibmFtZXMiOlsiZmluZEFjdGlvbiIsInN0cmluZyIsImRyeVJ1biIsImZvcm1hdCIsInF1aWV0bHkiLCJwcmV2aW91cyIsImludGVyYWN0aXZlIiwib3BlcmF0aW9ucyIsInJ1bGVPcGVyYXRpb24iLCJwcmV2aW91c1J1bGVQcm9tcHRPcGVyYXRpb24iLCJydWxlUHJvbXB0T3BlcmF0aW9uIiwicHJldmlvdXNSdWxlT3BlcmF0aW9uIiwiZmluZE9wZXJhdGlvbiIsInJ1bGUiLCJsaW5lcyIsImxpbmVzVG90YWwiLCJmaWxlc1RvdGFsIiwiZGlyZWN0b3JpZXNUb3RhbCIsIm9jY3VycmVuY2VzVG90YWwiLCJjb250ZXh0IiwiZXhlY3V0ZU9wZXJhdGlvbnMiLCJjb21wbGV0ZWQiLCJsb2dMaW5lcyIsImxvZ1RvdGFscyIsIm1heGltdW1JbmRleExlbmd0aCIsIm1heGltdW1Db250ZW50TGVuZ3RoIiwiZm9yRWFjaCIsImxpbmUiLCJpbmRleExlbmd0aCIsImdldEluZGV4TGVuZ3RoIiwiZmlsZVBhdGhMZW5ndGgiLCJnZXRGaWxlUGF0aExlbmd0aCIsIk1hdGgiLCJtYXgiLCJyZXF1aXJlZEluZGV4TGVuZ3RoIiwicmVxdWlyZWRDb250ZW50TGVuZ3RoIiwiZm9ybWF0dGVkTWVzc2FnZSIsImFzRm9ybWF0dGVkTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25hbFMiLCJFTVBUWV9TVFJJTkciLCJTIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs2REFURTs2REFDQTs4REFDTTtxRUFDRTtzRUFDTTsyQkFFUjsyQkFDRTs7Ozs7O0FBRW5CLFNBQVNBLFdBQVdDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQ3ZGLE1BQU1DLGFBQWE7UUFDWEMsYUFBYTtRQUNiQyxzQkFBMkI7UUFDM0JDLGNBQW1CO1FBQ25CQyxxQkFBcUI7UUFDckJDLGFBQWE7S0FDZCxFQUNEQyxPQUFPLE1BQ1BDLFFBQVEsRUFBRSxFQUNWQyxhQUFhLEdBQ2JDLGFBQWEsR0FDYkMsbUJBQW1CLEdBQ25CQyxtQkFBbUIsR0FDbkJDLFVBQVU7UUFDUmxCO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FPO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFFTkUsSUFBQUEsNEJBQWlCLEVBQUNiLFlBQVksQ0FBQ2M7UUFDN0IsSUFBSWxCLFFBQVE7WUFDVm1CLFNBQVNIO1FBQ1g7UUFFQSxJQUFJLENBQUNFLFdBQVc7WUFDZDtRQUNGO1FBRUFFLFVBQVVKO0lBQ1osR0FBR0E7QUFDTDtBQUVBLFNBQVNHLFNBQVNILE9BQU87SUFDdkIsTUFBTSxFQUFFTCxLQUFLLEVBQUUsR0FBR0s7SUFFbEIsSUFBSUsscUJBQXFCLEdBQ3JCQyx1QkFBdUI7SUFFM0JYLE1BQU1ZLE9BQU8sQ0FBQyxDQUFDQztRQUNiLE1BQU1DLGNBQWNELEtBQUtFLGNBQWMsSUFDakNDLGlCQUFpQkgsS0FBS0ksaUJBQWlCO1FBRTdDUCxxQkFBcUJRLEtBQUtDLEdBQUcsQ0FBQ0wsYUFBYUo7UUFDM0NDLHVCQUF1Qk8sS0FBS0MsR0FBRyxDQUFDSCxnQkFBZ0JMO0lBQ2xEO0lBRUEsTUFBTVMsc0JBQXNCVixvQkFDdEJXLHdCQUF3QlYsc0JBQXNCLEdBQUc7SUFFdkRYLE1BQU1ZLE9BQU8sQ0FBQyxDQUFDQztRQUNiLE1BQU1TLG1CQUFtQlQsS0FBS1Usa0JBQWtCLENBQUNILHFCQUFxQkM7UUFFdEVHLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtBQUNGO0FBRUEsU0FBU2IsVUFBVUosT0FBTztJQUN4QixNQUFNLEVBQUVKLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0MsU0FDakVxQixZQUFZLEFBQUN0QixxQkFBcUIsSUFDcEJ1Qix1QkFBWSxHQUNWQyxZQUFDLEVBQ2pCQyxVQUFVLENBQUMsTUFBTSxFQUFFekIsaUJBQWlCLFdBQVcsRUFBRXNCLFVBQVUsUUFBUSxFQUFFdkIsaUJBQWlCLGNBQWMsRUFBRUQsV0FBVyxXQUFXLEVBQUVELFdBQVcsT0FBTyxDQUFDO0lBRXZKdUIsUUFBUUMsR0FBRyxDQUFDSTtBQUNkIn0=