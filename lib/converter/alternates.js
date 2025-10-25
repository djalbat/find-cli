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
var BAR_CHARACTER = characters.BAR_CHARACTER, COMMA_CHARACTER = characters.COMMA_CHARACTER;
var AlternatesConverter = /*#__PURE__*/ function(Converter1) {
    _inherits(AlternatesConverter, Converter1);
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
                return Converter.fromNothing(AlternatesConverter);
            }
        }
    ]);
    return AlternatesConverter;
}(Converter);
_define_property(AlternatesConverter, "regex", /^{[^}]+}/);
var alternatesConverter = AlternatesConverter.fromNothing();
export default alternatesConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvYWx0ZXJuYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiwgQ09NTUFfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5jbGFzcyBBbHRlcm5hdGVzQ29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNoYXJhY3RlcnMucG9wKCk7XG5cbiAgICBjaGFyYWN0ZXJzLnNoaWZ0KCk7XG5cbiAgICBjb25zdCBhbHRlcm5hdGVzID0gY2hhcmFjdGVycy5zcGxpdChDT01NQV9DSEFSQUNURVIpLFxuICAgICAgICAgIGFsdGVybmF0aW9uID0gYWx0ZXJuYXRlcy5qb2luKEJBUl9DSEFSQUNURVIpLFxuICAgICAgICAgIHJlc3VsdCA9IGAoJHthbHRlcm5hdGlvbn0pYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXntbXn1dK30vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhBbHRlcm5hdGVzQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCBhbHRlcm5hdGVzQ29udmVydGVyID0gQWx0ZXJuYXRlc0NvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBhbHRlcm5hdGVzQ29udmVydGVyO1xuIl0sIm5hbWVzIjpbImNoYXJhY3RlcnMiLCJDb252ZXJ0ZXIiLCJCQVJfQ0hBUkFDVEVSIiwiQ09NTUFfQ0hBUkFDVEVSIiwiQWx0ZXJuYXRlc0NvbnZlcnRlciIsImNhbGxiYWNrIiwicG9wIiwic2hpZnQiLCJhbHRlcm5hdGVzIiwic3BsaXQiLCJhbHRlcm5hdGlvbiIsImpvaW4iLCJyZXN1bHQiLCJmcm9tTm90aGluZyIsInJlZ2V4IiwiYWx0ZXJuYXRlc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFVBQVUsUUFBUSxZQUFZO0FBRXZDLE9BQU9DLGVBQWUsZUFBZTtBQUVyQyxJQUFRQyxnQkFBbUNGLFdBQW5DRSxlQUFlQyxrQkFBb0JILFdBQXBCRztBQUV2QixJQUFBLEFBQU1DLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTTCxVQUFVO2dCQUNqQkEsV0FBV00sR0FBRztnQkFFZE4sV0FBV08sS0FBSztnQkFFaEIsSUFBTUMsYUFBYVIsV0FBV1MsS0FBSyxDQUFDTixrQkFDOUJPLGNBQWNGLFdBQVdHLElBQUksQ0FBQ1QsZ0JBQzlCVSxTQUFTLEFBQUMsSUFBZSxPQUFaRixhQUFZO2dCQUUvQixPQUFPRTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPWixVQUFVWSxXQUFXLENBZi9DVDtZQWVzRTs7O1dBZnRFQTtFQUE0Qkg7QUFhaEMsaUJBYklHLHFCQWFHVSxTQUFRO0FBS2pCLElBQU1DLHNCQUFzQlgsb0JBQW9CUyxXQUFXO0FBRTNELGVBQWVFLG9CQUFvQiJ9