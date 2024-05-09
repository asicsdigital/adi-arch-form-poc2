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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Flex } from '../Flex';
import { FormControlLabel } from '../FormControlLabel';
import { TextField } from '../TextField';
import { applyOverrides, getClassKey } from '../../helpers/index';
import { provideClasses, withTheme } from '../../styles/index';
import { arrayify } from '../../helpers';
export var FormContentClassKey = getClassKey('form');
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
var theme = withTheme();
export var FormContentStyle = FormContentStyles(theme);
export function FormContent(props) {
    var buttons = props.buttons, defaultValues = props.defaultValues, inputs = props.inputs, onSubmit = props.onSubmit, flexProps = __rest(props, ["buttons", "defaultValues", "inputs", "onSubmit"]);
    var composedButtons = arrayify(buttons);
    var composedFlexProps = __assign({ alignItems: 'flex-start', flexDirection: 'column', gap: 8 }, flexProps);
    var _a = useForm({
        defaultValues: defaultValues
    }), handleSubmit = _a.handleSubmit, rhfControl = _a.control, setValue = _a.setValue;
    var createInput = {
        checkbox: function (input) {
            var control = input.control, options = input.options;
            return (_jsx(FormControlLabel, { control: _jsx(Checkbox, { setValue: setValue, rhfControl: rhfControl }, control), label: options === null || options === void 0 ? void 0 : options.label }, options === null || options === void 0 ? void 0 : options.label));
        },
        checkboxGroup: function (input) {
            return _jsx(_Fragment, { children: "checkboxGroup" });
        },
        radio: function (input) {
            return _jsx(_Fragment, { children: "radio" });
        },
        radioGroup: function (input) {
            return _jsx(_Fragment, { children: "radioGroup" });
        },
        switch: function (input) {
            return _jsx(_Fragment, { children: "switch" });
        },
        select: function (input) {
            return _jsx(_Fragment, { children: "select" });
        },
        textField: function (input) {
            var _a;
            return (_jsx(TextField, __assign({ rhfControl: rhfControl }, input.options), (_a = input.options) === null || _a === void 0 ? void 0 : _a.label));
        }
    };
    return (_jsxs(Flex, __assign({}, composedFlexProps, { children: [inputs.map(function (input) { return createInput[input.control](input); }), _jsx(Button, { onClick: handleSubmit(onSubmit), variant: "contained", children: "Submit" })] })));
}
