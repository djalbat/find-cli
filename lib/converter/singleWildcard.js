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
import Converter from "../converter";
var SingleWildcardConverter = /*#__PURE__*/ function(Converter1) {
    _inherits(SingleWildcardConverter, Converter1);
    function SingleWildcardConverter() {
        _class_call_check(this, SingleWildcardConverter);
        return _call_super(this, SingleWildcardConverter, arguments);
    }
    _create_class(SingleWildcardConverter, [
        {
            key: "callback",
            value: function callback(characters) {
                var result = ".+?";
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return Converter.fromNothing(SingleWildcardConverter);
            }
        }
    ]);
    return SingleWildcardConverter;
}(Converter);
_define_property(SingleWildcardConverter, "regex", /^\*/);
var singleWildcardConverter = SingleWildcardConverter.fromNothing();
export default singleWildcardConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvc2luZ2xlV2lsZGNhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb252ZXJ0ZXIgZnJvbSBcIi4uL2NvbnZlcnRlclwiO1xuXG5jbGFzcyBTaW5nbGVXaWxkY2FyZENvbnZlcnRlciBleHRlbmRzIENvbnZlcnRlciB7XG4gIGNhbGxiYWNrKGNoYXJhY3RlcnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBgLis/YDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcKi87XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29udmVydGVyLmZyb21Ob3RoaW5nKFNpbmdsZVdpbGRjYXJkQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCBzaW5nbGVXaWxkY2FyZENvbnZlcnRlciA9IFNpbmdsZVdpbGRjYXJkQ29udmVydGVyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZVdpbGRjYXJkQ29udmVydGVyO1xuIl0sIm5hbWVzIjpbIkNvbnZlcnRlciIsIlNpbmdsZVdpbGRjYXJkQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwiZnJvbU5vdGhpbmciLCJyZWdleCIsInNpbmdsZVdpbGRjYXJkQ29udmVydGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsZUFBZSxlQUFlO0FBRXJDLElBQUEsQUFBTUMsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFVBQVU7Z0JBQ2pCLElBQU1DLFNBQVM7Z0JBRWYsT0FBT0E7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0wsVUFBVUssV0FBVyxDQVQvQ0o7WUFTMEU7OztXQVQxRUE7RUFBZ0NEO0FBT3BDLGlCQVBJQyx5QkFPR0ssU0FBUTtBQUtqQixJQUFNQywwQkFBMEJOLHdCQUF3QkksV0FBVztBQUVuRSxlQUFlRSx3QkFBd0IifQ==