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
class EscapedCharacterConverter extends _converter.default {
    callback(characters) {
        const result = characters; ///
        return result;
    }
    static regex = /^\\./;
    static fromNothing() {
        return _converter.default.fromNothing(EscapedCharacterConverter);
    }
}
const questionMarkCharacterConverter = EscapedCharacterConverter.fromNothing();
const _default = questionMarkCharacterConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvZXNjYXBlZENoYXJhY3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNsYXNzIEVzY2FwZWRDaGFyYWN0ZXJDb252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xuICBjYWxsYmFjayhjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2hhcmFjdGVyczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyByZWdleCA9IC9eXFxcXC4vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhFc2NhcGVkQ2hhcmFjdGVyQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCBxdWVzdGlvbk1hcmtDaGFyYWN0ZXJDb252ZXJ0ZXIgPSBFc2NhcGVkQ2hhcmFjdGVyQ29udmVydGVyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXN0aW9uTWFya0NoYXJhY3RlckNvbnZlcnRlcjtcbiJdLCJuYW1lcyI6WyJFc2NhcGVkQ2hhcmFjdGVyQ29udmVydGVyIiwiQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwicmVnZXgiLCJmcm9tTm90aGluZyIsInF1ZXN0aW9uTWFya0NoYXJhY3RlckNvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O2tFQWhCc0I7Ozs7OztBQUV0QixNQUFNQSxrQ0FBa0NDLGtCQUFTO0lBQy9DQyxTQUFTQyxVQUFVLEVBQUU7UUFDbkIsTUFBTUMsU0FBU0QsWUFBYSxHQUFHO1FBRS9CLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPQyxRQUFRLE9BQU87SUFFdEIsT0FBT0MsY0FBYztRQUFFLE9BQU9MLGtCQUFTLENBQUNLLFdBQVcsQ0FBQ047SUFBNEI7QUFDbEY7QUFFQSxNQUFNTyxpQ0FBaUNQLDBCQUEwQk0sV0FBVztNQUU1RSxXQUFlQyJ9