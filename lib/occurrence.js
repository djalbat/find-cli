"use strict";
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
import { ZERO } from "./constants";
var Occurrence = /*#__PURE__*/ function() {
    function Occurrence(start, end) {
        _class_call_check(this, Occurrence);
        this.start = start;
        this.end = end;
    }
    _create_class(Occurrence, [
        {
            key: "getStart",
            value: function getStart() {
                return this.start;
            }
        },
        {
            key: "getEnd",
            value: function getEnd() {
                return this.end;
            }
        }
    ], [
        {
            key: "fromResultAndOffset",
            value: function fromResultAndOffset(result, offset) {
                var index = result.index, match = result[ZERO], length = match.length, start = index + offset, end = start + length, occurrence = new Occurrence(start, end);
                return occurrence;
            }
        },
        {
            key: "fromIndexLengthAndOffset",
            value: function fromIndexLengthAndOffset(index, length, offset) {
                var start = index + offset, end = start + length, occurrence = new Occurrence(start, end);
                return occurrence;
            }
        }
    ]);
    return Occurrence;
}();
export { Occurrence as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vY2N1cnJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBaRVJPIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9jY3VycmVuY2Uge1xuICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kKSB7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kO1xuICB9XG5cbiAgZ2V0U3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQ7XG4gIH1cblxuICBnZXRFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXN1bHRBbmRPZmZzZXQocmVzdWx0LCBvZmZzZXQpIHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSByZXN1bHQsXG4gICAgICAgICAgbWF0Y2ggPSByZXN1bHRbWkVST10sXG4gICAgICAgICAgbGVuZ3RoID0gbWF0Y2gubGVuZ3RoLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBsZW5ndGgsXG4gICAgICAgICAgb2NjdXJyZW5jZSA9IG5ldyBPY2N1cnJlbmNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIG9jY3VycmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4TGVuZ3RoQW5kT2Zmc2V0KGluZGV4LCBsZW5ndGgsIG9mZnNldCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBsZW5ndGgsXG4gICAgICAgICAgb2NjdXJyZW5jZSA9IG5ldyBPY2N1cnJlbmNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIG9jY3VycmVuY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJaRVJPIiwiT2NjdXJyZW5jZSIsInN0YXJ0IiwiZW5kIiwiZ2V0U3RhcnQiLCJnZXRFbmQiLCJmcm9tUmVzdWx0QW5kT2Zmc2V0IiwicmVzdWx0Iiwib2Zmc2V0IiwiaW5kZXgiLCJtYXRjaCIsImxlbmd0aCIsIm9jY3VycmVuY2UiLCJmcm9tSW5kZXhMZW5ndGhBbmRPZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLElBQUksUUFBUSxjQUFjO0FBRXBCLElBQUEsQUFBTUMsMkJBQU47YUFBTUEsV0FDUEMsS0FBSyxFQUFFQyxHQUFHO2dDQURIRjtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEdBQUcsR0FBR0E7O2tCQUhNRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsR0FBRztZQUNqQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLE1BQU0sRUFBRUMsTUFBTTtnQkFDdkMsSUFBTSxBQUFFQyxRQUFVRixPQUFWRSxPQUNGQyxRQUFRSCxNQUFNLENBQUNQLEtBQUssRUFDcEJXLFNBQVNELE1BQU1DLE1BQU0sRUFDckJULFFBQVFPLFFBQVFELFFBQ2hCTCxNQUFNRCxRQUFRUyxRQUNkQyxhQUFhLElBcEJGWCxXQW9CaUJDLE9BQU9DO2dCQUV6QyxPQUFPUztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCSixLQUFLLEVBQUVFLE1BQU0sRUFBRUgsTUFBTTtnQkFDbkQsSUFBTU4sUUFBUU8sUUFBUUQsUUFDaEJMLE1BQU1ELFFBQVFTLFFBQ2RDLGFBQWEsSUE1QkZYLFdBNEJpQkMsT0FBT0M7Z0JBRXpDLE9BQU9TO1lBQ1Q7OztXQS9CbUJYOztBQUFyQixTQUFxQkEsd0JBZ0NwQiJ9