export function fromCamelToKebab(value) {
    function converter(g) {
        return '-' + g[0].toLowerCase();
    }
    return value.replace(/([A-Z])/g, converter);
}
