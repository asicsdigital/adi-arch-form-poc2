import { clamp } from '../clamp/index';
import { decomposeColor } from '../decomposeColor';
import { recomposeColor } from '../recomposeColor';
export function alpha(color, value) {
    var decomposedColor = decomposeColor(color);
    var clampedColor = clamp(value);
    if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
        decomposedColor.type += 'a';
    }
    decomposedColor.values[3] = clampedColor;
    return recomposeColor(decomposedColor);
}
