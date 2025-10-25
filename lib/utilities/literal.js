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
    get isStringGlobLiteral () {
        return isStringGlobLiteral;
    },
    get isStringRegexLiteral () {
        return isStringRegexLiteral;
    },
    get isStringStringLiteral () {
        return isStringStringLiteral;
    }
});
function isStringGlobLiteral(string) {
    var stringStringLiteral = isStringStringLiteral(string), stringRegexLiteral = isStringRegexLiteral(string), stringGlobLiteral = !stringStringLiteral && !stringRegexLiteral;
    return stringGlobLiteral;
}
function isStringRegexLiteral(string) {
    return /^\/.*?\/$/.test(string);
}
function isStringStringLiteral(string) {
    return /^".*?"$/.test(string);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGl0ZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nR2xvYkxpdGVyYWwoc3RyaW5nKSB7XG4gIGNvbnN0IHN0cmluZ1N0cmluZ0xpdGVyYWwgPSBpc1N0cmluZ1N0cmluZ0xpdGVyYWwoc3RyaW5nKSxcbiAgICAgICAgc3RyaW5nUmVnZXhMaXRlcmFsID0gaXNTdHJpbmdSZWdleExpdGVyYWwoc3RyaW5nKSxcbiAgICAgICAgc3RyaW5nR2xvYkxpdGVyYWwgPSAoIXN0cmluZ1N0cmluZ0xpdGVyYWwgJiYgIXN0cmluZ1JlZ2V4TGl0ZXJhbCk7XG5cbiAgcmV0dXJuIHN0cmluZ0dsb2JMaXRlcmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdSZWdleExpdGVyYWwoc3RyaW5nKSB7IHJldHVybiAvXlxcLy4qP1xcLyQvLnRlc3Qoc3RyaW5nKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdTdHJpbmdMaXRlcmFsKHN0cmluZykgeyByZXR1cm4gL15cIi4qP1wiJC8udGVzdChzdHJpbmcpOyB9XG4iXSwibmFtZXMiOlsiaXNTdHJpbmdHbG9iTGl0ZXJhbCIsImlzU3RyaW5nUmVnZXhMaXRlcmFsIiwiaXNTdHJpbmdTdHJpbmdMaXRlcmFsIiwic3RyaW5nIiwic3RyaW5nU3RyaW5nTGl0ZXJhbCIsInN0cmluZ1JlZ2V4TGl0ZXJhbCIsInN0cmluZ0dsb2JMaXRlcmFsIiwidGVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBRWdCQTtlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOzs7QUFWVCxTQUFTRixvQkFBb0JHLE1BQU07SUFDeEMsSUFBTUMsc0JBQXNCRixzQkFBc0JDLFNBQzVDRSxxQkFBcUJKLHFCQUFxQkUsU0FDMUNHLG9CQUFxQixDQUFDRix1QkFBdUIsQ0FBQ0M7SUFFcEQsT0FBT0M7QUFDVDtBQUVPLFNBQVNMLHFCQUFxQkUsTUFBTTtJQUFJLE9BQU8sWUFBWUksSUFBSSxDQUFDSjtBQUFTO0FBRXpFLFNBQVNELHNCQUFzQkMsTUFBTTtJQUFJLE9BQU8sVUFBVUksSUFBSSxDQUFDSjtBQUFTIn0=