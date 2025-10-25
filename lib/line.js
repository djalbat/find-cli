"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Line;
    }
});
var _necessary = require("necessary");
var _log = require("./utilities/log");
var _constants = require("./constants");
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
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
                var formattedIndex = (0, _log.yellow)(index);
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
                gap = (0, _log.grey)(gap); ///
                string = gap; ///
                gaps.forEach(function(gap, index) {
                    var match = matches[index];
                    gap = (0, _log.grey)(gap); ///
                    match = (0, _log.blue)(match); ///
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
                content = content.replace(/(\r\n|\r|\n)$/, _constants.EMPTY_STRING); ///
                var occurrences = [], line = new Line(index, content, filePath, occurrences);
                return line;
            }
        }
    ]);
    return Line;
}();
function paddingFromPaddingLength(paddingLength) {
    var padding = _constants.EMPTY_STRING;
    for(var count = 0; count < paddingLength; count++){
        padding += _constants.SINGLE_SPACE;
    }
    return padding;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZ3JleSwgYmx1ZSwgeWVsbG93IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xvZ1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCwgb2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5vY2N1cmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0T2NjdXJyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2NjdXJlbmNlcztcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHNldEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgc2V0T2NjdXJyZW5jZXMob2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLm9jY3VycmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleExlbmd0aCgpIHtcbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuaW5kZXgubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGluZGV4TGVuZ3RoO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhMZW5ndGgoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmZpbGVQYXRoLmxlbmd0aDtcblxuICAgIHJldHVybiBmaWxlUGF0aExlbmd0aDtcbiAgfVxuXG4gIGFkZE9jY3VycmVuY2VzKG9jY3VycmVuY2VzKSB7XG5cbiAgfVxuXG4gIGdldEZvcm1hdHRlZEluZGV4KHJlcXVpcmVkSW5kZXhMZW5ndGgpIHtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuZ2V0SW5kZXhMZW5ndGgoKSxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gcmVxdWlyZWRJbmRleExlbmd0aCAtIGluZGV4TGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBpbmRleCA9IGAke3BhZGRpbmd9JHt0aGlzLmluZGV4fWA7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHllbGxvdyhpbmRleCk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkSW5kZXg7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRDb250ZW50KCkge1xuICAgIGNvbnN0IGdhcHMgPSBbXSxcbiAgICAgICAgICBtYXRjaGVzID0gW107XG5cbiAgICBsZXQgZW5kLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RyaW5nID0gdGhpcy5jb250ZW50OyAgLy8vXG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKHRoaXMub2NjdXJyZW5jZXMsIChvY2N1cnJlbmNlKSA9PiB7XG4gICAgICBlbmQgPSBvY2N1cnJlbmNlLmdldEVuZCgpO1xuXG4gICAgICBzdGFydCA9IGVuZDsgIC8vL1xuXG4gICAgICBlbmQgPSBJbmZpbml0eTtcblxuICAgICAgY29uc3QgZ2FwID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgZ2Fwcy51bnNoaWZ0KGdhcCk7XG5cbiAgICAgIGVuZCA9IG9jY3VycmVuY2UuZ2V0RW5kKCk7XG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgc3RhcnQgPSBvY2N1cnJlbmNlLmdldFN0YXJ0KCk7XG5cbiAgICAgIGVuZCA9IEluZmluaXR5O1xuXG4gICAgICBjb25zdCBtYXRjaCA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG5cbiAgICAgIG1hdGNoZXMudW5zaGlmdChtYXRjaCk7XG5cbiAgICAgIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTsgIC8vL1xuICAgIH0pO1xuXG4gICAgbGV0IGdhcCA9IHN0cmluZzsgLy8vXG5cbiAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgIHN0cmluZyA9IGdhcDsgLy8vXG5cbiAgICBnYXBzLmZvckVhY2goKGdhcCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbaW5kZXhdO1xuXG4gICAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgICAgbWF0Y2ggPSBibHVlKG1hdGNoKTsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHttYXRjaH0ke2dhcH1gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkQ29udGVudCA9IHN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZENvbnRlbnQ7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmdldEZpbGVQYXRoTGVuZ3RoKCksXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IHJlcXVpcmVkRmlsZVBhdGhMZW5ndGggLSBmaWxlUGF0aExlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIGZvcm1hdHRlZEZpbGVQYXRoID0gIGAke3RoaXMuZmlsZVBhdGh9JHtwYWRkaW5nfWA7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRmlsZVBhdGg7XG4gIH1cblxuICBhc01lc3NhZ2UoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGAke3RoaXMuZmlsZVBhdGh9ICAke3RoaXMuaW5kZXh9IHwgJHt0aGlzLmNvbnRlbnR9YDtcblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgYXNGb3JtYXR0ZWRNZXNzYWdlKHJlcXVpcmVkSW5kZXhMZW5ndGgsIHJlcXVpcmVkRmlsZVBhdGhMZW5ndGgpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHRoaXMuZ2V0Rm9ybWF0dGVkSW5kZXgocmVxdWlyZWRJbmRleExlbmd0aCksXG4gICAgICAgICAgZm9ybWF0dGVkQ29udGVudCA9IHRoaXMuZ2V0Rm9ybWF0dGVkQ29udGVudCgpLFxuICAgICAgICAgIGZvcm1hdHRlZEZpbGVQYXRoID0gdGhpcy5nZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSxcbiAgICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0dGVkRmlsZVBhdGh9ICAke2Zvcm1hdHRlZEluZGV4fSB8ICR7Zm9ybWF0dGVkQ29udGVudH1gO1xuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCkge1xuICAgIGluZGV4ID0gYCR7aW5kZXh9YDsgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oXFxyXFxufFxccnxcXG4pJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBbXSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUoaW5kZXgsIGNvbnRlbnQsIGZpbGVQYXRoLCBvY2N1cnJlbmNlcyk7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgcGFkZGluZ0xlbmd0aDsgY291bnQrKykge1xuICAgIHBhZGRpbmcgKz0gU0lOR0xFX1NQQUNFO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG4iXSwibmFtZXMiOlsiTGluZSIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsImluZGV4IiwiY29udGVudCIsImZpbGVQYXRoIiwib2NjdXJyZW5jZXMiLCJvY2N1cmVuY2VzIiwiZ2V0SW5kZXgiLCJnZXRDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRPY2N1cnJlbmNlcyIsInNldEluZGV4Iiwic2V0Q29udGVudCIsInNldEZpbGVQYXRoIiwic2V0T2NjdXJyZW5jZXMiLCJnZXRJbmRleExlbmd0aCIsImluZGV4TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0RmlsZVBhdGhMZW5ndGgiLCJmaWxlUGF0aExlbmd0aCIsImFkZE9jY3VycmVuY2VzIiwiZ2V0Rm9ybWF0dGVkSW5kZXgiLCJyZXF1aXJlZEluZGV4TGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJmb3JtYXR0ZWRJbmRleCIsInllbGxvdyIsImdldEZvcm1hdHRlZENvbnRlbnQiLCJnYXBzIiwibWF0Y2hlcyIsImVuZCIsInN0YXJ0Iiwic3RyaW5nIiwib2NjdXJyZW5jZSIsImdldEVuZCIsIkluZmluaXR5IiwiZ2FwIiwic3Vic3RyaW5nIiwidW5zaGlmdCIsImdldFN0YXJ0IiwibWF0Y2giLCJncmV5IiwiZm9yRWFjaCIsImJsdWUiLCJmb3JtYXR0ZWRDb250ZW50IiwiZ2V0Rm9ybWF0dGVkRmlsZVBhdGgiLCJyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoIiwiZm9ybWF0dGVkRmlsZVBhdGgiLCJhc01lc3NhZ2UiLCJtZXNzYWdlIiwiYXNGb3JtYXR0ZWRNZXNzYWdlIiwiZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsImxpbmUiLCJjb3VudCIsIlNJTkdMRV9TUEFDRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7bUJBRUk7eUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQU0sQUFBRUMsbUJBQXFCQyx5QkFBYyxDQUFuQ0Q7QUFFTyxJQUFBLEFBQU1ELHFCQUFOO2FBQU1BLEtBQ1BHLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFdBQVc7Z0NBRDlCTjtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDRSxVQUFVLEdBQUdEOztrQkFMRE47O1lBUW5CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE9BQU87WUFDckI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVB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