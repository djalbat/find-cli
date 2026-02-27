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
class RepeatedWildcardConverter extends _converter.default {
    callback(characters) {
        const result = `.*`;
        return result;
    }
    static regex = /^\*\*/;
    static fromNothing() {
        return _converter.default.fromNothing(RepeatedWildcardConverter);
    }
}
const singleDirectoryConverter = RepeatedWildcardConverter.fromNothing();
const _default = singleDirectoryConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvcmVwZWF0ZWRXaWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNsYXNzIFJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xuICBjYWxsYmFjayhjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYC4qYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcKlxcKi87XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29udmVydGVyLmZyb21Ob3RoaW5nKFJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IHNpbmdsZURpcmVjdG9yeUNvbnZlcnRlciA9IFJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xlRGlyZWN0b3J5Q29udmVydGVyO1xuIl0sIm5hbWVzIjpbIlJlcGVhdGVkV2lsZGNhcmRDb252ZXJ0ZXIiLCJDb252ZXJ0ZXIiLCJjYWxsYmFjayIsImNoYXJhY3RlcnMiLCJyZXN1bHQiLCJyZWdleCIsImZyb21Ob3RoaW5nIiwic2luZ2xlRGlyZWN0b3J5Q29udmVydGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7a0VBaEJzQjs7Ozs7O0FBRXRCLE1BQU1BLGtDQUFrQ0Msa0JBQVM7SUFDL0NDLFNBQVNDLFVBQVUsRUFBRTtRQUNuQixNQUFNQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBRW5CLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPQyxRQUFRLFFBQVE7SUFFdkIsT0FBT0MsY0FBYztRQUFFLE9BQU9MLGtCQUFTLENBQUNLLFdBQVcsQ0FBQ047SUFBNEI7QUFDbEY7QUFFQSxNQUFNTywyQkFBMkJQLDBCQUEwQk0sV0FBVztNQUV0RSxXQUFlQyJ9