"use strict";
import { fileSystemUtilities } from "necessary";
import Line from "./line";
var readFile = fileSystemUtilities.readFile;
export default function find(filePath, context) {
    var rule = context.rule, format = context.format, content = readFile(filePath), lines = linesFromContentAndFilePath(content, filePath);
    var linesTotal = context.linesTotal;
    lines.forEach(function(line) {
        var occurrences = rule.find(line, filePath), occurrencesLength = occurrences.length;
        if (occurrencesLength > 0) {
            var occurrencesTotal = context.occurrencesTotal;
            occurrencesTotal += occurrencesLength;
            Object.assign(context, {
                occurrencesTotal: occurrencesTotal
            });
            line.setOccurrences(occurrences);
            if (!format) {
                var message = line.asMessage();
                console.log(message);
            } else {
                var lines = context.lines;
                lines.push(line);
            }
        }
        linesTotal++;
    });
    Object.assign(context, {
        linesTotal: linesTotal
    });
}
function linesFromContentAndFilePath(content, filePath) {
    var contents = content.split(/(\r\n|\r|\n)/), lines = contents.map(function(content, index) {
        var line = Line.fromIndexContentAndFilePath(index, content, filePath);
        return line;
    });
    return lines;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9saW5lXCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmQoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBydWxlLCBmb3JtYXQgfSA9IGNvbnRleHQsXG4gICAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIGxpbmVzID0gbGluZXNGcm9tQ29udGVudEFuZEZpbGVQYXRoKGNvbnRlbnQsIGZpbGVQYXRoKTtcblxuICBsZXQgeyBsaW5lc1RvdGFsIH0gPSBjb250ZXh0O1xuXG4gIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlcyA9IHJ1bGUuZmluZChsaW5lLCBmaWxlUGF0aCksXG4gICAgICAgICAgb2NjdXJyZW5jZXNMZW5ndGggPSBvY2N1cnJlbmNlcy5sZW5ndGg7XG5cbiAgICBpZiAob2NjdXJyZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBsZXQgeyBvY2N1cnJlbmNlc1RvdGFsIH0gPSBjb250ZXh0O1xuXG4gICAgICBvY2N1cnJlbmNlc1RvdGFsICs9IG9jY3VycmVuY2VzTGVuZ3RoO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgb2NjdXJyZW5jZXNUb3RhbFxuICAgICAgfSk7XG5cbiAgICAgIGxpbmUuc2V0T2NjdXJyZW5jZXMob2NjdXJyZW5jZXMpO1xuXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbGluZS5hc01lc3NhZ2UoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IGNvbnRleHQ7XG5cbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lc1RvdGFsKys7XG4gIH0pO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGxpbmVzVG90YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpbmVzRnJvbUNvbnRlbnRBbmRGaWxlUGF0aChjb250ZW50LCBmaWxlUGF0aCkge1xuICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoLyhcXHJcXG58XFxyfFxcbikvKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGluZSA9IExpbmUuZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCk7XG5cbiAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuIl0sIm5hbWVzIjpbImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJMaW5lIiwicmVhZEZpbGUiLCJmaW5kIiwiZmlsZVBhdGgiLCJjb250ZXh0IiwicnVsZSIsImZvcm1hdCIsImNvbnRlbnQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnRBbmRGaWxlUGF0aCIsImxpbmVzVG90YWwiLCJmb3JFYWNoIiwibGluZSIsIm9jY3VycmVuY2VzIiwib2NjdXJyZW5jZXNMZW5ndGgiLCJsZW5ndGgiLCJvY2N1cnJlbmNlc1RvdGFsIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0T2NjdXJyZW5jZXMiLCJtZXNzYWdlIiwiYXNNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjb250ZW50cyIsInNwbGl0IiwibWFwIiwiaW5kZXgiLCJmcm9tSW5kZXhDb250ZW50QW5kRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsU0FBU0EsbUJBQW1CLFFBQVEsWUFBWTtBQUVoRCxPQUFPQyxVQUFVLFNBQVM7QUFFMUIsSUFBTSxBQUFFQyxXQUFhRixvQkFBYkU7QUFFUixlQUFlLFNBQVNDLEtBQUtDLFFBQVEsRUFBRUMsT0FBTztJQUM1QyxJQUFRQyxPQUFpQkQsUUFBakJDLE1BQU1DLFNBQVdGLFFBQVhFLFFBQ1JDLFVBQVVOLFNBQVNFLFdBQ25CSyxRQUFRQyw0QkFBNEJGLFNBQVNKO0lBRW5ELElBQUksQUFBRU8sYUFBZU4sUUFBZk07SUFFTkYsTUFBTUcsT0FBTyxDQUFDLFNBQUNDO1FBQ2IsSUFBTUMsY0FBY1IsS0FBS0gsSUFBSSxDQUFDVSxNQUFNVCxXQUM5Qlcsb0JBQW9CRCxZQUFZRSxNQUFNO1FBRTVDLElBQUlELG9CQUFvQixHQUFHO1lBQ3pCLElBQUksQUFBRUUsbUJBQXFCWixRQUFyQlk7WUFFTkEsb0JBQW9CRjtZQUVwQkcsT0FBT0MsTUFBTSxDQUFDZCxTQUFTO2dCQUNyQlksa0JBQUFBO1lBQ0Y7WUFFQUosS0FBS08sY0FBYyxDQUFDTjtZQUVwQixJQUFJLENBQUNQLFFBQVE7Z0JBQ1gsSUFBTWMsVUFBVVIsS0FBS1MsU0FBUztnQkFFOUJDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDZCxPQUFPO2dCQUNMLElBQU0sQUFBRVosUUFBVUosUUFBVkk7Z0JBRVJBLE1BQU1nQixJQUFJLENBQUNaO1lBQ2I7UUFDRjtRQUVBRjtJQUNGO0lBRUFPLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztRQUNyQk0sWUFBQUE7SUFDRjtBQUNGO0FBRUEsU0FBU0QsNEJBQTRCRixPQUFPLEVBQUVKLFFBQVE7SUFDcEQsSUFBTXNCLFdBQVdsQixRQUFRbUIsS0FBSyxDQUFDLGlCQUN6QmxCLFFBQVFpQixTQUFTRSxHQUFHLENBQUMsU0FBQ3BCLFNBQVNxQjtRQUM3QixJQUFNaEIsT0FBT1osS0FBSzZCLDJCQUEyQixDQUFDRCxPQUFPckIsU0FBU0o7UUFFOUQsT0FBT1M7SUFDVDtJQUVOLE9BQU9KO0FBQ1QifQ==