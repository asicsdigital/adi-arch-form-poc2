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
import { FormControlLabel as MuiFormControlLabel } from '@mui/material';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';
export function FormControlLabelStyles(theme) {
    return applyOverrides({
    /* Add custom styles here using JSS and add the class names to the Classes type */
    }, 'FormControlLabel');
}
var theme = useTheme();
export var FormControlLabelStyle = FormControlLabelStyles(theme);
export function FormControlLabel(props) {
    var defaultProps = {
        control: _jsx("div", {}),
        label: ''
        /* Add custom prop defaults here */
    };
    var composedProps = __assign(__assign({}, defaultProps), props);
    return _jsx(MuiFormControlLabel, __assign({ sx: FormControlLabelStyle }, composedProps));
}
