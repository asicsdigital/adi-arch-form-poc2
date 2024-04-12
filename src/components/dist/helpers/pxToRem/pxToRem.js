import { useTheme } from '../../styles/useTheme/index';
import { useInt } from '../useInt/index';
export function pxToRem(size) {
    var theme = useTheme();
    var fontSize = theme.typography.fontSize;
    var calculatedFontSize = parseFloat("".concat(fontSize));
    var parsedSize = useInt(size);
    return "".concat(parsedSize / calculatedFontSize, "rem");
}
