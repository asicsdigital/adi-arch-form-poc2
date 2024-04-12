import { hexToRgb } from '../hexToRgb/index';
export function decomposeColor(composedColor) {
    var color = composedColor.charAt(0) === '#' ? hexToRgb(composedColor) : composedColor;
    var marker = color.indexOf('(');
    var type = color.substring(0, marker);
    var colorValues = color.substring(marker + 1, color.length - 1).split(',');
    var values = colorValues.map(function (value) { return "".concat(parseFloat(value)); });
    return { type: type, values: values };
}
