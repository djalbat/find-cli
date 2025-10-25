"use strict";
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
import { characters } from "necessary";
import Converter from "../converter";
var HAT_CHARACTER = characters.HAT_CHARACTER, EXCLAMATION_MARK_CHARACTER = characters.EXCLAMATION_MARK_CHARACTER;
var CharacterClassConverter = /*#__PURE__*/ function(Converter1) {
    _inherits(CharacterClassConverter, Converter1);
    function CharacterClassConverter() {
        _class_call_check(this, CharacterClassConverter);
        return _call_super(this, CharacterClassConverter, arguments);
    }
    _create_class(CharacterClassConverter, [
        {
            key: "callback",
            value: function callback(characters) {
                characters.pop();
                characters.shift();
                var negated = true;
                var firstCharacter = characters.shift() || null;
                if (firstCharacter !== null) {
                    if (firstCharacter === HAT_CHARACTER || firstCharacter === EXCLAMATION_MARK_CHARACTER) {
                        negated = true;
                    } else {
                        characters.unshift(firstCharacter);
                    }
                }
                var characterClass = "".concat(characters);
                if (negated) {
                    characterClass = "^".concat(characterClass);
                }
                var result = "[".concat(characterClass, "]");
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return Converter.fromNothing(CharacterClassConverter);
            }
        }
    ]);
    return CharacterClassConverter;
}(Converter);
_define_property(CharacterClassConverter, "regex", /^\[[^\]]+]/);
var characterClassConverter = CharacterClassConverter.fromNothing();
export default characterClassConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvY2hhcmFjdGVyQ2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb252ZXJ0ZXIgZnJvbSBcIi4uL2NvbnZlcnRlclwiO1xuXG5jb25zdCB7IEhBVF9DSEFSQUNURVIsIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5jbGFzcyBDaGFyYWN0ZXJDbGFzc0NvbnZlcnRlciBleHRlbmRzIENvbnZlcnRlciB7XG4gIGNhbGxiYWNrKGNoYXJhY3RlcnMpIHtcbiAgICBjaGFyYWN0ZXJzLnBvcCgpO1xuXG4gICAgY2hhcmFjdGVycy5zaGlmdCgpO1xuXG4gICAgbGV0IG5lZ2F0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzLnNoaWZ0KCkgfHwgbnVsbDtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciAhPT0gbnVsbCkge1xuICAgICAgaWYgKChmaXJzdENoYXJhY3RlciA9PT0gSEFUX0NIQVJBQ1RFUikgfHwgKGZpcnN0Q2hhcmFjdGVyID09PSBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUikpIHtcbiAgICAgICAgbmVnYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyYWN0ZXJzLnVuc2hpZnQoZmlyc3RDaGFyYWN0ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjaGFyYWN0ZXJDbGFzcyA9IGAke2NoYXJhY3RlcnN9YDtcblxuICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICBjaGFyYWN0ZXJDbGFzcyA9IGBeJHtjaGFyYWN0ZXJDbGFzc31gO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGBbJHtjaGFyYWN0ZXJDbGFzc31dYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcW1teXFxdXStdLztcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoQ2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IGNoYXJhY3RlckNsYXNzQ29udmVydGVyID0gQ2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXI7XG4iXSwibmFtZXMiOlsiY2hhcmFjdGVycyIsIkNvbnZlcnRlciIsIkhBVF9DSEFSQUNURVIiLCJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsIkNoYXJhY3RlckNsYXNzQ29udmVydGVyIiwiY2FsbGJhY2siLCJwb3AiLCJzaGlmdCIsIm5lZ2F0ZWQiLCJmaXJzdENoYXJhY3RlciIsInVuc2hpZnQiLCJjaGFyYWN0ZXJDbGFzcyIsInJlc3VsdCIsImZyb21Ob3RoaW5nIiwicmVnZXgiLCJjaGFyYWN0ZXJDbGFzc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFVBQVUsUUFBUSxZQUFZO0FBRXZDLE9BQU9DLGVBQWUsZUFBZTtBQUVyQyxJQUFRQyxnQkFBOENGLFdBQTlDRSxlQUFlQyw2QkFBK0JILFdBQS9CRztBQUV2QixJQUFBLEFBQU1DLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTTCxVQUFVO2dCQUNqQkEsV0FBV00sR0FBRztnQkFFZE4sV0FBV08sS0FBSztnQkFFaEIsSUFBSUMsVUFBVTtnQkFFZCxJQUFNQyxpQkFBaUJULFdBQVdPLEtBQUssTUFBTTtnQkFFN0MsSUFBSUUsbUJBQW1CLE1BQU07b0JBQzNCLElBQUksQUFBQ0EsbUJBQW1CUCxpQkFBbUJPLG1CQUFtQk4sNEJBQTZCO3dCQUN6RkssVUFBVTtvQkFDWixPQUFPO3dCQUNMUixXQUFXVSxPQUFPLENBQUNEO29CQUNyQjtnQkFDRjtnQkFFQSxJQUFJRSxpQkFBaUIsQUFBQyxHQUFhLE9BQVhYO2dCQUV4QixJQUFJUSxTQUFTO29CQUNYRyxpQkFBaUIsQUFBQyxJQUFrQixPQUFmQTtnQkFDdkI7Z0JBRUEsSUFBTUMsU0FBUyxBQUFDLElBQWtCLE9BQWZELGdCQUFlO2dCQUVsQyxPQUFPQztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPWixVQUFVWSxXQUFXLENBL0IvQ1Q7WUErQjBFOzs7V0EvQjFFQTtFQUFnQ0g7QUE2QnBDLGlCQTdCSUcseUJBNkJHVSxTQUFRO0FBS2pCLElBQU1DLDBCQUEwQlgsd0JBQXdCUyxXQUFXO0FBRW5FLGVBQWVFLHdCQUF3QiJ9