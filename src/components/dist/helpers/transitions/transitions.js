import { formatMs } from '../formatMs/index';
import { useTheme } from '../../styles/useTheme/index';
var create = function (props, options) {
    if (props === void 0) { props = ['all']; }
    if (options === void 0) { options = {}; }
    var theme = useTheme();
    var _a = options.duration, durationOption = _a === void 0 ? theme.transitions.duration.standard : _a, _b = options.easing, easingOption = _b === void 0 ? theme.transitions.easing.easeInOut : _b, _c = options.delay, delayOption = _c === void 0 ? 0 : _c;
    var duration = typeof durationOption === 'string' ? durationOption : formatMs(durationOption);
    var delay = typeof delayOption === 'string' ? delayOption : formatMs(delayOption);
    var transitions = (Array.isArray(props) ? props : [props]).map(function (animatedProp) { return "".concat(animatedProp, " ").concat(duration, " ").concat(easingOption, " ").concat(delay); });
    return transitions.join(', ');
};
var getAutoHeightDuration = function (height) {
    var constant = height / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
};
export var transitions = { create: create, getAutoHeightDuration: getAutoHeightDuration };
