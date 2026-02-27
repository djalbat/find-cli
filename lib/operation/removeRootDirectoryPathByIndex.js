"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return removeRootDirectoryPathByIndexOperation;
    },
    get removeRootDirectoryPathByIndex () {
        return removeRootDirectoryPathByIndex;
    }
});
const _configuration = require("../configuration");
function removeRootDirectoryPathByIndexOperation(proceed, abort, context) {
    const { index } = context;
    if (index === null) {
        proceed();
        return;
    }
    removeRootDirectoryPathByIndex(index);
    proceed();
}
function removeRootDirectoryPathByIndex(index) {
    const start = index, deleteCount = 1, rootDirectoryPaths = (0, _configuration.retrieveRootDirectoryPaths)();
    rootDirectoryPaths.splice(start, deleteCount);
    (0, _configuration.updateRootDirectoryPaths)(rootDirectoryPaths);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhCeUluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByZXRyaWV2ZVJvb3REaXJlY3RvcnlQYXRocywgdXBkYXRlUm9vdERpcmVjdG9yeVBhdGhzIH0gZnJvbSBcIi4uL2NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhCeUluZGV4T3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXggfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcHJvY2VlZCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlUm9vdERpcmVjdG9yeVBhdGhCeUluZGV4KGluZGV4KTtcblxuICBwcm9jZWVkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb290RGlyZWN0b3J5UGF0aEJ5SW5kZXgoaW5kZXgpIHtcbiAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgIHJvb3REaXJlY3RvcnlQYXRocyA9IHJldHJpZXZlUm9vdERpcmVjdG9yeVBhdGhzKClcblxuICByb290RGlyZWN0b3J5UGF0aHMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgdXBkYXRlUm9vdERpcmVjdG9yeVBhdGhzKHJvb3REaXJlY3RvcnlQYXRocyk7XG5cbn1cbiJdLCJuYW1lcyI6WyJyZW1vdmVSb290RGlyZWN0b3J5UGF0aEJ5SW5kZXhPcGVyYXRpb24iLCJyZW1vdmVSb290RGlyZWN0b3J5UGF0aEJ5SW5kZXgiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwiaW5kZXgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwicm9vdERpcmVjdG9yeVBhdGhzIiwicmV0cmlldmVSb290RGlyZWN0b3J5UGF0aHMiLCJzcGxpY2UiLCJ1cGRhdGVSb290RGlyZWN0b3J5UGF0aHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUlBO2VBQXdCQTs7UUFjUkM7ZUFBQUE7OzsrQkFoQnFEO0FBRXRELFNBQVNELHdDQUF3Q0UsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDckYsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Q7SUFFbEIsSUFBSUMsVUFBVSxNQUFNO1FBQ2xCSDtRQUVBO0lBQ0Y7SUFFQUQsK0JBQStCSTtJQUUvQkg7QUFDRjtBQUVPLFNBQVNELCtCQUErQkksS0FBSztJQUNsRCxNQUFNQyxRQUFRRCxPQUNSRSxjQUFjLEdBQ2RDLHFCQUFxQkMsSUFBQUEseUNBQTBCO0lBRXJERCxtQkFBbUJFLE1BQU0sQ0FBQ0osT0FBT0M7SUFFakNJLElBQUFBLHVDQUF3QixFQUFDSDtBQUUzQiJ9