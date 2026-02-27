"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Converter;
    }
});
const _necessary = require("necessary");
const _constants = require("./constants");
const { first } = _necessary.arrayUtilities;
class Converter {
    constructor(regex){
        this.regex = regex;
    }
    getRegex() {
        return this.regex;
    }
    match(characters) {
        let result = null;
        const string = characters.join(_constants.EMPTY_STRING), matches = this.regex.exec(string);
        if (matches !== null) {
            const firstMatch = first(matches), match = firstMatch; ///
            result = this.callback(match);
            const length = match.length, start = 0, deleteCount = length;
            characters.splice(start, deleteCount);
        }
        return result;
    }
    static fromNothing(Class) {
        const { regex } = Class, converter = new Class(regex);
        return converter;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZlcnRlciB7XG4gIGNvbnN0cnVjdG9yKHJlZ2V4KSB7XG4gICAgdGhpcy5yZWdleCA9IHJlZ2V4O1xuICB9XG5cbiAgZ2V0UmVnZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnZXg7XG4gIH1cblxuICBtYXRjaChjaGFyYWN0ZXJzKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5yZWdleC5leGVjKHN0cmluZyk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgbWF0Y2ggPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgcmVzdWx0ID0gdGhpcy5jYWxsYmFjayhtYXRjaCk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IG1hdGNoLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoO1xuXG4gICAgICBjaGFyYWN0ZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IHJlZ2V4IH0gPSBDbGFzcyxcbiAgICAgICAgICBjb252ZXJ0ZXIgPSBuZXcgQ2xhc3MocmVnZXgpO1xuXG4gICAgcmV0dXJuIGNvbnZlcnRlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnZlcnRlciIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZWdleCIsImdldFJlZ2V4IiwibWF0Y2giLCJjaGFyYWN0ZXJzIiwicmVzdWx0Iiwic3RyaW5nIiwiam9pbiIsIkVNUFRZX1NUUklORyIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImNhbGxiYWNrIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJjb252ZXJ0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7MkJBTlU7MkJBRUY7QUFFN0IsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFakIsTUFBTUY7SUFDbkIsWUFBWUcsS0FBSyxDQUFFO1FBQ2pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxNQUFNQyxVQUFVLEVBQUU7UUFDaEIsSUFBSUMsU0FBUztRQUViLE1BQU1DLFNBQVNGLFdBQVdHLElBQUksQ0FBQ0MsdUJBQVksR0FDckNDLFVBQVUsSUFBSSxDQUFDUixLQUFLLENBQUNTLElBQUksQ0FBQ0o7UUFFaEMsSUFBSUcsWUFBWSxNQUFNO1lBQ3BCLE1BQU1FLGFBQWFaLE1BQU1VLFVBQ25CTixRQUFRUSxZQUFZLEdBQUc7WUFFN0JOLFNBQVMsSUFBSSxDQUFDTyxRQUFRLENBQUNUO1lBRXZCLE1BQU1VLFNBQVNWLE1BQU1VLE1BQU0sRUFDckJDLFFBQVEsR0FDUkMsY0FBY0Y7WUFFcEJULFdBQVdZLE1BQU0sQ0FBQ0YsT0FBT0M7UUFDM0I7UUFFQSxPQUFPVjtJQUNUO0lBRUEsT0FBT1ksWUFBWUMsS0FBSyxFQUFFO1FBQ3hCLE1BQU0sRUFBRWpCLEtBQUssRUFBRSxHQUFHaUIsT0FDWkMsWUFBWSxJQUFJRCxNQUFNakI7UUFFNUIsT0FBT2tCO0lBQ1Q7QUFDRiJ9