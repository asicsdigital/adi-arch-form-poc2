import { clamp } from '../clamp/index';
import { decomposeColor } from '../decomposeColor/index';
import { recomposeColor } from '../recomposeColor/index';
export function fade(color, value) {
    var decomposedColor = decomposeColor(color);
    var clampedValue = clamp(value);
    if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
        decomposedColor.type = "".concat(decomposedColor.type, "a");
    }
    decomposedColor.values[3] = clampedValue;
    return recomposeColor(decomposedColor);
}
