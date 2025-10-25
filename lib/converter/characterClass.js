"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _converter = /*#__PURE__*/ _interop_require_default(require("../converter"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var HAT_CHARACTER = _necessary.characters.HAT_CHARACTER, EXCLAMATION_MARK_CHARACTER = _necessary.characters.EXCLAMATION_MARK_CHARACTER;
var CharacterClassConverter = /*#__PURE__*/ function(Converter) {
    _inherits(CharacterClassConverter, Converter);
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
                return _converter.default.fromNothing(CharacterClassConverter);
            }
        }
    ]);
    return CharacterClassConverter;
}(_converter.default);
_define_property(CharacterClassConverter, "regex", /^\[[^\]]+]/);
var characterClassConverter = CharacterClassConverter.fromNothing();
var _default = characterClassConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvY2hhcmFjdGVyQ2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb252ZXJ0ZXIgZnJvbSBcIi4uL2NvbnZlcnRlclwiO1xuXG5jb25zdCB7IEhBVF9DSEFSQUNURVIsIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5jbGFzcyBDaGFyYWN0ZXJDbGFzc0NvbnZlcnRlciBleHRlbmRzIENvbnZlcnRlciB7XG4gIGNhbGxiYWNrKGNoYXJhY3RlcnMpIHtcbiAgICBjaGFyYWN0ZXJzLnBvcCgpO1xuXG4gICAgY2hhcmFjdGVycy5zaGlmdCgpO1xuXG4gICAgbGV0IG5lZ2F0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzLnNoaWZ0KCkgfHwgbnVsbDtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciAhPT0gbnVsbCkge1xuICAgICAgaWYgKChmaXJzdENoYXJhY3RlciA9PT0gSEFUX0NIQVJBQ1RFUikgfHwgKGZpcnN0Q2hhcmFjdGVyID09PSBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUikpIHtcbiAgICAgICAgbmVnYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyYWN0ZXJzLnVuc2hpZnQoZmlyc3RDaGFyYWN0ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjaGFyYWN0ZXJDbGFzcyA9IGAke2NoYXJhY3RlcnN9YDtcblxuICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICBjaGFyYWN0ZXJDbGFzcyA9IGBeJHtjaGFyYWN0ZXJDbGFzc31gO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGBbJHtjaGFyYWN0ZXJDbGFzc31dYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcW1teXFxdXStdLztcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoQ2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IGNoYXJhY3RlckNsYXNzQ29udmVydGVyID0gQ2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXI7XG4iXSwibmFtZXMiOlsiSEFUX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsIkNoYXJhY3RlckNsYXNzQ29udmVydGVyIiwiY2FsbGJhY2siLCJwb3AiLCJzaGlmdCIsIm5lZ2F0ZWQiLCJmaXJzdENoYXJhY3RlciIsInVuc2hpZnQiLCJjaGFyYWN0ZXJDbGFzcyIsInJlc3VsdCIsImZyb21Ob3RoaW5nIiwiQ29udmVydGVyIiwicmVnZXgiLCJjaGFyYWN0ZXJDbGFzc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNENBOzs7ZUFBQTs7O3lCQTFDMkI7Z0VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQVFBLGdCQUE4Q0MscUJBQVUsQ0FBeERELGVBQWVFLDZCQUErQkQscUJBQVUsQ0FBekNDO0FBRXZCLElBQUEsQUFBTUMsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNILFVBQVU7Z0JBQ2pCQSxXQUFXSSxHQUFHO2dCQUVkSixXQUFXSyxLQUFLO2dCQUVoQixJQUFJQyxVQUFVO2dCQUVkLElBQU1DLGlCQUFpQlAsV0FBV0ssS0FBSyxNQUFNO2dCQUU3QyxJQUFJRSxtQkFBbUIsTUFBTTtvQkFDM0IsSUFBSSxBQUFDQSxtQkFBbUJSLGlCQUFtQlEsbUJBQW1CTiw0QkFBNkI7d0JBQ3pGSyxVQUFVO29CQUNaLE9BQU87d0JBQ0xOLFdBQVdRLE9BQU8sQ0FBQ0Q7b0JBQ3JCO2dCQUNGO2dCQUVBLElBQUlFLGlCQUFpQixBQUFDLEdBQWEsT0FBWFQ7Z0JBRXhCLElBQUlNLFNBQVM7b0JBQ1hHLGlCQUFpQixBQUFDLElBQWtCLE9BQWZBO2dCQUN2QjtnQkFFQSxJQUFNQyxTQUFTLEFBQUMsSUFBa0IsT0FBZkQsZ0JBQWU7Z0JBRWxDLE9BQU9DO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGtCQUFTLENBQUNELFdBQVcsQ0EvQi9DVDtZQStCMEU7OztXQS9CMUVBO0VBQWdDVSxrQkFBUztBQTZCN0MsaUJBN0JJVix5QkE2QkdXLFNBQVE7QUFLakIsSUFBTUMsMEJBQTBCWix3QkFBd0JTLFdBQVc7SUFFbkUsV0FBZUcifQ==