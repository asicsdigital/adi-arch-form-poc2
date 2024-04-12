import { clamp } from '../clamp/index';
import { decomposeColor } from '../decomposeColor/index';
import { recomposeColor } from '../recomposeColor/index';
export function lighten(composedColor, baseCoefficient) {
    if (baseCoefficient === void 0) { baseCoefficient = 1; }
    var color = decomposeColor(composedColor);
    var coefficient = clamp(baseCoefficient);
    if (color.type.indexOf('hsl') !== -1) {
        var val = parseInt("".concat(color.values[2]), 10);
        color.values[2] = val + (100 - val) * coefficient;
    }
    else {
        color.values = color.values.map(function (value, index) {
            var val = parseInt("".concat(value), 10);
            return index < 3 ? val + (255 - val) * coefficient : value;
        });
    }
    return recomposeColor(color);
}
