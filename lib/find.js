"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return find;
    }
});
const _necessary = require("necessary");
const _line = /*#__PURE__*/ _interop_require_default(require("./line"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { readFile } = _necessary.fileSystemUtilities;
function find(filePath, context) {
    const { rule, format } = context, content = readFile(filePath), lines = linesFromContentAndFilePath(content, filePath);
    let { linesTotal } = context;
    lines.forEach((line)=>{
        const occurrences = rule.find(line, filePath), occurrencesLength = occurrences.length;
        if (occurrencesLength > 0) {
            let { occurrencesTotal } = context;
            occurrencesTotal += occurrencesLength;
            Object.assign(context, {
                occurrencesTotal
            });
            line.setOccurrences(occurrences);
            if (!format) {
                const message = line.asMessage();
                console.log(message);
            } else {
                const { lines } = context;
                lines.push(line);
            }
        }
        linesTotal++;
    });
    Object.assign(context, {
        linesTotal
    });
}
function linesFromContentAndFilePath(content, filePath) {
    const contents = content.split(/(\r\n|\r|\n)/), lines = contents.map((content, index)=>{
        const line = _line.default.fromIndexContentAndFilePath(index, content, filePath);
        return line;
    });
    return lines;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9saW5lXCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmQoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBydWxlLCBmb3JtYXQgfSA9IGNvbnRleHQsXG4gICAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIGxpbmVzID0gbGluZXNGcm9tQ29udGVudEFuZEZpbGVQYXRoKGNvbnRlbnQsIGZpbGVQYXRoKTtcblxuICBsZXQgeyBsaW5lc1RvdGFsIH0gPSBjb250ZXh0O1xuXG4gIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlcyA9IHJ1bGUuZmluZChsaW5lLCBmaWxlUGF0aCksXG4gICAgICAgICAgb2NjdXJyZW5jZXNMZW5ndGggPSBvY2N1cnJlbmNlcy5sZW5ndGg7XG5cbiAgICBpZiAob2NjdXJyZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBsZXQgeyBvY2N1cnJlbmNlc1RvdGFsIH0gPSBjb250ZXh0O1xuXG4gICAgICBvY2N1cnJlbmNlc1RvdGFsICs9IG9jY3VycmVuY2VzTGVuZ3RoO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgb2NjdXJyZW5jZXNUb3RhbFxuICAgICAgfSk7XG5cbiAgICAgIGxpbmUuc2V0T2NjdXJyZW5jZXMob2NjdXJyZW5jZXMpO1xuXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbGluZS5hc01lc3NhZ2UoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IGNvbnRleHQ7XG5cbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lc1RvdGFsKys7XG4gIH0pO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGxpbmVzVG90YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpbmVzRnJvbUNvbnRlbnRBbmRGaWxlUGF0aChjb250ZW50LCBmaWxlUGF0aCkge1xuICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoLyhcXHJcXG58XFxyfFxcbikvKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGluZSA9IExpbmUuZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCk7XG5cbiAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJyZWFkRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJydWxlIiwiZm9ybWF0IiwiY29udGVudCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudEFuZEZpbGVQYXRoIiwibGluZXNUb3RhbCIsImZvckVhY2giLCJsaW5lIiwib2NjdXJyZW5jZXMiLCJvY2N1cnJlbmNlc0xlbmd0aCIsImxlbmd0aCIsIm9jY3VycmVuY2VzVG90YWwiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRPY2N1cnJlbmNlcyIsIm1lc3NhZ2UiLCJhc01lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNvbnRlbnRzIiwic3BsaXQiLCJtYXAiLCJpbmRleCIsIkxpbmUiLCJmcm9tSW5kZXhDb250ZW50QW5kRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7MkJBTlk7NkRBRW5COzs7Ozs7QUFFakIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0MsOEJBQW1CO0FBRXpCLFNBQVNGLEtBQUtHLFFBQVEsRUFBRUMsT0FBTztJQUM1QyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQUdGLFNBQ25CRyxVQUFVTixTQUFTRSxXQUNuQkssUUFBUUMsNEJBQTRCRixTQUFTSjtJQUVuRCxJQUFJLEVBQUVPLFVBQVUsRUFBRSxHQUFHTjtJQUVyQkksTUFBTUcsT0FBTyxDQUFDLENBQUNDO1FBQ2IsTUFBTUMsY0FBY1IsS0FBS0wsSUFBSSxDQUFDWSxNQUFNVCxXQUM5Qlcsb0JBQW9CRCxZQUFZRSxNQUFNO1FBRTVDLElBQUlELG9CQUFvQixHQUFHO1lBQ3pCLElBQUksRUFBRUUsZ0JBQWdCLEVBQUUsR0FBR1o7WUFFM0JZLG9CQUFvQkY7WUFFcEJHLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztnQkFDckJZO1lBQ0Y7WUFFQUosS0FBS08sY0FBYyxDQUFDTjtZQUVwQixJQUFJLENBQUNQLFFBQVE7Z0JBQ1gsTUFBTWMsVUFBVVIsS0FBS1MsU0FBUztnQkFFOUJDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDZCxPQUFPO2dCQUNMLE1BQU0sRUFBRVosS0FBSyxFQUFFLEdBQUdKO2dCQUVsQkksTUFBTWdCLElBQUksQ0FBQ1o7WUFDYjtRQUNGO1FBRUFGO0lBQ0Y7SUFFQU8sT0FBT0MsTUFBTSxDQUFDZCxTQUFTO1FBQ3JCTTtJQUNGO0FBQ0Y7QUFFQSxTQUFTRCw0QkFBNEJGLE9BQU8sRUFBRUosUUFBUTtJQUNwRCxNQUFNc0IsV0FBV2xCLFFBQVFtQixLQUFLLENBQUMsaUJBQ3pCbEIsUUFBUWlCLFNBQVNFLEdBQUcsQ0FBQyxDQUFDcEIsU0FBU3FCO1FBQzdCLE1BQU1oQixPQUFPaUIsYUFBSSxDQUFDQywyQkFBMkIsQ0FBQ0YsT0FBT3JCLFNBQVNKO1FBRTlELE9BQU9TO0lBQ1Q7SUFFTixPQUFPSjtBQUNUIn0=