"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return previousRuleOperation;
    }
});
var _necessary = require("necessary");
var _configuration = require("../configuration");
var filter = _necessary.arrayUtilities.filter;
function previousRuleOperation(proceed, abort, context) {
    var dryRun = context.dryRun;
    if (dryRun) {
        proceed();
        return;
    }
    var rule = context.rule;
    var previousRules = (0, _configuration.retrievePreviousRules)();
    filter(previousRules, function(previousRule) {
        var previousRuleEqualToRule = previousRule.isEqualTo(rule);
        if (!previousRuleEqualToRule) {
            return true;
        }
    });
    var previousRule = rule; ///
    previousRules.unshift(previousRule);
    (0, _configuration.updatePreviousRules)(previousRules);
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcHJldmlvdXNSdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdXBkYXRlUHJldmlvdXNSdWxlcywgcmV0cmlldmVQcmV2aW91c1J1bGVzIH0gZnJvbSBcIi4uL2NvbmZpZ3VyYXRpb25cIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2aW91c1J1bGVPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBkcnlSdW4gfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGRyeVJ1bikge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcnVsZSB9ID0gY29udGV4dDtcblxuICBjb25zdCBwcmV2aW91c1J1bGVzID0gcmV0cmlldmVQcmV2aW91c1J1bGVzKCk7XG5cbiAgZmlsdGVyKHByZXZpb3VzUnVsZXMsIChwcmV2aW91c1J1bGUpID0+IHtcbiAgICBjb25zdCBwcmV2aW91c1J1bGVFcXVhbFRvUnVsZSA9IHByZXZpb3VzUnVsZS5pc0VxdWFsVG8ocnVsZSk7XG5cbiAgICBpZiAoIXByZXZpb3VzUnVsZUVxdWFsVG9SdWxlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHByZXZpb3VzUnVsZSA9IHJ1bGU7ICAvLy9cblxuICBwcmV2aW91c1J1bGVzLnVuc2hpZnQocHJldmlvdXNSdWxlKTtcblxuICB1cGRhdGVQcmV2aW91c1J1bGVzKHByZXZpb3VzUnVsZXMpO1xuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJwcmV2aW91c1J1bGVPcGVyYXRpb24iLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJkcnlSdW4iLCJydWxlIiwicHJldmlvdXNSdWxlcyIsInJldHJpZXZlUHJldmlvdXNSdWxlcyIsInByZXZpb3VzUnVsZSIsInByZXZpb3VzUnVsZUVxdWFsVG9SdWxlIiwiaXNFcXVhbFRvIiwidW5zaGlmdCIsInVwZGF0ZVByZXZpb3VzUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7eUJBTk87NkJBRTRCO0FBRTNELElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sU0FBU0Qsc0JBQXNCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNuRSxJQUFNLEFBQUVDLFNBQVdELFFBQVhDO0lBRVIsSUFBSUEsUUFBUTtRQUNWSDtRQUVBO0lBQ0Y7SUFFQSxJQUFNLEFBQUVJLE9BQVNGLFFBQVRFO0lBRVIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxvQ0FBcUI7SUFFM0NSLE9BQU9PLGVBQWUsU0FBQ0U7UUFDckIsSUFBTUMsMEJBQTBCRCxhQUFhRSxTQUFTLENBQUNMO1FBRXZELElBQUksQ0FBQ0kseUJBQXlCO1lBQzVCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBTUQsZUFBZUgsTUFBTyxHQUFHO0lBRS9CQyxjQUFjSyxPQUFPLENBQUNIO0lBRXRCSSxJQUFBQSxrQ0FBbUIsRUFBQ047SUFFcEJMO0FBQ0YifQ==