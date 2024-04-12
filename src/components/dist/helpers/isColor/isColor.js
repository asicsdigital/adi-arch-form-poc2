export function isColor(color) {
    var styledElement = new Option().style;
    styledElement.color = color;
    return styledElement.color !== '';
}
