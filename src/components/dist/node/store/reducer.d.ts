import { ActionTypes, State } from '../types/index';
export declare const fontFamily1 = "\"Roboto\", \"Helvetica\", Helvetica, Arial, sans-serif";
export declare const fontWeights: {
    [key: string]: number;
};
export declare const initialState: State;
export declare function reducer(state: State | undefined, action: ActionTypes): State;
