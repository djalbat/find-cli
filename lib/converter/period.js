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
class PeriodConverter extends _converter.default {
    callback(characters) {
        const result = `\\.`;
        return result;
    }
    static regex = /^\./;
    static fromNothing() {
        return _converter.default.fromNothing(PeriodConverter);
    }
}
const periodConverter = PeriodConverter.fromNothing();
const _default = periodConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvcGVyaW9kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuLi9jb252ZXJ0ZXJcIjtcblxuY2xhc3MgUGVyaW9kQ29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGBcXFxcLmA7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHJlZ2V4ID0gL15cXC4vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhQZXJpb2RDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IHBlcmlvZENvbnZlcnRlciA9IFBlcmlvZENvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBwZXJpb2RDb252ZXJ0ZXI7XG4iXSwibmFtZXMiOlsiUGVyaW9kQ29udmVydGVyIiwiQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwicmVnZXgiLCJmcm9tTm90aGluZyIsInBlcmlvZENvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O2tFQWhCc0I7Ozs7OztBQUV0QixNQUFNQSx3QkFBd0JDLGtCQUFTO0lBQ3JDQyxTQUFTQyxVQUFVLEVBQUU7UUFDbkIsTUFBTUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUVwQixPQUFPQTtJQUNUO0lBRUEsT0FBT0MsUUFBUSxNQUFNO0lBRXJCLE9BQU9DLGNBQWM7UUFBRSxPQUFPTCxrQkFBUyxDQUFDSyxXQUFXLENBQUNOO0lBQWtCO0FBQ3hFO0FBRUEsTUFBTU8sa0JBQWtCUCxnQkFBZ0JNLFdBQVc7TUFFbkQsV0FBZUMifQ==