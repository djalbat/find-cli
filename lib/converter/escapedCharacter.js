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
var EscapedCharacterConverter = /*#__PURE__*/ function(Converter) {
    _inherits(EscapedCharacterConverter, Converter);
    function EscapedCharacterConverter() {
        _class_call_check(this, EscapedCharacterConverter);
        return _call_super(this, EscapedCharacterConverter, arguments);
    }
    _create_class(EscapedCharacterConverter, [
        {
            key: "callback",
            value: function callback(characters) {
                var result = characters; ///
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _converter.default.fromNothing(EscapedCharacterConverter);
            }
        }
    ]);
    return EscapedCharacterConverter;
}(_converter.default);
_define_property(EscapedCharacterConverter, "regex", /^\\./);
var questionMarkCharacterConverter = EscapedCharacterConverter.fromNothing();
var _default = questionMarkCharacterConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvZXNjYXBlZENoYXJhY3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNsYXNzIEVzY2FwZWRDaGFyYWN0ZXJDb252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xuICBjYWxsYmFjayhjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2hhcmFjdGVyczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyByZWdleCA9IC9eXFxcXC4vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhFc2NhcGVkQ2hhcmFjdGVyQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCBxdWVzdGlvbk1hcmtDaGFyYWN0ZXJDb252ZXJ0ZXIgPSBFc2NhcGVkQ2hhcmFjdGVyQ29udmVydGVyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXN0aW9uTWFya0NoYXJhY3RlckNvbnZlcnRlcjtcbiJdLCJuYW1lcyI6WyJFc2NhcGVkQ2hhcmFjdGVyQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwiZnJvbU5vdGhpbmciLCJDb252ZXJ0ZXIiLCJyZWdleCIsInF1ZXN0aW9uTWFya0NoYXJhY3RlckNvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O2dFQWhCc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFVBQVU7Z0JBQ2pCLElBQU1DLFNBQVNELFlBQWEsR0FBRztnQkFFL0IsT0FBT0M7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0Msa0JBQVMsQ0FBQ0QsV0FBVyxDQVQvQ0o7WUFTNEU7OztXQVQ1RUE7RUFBa0NLLGtCQUFTO0FBTy9DLGlCQVBJTCwyQkFPR00sU0FBUTtBQUtqQixJQUFNQyxpQ0FBaUNQLDBCQUEwQkksV0FBVztJQUU1RSxXQUFlRyJ9