import { Breakpoint } from '../../types/index';
export declare const breakpoints: {
    between: (begin: Breakpoint, end: Breakpoint, withAtRule?: boolean) => string;
    down: (begin: Breakpoint, withAtRule?: boolean) => string;
    only: (begin: Breakpoint, withAtRule?: boolean) => string;
    up: (begin: Breakpoint, withAtRule?: boolean) => string;
    width: (key: string) => number;
};
