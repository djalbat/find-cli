"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Occurrence;
    }
});
const _constants = require("./constants");
class Occurrence {
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    static fromResultAndOffset(result, offset) {
        const { index } = result, match = result[_constants.ZERO], length = match.length, start = index + offset, end = start + length, occurrence = new Occurrence(start, end);
        return occurrence;
    }
    static fromIndexLengthAndOffset(index, length, offset) {
        const start = index + offset, end = start + length, occurrence = new Occurrence(start, end);
        return occurrence;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vY2N1cnJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBaRVJPIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9jY3VycmVuY2Uge1xuICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kKSB7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kO1xuICB9XG5cbiAgZ2V0U3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQ7XG4gIH1cblxuICBnZXRFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXN1bHRBbmRPZmZzZXQocmVzdWx0LCBvZmZzZXQpIHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSByZXN1bHQsXG4gICAgICAgICAgbWF0Y2ggPSByZXN1bHRbWkVST10sXG4gICAgICAgICAgbGVuZ3RoID0gbWF0Y2gubGVuZ3RoLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBsZW5ndGgsXG4gICAgICAgICAgb2NjdXJyZW5jZSA9IG5ldyBPY2N1cnJlbmNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIG9jY3VycmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4TGVuZ3RoQW5kT2Zmc2V0KGluZGV4LCBsZW5ndGgsIG9mZnNldCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBsZW5ndGgsXG4gICAgICAgICAgb2NjdXJyZW5jZSA9IG5ldyBPY2N1cnJlbmNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIG9jY3VycmVuY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPY2N1cnJlbmNlIiwic3RhcnQiLCJlbmQiLCJnZXRTdGFydCIsImdldEVuZCIsImZyb21SZXN1bHRBbmRPZmZzZXQiLCJyZXN1bHQiLCJvZmZzZXQiLCJpbmRleCIsIm1hdGNoIiwiWkVSTyIsImxlbmd0aCIsIm9jY3VycmVuY2UiLCJmcm9tSW5kZXhMZW5ndGhBbmRPZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7MkJBRkE7QUFFTixNQUFNQTtJQUNuQixZQUFZQyxLQUFLLEVBQUVDLEdBQUcsQ0FBRTtRQUN0QixJQUFJLENBQUNELEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEdBQUcsR0FBR0E7SUFDYjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDRixHQUFHO0lBQ2pCO0lBRUEsT0FBT0csb0JBQW9CQyxNQUFNLEVBQUVDLE1BQU0sRUFBRTtRQUN6QyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRixRQUNaRyxRQUFRSCxNQUFNLENBQUNJLGVBQUksQ0FBQyxFQUNwQkMsU0FBU0YsTUFBTUUsTUFBTSxFQUNyQlYsUUFBUU8sUUFBUUQsUUFDaEJMLE1BQU1ELFFBQVFVLFFBQ2RDLGFBQWEsSUFBSVosV0FBV0MsT0FBT0M7UUFFekMsT0FBT1U7SUFDVDtJQUVBLE9BQU9DLHlCQUF5QkwsS0FBSyxFQUFFRyxNQUFNLEVBQUVKLE1BQU0sRUFBRTtRQUNyRCxNQUFNTixRQUFRTyxRQUFRRCxRQUNoQkwsTUFBTUQsUUFBUVUsUUFDZEMsYUFBYSxJQUFJWixXQUFXQyxPQUFPQztRQUV6QyxPQUFPVTtJQUNUO0FBQ0YifQ==