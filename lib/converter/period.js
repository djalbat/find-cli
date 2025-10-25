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
var PeriodConverter = /*#__PURE__*/ function(Converter) {
    _inherits(PeriodConverter, Converter);
    function PeriodConverter() {
        _class_call_check(this, PeriodConverter);
        return _call_super(this, PeriodConverter, arguments);
    }
    _create_class(PeriodConverter, [
        {
            key: "callback",
            value: function callback(characters) {
                var result = "\\.";
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _converter.default.fromNothing(PeriodConverter);
            }
        }
    ]);
    return PeriodConverter;
}(_converter.default);
_define_property(PeriodConverter, "regex", /^\./);
var periodConverter = PeriodConverter.fromNothing();
var _default = periodConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvcGVyaW9kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuLi9jb252ZXJ0ZXJcIjtcblxuY2xhc3MgUGVyaW9kQ29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGBcXFxcLmA7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHJlZ2V4ID0gL15cXC4vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhQZXJpb2RDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IHBlcmlvZENvbnZlcnRlciA9IFBlcmlvZENvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBwZXJpb2RDb252ZXJ0ZXI7XG4iXSwibmFtZXMiOlsiUGVyaW9kQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwiZnJvbU5vdGhpbmciLCJDb252ZXJ0ZXIiLCJyZWdleCIsInBlcmlvZENvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O2dFQWhCc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFVBQVU7Z0JBQ2pCLElBQU1DLFNBQVM7Z0JBRWYsT0FBT0E7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0Msa0JBQVMsQ0FBQ0QsV0FBVyxDQVQvQ0o7WUFTa0U7OztXQVRsRUE7RUFBd0JLLGtCQUFTO0FBT3JDLGlCQVBJTCxpQkFPR00sU0FBUTtBQUtqQixJQUFNQyxrQkFBa0JQLGdCQUFnQkksV0FBVztJQUVuRCxXQUFlRyJ9