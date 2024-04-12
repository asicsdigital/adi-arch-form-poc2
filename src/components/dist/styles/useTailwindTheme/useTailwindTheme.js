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
import { provideTheme } from '../provideTheme/index';
import { useTheme } from '../useTheme/index';
export function useTailwindTheme() {
    provideTheme();
    var dsprotoTheme = useTheme();
    var tailwindTheme = {
        borderRadius: {
            primary: "".concat(dsprotoTheme.shape.borderRadius, "px")
        },
        colors: {
            gray: __assign({}, dsprotoTheme.palette.grey)
        },
        extend: {
            colors: {
                action: {
                    active: dsprotoTheme.palette.action.active,
                    disabled: dsprotoTheme.palette.action.disabled,
                    disabledBackground: dsprotoTheme.palette.action.disabledBackground,
                    focus: dsprotoTheme.palette.action.focus,
                    hover: dsprotoTheme.palette.action.hover,
                    selected: dsprotoTheme.palette.action.selected
                },
                background: __assign({}, dsprotoTheme.palette.background),
                common: __assign({}, dsprotoTheme.palette.common),
                divider: dsprotoTheme.palette.divider,
                error: __assign({}, dsprotoTheme.palette.error),
                info: __assign({}, dsprotoTheme.palette.info),
                primary: __assign({}, dsprotoTheme.palette.primary),
                secondary: __assign({}, dsprotoTheme.palette.secondary),
                success: __assign({}, dsprotoTheme.palette.success),
                warning: __assign({}, dsprotoTheme.palette.warning)
            },
            contrastThreshold: dsprotoTheme.palette.contrastThreshold,
            opacity: {
                activatedOpacity: "".concat(dsprotoTheme.palette.action.activatedOpacity),
                disabledOpacity: "".concat(dsprotoTheme.palette.action.disabledOpacity),
                focusOpacity: "".concat(dsprotoTheme.palette.action.focusOpacity),
                hoverOpacity: "".concat(dsprotoTheme.palette.action.hoverOpacity),
                selectedOpacity: "".concat(dsprotoTheme.palette.action.selectedOpacity)
            },
            spacingUnit: dsprotoTheme.spacing.unit,
            typography: __assign({}, dsprotoTheme.typography.variants),
            zIndexes: __assign({}, dsprotoTheme.zIndex)
        },
        screens: {
            lg: "".concat(dsprotoTheme.breakpoints.values.lg, "px"),
            md: "".concat(dsprotoTheme.breakpoints.values.md, "px"),
            sm: "".concat(dsprotoTheme.breakpoints.values.sm, "px"),
            xl: "".concat(dsprotoTheme.breakpoints.values.xl, "px")
        }
    };
    return tailwindTheme;
}
