import { store, setTokens } from '../../store/index';
export function provideTokens(tokens) {
    if (tokens === void 0) { tokens = 'core'; }
    store.dispatch(setTokens(tokens));
}
