'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { applyOverrides, capitalize, fromKebabToCamel, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { provideClasses, provideStylesheet, withTheme } from '../../styles/index';
export var defaultFlexChildProps = {
    alignSelf: 'auto',
    className: '',
    flex: '0 1 auto',
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    order: 0
};
export var FlexChildClassKey = getClassKey('flex-child');
export function FlexChildStyles(theme) {
    return applyOverrides({
        root: {},
        alignSelfAuto: {
            alignSelf: 'auto'
        },
        alignSelfBaseline: {
            alignSelf: 'baseline'
        },
        alignSelfCenter: {
            alignSelf: 'center'
        },
        alignSelfFlexEnd: {
            alignSelf: 'flex-end'
        },
        alignSelfFlexStart: {
            alignSelf: 'flex-start'
        },
        alignSelfStretch: {
            alignSelf: 'stretch'
        }
    }, 'FlexChild');
}
var options = {
    index: 2,
    meta: FlexChildClassKey
};
var classes = provideClasses(FlexChildStyles, options);
var theme = withTheme();
export var FlexChildStyle = FlexChildStyles(theme);
export var composeFlexChildClasses = function (userProps) {
    if (userProps === void 0) { userProps = {}; }
    var composedProps = __assign(__assign({}, defaultFlexChildProps), userProps);
    var alignSelf = classes["alignSelf".concat(fromKebabToCamel(capitalize(composedProps.alignSelf)))];
    var flexClass = composedProps.flex ? selectFlex(composedProps.flex) : '';
    var flexBasisClass = composedProps.flexBasis ? selectFlexBasis(composedProps.flexBasis) : '';
    var flexGrowClass = composedProps.flexGrow ? selectFlexGrow(composedProps.flexGrow) : '';
    var flexShrinkClass = composedProps.flexShrink ? selectFlexShrink(composedProps.flexShrink) : '';
    var orderClass = composedProps.order ? selectOrder(composedProps.order) : '';
    var composedClasses = "".concat(classes.root, " ").concat(alignSelf, " ").concat(flexClass, "\n      ").concat(flexBasisClass, " ").concat(flexGrowClass, " ").concat(flexShrinkClass, " ").concat(orderClass, " ").concat(composedProps.className).trim();
    return replaceMultipleSpaces(composedClasses);
};
var selectFlex = function (flex) {
    var _a;
    var encodedFlex = encodeURIComponent("".concat(flex));
    var flexOptions = __assign(__assign({}, options), { meta: "".concat(FlexChildClassKey, "-flex-").concat(encodedFlex) });
    var flexClass = "flex".concat(encodedFlex);
    var flexSheet = provideStylesheet((_a = {}, _a[flexClass] = { flex: flex }, _a), flexOptions);
    var flexClasses = __assign({}, flexSheet.classes);
    return flexClasses[flexClass];
};
var selectFlexBasis = function (flexBasis) {
    var _a;
    var flexBasisOptions = __assign(__assign({}, options), { meta: "".concat(FlexChildClassKey, "-flex-basis-").concat(flexBasis) });
    var flexBasisClass = "flexBasis".concat(flexBasis);
    var flexBasisSheet = provideStylesheet((_a = {}, _a[flexBasisClass] = { flexBasis: flexBasis }, _a), flexBasisOptions);
    var flexBasisClasses = __assign({}, flexBasisSheet.classes);
    return flexBasisClasses[flexBasisClass];
};
var selectFlexGrow = function (flexGrow) {
    var _a;
    var flexGrowOptions = __assign(__assign({}, options), { meta: "".concat(FlexChildClassKey, "-flex-grow-").concat(flexGrow) });
    var flexGrowClass = "flexGrow".concat(flexGrow);
    var flexGrowSheet = provideStylesheet((_a = {}, _a[flexGrowClass] = { flexGrow: flexGrow }, _a), flexGrowOptions);
    var flexGrowClasses = __assign({}, flexGrowSheet.classes);
    return flexGrowClasses[flexGrowClass];
};
var selectFlexShrink = function (flexShrink) {
    var _a;
    var flexShrinkOptions = __assign(__assign({}, options), { meta: "".concat(FlexChildClassKey, "-flex-shrink-").concat(flexShrink) });
    var flexShrinkClass = "flexShrink".concat(flexShrink);
    var flexShrinkSheet = provideStylesheet((_a = {}, _a[flexShrinkClass] = { flexShrink: flexShrink }, _a), flexShrinkOptions);
    var flexShrinkClasses = __assign({}, flexShrinkSheet.classes);
    return flexShrinkClasses[flexShrinkClass];
};
var selectOrder = function (order) {
    var _a;
    var orderOptions = __assign(__assign({}, options), { meta: "".concat(FlexChildClassKey, "-order-").concat(order) });
    var orderClass = "order".concat(order);
    var orderSheet = provideStylesheet((_a = {}, _a[orderClass] = { order: order }, _a), orderOptions);
    var orderClasses = __assign({}, orderSheet.classes);
    return orderClasses[orderClass];
};
export function FlexChild(props) {
    var children = props.children;
    var composedClasses = composeFlexChildClasses(props);
    return _jsx("div", { className: composedClasses, children: children });
}
