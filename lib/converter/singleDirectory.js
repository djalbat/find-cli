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
class SingleDirectoryConverter extends _converter.default {
    callback(characters) {
        const result = `[^/]*\\/`;
        return result;
    }
    static regex = /^\*\//;
    static fromNothing() {
        return _converter.default.fromNothing(SingleDirectoryConverter);
    }
}
const singleDirectoryConverter = SingleDirectoryConverter.fromNothing();
const _default = singleDirectoryConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvc2luZ2xlRGlyZWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuLi9jb252ZXJ0ZXJcIjtcblxuY2xhc3MgU2luZ2xlRGlyZWN0b3J5Q29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGBbXi9dKlxcXFwvYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcKlxcLy87XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29udmVydGVyLmZyb21Ob3RoaW5nKFNpbmdsZURpcmVjdG9yeUNvbnZlcnRlcik7IH1cbn1cblxuY29uc3Qgc2luZ2xlRGlyZWN0b3J5Q29udmVydGVyID0gU2luZ2xlRGlyZWN0b3J5Q29udmVydGVyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZURpcmVjdG9yeUNvbnZlcnRlcjtcbiJdLCJuYW1lcyI6WyJTaW5nbGVEaXJlY3RvcnlDb252ZXJ0ZXIiLCJDb252ZXJ0ZXIiLCJjYWxsYmFjayIsImNoYXJhY3RlcnMiLCJyZXN1bHQiLCJyZWdleCIsImZyb21Ob3RoaW5nIiwic2luZ2xlRGlyZWN0b3J5Q29udmVydGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7a0VBaEJzQjs7Ozs7O0FBRXRCLE1BQU1BLGlDQUFpQ0Msa0JBQVM7SUFDOUNDLFNBQVNDLFVBQVUsRUFBRTtRQUNuQixNQUFNQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBRXpCLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPQyxRQUFRLFFBQVE7SUFFdkIsT0FBT0MsY0FBYztRQUFFLE9BQU9MLGtCQUFTLENBQUNLLFdBQVcsQ0FBQ047SUFBMkI7QUFDakY7QUFFQSxNQUFNTywyQkFBMkJQLHlCQUF5Qk0sV0FBVztNQUVyRSxXQUFlQyJ9