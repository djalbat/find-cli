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
    const contents = content.split(/\r?\n/), lines = contents.map((content, index)=>{
        const line = _line.default.fromIndexContentAndFilePath(index, content, filePath);
        return line;
    });
    return lines;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9saW5lXCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmQoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBydWxlLCBmb3JtYXQgfSA9IGNvbnRleHQsXG4gICAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIGxpbmVzID0gbGluZXNGcm9tQ29udGVudEFuZEZpbGVQYXRoKGNvbnRlbnQsIGZpbGVQYXRoKTtcblxuICBsZXQgeyBsaW5lc1RvdGFsIH0gPSBjb250ZXh0O1xuXG4gIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlcyA9IHJ1bGUuZmluZChsaW5lLCBmaWxlUGF0aCksXG4gICAgICAgICAgb2NjdXJyZW5jZXNMZW5ndGggPSBvY2N1cnJlbmNlcy5sZW5ndGg7XG5cbiAgICBpZiAob2NjdXJyZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBsZXQgeyBvY2N1cnJlbmNlc1RvdGFsIH0gPSBjb250ZXh0O1xuXG4gICAgICBvY2N1cnJlbmNlc1RvdGFsICs9IG9jY3VycmVuY2VzTGVuZ3RoO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgb2NjdXJyZW5jZXNUb3RhbFxuICAgICAgfSk7XG5cbiAgICAgIGxpbmUuc2V0T2NjdXJyZW5jZXMob2NjdXJyZW5jZXMpO1xuXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbGluZS5hc01lc3NhZ2UoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IGNvbnRleHQ7XG5cbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lc1RvdGFsKys7XG4gIH0pO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGxpbmVzVG90YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpbmVzRnJvbUNvbnRlbnRBbmRGaWxlUGF0aChjb250ZW50LCBmaWxlUGF0aCkge1xuICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xccj9cXG4vKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGluZSA9IExpbmUuZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCk7XG5cbiAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxpbmVzO1xufSJdLCJuYW1lcyI6WyJmaW5kIiwicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiZmlsZVBhdGgiLCJjb250ZXh0IiwicnVsZSIsImZvcm1hdCIsImNvbnRlbnQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnRBbmRGaWxlUGF0aCIsImxpbmVzVG90YWwiLCJmb3JFYWNoIiwibGluZSIsIm9jY3VycmVuY2VzIiwib2NjdXJyZW5jZXNMZW5ndGgiLCJsZW5ndGgiLCJvY2N1cnJlbmNlc1RvdGFsIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0T2NjdXJyZW5jZXMiLCJtZXNzYWdlIiwiYXNNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjb250ZW50cyIsInNwbGl0IiwibWFwIiwiaW5kZXgiLCJMaW5lIiwiZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OzJCQU5ZOzZEQUVuQjs7Ozs7O0FBRWpCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLDhCQUFtQjtBQUV6QixTQUFTRixLQUFLRyxRQUFRLEVBQUVDLE9BQU87SUFDNUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHRixTQUNuQkcsVUFBVU4sU0FBU0UsV0FDbkJLLFFBQVFDLDRCQUE0QkYsU0FBU0o7SUFFbkQsSUFBSSxFQUFFTyxVQUFVLEVBQUUsR0FBR047SUFFckJJLE1BQU1HLE9BQU8sQ0FBQyxDQUFDQztRQUNiLE1BQU1DLGNBQWNSLEtBQUtMLElBQUksQ0FBQ1ksTUFBTVQsV0FDOUJXLG9CQUFvQkQsWUFBWUUsTUFBTTtRQUU1QyxJQUFJRCxvQkFBb0IsR0FBRztZQUN6QixJQUFJLEVBQUVFLGdCQUFnQixFQUFFLEdBQUdaO1lBRTNCWSxvQkFBb0JGO1lBRXBCRyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7Z0JBQ3JCWTtZQUNGO1lBRUFKLEtBQUtPLGNBQWMsQ0FBQ047WUFFcEIsSUFBSSxDQUFDUCxRQUFRO2dCQUNYLE1BQU1jLFVBQVVSLEtBQUtTLFNBQVM7Z0JBRTlCQyxRQUFRQyxHQUFHLENBQUNIO1lBQ2QsT0FBTztnQkFDTCxNQUFNLEVBQUVaLEtBQUssRUFBRSxHQUFHSjtnQkFFbEJJLE1BQU1nQixJQUFJLENBQUNaO1lBQ2I7UUFDRjtRQUVBRjtJQUNGO0lBRUFPLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztRQUNyQk07SUFDRjtBQUNGO0FBRUEsU0FBU0QsNEJBQTRCRixPQUFPLEVBQUVKLFFBQVE7SUFDcEQsTUFBTXNCLFdBQVdsQixRQUFRbUIsS0FBSyxDQUFDLFVBQ3pCbEIsUUFBUWlCLFNBQVNFLEdBQUcsQ0FBQyxDQUFDcEIsU0FBU3FCO1FBQzdCLE1BQU1oQixPQUFPaUIsYUFBSSxDQUFDQywyQkFBMkIsQ0FBQ0YsT0FBT3JCLFNBQVNKO1FBRTlELE9BQU9TO0lBQ1Q7SUFFTixPQUFPSjtBQUNUIn0=