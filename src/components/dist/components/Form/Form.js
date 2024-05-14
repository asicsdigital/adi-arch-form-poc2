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
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { applyOverrides, getClassKey } from '../../helpers/index';
import { provideClasses, withTheme } from '../../styles/index';
import { arrayify } from '../../helpers/index';
export var FormClassKey = getClassKey('form');
export function FormStyles(theme) {
    return applyOverrides({
        root: {}
    }, 'Form');
}
var options = {
    index: 2,
    meta: FormClassKey
};
var classes = provideClasses(FormStyles, options);
var theme = withTheme();
export var FormStyle = FormStyles(theme);
export function Form(props) {
    var defaultProps = {
        action: '',
        children: _jsx(_Fragment, {}),
        method: 'get',
        name: ''
    };
    var composedProps = __assign(__assign({}, defaultProps), props);
    var action = composedProps.action, children = composedProps.children, inputs = composedProps.inputs, method = composedProps.method, name = composedProps.name;
    var composedInputs = arrayify(inputs);
    return (_jsx("form", { action: action, method: method, name: name, children: children }));
}
