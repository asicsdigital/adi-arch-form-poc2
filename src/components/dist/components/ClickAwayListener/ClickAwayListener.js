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
import { ClickAwayListener as MuiClickAwayListener } from '@mui/material';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';
export function ClickAwayListenerStyles(theme) {
    return applyOverrides({
    /* Add custom styles here using JSS and add the class names to the Classes type */
    }, 'ClickAwayListener');
}
var theme = useTheme();
export var ClickAwayListenerStyle = ClickAwayListenerStyles(theme);
export function ClickAwayListener(props) {
    return _jsx(MuiClickAwayListener, __assign({ sx: ClickAwayListenerStyle }, props));
}
