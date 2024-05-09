import { store } from '../../store/index';
export function withTheme() {
    return store.getState().theme;
}
