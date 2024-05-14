import { withTheme } from '../../styles/withTheme/index';
import { useInt } from '../useInt/index';
export function pxToRem(size) {
    var theme = withTheme();
    var fontSize = theme.typography.fontSize;
    var calculatedFontSize = parseFloat("".concat(fontSize));
    var parsedSize = useInt(size);
    return "".concat(parsedSize / calculatedFontSize, "rem");
}
