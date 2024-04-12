export function hexToRgb(composedColor) {
    var color = composedColor.substr(1);
    var matcher = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
    var colorValues = color.match(matcher);
    var colors = colorValues && colorValues[0].length === 1 ? colorValues.map(function (value) { return "".concat(value).concat(value); }) : colorValues;
    var validColors = colors
        ? colors.map(function (color) {
            var parsedColor = parseInt(color, 16);
            return isNaN(parsedColor) ? 'NaN' : parsedColor;
        })
        : null;
    return validColors && !validColors.includes('NaN') ? "rgb(".concat(validColors.join(', '), ")") : '';
}
