import { handleActions } from "redux-actions";
import {
    getDataSuccess,
    getBookDataSuccess,
    setLoadStatus,
    setMessage,
} from "../actions";

const defaultState = {
    data: null,
    currentBook: null,
    isLoading: false,
    dataError: false,
    currentBookError: false,
    errorMessage: null,
};

const reducer = handleActions(
    {
        [getDataSuccess]: (state, { payload }) => {
            return { ...state, data: payload };
        },
        [getBookDataSuccess]: (state, { payload }) => {
            return { ...state, currentBook: payload };
        },
        [setLoadStatus]: (state, { payload }) => {
            return { ...state, isLoading: payload };
        },
        [setMessage]: (state, { payload }) => {
            return { ...state, errorMessage: payload };
        },
    },
    defaultState
);

export default {
    store: reducer,
};
