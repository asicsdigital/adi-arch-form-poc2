import { store } from '../../store/index';
import * as Tokens from '../../tokens/index';
var TokensType = Tokens[store.getState().tokens];
export function useTokens() {
    var tokens = Tokens[store.getState().tokens];
    return tokens;
}
