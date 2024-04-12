import { decomposeColor } from '../decomposeColor/index';
import { recomposeColor } from '../recomposeColor/index';
export function hslToRgb(composedColor) {
    var color = decomposeColor(composedColor);
    var values = color.values;
    var h = parseInt("".concat(values[0]), 10);
    var s = parseInt("".concat(values[1]), 10) / 100;
    var l = parseInt("".concat(values[2]), 10) / 100;
    var a = s * Math.min(l, 1 - l);
    var f = function (n, k) {
        if (k === void 0) { k = (n + h / 30) % 12; }
        return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };
    var type = 'rgb';
    var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    if (values[3]) {
        type += 'a';
        rgb.push(parseFloat("".concat(values[3])) / 100);
    }
    return recomposeColor({ type: type, values: rgb });
}
