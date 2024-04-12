import { store } from '../../store/index';
export function useTheme() {
    return store.getState().theme;
}
