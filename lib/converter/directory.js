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
class DirectoryConverter extends _converter.default {
    callback(characters) {
        const result = `\\/`;
        return result;
    }
    static regex = /^\//;
    static fromNothing() {
        return _converter.default.fromNothing(DirectoryConverter);
    }
}
const directoryConverter = DirectoryConverter.fromNothing();
const _default = directoryConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvZGlyZWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuLi9jb252ZXJ0ZXJcIjtcblxuY2xhc3MgRGlyZWN0b3J5Q29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGBcXFxcL2A7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHJlZ2V4ID0gL15cXC8vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhEaXJlY3RvcnlDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IGRpcmVjdG9yeUNvbnZlcnRlciA9IERpcmVjdG9yeUNvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXJlY3RvcnlDb252ZXJ0ZXI7XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5Q29udmVydGVyIiwiQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwicmVnZXgiLCJmcm9tTm90aGluZyIsImRpcmVjdG9yeUNvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O2tFQWhCc0I7Ozs7OztBQUV0QixNQUFNQSwyQkFBMkJDLGtCQUFTO0lBQ3hDQyxTQUFTQyxVQUFVLEVBQUU7UUFDbkIsTUFBTUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUVwQixPQUFPQTtJQUNUO0lBRUEsT0FBT0MsUUFBUSxNQUFNO0lBRXJCLE9BQU9DLGNBQWM7UUFBRSxPQUFPTCxrQkFBUyxDQUFDSyxXQUFXLENBQUNOO0lBQXFCO0FBQzNFO0FBRUEsTUFBTU8scUJBQXFCUCxtQkFBbUJNLFdBQVc7TUFFekQsV0FBZUMifQ==