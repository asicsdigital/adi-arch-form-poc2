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
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';
export function CheckboxStyles(theme) {
    return applyOverrides({
    /* Add custom styles here using JSS and add the class names to the Classes type */
    }, 'Checkbox');
}
var theme = useTheme();
export var CheckboxStyle = CheckboxStyles(theme);
export function Checkbox(props) {
    var defaultProps = {
    /* Add custom prop defaults here */
    };
    var composedProps = __assign(__assign({}, defaultProps), props);
    var rhfControl = composedProps.rhfControl, muiProps = __rest(composedProps, ["rhfControl"]);
    var name = muiProps.name, onChange = muiProps.onChange, value = muiProps.value, rhfProps = __rest(muiProps, ["name", "onChange", "value"]);
    return rhfControl ? (_jsx(Controller, { name: name ? name : '', control: rhfControl, defaultValue: false, render: function (_a) {
            var props = _a.field;
            return _jsx(MuiCheckbox, __assign({ sx: CheckboxStyle, onChange: props.onChange, checked: props.value }, rhfProps));
        } })) : (_jsx(MuiCheckbox, __assign({ sx: CheckboxStyle }, muiProps)));
}
