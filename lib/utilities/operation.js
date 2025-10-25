"use strict";
import { asynchronousUtilities } from "necessary";
var whilst = asynchronousUtilities.whilst;
export function executeOperations(operations, callback, context) {
    var completed = true;
    var operationsLength = operations.length, lastIndex = operationsLength - 1;
    whilst(function(next, done, context, index) {
        if (index > lastIndex) {
            done();
            return;
        }
        var operation = operations[index], proceed = next, abort = function() {
            completed = false;
            done();
        };
        operation(proceed, abort, context);
    }, done, context);
    function done() {
        callback(completed);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb3BlcmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgd2hpbHN0IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCBjYWxsYmFjaywgY29udGV4dCkge1xuICBsZXQgY29tcGxldGVkID0gdHJ1ZTtcblxuICBjb25zdCBvcGVyYXRpb25zTGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG9wZXJhdGlvbnNMZW5ndGggLSAxO1xuXG4gIHdoaWxzdCgobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdLFxuICAgICAgICAgIHByb2NlZWQgPSBuZXh0LCAvLy9cbiAgICAgICAgICBhYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfTtcblxuICAgIG9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCk7XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY2FsbGJhY2soY29tcGxldGVkKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIndoaWxzdCIsImV4ZWN1dGVPcGVyYXRpb25zIiwib3BlcmF0aW9ucyIsImNhbGxiYWNrIiwiY29udGV4dCIsImNvbXBsZXRlZCIsIm9wZXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJuZXh0IiwiZG9uZSIsImluZGV4Iiwib3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLHFCQUFxQixRQUFRLFlBQVk7QUFFbEQsSUFBTSxBQUFFQyxTQUFXRCxzQkFBWEM7QUFFUixPQUFPLFNBQVNDLGtCQUFrQkMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDN0QsSUFBSUMsWUFBWTtJQUVoQixJQUFNQyxtQkFBbUJKLFdBQVdLLE1BQU0sRUFDcENDLFlBQVlGLG1CQUFtQjtJQUVyQ04sT0FBTyxTQUFDUyxNQUFNQyxNQUFNTixTQUFTTztRQUMzQixJQUFJQSxRQUFRSCxXQUFXO1lBQ3JCRTtZQUVBO1FBQ0Y7UUFFQSxJQUFNRSxZQUFZVixVQUFVLENBQUNTLE1BQU0sRUFDN0JFLFVBQVVKLE1BQ1ZLLFFBQVE7WUFDTlQsWUFBWTtZQUVaSztRQUNGO1FBRU5FLFVBQVVDLFNBQVNDLE9BQU9WO0lBQzVCLEdBQUdNLE1BQU1OO0lBRVQsU0FBU007UUFDUFAsU0FBU0U7SUFDWDtBQUNGIn0=