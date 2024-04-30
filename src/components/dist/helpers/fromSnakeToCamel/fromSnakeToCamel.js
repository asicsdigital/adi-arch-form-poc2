export function fromSnakeToCamel(value) {
    return value.replace(/_./g, function (m) { return m.toUpperCase()[1]; });
}
