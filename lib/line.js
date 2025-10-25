"use strict";
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
import { arrayUtilities } from "necessary";
import { grey, blue, yellow } from "./utilities/log";
import { EMPTY_STRING, SINGLE_SPACE } from "./constants";
var backwardsForEach = arrayUtilities.backwardsForEach;
var Line = /*#__PURE__*/ function() {
    function Line(index, content, filePath, occurrences) {
        _class_call_check(this, Line);
        this.index = index;
        this.content = content;
        this.filePath = filePath;
        this.occurences = occurrences;
    }
    _create_class(Line, [
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "getOccurrences",
            value: function getOccurrences() {
                return this.occurences;
            }
        },
        {
            key: "setIndex",
            value: function setIndex(index) {
                this.index = index;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                this.content = content;
            }
        },
        {
            key: "setFilePath",
            value: function setFilePath(filePath) {
                this.filePath = filePath;
            }
        },
        {
            key: "setOccurrences",
            value: function setOccurrences(occurrences) {
                this.occurrences = occurrences;
            }
        },
        {
            key: "getIndexLength",
            value: function getIndexLength() {
                var indexLength = this.index.length;
                return indexLength;
            }
        },
        {
            key: "getFilePathLength",
            value: function getFilePathLength() {
                var filePathLength = this.filePath.length;
                return filePathLength;
            }
        },
        {
            key: "addOccurrences",
            value: function addOccurrences(occurrences) {}
        },
        {
            key: "getFormattedIndex",
            value: function getFormattedIndex(requiredIndexLength) {
                var index;
                var indexLength = this.getIndexLength(), paddingLength = requiredIndexLength - indexLength, padding = paddingFromPaddingLength(paddingLength);
                index = "".concat(padding).concat(this.index);
                var formattedIndex = yellow(index);
                return formattedIndex;
            }
        },
        {
            key: "getFormattedContent",
            value: function getFormattedContent() {
                var gaps = [], matches = [];
                var end, start, string = this.content; ///
                backwardsForEach(this.occurrences, function(occurrence) {
                    end = occurrence.getEnd();
                    start = end; ///
                    end = Infinity;
                    var gap = string.substring(start, end);
                    gaps.unshift(gap);
                    end = occurrence.getEnd();
                    start = 0;
                    string = string.substring(start, end);
                    start = occurrence.getStart();
                    end = Infinity;
                    var match = string.substring(start, end);
                    matches.unshift(match);
                    end = start; ///
                    start = 0;
                    string = string.substring(start, end); ///
                });
                var gap = string; ///
                gap = grey(gap); ///
                string = gap; ///
                gaps.forEach(function(gap, index) {
                    var match = matches[index];
                    gap = grey(gap); ///
                    match = blue(match); ///
                    string = "".concat(string).concat(match).concat(gap);
                });
                var formattedContent = string; ///
                return formattedContent;
            }
        },
        {
            key: "getFormattedFilePath",
            value: function getFormattedFilePath(requiredFilePathLength) {
                var filePathLength = this.getFilePathLength(), paddingLength = requiredFilePathLength - filePathLength, padding = paddingFromPaddingLength(paddingLength), formattedFilePath = "".concat(this.filePath).concat(padding);
                return formattedFilePath;
            }
        },
        {
            key: "asMessage",
            value: function asMessage() {
                var message = "".concat(this.filePath, "  ").concat(this.index, " | ").concat(this.content);
                return message;
            }
        },
        {
            key: "asFormattedMessage",
            value: function asFormattedMessage(requiredIndexLength, requiredFilePathLength) {
                var formattedIndex = this.getFormattedIndex(requiredIndexLength), formattedContent = this.getFormattedContent(), formattedFilePath = this.getFormattedFilePath(requiredFilePathLength), message = "".concat(formattedFilePath, "  ").concat(formattedIndex, " | ").concat(formattedContent);
                return message;
            }
        }
    ], [
        {
            key: "fromIndexContentAndFilePath",
            value: function fromIndexContentAndFilePath(index, content, filePath) {
                index = "".concat(index); ///
                content = content.replace(/(\r\n|\r|\n)$/, EMPTY_STRING); ///
                var occurrences = [], line = new Line(index, content, filePath, occurrences);
                return line;
            }
        }
    ]);
    return Line;
}();
export { Line as default };
function paddingFromPaddingLength(paddingLength) {
    var padding = EMPTY_STRING;
    for(var count = 0; count < paddingLength; count++){
        padding += SINGLE_SPACE;
    }
    return padding;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZ3JleSwgYmx1ZSwgeWVsbG93IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xvZ1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCwgb2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5vY2N1cmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0T2NjdXJyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2NjdXJlbmNlcztcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHNldEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgc2V0T2NjdXJyZW5jZXMob2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLm9jY3VycmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleExlbmd0aCgpIHtcbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuaW5kZXgubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGluZGV4TGVuZ3RoO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhMZW5ndGgoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmZpbGVQYXRoLmxlbmd0aDtcblxuICAgIHJldHVybiBmaWxlUGF0aExlbmd0aDtcbiAgfVxuXG4gIGFkZE9jY3VycmVuY2VzKG9jY3VycmVuY2VzKSB7XG5cbiAgfVxuXG4gIGdldEZvcm1hdHRlZEluZGV4KHJlcXVpcmVkSW5kZXhMZW5ndGgpIHtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuZ2V0SW5kZXhMZW5ndGgoKSxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gcmVxdWlyZWRJbmRleExlbmd0aCAtIGluZGV4TGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBpbmRleCA9IGAke3BhZGRpbmd9JHt0aGlzLmluZGV4fWA7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHllbGxvdyhpbmRleCk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkSW5kZXg7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRDb250ZW50KCkge1xuICAgIGNvbnN0IGdhcHMgPSBbXSxcbiAgICAgICAgICBtYXRjaGVzID0gW107XG5cbiAgICBsZXQgZW5kLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RyaW5nID0gdGhpcy5jb250ZW50OyAgLy8vXG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKHRoaXMub2NjdXJyZW5jZXMsIChvY2N1cnJlbmNlKSA9PiB7XG4gICAgICBlbmQgPSBvY2N1cnJlbmNlLmdldEVuZCgpO1xuXG4gICAgICBzdGFydCA9IGVuZDsgIC8vL1xuXG4gICAgICBlbmQgPSBJbmZpbml0eTtcblxuICAgICAgY29uc3QgZ2FwID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgZ2Fwcy51bnNoaWZ0KGdhcCk7XG5cbiAgICAgIGVuZCA9IG9jY3VycmVuY2UuZ2V0RW5kKCk7XG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgc3RhcnQgPSBvY2N1cnJlbmNlLmdldFN0YXJ0KCk7XG5cbiAgICAgIGVuZCA9IEluZmluaXR5O1xuXG4gICAgICBjb25zdCBtYXRjaCA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG5cbiAgICAgIG1hdGNoZXMudW5zaGlmdChtYXRjaCk7XG5cbiAgICAgIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTsgIC8vL1xuICAgIH0pO1xuXG4gICAgbGV0IGdhcCA9IHN0cmluZzsgLy8vXG5cbiAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgIHN0cmluZyA9IGdhcDsgLy8vXG5cbiAgICBnYXBzLmZvckVhY2goKGdhcCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbaW5kZXhdO1xuXG4gICAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgICAgbWF0Y2ggPSBibHVlKG1hdGNoKTsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHttYXRjaH0ke2dhcH1gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkQ29udGVudCA9IHN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZENvbnRlbnQ7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmdldEZpbGVQYXRoTGVuZ3RoKCksXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IHJlcXVpcmVkRmlsZVBhdGhMZW5ndGggLSBmaWxlUGF0aExlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIGZvcm1hdHRlZEZpbGVQYXRoID0gIGAke3RoaXMuZmlsZVBhdGh9JHtwYWRkaW5nfWA7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRmlsZVBhdGg7XG4gIH1cblxuICBhc01lc3NhZ2UoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGAke3RoaXMuZmlsZVBhdGh9ICAke3RoaXMuaW5kZXh9IHwgJHt0aGlzLmNvbnRlbnR9YDtcblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgYXNGb3JtYXR0ZWRNZXNzYWdlKHJlcXVpcmVkSW5kZXhMZW5ndGgsIHJlcXVpcmVkRmlsZVBhdGhMZW5ndGgpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHRoaXMuZ2V0Rm9ybWF0dGVkSW5kZXgocmVxdWlyZWRJbmRleExlbmd0aCksXG4gICAgICAgICAgZm9ybWF0dGVkQ29udGVudCA9IHRoaXMuZ2V0Rm9ybWF0dGVkQ29udGVudCgpLFxuICAgICAgICAgIGZvcm1hdHRlZEZpbGVQYXRoID0gdGhpcy5nZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSxcbiAgICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0dGVkRmlsZVBhdGh9ICAke2Zvcm1hdHRlZEluZGV4fSB8ICR7Zm9ybWF0dGVkQ29udGVudH1gO1xuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCkge1xuICAgIGluZGV4ID0gYCR7aW5kZXh9YDsgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oXFxyXFxufFxccnxcXG4pJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBbXSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUoaW5kZXgsIGNvbnRlbnQsIGZpbGVQYXRoLCBvY2N1cnJlbmNlcyk7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgcGFkZGluZ0xlbmd0aDsgY291bnQrKykge1xuICAgIHBhZGRpbmcgKz0gU0lOR0xFX1NQQUNFO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG4iXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJncmV5IiwiYmx1ZSIsInllbGxvdyIsIkVNUFRZX1NUUklORyIsIlNJTkdMRV9TUEFDRSIsImJhY2t3YXJkc0ZvckVhY2giLCJMaW5lIiwiaW5kZXgiLCJjb250ZW50IiwiZmlsZVBhdGgiLCJvY2N1cnJlbmNlcyIsIm9jY3VyZW5jZXMiLCJnZXRJbmRleCIsImdldENvbnRlbnQiLCJnZXRGaWxlUGF0aCIsImdldE9jY3VycmVuY2VzIiwic2V0SW5kZXgiLCJzZXRDb250ZW50Iiwic2V0RmlsZVBhdGgiLCJzZXRPY2N1cnJlbmNlcyIsImdldEluZGV4TGVuZ3RoIiwiaW5kZXhMZW5ndGgiLCJsZW5ndGgiLCJnZXRGaWxlUGF0aExlbmd0aCIsImZpbGVQYXRoTGVuZ3RoIiwiYWRkT2NjdXJyZW5jZXMiLCJnZXRGb3JtYXR0ZWRJbmRleCIsInJlcXVpcmVkSW5kZXhMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImZvcm1hdHRlZEluZGV4IiwiZ2V0Rm9ybWF0dGVkQ29udGVudCIsImdhcHMiLCJtYXRjaGVzIiwiZW5kIiwic3RhcnQiLCJzdHJpbmciLCJvY2N1cnJlbmNlIiwiZ2V0RW5kIiwiSW5maW5pdHkiLCJnYXAiLCJzdWJzdHJpbmciLCJ1bnNoaWZ0IiwiZ2V0U3RhcnQiLCJtYXRjaCIsImZvckVhY2giLCJmb3JtYXR0ZWRDb250ZW50IiwiZ2V0Rm9ybWF0dGVkRmlsZVBhdGgiLCJyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoIiwiZm9ybWF0dGVkRmlsZVBhdGgiLCJhc01lc3NhZ2UiLCJtZXNzYWdlIiwiYXNGb3JtYXR0ZWRNZXNzYWdlIiwiZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoIiwicmVwbGFjZSIsImxpbmUiLCJjb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsY0FBYyxRQUFRLFlBQVk7QUFFM0MsU0FBU0MsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sUUFBUSxrQkFBa0I7QUFDckQsU0FBU0MsWUFBWSxFQUFFQyxZQUFZLFFBQVEsY0FBYztBQUV6RCxJQUFNLEFBQUVDLG1CQUFxQk4sZUFBckJNO0FBRU8sSUFBQSxBQUFNQyxxQkFBTjthQUFNQSxLQUNQQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxXQUFXO2dDQUQ5Qko7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0UsVUFBVSxHQUFHRDs7a0JBTERKOztZQVFuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxLQUFLO1lBQ25COzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxPQUFPO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxR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