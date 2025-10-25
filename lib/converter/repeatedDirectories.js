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
var RepeatedDirectoriesConverter = /*#__PURE__*/ function(Converter) {
    _inherits(RepeatedDirectoriesConverter, Converter);
    function RepeatedDirectoriesConverter() {
        _class_call_check(this, RepeatedDirectoriesConverter);
        return _call_super(this, RepeatedDirectoriesConverter, arguments);
    }
    _create_class(RepeatedDirectoriesConverter, [
        {
            key: "callback",
            value: function callback(characters) {
                var result = "(?:[^/]*\\/)*";
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _converter.default.fromNothing(RepeatedDirectoriesConverter);
            }
        }
    ]);
    return RepeatedDirectoriesConverter;
}(_converter.default);
_define_property(RepeatedDirectoriesConverter, "regex", /^\*\*\//);
var repeatedDirectoriesConverter = RepeatedDirectoriesConverter.fromNothing();
var _default = repeatedDirectoriesConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvcmVwZWF0ZWREaXJlY3Rvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNsYXNzIFJlcGVhdGVkRGlyZWN0b3JpZXNDb252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xuICBjYWxsYmFjayhjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYCg/OlteL10qXFxcXC8pKmA7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHJlZ2V4ID0gL15cXCpcXCpcXC8vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhSZXBlYXRlZERpcmVjdG9yaWVzQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCByZXBlYXRlZERpcmVjdG9yaWVzQ29udmVydGVyID0gUmVwZWF0ZWREaXJlY3Rvcmllc0NvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCByZXBlYXRlZERpcmVjdG9yaWVzQ29udmVydGVyO1xuIl0sIm5hbWVzIjpbIlJlcGVhdGVkRGlyZWN0b3JpZXNDb252ZXJ0ZXIiLCJjYWxsYmFjayIsImNoYXJhY3RlcnMiLCJyZXN1bHQiLCJmcm9tTm90aGluZyIsIkNvbnZlcnRlciIsInJlZ2V4IiwicmVwZWF0ZWREaXJlY3Rvcmllc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O2dFQWhCc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFVBQVU7Z0JBQ2pCLElBQU1DLFNBQVM7Z0JBRWYsT0FBT0E7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0Msa0JBQVMsQ0FBQ0QsV0FBVyxDQVQvQ0o7WUFTK0U7OztXQVQvRUE7RUFBcUNLLGtCQUFTO0FBT2xELGlCQVBJTCw4QkFPR00sU0FBUTtBQUtqQixJQUFNQywrQkFBK0JQLDZCQUE2QkksV0FBVztJQUU3RSxXQUFlRyJ9