import { createAction } from "redux-actions";
import { API } from "../services";

export const getDataSuccess = createAction("GET_DATA_SUCCESS");
// export const setDataError = createAction("GET_DATA_ERROR");
export const setLoadStatus = createAction("GET_LOAD_STATUS");
export const setMessage = createAction("SET_MESSAGE");

export const getData = (text) => {
    return async (dispatch) => {
        dispatch(setLoadStatus(true));

        await API.getBooksData(text)
            .then((response) => {
                const { data } = response;
                dispatch(getDataSuccess(data));
                dispatch(setLoadStatus(false));
                dispatch(setMessage(null));
            })
            .catch((error) => {
                console.log(error.response);
                dispatch(setLoadStatus(false));
                if (error?.response?.status === 400) {
                    dispatch(setMessage("Пустой запрос"));
                } else {
                    dispatch(setMessage("Упс! Проблемки с сервером"));
                }
            });
    };
};

export const getBookDataSuccess = createAction("GET_BOOK_DATA_SUCCESS");
// export const setBookDataError = createAction("GET_BOOK_DATA_ERROR");

export const getBookData = (text) => {
    return async (dispatch) => {
        dispatch(setLoadStatus(true));

        await API.getBookData(text)
            .then((response) => {
                const { data } = response;
                dispatch(getBookDataSuccess(data));
                dispatch(setLoadStatus(false));
            })
            .catch((error) => {
                console.log(error.response);
                dispatch(setLoadStatus(false));
                if (error?.response?.status === 503) {
                    dispatch(setMessage("Такой книги не существует"));
                } else {
                    dispatch(setMessage("Упс! Проблемки с сервером"));
                }
            });
    };
};
