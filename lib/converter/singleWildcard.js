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
class SingleWildcardConverter extends _converter.default {
    callback(characters) {
        const result = `.+?`;
        return result;
    }
    static regex = /^\*/;
    static fromNothing() {
        return _converter.default.fromNothing(SingleWildcardConverter);
    }
}
const singleWildcardConverter = SingleWildcardConverter.fromNothing();
const _default = singleWildcardConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvc2luZ2xlV2lsZGNhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb252ZXJ0ZXIgZnJvbSBcIi4uL2NvbnZlcnRlclwiO1xuXG5jbGFzcyBTaW5nbGVXaWxkY2FyZENvbnZlcnRlciBleHRlbmRzIENvbnZlcnRlciB7XG4gIGNhbGxiYWNrKGNoYXJhY3RlcnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBgLis/YDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcKi87XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29udmVydGVyLmZyb21Ob3RoaW5nKFNpbmdsZVdpbGRjYXJkQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCBzaW5nbGVXaWxkY2FyZENvbnZlcnRlciA9IFNpbmdsZVdpbGRjYXJkQ29udmVydGVyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZVdpbGRjYXJkQ29udmVydGVyO1xuIl0sIm5hbWVzIjpbIlNpbmdsZVdpbGRjYXJkQ29udmVydGVyIiwiQ29udmVydGVyIiwiY2FsbGJhY2siLCJjaGFyYWN0ZXJzIiwicmVzdWx0IiwicmVnZXgiLCJmcm9tTm90aGluZyIsInNpbmdsZVdpbGRjYXJkQ29udmVydGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7a0VBaEJzQjs7Ozs7O0FBRXRCLE1BQU1BLGdDQUFnQ0Msa0JBQVM7SUFDN0NDLFNBQVNDLFVBQVUsRUFBRTtRQUNuQixNQUFNQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBRXBCLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPQyxRQUFRLE1BQU07SUFFckIsT0FBT0MsY0FBYztRQUFFLE9BQU9MLGtCQUFTLENBQUNLLFdBQVcsQ0FBQ047SUFBMEI7QUFDaEY7QUFFQSxNQUFNTywwQkFBMEJQLHdCQUF3Qk0sV0FBVztNQUVuRSxXQUFlQyJ9