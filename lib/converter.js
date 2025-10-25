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
import { EMPTY_STRING } from "./constants";
var first = arrayUtilities.first;
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
                var string = characters.join(EMPTY_STRING), matches = this.regex.exec(string);
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
export { Converter as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZlcnRlciB7XG4gIGNvbnN0cnVjdG9yKHJlZ2V4KSB7XG4gICAgdGhpcy5yZWdleCA9IHJlZ2V4O1xuICB9XG5cbiAgZ2V0UmVnZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnZXg7XG4gIH1cblxuICBtYXRjaChjaGFyYWN0ZXJzKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5yZWdleC5leGVjKHN0cmluZyk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgbWF0Y2ggPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgcmVzdWx0ID0gdGhpcy5jYWxsYmFjayhtYXRjaCk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IG1hdGNoLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoO1xuXG4gICAgICBjaGFyYWN0ZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IHJlZ2V4IH0gPSBDbGFzcyxcbiAgICAgICAgICBjb252ZXJ0ZXIgPSBuZXcgQ2xhc3MocmVnZXgpO1xuXG4gICAgcmV0dXJuIGNvbnZlcnRlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwiRU1QVFlfU1RSSU5HIiwiZmlyc3QiLCJDb252ZXJ0ZXIiLCJyZWdleCIsImdldFJlZ2V4IiwibWF0Y2giLCJjaGFyYWN0ZXJzIiwicmVzdWx0Iiwic3RyaW5nIiwiam9pbiIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImNhbGxiYWNrIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJjb252ZXJ0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGNBQWMsUUFBUSxZQUFZO0FBRTNDLFNBQVNDLFlBQVksUUFBUSxjQUFjO0FBRTNDLElBQU0sQUFBRUMsUUFBVUYsZUFBVkU7QUFFTyxJQUFBLEFBQU1DLDBCQUFOO2FBQU1BLFVBQ1BDLEtBQUs7Z0NBREVEO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBRklEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFVBQVU7Z0JBQ2QsSUFBSUMsU0FBUztnQkFFYixJQUFNQyxTQUFTRixXQUFXRyxJQUFJLENBQUNULGVBQ3pCVSxVQUFVLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxJQUFJLENBQUNIO2dCQUVoQyxJQUFJRSxZQUFZLE1BQU07b0JBQ3BCLElBQU1FLGFBQWFYLE1BQU1TLFVBQ25CTCxRQUFRTyxZQUFZLEdBQUc7b0JBRTdCTCxTQUFTLElBQUksQ0FBQ00sUUFBUSxDQUFDUjtvQkFFdkIsSUFBTVMsU0FBU1QsTUFBTVMsTUFBTSxFQUNyQkMsUUFBUSxHQUNSQyxjQUFjRjtvQkFFcEJSLFdBQVdXLE1BQU0sQ0FBQ0YsT0FBT0M7Z0JBQzNCO2dCQUVBLE9BQU9UO1lBQ1Q7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFDdEIsSUFBTSxBQUFFaEIsUUFBVWdCLE1BQVZoQixPQUNGaUIsWUFBWSxJQUFJRCxNQUFNaEI7Z0JBRTVCLE9BQU9pQjtZQUNUOzs7V0FwQ21CbEI7O0FBQXJCLFNBQXFCQSx1QkFxQ3BCIn0=