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
import { TextField as MuiTextField } from '@mui/material';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';
export function TextFieldStyles(theme) {
    return applyOverrides({
    /* Add custom styles here using JSS and add the class names to the Classes type */
    }, 'TextField');
}
var theme = useTheme();
export var TextFieldStyle = TextFieldStyles(theme);
export function TextField(props) {
    var defaultProps = {
    /* Add custom prop defaults here */
    };
    var composedProps = __assign(__assign({}, defaultProps), props);
    var helperText = composedProps.helperText, error = composedProps.error, onChange = composedProps.onChange, value = composedProps.value, rhfRest = __rest(composedProps, ["helperText", "error", "onChange", "value"]);
    return composedProps.rhfControl ? (_jsx(Controller, { name: composedProps.name ? composedProps.name : '', control: composedProps.rhfControl, render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value, error = _a.fieldState.error, formState = _a.formState;
            return (_jsx(MuiTextField, __assign({ sx: TextFieldStyle, error: !!error, helperText: error ? error.message : composedProps.helperText, onChange: onChange, value: value }, rhfRest)));
        } })) : (_jsx(MuiTextField, __assign({ sx: TextFieldStyle }, composedProps)));
}
