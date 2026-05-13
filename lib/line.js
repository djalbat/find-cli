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
    get default () {
        return Line;
    },
    get marginStringFromMarginWidth () {
        return marginStringFromMarginWidth;
    }
});
const _necessary = require("necessary");
const _constants = require("./constants");
const _log = require("./utilities/log");
const { SPACE_CHARACTER } = _necessary.characters, { backwardsForEach } = _necessary.arrayUtilities;
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
        const indexLength = this.getIndexLength(), marginWidth = requiredIndexLength - indexLength, marginString = marginStringFromMarginWidth(marginWidth);
        index = `${marginString}${this.index}`;
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
        const filePathLength = this.getFilePathLength(), marginWidth = requiredFilePathLength - filePathLength, marginString = marginStringFromMarginWidth(marginWidth), formattedFilePath = `${this.filePath}${marginString}`;
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
function marginStringFromMarginWidth(marginWidth) {
    const marginString = SPACE_CHARACTER.repeat(marginWidth);
    return marginString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBncmV5LCBibHVlLCB5ZWxsb3cgfSBmcm9tIFwiLi91dGlsaXRpZXMvbG9nXCI7XG5cbmNvbnN0IHsgU1BBQ0VfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzLFxuICAgICAgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCwgb2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5vY2N1cmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0T2NjdXJyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2NjdXJlbmNlcztcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHNldEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgc2V0T2NjdXJyZW5jZXMob2NjdXJyZW5jZXMpIHtcbiAgICB0aGlzLm9jY3VycmVuY2VzID0gb2NjdXJyZW5jZXM7XG4gIH1cblxuICBnZXRJbmRleExlbmd0aCgpIHtcbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuaW5kZXgubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGluZGV4TGVuZ3RoO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhMZW5ndGgoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmZpbGVQYXRoLmxlbmd0aDtcblxuICAgIHJldHVybiBmaWxlUGF0aExlbmd0aDtcbiAgfVxuXG4gIGFkZE9jY3VycmVuY2VzKG9jY3VycmVuY2VzKSB7XG5cbiAgfVxuXG4gIGdldEZvcm1hdHRlZEluZGV4KHJlcXVpcmVkSW5kZXhMZW5ndGgpIHtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRleExlbmd0aCA9IHRoaXMuZ2V0SW5kZXhMZW5ndGgoKSxcbiAgICAgICAgICBtYXJnaW5XaWR0aCA9IHJlcXVpcmVkSW5kZXhMZW5ndGggLSBpbmRleExlbmd0aCxcbiAgICAgICAgICBtYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgpO1xuXG4gICAgaW5kZXggPSBgJHttYXJnaW5TdHJpbmd9JHt0aGlzLmluZGV4fWA7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHllbGxvdyhpbmRleCk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkSW5kZXg7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRDb250ZW50KCkge1xuICAgIGNvbnN0IGdhcHMgPSBbXSxcbiAgICAgICAgICBtYXRjaGVzID0gW107XG5cbiAgICBsZXQgZW5kLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RyaW5nID0gdGhpcy5jb250ZW50OyAgLy8vXG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKHRoaXMub2NjdXJyZW5jZXMsIChvY2N1cnJlbmNlKSA9PiB7XG4gICAgICBlbmQgPSBvY2N1cnJlbmNlLmdldEVuZCgpO1xuXG4gICAgICBzdGFydCA9IGVuZDsgIC8vL1xuXG4gICAgICBlbmQgPSBJbmZpbml0eTtcblxuICAgICAgY29uc3QgZ2FwID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgZ2Fwcy51bnNoaWZ0KGdhcCk7XG5cbiAgICAgIGVuZCA9IG9jY3VycmVuY2UuZ2V0RW5kKCk7XG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgc3RhcnQgPSBvY2N1cnJlbmNlLmdldFN0YXJ0KCk7XG5cbiAgICAgIGVuZCA9IEluZmluaXR5O1xuXG4gICAgICBjb25zdCBtYXRjaCA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG5cbiAgICAgIG1hdGNoZXMudW5zaGlmdChtYXRjaCk7XG5cbiAgICAgIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTsgIC8vL1xuICAgIH0pO1xuXG4gICAgbGV0IGdhcCA9IHN0cmluZzsgLy8vXG5cbiAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgIHN0cmluZyA9IGdhcDsgLy8vXG5cbiAgICBnYXBzLmZvckVhY2goKGdhcCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbaW5kZXhdO1xuXG4gICAgICBnYXAgPSBncmV5KGdhcCk7ICAvLy9cblxuICAgICAgbWF0Y2ggPSBibHVlKG1hdGNoKTsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHttYXRjaH0ke2dhcH1gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkQ29udGVudCA9IHN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZENvbnRlbnQ7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhMZW5ndGggPSB0aGlzLmdldEZpbGVQYXRoTGVuZ3RoKCksXG4gICAgICAgICAgbWFyZ2luV2lkdGggPSByZXF1aXJlZEZpbGVQYXRoTGVuZ3RoIC0gZmlsZVBhdGhMZW5ndGgsXG4gICAgICAgICAgbWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoKSxcbiAgICAgICAgICBmb3JtYXR0ZWRGaWxlUGF0aCA9ICBgJHt0aGlzLmZpbGVQYXRofSR7bWFyZ2luU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRmlsZVBhdGg7XG4gIH1cblxuICBhc01lc3NhZ2UoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGAke3RoaXMuZmlsZVBhdGh9ICAke3RoaXMuaW5kZXh9IHwgJHt0aGlzLmNvbnRlbnR9YDtcblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgYXNGb3JtYXR0ZWRNZXNzYWdlKHJlcXVpcmVkSW5kZXhMZW5ndGgsIHJlcXVpcmVkRmlsZVBhdGhMZW5ndGgpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRJbmRleCA9IHRoaXMuZ2V0Rm9ybWF0dGVkSW5kZXgocmVxdWlyZWRJbmRleExlbmd0aCksXG4gICAgICAgICAgZm9ybWF0dGVkQ29udGVudCA9IHRoaXMuZ2V0Rm9ybWF0dGVkQ29udGVudCgpLFxuICAgICAgICAgIGZvcm1hdHRlZEZpbGVQYXRoID0gdGhpcy5nZXRGb3JtYXR0ZWRGaWxlUGF0aChyZXF1aXJlZEZpbGVQYXRoTGVuZ3RoKSxcbiAgICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0dGVkRmlsZVBhdGh9ICAke2Zvcm1hdHRlZEluZGV4fSB8ICR7Zm9ybWF0dGVkQ29udGVudH1gO1xuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4Q29udGVudEFuZEZpbGVQYXRoKGluZGV4LCBjb250ZW50LCBmaWxlUGF0aCkge1xuICAgIGluZGV4ID0gYCR7aW5kZXh9YDsgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oXFxyXFxufFxccnxcXG4pJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBbXSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUoaW5kZXgsIGNvbnRlbnQsIGZpbGVQYXRoLCBvY2N1cnJlbmNlcyk7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoKSB7XG4gIGNvbnN0IG1hcmdpblN0cmluZyA9IFNQQUNFX0NIQVJBQ1RFUi5yZXBlYXQobWFyZ2luV2lkdGgpO1xuXG4gIHJldHVybiBtYXJnaW5TdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiTGluZSIsIm1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJpbmRleCIsImNvbnRlbnQiLCJmaWxlUGF0aCIsIm9jY3VycmVuY2VzIiwib2NjdXJlbmNlcyIsImdldEluZGV4IiwiZ2V0Q29udGVudCIsImdldEZpbGVQYXRoIiwiZ2V0T2NjdXJyZW5jZXMiLCJzZXRJbmRleCIsInNldENvbnRlbnQiLCJzZXRGaWxlUGF0aCIsInNldE9jY3VycmVuY2VzIiwiZ2V0SW5kZXhMZW5ndGgiLCJpbmRleExlbmd0aCIsImxlbmd0aCIsImdldEZpbGVQYXRoTGVuZ3RoIiwiZmlsZVBhdGhMZW5ndGgiLCJhZGRPY2N1cnJlbmNlcyIsImdldEZvcm1hdHRlZEluZGV4IiwicmVxdWlyZWRJbmRleExlbmd0aCIsIm1hcmdpbldpZHRoIiwibWFyZ2luU3RyaW5nIiwiZm9ybWF0dGVkSW5kZXgiLCJ5ZWxsb3ciLCJnZXRGb3JtYXR0ZWRDb250ZW50IiwiZ2FwcyIsIm1hdGNoZXMiLCJlbmQiLCJzdGFydCIsInN0cmluZyIsIm9jY3VycmVuY2UiLCJnZXRFbmQiLCJJbmZpbml0eSIsImdhcCIsInN1YnN0cmluZyIsInVuc2hpZnQiLCJnZXRTdGFydCIsIm1hdGNoIiwiZ3JleSIsImZvckVhY2giLCJibHVlIiwiZm9ybWF0dGVkQ29udGVudCIsImdldEZvcm1hdHRlZEZpbGVQYXRoIiwicmVxdWlyZWRGaWxlUGF0aExlbmd0aCIsImZvcm1hdHRlZEZpbGVQYXRoIiwiYXNNZXNzYWdlIiwibWVzc2FnZSIsImFzRm9ybWF0dGVkTWVzc2FnZSIsImZyb21JbmRleENvbnRlbnRBbmRGaWxlUGF0aCIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJsaW5lIiwicmVwZWF0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFVQTtlQUFxQkE7O1FBdUtMQztlQUFBQTs7OzJCQS9LMkI7MkJBRWQ7cUJBQ007QUFFbkMsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0MscUJBQVUsRUFDaEMsRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0MseUJBQWM7QUFFNUIsTUFBTUw7SUFDbkIsWUFBWU0sS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxDQUFFO1FBQ2pELElBQUksQ0FBQ0gsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNFLFVBQVUsR0FBR0Q7SUFDcEI7SUFFQUUsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDTCxLQUFLO0lBQ25CO0lBRUFNLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0wsT0FBTztJQUNyQjtJQUVBTSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNMLFFBQVE7SUFDdEI7SUFFQU0saUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssU0FBU1QsS0FB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