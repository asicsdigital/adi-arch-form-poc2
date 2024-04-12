import { globalConstants } from '../../constants/index';
export function getClassKey(value) {
    return globalConstants.prefix + globalConstants.delimiter + value;
}
