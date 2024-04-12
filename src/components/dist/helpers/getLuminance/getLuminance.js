import { decomposeColor } from '../decomposeColor/index';
import { hslToRgb } from '../hslToRgb/index';
export function getLuminance(composedColor) {
    var color = decomposeColor(composedColor);
    var rgbValues = color.type === 'hsl' ? decomposeColor(hslToRgb(composedColor)).values : color.values;
    var rgbLuminance = rgbValues.map(function (value) {
        var val = parseInt("".concat(value), 10) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow(((val + 0.055) / 1.055), 2.4);
    });
    var luminance = 0.2126 * rgbLuminance[0] + 0.7152 * rgbLuminance[1] + 0.0722 * rgbLuminance[2];
    return parseFloat((Math.round(luminance * Math.pow(10, 3)) / Math.pow(10, 3)).toFixed(2));
}
