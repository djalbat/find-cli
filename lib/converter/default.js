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
const _converter = /*#__PURE__*/ _interop_require_default(require("../converter"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DefaultConverter extends _converter.default {
    callback(characters) {
        const result = characters; ///
        return result;
    }
    static regex = /./;
    static fromNothing() {
        return _converter.default.fromNothing(DefaultConverter);
    }
}
const defaultConverter = DefaultConverter.fromNothing();
const _default = defaultConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNsYXNzIERlZmF1bHRDb252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xuICBjYWxsYmFjayhjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2hhcmFjdGVyczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyByZWdleCA9IC8uLztcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoRGVmYXVsdENvbnZlcnRlcik7IH1cbn1cblxuY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IERlZmF1bHRDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdENvbnZlcnRlcjtcbiJdLCJuYW1lcyI6WyJEZWZhdWx0Q29udmVydGVyIiwiQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwicmVnZXgiLCJmcm9tTm90aGluZyIsImRlZmF1bHRDb252ZXJ0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQUE7OztrRUFoQnNCOzs7Ozs7QUFFdEIsTUFBTUEseUJBQXlCQyxrQkFBUztJQUN0Q0MsU0FBU0MsVUFBVSxFQUFFO1FBQ25CLE1BQU1DLFNBQVNELFlBQWEsR0FBRztRQUUvQixPQUFPQztJQUNUO0lBRUEsT0FBT0MsUUFBUSxJQUFJO0lBRW5CLE9BQU9DLGNBQWM7UUFBRSxPQUFPTCxrQkFBUyxDQUFDSyxXQUFXLENBQUNOO0lBQW1CO0FBQ3pFO0FBRUEsTUFBTU8sbUJBQW1CUCxpQkFBaUJNLFdBQVc7TUFFckQsV0FBZUMifQ==