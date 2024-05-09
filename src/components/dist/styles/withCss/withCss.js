import { store } from '../../store/index';
export function withCss() {
    return store.getState().css;
}
