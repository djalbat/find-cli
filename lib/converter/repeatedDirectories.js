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
class RepeatedDirectoriesConverter extends _converter.default {
    callback(characters) {
        const result = `(?:[^/]*\\/)*`;
        return result;
    }
    static regex = /^\*\*\//;
    static fromNothing() {
        return _converter.default.fromNothing(RepeatedDirectoriesConverter);
    }
}
const repeatedDirectoriesConverter = RepeatedDirectoriesConverter.fromNothing();
const _default = repeatedDirectoriesConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvcmVwZWF0ZWREaXJlY3Rvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNsYXNzIFJlcGVhdGVkRGlyZWN0b3JpZXNDb252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xuICBjYWxsYmFjayhjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYCg/OlteL10qXFxcXC8pKmA7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHJlZ2V4ID0gL15cXCpcXCpcXC8vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhSZXBlYXRlZERpcmVjdG9yaWVzQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCByZXBlYXRlZERpcmVjdG9yaWVzQ29udmVydGVyID0gUmVwZWF0ZWREaXJlY3Rvcmllc0NvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCByZXBlYXRlZERpcmVjdG9yaWVzQ29udmVydGVyO1xuIl0sIm5hbWVzIjpbIlJlcGVhdGVkRGlyZWN0b3JpZXNDb252ZXJ0ZXIiLCJDb252ZXJ0ZXIiLCJjYWxsYmFjayIsImNoYXJhY3RlcnMiLCJyZXN1bHQiLCJyZWdleCIsImZyb21Ob3RoaW5nIiwicmVwZWF0ZWREaXJlY3Rvcmllc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O2tFQWhCc0I7Ozs7OztBQUV0QixNQUFNQSxxQ0FBcUNDLGtCQUFTO0lBQ2xEQyxTQUFTQyxVQUFVLEVBQUU7UUFDbkIsTUFBTUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUU5QixPQUFPQTtJQUNUO0lBRUEsT0FBT0MsUUFBUSxVQUFVO0lBRXpCLE9BQU9DLGNBQWM7UUFBRSxPQUFPTCxrQkFBUyxDQUFDSyxXQUFXLENBQUNOO0lBQStCO0FBQ3JGO0FBRUEsTUFBTU8sK0JBQStCUCw2QkFBNkJNLFdBQVc7TUFFN0UsV0FBZUMifQ==