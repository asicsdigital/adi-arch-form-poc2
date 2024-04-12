import { useTheme } from '../../styles/useTheme/index';
var between = function (begin, end, withAtRule) {
    if (withAtRule === void 0) { withAtRule = true; }
    var theme = useTheme();
    var _a = theme.breakpoints, keys = _a.keys, values = _a.values;
    var endIndex = keys.includes(end) ? keys.indexOf(end) + 1 : undefined;
    if (endIndex === keys.length) {
        return up(begin, withAtRule);
    }
    var beginValue = keys.includes(begin) ? values[begin] : begin;
    var endValue = endIndex ? values[keys[endIndex]] : end;
    var prefix = withAtRule ? '@media ' : '';
    return Number.isNaN(parseInt('' + beginValue, 10)) || Number.isNaN(parseInt('' + endValue, 10))
        ? ''
        : "".concat(prefix, "(min-width: ").concat(beginValue, "px) and (max-width: ").concat(endValue, "px)");
};
var down = function (begin, withAtRule) {
    if (withAtRule === void 0) { withAtRule = true; }
    var theme = useTheme();
    var _a = theme.breakpoints, keys = _a.keys, values = _a.values;
    var beginIndex = keys.includes(begin) ? keys.indexOf(begin) + 1 : undefined;
    if (beginIndex === keys.length) {
        return up('xs', withAtRule);
    }
    var value = beginIndex ? values[keys[beginIndex]] : begin;
    var prefix = withAtRule ? '@media ' : '';
    return Number.isNaN(parseInt('' + value, 10)) ? '' : "".concat(prefix, "(max-width: ").concat(value, "px)");
};
var only = function (begin, withAtRule) {
    if (withAtRule === void 0) { withAtRule = true; }
    return between(begin, begin, withAtRule);
};
var up = function (begin, withAtRule) {
    if (withAtRule === void 0) { withAtRule = true; }
    var theme = useTheme();
    var _a = theme.breakpoints, keys = _a.keys, values = _a.values;
    var value = keys.includes(begin) ? values[begin] : begin;
    var prefix = withAtRule ? '@media ' : '';
    return Number.isNaN(parseInt('' + value, 10)) ? '' : "".concat(prefix, "(min-width: ").concat(value, "px)");
};
var width = function (key) {
    var theme = useTheme();
    var values = theme.breakpoints.values;
    return values[key];
};
export var breakpoints = { between: between, down: down, only: only, up: up, width: width };
