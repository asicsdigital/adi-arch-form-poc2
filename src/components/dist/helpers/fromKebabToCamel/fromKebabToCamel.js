export function fromKebabToCamel(value) {
    return value.replace(/-./g, function (m) { return m.toUpperCase()[1]; });
}
