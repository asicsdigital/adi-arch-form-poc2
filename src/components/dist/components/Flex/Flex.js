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
export var defaultFlexProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    className: '',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: '',
    justifyContent: 'flex-start'
};
export var FlexClassKey = getClassKey('flex');
export function FlexStyles(theme) {
    return applyOverrides({
        root: {
            display: 'flex'
        },
        alignContentCenter: {
            alignContent: 'center'
        },
        alignContentFlexEnd: {
            alignContent: 'flex-end'
        },
        alignContentFlexStart: {
            alignContent: 'flex-start'
        },
        alignContentSpaceAround: {
            alignContent: 'space-around'
        },
        alignContentSpaceBetween: {
            alignContent: 'space-between'
        },
        alignContentStretch: {
            alignContent: 'stretch'
        },
        alignItemsBaseline: {
            alignItems: 'baseline'
        },
        alignItemsCenter: {
            alignItems: 'center'
        },
        alignItemsFlexEnd: {
            alignItems: 'flex-end'
        },
        alignItemsFlexStart: {
            alignItems: 'flex-start'
        },
        alignItemsStretch: {
            alignItems: 'stretch'
        },
        flexDirectionColumn: {
            flexDirection: 'column'
        },
        flexDirectionColumnReverse: {
            flexDirection: 'column-reverse'
        },
        flexDirectionRow: {
            flexDirection: 'row'
        },
        flexDirectionRowReverse: {
            flexDirection: 'row-reverse'
        },
        flexWrapNowrap: {
            flexWrap: 'nowrap'
        },
        flexWrapWrap: {
            flexWrap: 'wrap'
        },
        flexWrapWrapReverse: {
            flexWrap: 'wrap-reverse'
        },
        justifyContentCenter: {
            justifyContent: 'center'
        },
        justifyContentFlexEnd: {
            justifyContent: 'flex-end'
        },
        justifyContentFlexStart: {
            justifyContent: 'flex-start'
        },
        justifyContentSpaceAround: {
            justifyContent: 'space-around'
        },
        justifyContentSpaceBetween: {
            justifyContent: 'space-between'
        },
        justifyContentSpaceEvenly: {
            justifyContent: 'space-evenly'
        }
    }, 'Flex');
}
var options = {
    index: 2,
    meta: FlexClassKey
};
var classes = provideClasses(FlexStyles, options);
var theme = withTheme();
export var FlexStyle = FlexStyles(theme);
export var composeFlexClasses = function (userProps) {
    if (userProps === void 0) { userProps = {}; }
    var composedProps = __assign(__assign({}, defaultFlexProps), userProps);
    var alignContent = classes["alignContent".concat(fromKebabToCamel(capitalize(composedProps.alignContent)))];
    var alignItems = classes["alignItems".concat(fromKebabToCamel(capitalize(composedProps.alignItems)))];
    var flexDirection = classes["flexDirection".concat(fromKebabToCamel(capitalize(composedProps.flexDirection)))];
    var flexWrap = classes["flexWrap".concat(fromKebabToCamel(capitalize(composedProps.flexWrap)))];
    var gapClass = composedProps.gap ? selectGap(composedProps.gap) : '';
    var justifyContent = classes["justifyContent".concat(fromKebabToCamel(capitalize(composedProps.justifyContent)))];
    var composedClasses = "".concat(classes.root, " ").concat(alignContent, " ").concat(alignItems, " ").concat(flexDirection, " ").concat(flexWrap, " ").concat(gapClass, " ").concat(justifyContent, " ").concat(composedProps.className).trim();
    return replaceMultipleSpaces(composedClasses);
};
var selectGap = function (gap) {
    var _a;
    var gapOptions = __assign(__assign({}, options), { meta: "".concat(FlexClassKey, "-flex-").concat(gap) });
    var gapClass = "flex".concat(gap);
    var gapSheet = provideStylesheet((_a = {}, _a[gapClass] = { gap: gap }, _a), gapOptions);
    var gapClasses = __assign({}, gapSheet.classes);
    return gapClasses[gapClass];
};
export function Flex(props) {
    var children = props.children;
    var composedClasses = composeFlexClasses(props);
    return _jsx("div", { className: composedClasses, children: children });
}
