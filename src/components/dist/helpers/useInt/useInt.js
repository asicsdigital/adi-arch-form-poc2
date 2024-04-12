export function useInt(value) {
    return typeof value === 'number' ? value : parseInt(value, 10);
}
