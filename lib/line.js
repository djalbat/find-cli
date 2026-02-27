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
const _necessary = require("necessary");
const _log = require("./utilities/log");
const _constants = require("./constants");
const { backwardsForEach } = _necessary.arrayUtilities;
class Line {
    constructor(index, content, filePath, occurrences){
        this.index = index;
        this.content = content;
        this.filePath = filePath;
        this.occurences = occurrences;
    }
    getIndex() {
        return this.index;
    }
    getContent() {
        return this.content;
    }
    getFilePath() {
        return this.filePath;
    }
    getOccurrences() {
        return this.occurences;
    }
    setIndex(index) {
        this.index = index;
    }
    setContent(content) {
        this.content = content;
    }
    setFilePath(filePath) {
        this.filePath = filePath;
    }
    setOccurrences(occurrences) {
        this.occurrences = occurrences;
    }
    getIndexLength() {
        const indexLength = this.index.length;
        return indexLength;
    }
    getFilePathLength() {
        const filePathLength = this.filePath.length;
        return filePathLength;
    }
    addOccurrences(occurrences) {}
    getFormattedIndex(requiredIndexLength) {
        let index;
        const indexLength = this.getIndexLength(), paddingLength = requiredIndexLength - indexLength, padding = paddingFromPaddingLength(paddingLength);
        index = `${padding}${this.index}`;
        const formattedIndex = (0, _log.yellow)(index);
        return formattedIndex;
    }
    getFormattedContent() {
        const gaps = [], matches = [];
        let end, start, string = this.content; ///
        backwardsForEach(this.occurrences, (occurrence)=>{
            end = occurrence.getEnd();
            start = end; ///
            end = Infinity;
            const gap = string.substring(start, end);
            gaps.unshift(gap);
            end = occurrence.getEnd();
            start = 0;
            string = string.substring(start, end);
            start = occurrence.getStart();
            end = Infinity;
            const match = string.substring(start, end);
            matches.unshift(match);
            end = start; ///
            start = 0;
            string = string.substring(start, end); ///
        });
        let gap = string; ///
        gap = (0, _log.grey)(gap); ///
        string = gap; ///
        gaps.forEach((gap, index)=>{
            let match = matches[index];
            gap = (0, _log.grey)(gap); ///
            match = (0, _log.blue)(match); ///
            string = `${string}${match}${gap}`;
        });
        const formattedContent = string; ///
        return formattedContent;
    }
    getFormattedFilePath(requiredFilePathLength) {
        const filePathLength = this.getFilePathLength(), paddingLength = requiredFilePathLength - filePathLength, padding = paddingFromPaddingLength(paddingLength), formattedFilePath = `${this.filePath}${padding}`;
        return formattedFilePath;
    }
    asMessage() {
        const message = `${this.filePath}  ${this.index} | ${this.content}`;
        return message;
    }
    asFormattedMessage(requiredIndexLength, requiredFilePathLength) {
        const formattedIndex = this.getFormattedIndex(requiredIndexLength), formattedContent = this.getFormattedContent(), formattedFilePath = this.getFormattedFilePath(requiredFilePathLength), message = `${formattedFilePath}  ${formattedIndex} | ${formattedContent}`;
        return message;
    }
    static fromIndexContentAndFilePath(index, content, filePath) {
        index = `${index}`; ///
        content = content.replace(/(\r\n|\r|\n)$/, _constants.EMPTY_STRING); ///
        const occurrences = [], line = new Line(index, content, filePath, occurrences);
        return line;
    }
}
function paddingFromPaddingLength(paddingLength) {
    let padding = _constants.EMPTY_STRING;
    for(let count = 0; count < paddingLength; count++){
        padding += _constants.SINGLE_SPACE;
    }
    return padding;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZ3JleSwgYmx1ZSwgeWVsbG93IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xvZ1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCwgb2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5vY2N1cmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0T2NjdXJyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2NjdXJlbmNlcztcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHNldEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgc2V0T2NjdXJyZW5jZXMob2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLm9jY3VycmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleExlbmd0aCgpIHtcbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuaW5kZXgubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGluZGV4TGVuZ3RoO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhMZW5ndGgoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmZpbGVQYXRoLmxlbmd0aDtcblxuICAgIHJldHVybiBmaWxlUGF0aExlbmd0aDtcbiAgfVxuXG4gIGFkZE9jY3VycmVuY2VzKG9jY3VycmVuY2VzKSB7XG5cbiAgfVxuXG4gIGdldEZvcm1hdHRlZEluZGV4KHJlcXVpcmVkSW5kZXhMZW5ndGgpIHtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuZ2V0SW5kZXhMZW5ndGgoKSxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gcmVxdWlyZWRJbmRleExlbmd0aCAtIGluZGV4TGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBpbmRleCA9IGAke3BhZGRpbmd9JHt0aGlzLmluZGV4fWA7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHllbGxvdyhpbmRleCk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkSW5kZXg7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRDb250ZW50KCkge1xuICAgIGNvbnN0IGdhcHMgPSBbXSxcbiAgICAgICAgICBtYXRjaGVzID0gW107XG5cbiAgICBsZXQgZW5kLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RyaW5nID0gdGhpcy5jb250ZW50OyAgLy8vXG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKHRoaXMub2NjdXJyZW5jZXMsIChvY2N1cnJlbmNlKSA9PiB7XG4gICAgICBlbmQgPSBvY2N1cnJlbmNlLmdldEVuZCgpO1xuXG4gICAgICBzdGFydCA9IGVuZDsgIC8vL1xuXG4gICAgICBlbmQgPSBJbmZpbml0eTtcblxuICAgICAgY29uc3QgZ2FwID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgZ2Fwcy51bnNoaWZ0KGdhcCk7XG5cbiAgICAgIGVuZCA9IG9jY3VycmVuY2UuZ2V0RW5kKCk7XG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgc3RhcnQgPSBvY2N1cnJlbmNlLmdldFN0YXJ0KCk7XG5cbiAgICAgIGVuZCA9IEluZmluaXR5O1xuXG4gICAgICBjb25zdCBtYXRjaCA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG5cbiAgICAgIG1hdGNoZXMudW5zaGlmdChtYXRjaCk7XG5cbiAgICAgIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTsgIC8vL1xuICAgIH0pO1xuXG4gICAgbGV0IGdhcCA9IHN0cmluZzsgLy8vXG5cbiAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgIHN0cmluZyA9IGdhcDsgLy8vXG5cbiAgICBnYXBzLmZvckVhY2goKGdhcCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbaW5kZXhdO1xuXG4gICAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgICAgbWF0Y2ggPSBibHVlKG1hdGNoKTsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHttYXRjaH0ke2dhcH1gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkQ29udGVudCA9IHN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZENvbnRlbnQ7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmdldEZpbGVQYXRoTGVuZ3RoKCksXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IHJlcXVpcmVkRmlsZVBhdGhMZW5ndGggLSBmaWxlUGF0aExlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIGZvcm1hdHRlZEZpbGVQYXRoID0gIGAke3RoaXMuZmlsZVBhdGh9JHtwYWRkaW5nfWA7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRmlsZVBhdGg7XG4gIH1cblxuICBhc01lc3NhZ2UoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGAke3RoaXMuZmlsZVBhdGh9ICAke3RoaXMuaW5kZXh9IHwgJHt0aGlzLmNvbnRlbnR9YDtcblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgYXNGb3JtYXR0ZWRNZXNzYWdlKHJlcXVpcmVkSW5kZXhMZW5ndGgsIHJlcXVpcmVkRmlsZVBhdGhMZW5ndGgpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHRoaXMuZ2V0Rm9ybWF0dGVkSW5kZXgocmVxdWlyZWRJbmRleExlbmd0aCksXG4gICAgICAgICAgZm9ybWF0dGVkQ29udGVudCA9IHRoaXMuZ2V0Rm9ybWF0dGVkQ29udGVudCgpLFxuICAgICAgICAgIGZvcm1hdHRlZEZpbGVQYXRoID0gdGhpcy5nZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSxcbiAgICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0dGVkRmlsZVBhdGh9ICAke2Zvcm1hdHRlZEluZGV4fSB8ICR7Zm9ybWF0dGVkQ29udGVudH1gO1xuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCkge1xuICAgIGluZGV4ID0gYCR7aW5kZXh9YDsgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oXFxyXFxufFxccnxcXG4pJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBbXSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUoaW5kZXgsIGNvbnRlbnQsIGZpbGVQYXRoLCBvY2N1cnJlbmNlcyk7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgcGFkZGluZ0xlbmd0aDsgY291bnQrKykge1xuICAgIHBhZGRpbmcgKz0gU0lOR0xFX1NQQUNFO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG4iXSwibmFtZXMiOlsiTGluZSIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsImluZGV4IiwiY29udGVudCIsImZpbGVQYXRoIiwib2NjdXJyZW5jZXMiLCJvY2N1cmVuY2VzIiwiZ2V0SW5kZXgiLCJnZXRDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRPY2N1cnJlbmNlcyIsInNldEluZGV4Iiwic2V0Q29udGVudCIsInNldEZpbGVQYXRoIiwic2V0T2NjdXJyZW5jZXMiLCJnZXRJbmRleExlbmd0aCIsImluZGV4TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0RmlsZVBhdGhMZW5ndGgiLCJmaWxlUGF0aExlbmd0aCIsImFkZE9jY3VycmVuY2VzIiwiZ2V0Rm9ybWF0dGVkSW5kZXgiLCJyZXF1aXJlZEluZGV4TGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJmb3JtYXR0ZWRJbmRleCIsInllbGxvdyIsImdldEZvcm1hdHRlZENvbnRlbnQiLCJnYXBzIiwibWF0Y2hlcyIsImVuZCIsInN0YXJ0Iiwic3RyaW5nIiwib2NjdXJyZW5jZSIsImdldEVuZCIsIkluZmluaXR5IiwiZ2FwIiwic3Vic3RyaW5nIiwidW5zaGlmdCIsImdldFN0YXJ0IiwibWF0Y2giLCJncmV5IiwiZm9yRWFjaCIsImJsdWUiLCJmb3JtYXR0ZWRDb250ZW50IiwiZ2V0Rm9ybWF0dGVkRmlsZVBhdGgiLCJyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoIiwiZm9ybWF0dGVkRmlsZVBhdGgiLCJhc01lc3NhZ2UiLCJtZXNzYWdlIiwiYXNGb3JtYXR0ZWRNZXNzYWdlIiwiZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsImxpbmUiLCJjb3VudCIsIlNJTkdMRV9TUEFDRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7OzsyQkFQVTtxQkFFSTsyQkFDUTtBQUUzQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdDLHlCQUFjO0FBRTVCLE1BQU1GO0lBQ25CLFlBQVlHLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsQ0FBRTtRQUNqRCxJQUFJLENBQUNILEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDRSxVQUFVLEdBQUdEO0lBQ3BCO0lBRUFFLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztJQUNuQjtJQUVBTSxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNMLE9BQU87SUFDckI7SUFFQU0sY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDTCxRQUFRO0lBQ3RCO0lBRUFNLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLFNBQVNULEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtJQUNmO0lBRUFVLFdBQVdULE9BQU8sRUFBRTtRQUNsQixJQUFJLENBQUNBLE9BQU8s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