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
const { BAR_CHARACTER, COMMA_CHARACTER } = _necessary.characters;
class AlternatesConverter extends _converter.default {
    callback(characters) {
        characters.pop();
        characters.shift();
        const alternates = characters.split(COMMA_CHARACTER), alternation = alternates.join(BAR_CHARACTER), result = `(${alternation})`;
        return result;
    }
    static regex = /^{[^}]+}/;
    static fromNothing() {
        return _converter.default.fromNothing(AlternatesConverter);
    }
}
const alternatesConverter = AlternatesConverter.fromNothing();
const _default = alternatesConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvYWx0ZXJuYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi4vY29udmVydGVyXCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiwgQ09NTUFfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5jbGFzcyBBbHRlcm5hdGVzQ29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcbiAgY2FsbGJhY2soY2hhcmFjdGVycykge1xuICAgIGNoYXJhY3RlcnMucG9wKCk7XG5cbiAgICBjaGFyYWN0ZXJzLnNoaWZ0KCk7XG5cbiAgICBjb25zdCBhbHRlcm5hdGVzID0gY2hhcmFjdGVycy5zcGxpdChDT01NQV9DSEFSQUNURVIpLFxuICAgICAgICAgIGFsdGVybmF0aW9uID0gYWx0ZXJuYXRlcy5qb2luKEJBUl9DSEFSQUNURVIpLFxuICAgICAgICAgIHJlc3VsdCA9IGAoJHthbHRlcm5hdGlvbn0pYDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgcmVnZXggPSAvXntbXn1dK30vO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbnZlcnRlci5mcm9tTm90aGluZyhBbHRlcm5hdGVzQ29udmVydGVyKTsgfVxufVxuXG5jb25zdCBhbHRlcm5hdGVzQ29udmVydGVyID0gQWx0ZXJuYXRlc0NvbnZlcnRlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBhbHRlcm5hdGVzQ29udmVydGVyO1xuIl0sIm5hbWVzIjpbIkJBUl9DSEFSQUNURVIiLCJDT01NQV9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiQWx0ZXJuYXRlc0NvbnZlcnRlciIsIkNvbnZlcnRlciIsImNhbGxiYWNrIiwicG9wIiwic2hpZnQiLCJhbHRlcm5hdGVzIiwic3BsaXQiLCJhbHRlcm5hdGlvbiIsImpvaW4iLCJyZXN1bHQiLCJyZWdleCIsImZyb21Ob3RoaW5nIiwiYWx0ZXJuYXRlc0NvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEJBOzs7ZUFBQTs7OzJCQTFCMkI7a0VBRUw7Ozs7OztBQUV0QixNQUFNLEVBQUVBLGFBQWEsRUFBRUMsZUFBZSxFQUFFLEdBQUdDLHFCQUFVO0FBRXJELE1BQU1DLDRCQUE0QkMsa0JBQVM7SUFDekNDLFNBQVNILFVBQVUsRUFBRTtRQUNuQkEsV0FBV0ksR0FBRztRQUVkSixXQUFXSyxLQUFLO1FBRWhCLE1BQU1DLGFBQWFOLFdBQVdPLEtBQUssQ0FBQ1Isa0JBQzlCUyxjQUFjRixXQUFXRyxJQUFJLENBQUNYLGdCQUM5QlksU0FBUyxDQUFDLENBQUMsRUFBRUYsWUFBWSxDQUFDLENBQUM7UUFFakMsT0FBT0U7SUFDVDtJQUVBLE9BQU9DLFFBQVEsV0FBVztJQUUxQixPQUFPQyxjQUFjO1FBQUUsT0FBT1Ysa0JBQVMsQ0FBQ1UsV0FBVyxDQUFDWDtJQUFzQjtBQUM1RTtBQUVBLE1BQU1ZLHNCQUFzQlosb0JBQW9CVyxXQUFXO01BRTNELFdBQWVDIn0=