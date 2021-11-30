import axios from "axios";

const getBooksData = (text) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`, {
        params: {
            startIndex: 0,
            maxResults: 15,
        },
    });
};

const getBookData = (id) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
};

export const API = {
    getBooksData,
    getBookData,
};
