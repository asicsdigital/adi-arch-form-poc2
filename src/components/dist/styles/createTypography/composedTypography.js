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
import { isString, pxToRem } from '../../helpers/index';
import { fontWeights } from '../../store/index';
import { useTokens } from '../useTokens/index';
var blocksDefault = useTokens();
var fontFamilies = '"Helvetica", Helvetica, Arial, sans-serif';
var composeVariant = function (token) {
    var variant = __assign({}, blocksDefault[token]);
    return {
        fontFamily: "\"".concat(variant.fontFamily, "\", ").concat(fontFamilies),
        fontSize: pxToRem(variant.fontSize),
        fontWeight: fontWeights[variant.fontWeight.toLowerCase()],
        letterSpacing: variant.letterSpacing,
        lineHeight: isString(variant.lineHeight) ? variant.lineHeight : pxToRem(variant.lineHeight),
        textDecoration: variant.textDecoration,
        textTransform: variant.textCase
    };
};
export var composedTypography = {
    fontFamily: "\"".concat(blocksDefault.TypographyBody1.fontFamily, "\", ").concat(fontFamilies),
    variants: {
        body1: __assign({}, composeVariant('TypographyBody1')),
        body2: __assign({}, composeVariant('TypographyBody2')),
        button: __assign({}, composeVariant('TypographyButton')),
        caption: __assign({}, composeVariant('TypographyCaption')),
        h1: __assign({}, composeVariant('TypographyH1')),
        h2: __assign({}, composeVariant('TypographyH2')),
        h3: __assign({}, composeVariant('TypographyH3')),
        h4: __assign({}, composeVariant('TypographyH4')),
        h5: __assign({}, composeVariant('TypographyH5')),
        h6: __assign({}, composeVariant('TypographyH6')),
        overline: __assign({}, composeVariant('TypographyOverline')),
        subtitle1: __assign({}, composeVariant('TypographySubtitle1')),
        subtitle2: __assign({}, composeVariant('TypographySubtitle2'))
    }
};
