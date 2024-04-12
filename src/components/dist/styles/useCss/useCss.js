import { store } from '../../store/index';
export function useCss() {
    return store.getState().css;
}
