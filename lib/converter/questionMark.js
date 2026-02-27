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
class QuestionMarkConverter extends _converter.default {
    callback(characters) {
        const result = `.`;
        return result;
    }
    static regex = /^\?/;
    static fromNothing() {
        return _converter.default.fromNothing(QuestionMarkConverter);
    }
}
const questionMarkConverter = QuestionMarkConverter.fromNothing();
const _default = questionMarkConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvcXVlc3Rpb25NYXJrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuLi9jb252ZXJ0ZXJcIjtcblxuY2xhc3MgUXVlc3Rpb25NYXJrQ29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGAuYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcPy87XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29udmVydGVyLmZyb21Ob3RoaW5nKFF1ZXN0aW9uTWFya0NvbnZlcnRlcik7IH1cbn1cblxuY29uc3QgcXVlc3Rpb25NYXJrQ29udmVydGVyID0gUXVlc3Rpb25NYXJrQ29udmVydGVyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXN0aW9uTWFya0NvbnZlcnRlcjtcbiJdLCJuYW1lcyI6WyJRdWVzdGlvbk1hcmtDb252ZXJ0ZXIiLCJDb252ZXJ0ZXIiLCJjYWxsYmFjayIsImNoYXJhY3RlcnMiLCJyZXN1bHQiLCJyZWdleCIsImZyb21Ob3RoaW5nIiwicXVlc3Rpb25NYXJrQ29udmVydGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7a0VBaEJzQjs7Ozs7O0FBRXRCLE1BQU1BLDhCQUE4QkMsa0JBQVM7SUFDM0NDLFNBQVNDLFVBQVUsRUFBRTtRQUNuQixNQUFNQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWxCLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPQyxRQUFRLE1BQU07SUFFckIsT0FBT0MsY0FBYztRQUFFLE9BQU9MLGtCQUFTLENBQUNLLFdBQVcsQ0FBQ047SUFBd0I7QUFDOUU7QUFFQSxNQUFNTyx3QkFBd0JQLHNCQUFzQk0sV0FBVztNQUUvRCxXQUFlQyJ9