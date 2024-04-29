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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { InputControls } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import { provideClasses, useTheme } from '../../styles/index';
import { arrayify } from '../../helpers/index';
import { Checkbox } from '../Checkbox/index';
import { Flex } from '../Flex/index';
import { FormControl } from '../FormControl';
import { FormControlLabel } from '../FormControlLabel/index';
import { FormLabel } from '../FormLabel/index';
import { InputLabel } from '../InputLabel/index';
import { MenuItem } from '../MenuItem/index';
import { Radio } from '../Radio/index';
import { RadioGroup } from '../RadioGroup/index';
import { Select } from '../Select/index';
import { Switch } from '../Switch/index';
import { TextField } from '../TextField/index';
import { FormGroup } from '../FormGroup';
export var FormContentClassKey = getClassKey('form-content');
export function FormContentStyles(theme) {
    return applyOverrides({
        root: {}
    }, 'FormContent');
}
var options = {
    index: 2,
    meta: FormContentClassKey
};
var classes = provideClasses(FormContentStyles, options);
var theme = useTheme();
export var FormContentStyle = FormContentStyles(theme);
export function composeFormContentInput(formInput) {
    var controlEl;
    var control = formInput.control, key = formInput.key, _a = formInput.options, options = _a === void 0 ? {} : _a, rhfControl = formInput.rhfControl;
    var composedOptions = __assign({ label: '' }, options);
    var label = composedOptions.label, rest = __rest(composedOptions, ["label"]);
    switch (control) {
        case InputControls.Checkbox:
            controlEl = _jsx(Checkbox, __assign({}, rest), key);
            break;
        case InputControls.CheckboxGroup:
            var checkboxElements = arrayify(rest['elements']);
            controlEl = (_jsxs(FormGroup, { children: [_jsx(FormLabel, { id: rest['labelId'], children: label }), checkboxElements.map(function (element, index) { return (_jsx(FormControlLabel, __assign({ control: _jsx(Checkbox, {}) }, element), index)); })] }));
            return controlEl;
        case InputControls.Radio:
            controlEl = _jsx(Radio, __assign({}, rest), key);
            break;
        case InputControls.RadioGroup:
            var name_1 = rest['name'] || key;
            var radioElements = arrayify(rest['elements']);
            controlEl = (_jsxs(FormControl, { children: [_jsx(FormLabel, { id: rest['labelId'], children: label }), _jsx(RadioGroup, { name: name_1, defaultValue: rest['defaultValue'], children: radioElements.map(function (element, index) { return (_jsx(FormControlLabel, __assign({ control: _jsx(Radio, {}) }, element), index)); }) }, key)] }));
            return controlEl;
        case InputControls.Select:
            var options_1 = arrayify(rest['options']);
            controlEl = (_jsxs(FormControl, { fullWidth: rest['fullWidth'], children: [_jsx(InputLabel, { id: rest['inputId'], children: label }, rest['inputId']), _jsx(Select, __assign({ label: label }, rest, { children: options_1.map(function (option, index) { return (_jsx(MenuItem, { value: option.label, children: option.label }, option.label)); }) }), key)] }));
            return controlEl;
        case InputControls.Switch:
            controlEl = _jsx(Switch, __assign({}, rest), key);
            break;
        case InputControls.TextField:
            return _jsx(TextField, __assign({ rhfControl: rhfControl }, composedOptions), key);
    }
    return label ? _jsx(FormControlLabel, __assign({ control: controlEl, label: label }, rest), key) : controlEl;
}
export function FormContent(props) {
    var defaultProps = {
        children: _jsx(_Fragment, {}),
        direction: 'column',
        gap: theme.spacing.unit
    };
    var composedProps = __assign(__assign({}, defaultProps), props);
    var children = composedProps.children, direction = composedProps.direction, gap = composedProps.gap, inputs = composedProps.inputs, rhfControl = composedProps.rhfControl;
    var composedInputs = arrayify(inputs);
    return (_jsxs(Flex, { alignContent: "flexStart", alignItems: "flexStart", flexDirection: direction, gap: gap, children: [children, composedInputs.map(function (input, index) {
                return input ? composeFormContentInput(__assign(__assign({ key: "".concat(input.control, "-").concat(index) }, input), { rhfControl: rhfControl })) : null;
            })] }));
}
