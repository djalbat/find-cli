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
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var Converter = /*#__PURE__*/ function() {
    function Converter(regex) {
        _class_call_check(this, Converter);
        this.regex = regex;
    }
    _create_class(Converter, [
        {
            key: "getRegex",
            value: function getRegex() {
                return this.regex;
            }
        },
        {
            key: "match",
            value: function match(characters) {
                var result = null;
                var string = characters.join(_constants.EMPTY_STRING), matches = this.regex.exec(string);
                if (matches !== null) {
                    var firstMatch = first(matches), match = firstMatch; ///
                    result = this.callback(match);
                    var length = match.length, start = 0, deleteCount = length;
                    characters.splice(start, deleteCount);
                }
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var regex = Class.regex, converter = new Class(regex);
                return converter;
            }
        }
    ]);
    return Converter;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZlcnRlciB7XG4gIGNvbnN0cnVjdG9yKHJlZ2V4KSB7XG4gICAgdGhpcy5yZWdleCA9IHJlZ2V4O1xuICB9XG5cbiAgZ2V0UmVnZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnZXg7XG4gIH1cblxuICBtYXRjaChjaGFyYWN0ZXJzKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5yZWdleC5leGVjKHN0cmluZyk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgbWF0Y2ggPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgcmVzdWx0ID0gdGhpcy5jYWxsYmFjayhtYXRjaCk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IG1hdGNoLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoO1xuXG4gICAgICBjaGFyYWN0ZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IHJlZ2V4IH0gPSBDbGFzcyxcbiAgICAgICAgICBjb252ZXJ0ZXIgPSBuZXcgQ2xhc3MocmVnZXgpO1xuXG4gICAgcmV0dXJuIGNvbnZlcnRlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnZlcnRlciIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZWdleCIsImdldFJlZ2V4IiwibWF0Y2giLCJjaGFyYWN0ZXJzIiwicmVzdWx0Iiwic3RyaW5nIiwiam9pbiIsIkVNUFRZX1NUUklORyIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImNhbGxiYWNrIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJjb252ZXJ0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsMEJBQU47YUFBTUEsVUFDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsVUFBVTtnQkFDZCxJQUFJQyxTQUFTO2dCQUViLElBQU1DLFNBQVNGLFdBQVdHLElBQUksQ0FBQ0MsdUJBQVksR0FDckNDLFVBQVUsSUFBSSxDQUFDUixLQUFLLENBQUNTLElBQUksQ0FBQ0o7Z0JBRWhDLElBQUlHLFlBQVksTUFBTTtvQkFDcEIsSUFBTUUsYUFBYVosTUFBTVUsVUFDbkJOLFFBQVFRLFlBQVksR0FBRztvQkFFN0JOLFNBQVMsSUFBSSxDQUFDTyxRQUFRLENBQUNUO29CQUV2QixJQUFNVSxTQUFTVixNQUFNVSxNQUFNLEVBQ3JCQyxRQUFRLEdBQ1JDLGNBQWNGO29CQUVwQlQsV0FBV1ksTUFBTSxDQUFDRixPQUFPQztnQkFDM0I7Z0JBRUEsT0FBT1Y7WUFDVDs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUN0QixJQUFNLEFBQUVqQixRQUFVaUIsTUFBVmpCLE9BQ0ZrQixZQUFZLElBQUlELE1BQU1qQjtnQkFFNUIsT0FBT2tCO1lBQ1Q7OztXQXBDbUJyQiJ9