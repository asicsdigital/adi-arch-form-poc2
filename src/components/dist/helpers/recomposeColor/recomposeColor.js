var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function recomposeColor(decomposedColor) {
    var type = decomposedColor.type;
    var values = __spreadArray([], decomposedColor.values, true);
    if (type.indexOf('rgb') !== -1) {
        values = values.map(function (n, i) { return (i < 3 ? parseInt('' + n, 10) : n); });
    }
    else {
        values[1] = "".concat(values[1], "%");
        values[2] = "".concat(values[2], "%");
    }
    return "".concat(type, "(").concat(values.join(', '), ")");
}
