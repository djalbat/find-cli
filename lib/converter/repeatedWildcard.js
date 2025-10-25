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
var RepeatedWildcardConverter = /*#__PURE__*/ function(Converter) {
    _inherits(RepeatedWildcardConverter, Converter);
    function RepeatedWildcardConverter() {
        _class_call_check(this, RepeatedWildcardConverter);
        return _call_super(this, RepeatedWildcardConverter, arguments);
    }
    _create_class(RepeatedWildcardConverter, [
        {
            key: "callback",
            value: function callback(characters) {
                var result = ".*";
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _converter.default.fromNothing(RepeatedWildcardConverter);
            }
        }
    ]);
    return RepeatedWildcardConverter;
}(_converter.default);
_define_property(RepeatedWildcardConverter, "regex", /^\*\*/);
var singleDirectoryConverter = RepeatedWildcardConverter.fromNothing();
var _default = singleDirectoryConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvcmVwZWF0ZWRXaWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNsYXNzIFJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xuICBjYWxsYmFjayhjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYC4qYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcKlxcKi87XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29udmVydGVyLmZyb21Ob3RoaW5nKFJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IHNpbmdsZURpcmVjdG9yeUNvbnZlcnRlciA9IFJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xlRGlyZWN0b3J5Q29udmVydGVyO1xuIl0sIm5hbWVzIjpbIlJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIiLCJjYWxsYmFjayIsImNoYXJhY3RlcnMiLCJyZXN1bHQiLCJmcm9tTm90aGluZyIsIkNvbnZlcnRlciIsInJlZ2V4Iiwic2luZ2xlRGlyZWN0b3J5Q29udmVydGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7Z0VBaEJzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsVUFBVTtnQkFDakIsSUFBTUMsU0FBUztnQkFFZixPQUFPQTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxrQkFBUyxDQUFDRCxXQUFXLENBVC9DSjtZQVM0RTs7O1dBVDVFQTtFQUFrQ0ssa0JBQVM7QUFPL0MsaUJBUElMLDJCQU9HTSxTQUFRO0FBS2pCLElBQU1DLDJCQUEyQlAsMEJBQTBCSSxXQUFXO0lBRXRFLFdBQWVHIn0=