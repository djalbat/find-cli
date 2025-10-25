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
var BAR_CHARACTER = _necessary.characters.BAR_CHARACTER, COMMA_CHARACTER = _necessary.characters.COMMA_CHARACTER;
var AlternatesConverter = /*#__PURE__*/ function(Converter) {
    _inherits(AlternatesConverter, Converter);
    function AlternatesConverter() {
        _class_call_check(this, AlternatesConverter);
        return _call_super(this, AlternatesConverter, arguments);
    }
    _create_class(AlternatesConverter, [
        {
            key: "callback",
            value: function callback(characters) {
                characters.pop();
                characters.shift();
                var alternates = characters.split(COMMA_CHARACTER), alternation = alternates.join(BAR_CHARACTER), result = "(".concat(alternation, ")");
                return result;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _converter.default.fromNothing(AlternatesConverter);
            }
        }
    ]);
    return AlternatesConverter;
}(_converter.default);
_define_property(AlternatesConverter, "regex", /^{[^}]+}/);
var alternatesConverter = AlternatesConverter.fromNothing();
var _default = alternatesConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvYWx0ZXJuYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiwgQ09NTUFfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5jbGFzcyBBbHRlcm5hdGVzQ29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNoYXJhY3RlcnMucG9wKCk7XG5cbiAgICBjaGFyYWN0ZXJzLnNoaWZ0KCk7XG5cbiAgICBjb25zdCBhbHRlcm5hdGVzID0gY2hhcmFjdGVycy5zcGxpdChDT01NQV9DSEFSQUNURVIpLFxuICAgICAgICAgIGFsdGVybmF0aW9uID0gYWx0ZXJuYXRlcy5qb2luKEJBUl9DSEFSQUNURVIpLFxuICAgICAgICAgIHJlc3VsdCA9IGAoJHthbHRlcm5hdGlvbn0pYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXntbXn1dK30vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhBbHRlcm5hdGVzQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCBhbHRlcm5hdGVzQ29udmVydGVyID0gQWx0ZXJuYXRlc0NvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBhbHRlcm5hdGVzQ29udmVydGVyO1xuIl0sIm5hbWVzIjpbIkJBUl9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiQ09NTUFfQ0hBUkFDVEVSIiwiQWx0ZXJuYXRlc0NvbnZlcnRlciIsImNhbGxiYWNrIiwicG9wIiwic2hpZnQiLCJhbHRlcm5hdGVzIiwic3BsaXQiLCJhbHRlcm5hdGlvbiIsImpvaW4iLCJyZXN1bHQiLCJmcm9tTm90aGluZyIsIkNvbnZlcnRlciIsInJlZ2V4IiwiYWx0ZXJuYXRlc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEJBOzs7ZUFBQTs7O3lCQTFCMkI7Z0VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQVFBLGdCQUFtQ0MscUJBQVUsQ0FBN0NELGVBQWVFLGtCQUFvQkQscUJBQVUsQ0FBOUJDO0FBRXZCLElBQUEsQUFBTUMsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNILFVBQVU7Z0JBQ2pCQSxXQUFXSSxHQUFHO2dCQUVkSixXQUFXSyxLQUFLO2dCQUVoQixJQUFNQyxhQUFhTixXQUFXTyxLQUFLLENBQUNOLGtCQUM5Qk8sY0FBY0YsV0FBV0csSUFBSSxDQUFDVixnQkFDOUJXLFNBQVMsQUFBQyxJQUFlLE9BQVpGLGFBQVk7Z0JBRS9CLE9BQU9FO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGtCQUFTLENBQUNELFdBQVcsQ0FmL0NUO1lBZXNFOzs7V0FmdEVBO0VBQTRCVSxrQkFBUztBQWF6QyxpQkFiSVYscUJBYUdXLFNBQVE7QUFLakIsSUFBTUMsc0JBQXNCWixvQkFBb0JTLFdBQVc7SUFFM0QsV0FBZUcifQ==