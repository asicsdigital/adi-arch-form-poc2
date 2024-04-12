export function replaceMultipleSpaces(value) {
    var re = / +(?= )/g;
    return value.replace(re, '');
}
