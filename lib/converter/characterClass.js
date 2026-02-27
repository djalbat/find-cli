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
const _necessary = require("necessary");
const _converter = /*#__PURE__*/ _interop_require_default(require("../converter"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { HAT_CHARACTER, EXCLAMATION_MARK_CHARACTER } = _necessary.characters;
class CharacterClassConverter extends _converter.default {
    callback(characters) {
        characters.pop();
        characters.shift();
        let negated = true;
        const firstCharacter = characters.shift() || null;
        if (firstCharacter !== null) {
            if (firstCharacter === HAT_CHARACTER || firstCharacter === EXCLAMATION_MARK_CHARACTER) {
                negated = true;
            } else {
                characters.unshift(firstCharacter);
            }
        }
        let characterClass = `${characters}`;
        if (negated) {
            characterClass = `^${characterClass}`;
        }
        const result = `[${characterClass}]`;
        return result;
    }
    static regex = /^\[[^\]]+]/;
    static fromNothing() {
        return _converter.default.fromNothing(CharacterClassConverter);
    }
}
const characterClassConverter = CharacterClassConverter.fromNothing();
const _default = characterClassConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvY2hhcmFjdGVyQ2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb252ZXJ0ZXIgZnJvbSBcIi4uL2NvbnZlcnRlclwiO1xuXG5jb25zdCB7IEhBVF9DSEFSQUNURVIsIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5jbGFzcyBDaGFyYWN0ZXJDbGFzc0NvbnZlcnRlciBleHRlbmRzIENvbnZlcnRlciB7XG4gIGNhbGxiYWNrKGNoYXJhY3RlcnMpIHtcbiAgICBjaGFyYWN0ZXJzLnBvcCgpO1xuXG4gICAgY2hhcmFjdGVycy5zaGlmdCgpO1xuXG4gICAgbGV0IG5lZ2F0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzLnNoaWZ0KCkgfHwgbnVsbDtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciAhPT0gbnVsbCkge1xuICAgICAgaWYgKChmaXJzdENoYXJhY3RlciA9PT0gSEFUX0NIQVJBQ1RFUikgfHwgKGZpcnN0Q2hhcmFjdGVyID09PSBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUikpIHtcbiAgICAgICAgbmVnYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyYWN0ZXJzLnVuc2hpZnQoZmlyc3RDaGFyYWN0ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjaGFyYWN0ZXJDbGFzcyA9IGAke2NoYXJhY3RlcnN9YDtcblxuICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICBjaGFyYWN0ZXJDbGFzcyA9IGBeJHtjaGFyYWN0ZXJDbGFzc31gO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGBbJHtjaGFyYWN0ZXJDbGFzc31dYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXlxcW1teXFxdXStdLztcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoQ2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXIpOyB9XG59XG5cbmNvbnN0IGNoYXJhY3RlckNsYXNzQ29udmVydGVyID0gQ2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyQ2xhc3NDb252ZXJ0ZXI7XG4iXSwibmFtZXMiOlsiSEFUX0NIQVJBQ1RFUiIsIkVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIkNoYXJhY3RlckNsYXNzQ29udmVydGVyIiwiQ29udmVydGVyIiwiY2FsbGJhY2siLCJwb3AiLCJzaGlmdCIsIm5lZ2F0ZWQiLCJmaXJzdENoYXJhY3RlciIsInVuc2hpZnQiLCJjaGFyYWN0ZXJDbGFzcyIsInJlc3VsdCIsInJlZ2V4IiwiZnJvbU5vdGhpbmciLCJjaGFyYWN0ZXJDbGFzc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNENBOzs7ZUFBQTs7OzJCQTFDMkI7a0VBRUw7Ozs7OztBQUV0QixNQUFNLEVBQUVBLGFBQWEsRUFBRUMsMEJBQTBCLEVBQUUsR0FBR0MscUJBQVU7QUFFaEUsTUFBTUMsZ0NBQWdDQyxrQkFBUztJQUM3Q0MsU0FBU0gsVUFBVSxFQUFFO1FBQ25CQSxXQUFXSSxHQUFHO1FBRWRKLFdBQVdLLEtBQUs7UUFFaEIsSUFBSUMsVUFBVTtRQUVkLE1BQU1DLGlCQUFpQlAsV0FBV0ssS0FBSyxNQUFNO1FBRTdDLElBQUlFLG1CQUFtQixNQUFNO1lBQzNCLElBQUksQUFBQ0EsbUJBQW1CVCxpQkFBbUJTLG1CQUFtQlIsNEJBQTZCO2dCQUN6Rk8sVUFBVTtZQUNaLE9BQU87Z0JBQ0xOLFdBQVdRLE9BQU8sQ0FBQ0Q7WUFDckI7UUFDRjtRQUVBLElBQUlFLGlCQUFpQixHQUFHVCxZQUFZO1FBRXBDLElBQUlNLFNBQVM7WUFDWEcsaUJBQWlCLENBQUMsQ0FBQyxFQUFFQSxnQkFBZ0I7UUFDdkM7UUFFQSxNQUFNQyxTQUFTLENBQUMsQ0FBQyxFQUFFRCxlQUFlLENBQUMsQ0FBQztRQUVwQyxPQUFPQztJQUNUO0lBRUEsT0FBT0MsUUFBUSxhQUFhO0lBRTVCLE9BQU9DLGNBQWM7UUFBRSxPQUFPVixrQkFBUyxDQUFDVSxXQUFXLENBQUNYO0lBQTBCO0FBQ2hGO0FBRUEsTUFBTVksMEJBQTBCWix3QkFBd0JXLFdBQVc7TUFFbkUsV0FBZUMifQ==