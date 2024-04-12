import { clamp } from '../clamp/index';
import { decomposeColor } from '../decomposeColor/index';
import { recomposeColor } from '../recomposeColor/index';
export function darken(composedColor, unclampedCoefficient) {
    if (unclampedCoefficient === void 0) { unclampedCoefficient = 0; }
    var color = decomposeColor(composedColor);
    var coefficient = clamp(unclampedCoefficient);
    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] = parseInt("".concat(color.values[2]), 10) * (1 - coefficient);
    }
    if (color.type.indexOf('rgb') !== -1) {
        color.values = color.values.map(function (value) { return parseInt("".concat(value), 10) * (1 - coefficient); });
    }
    return recomposeColor(color);
}
