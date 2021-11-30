import axios from "axios";

const getBooksData = (text) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`);
};

const getBookData = (id) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
};

export const API = {
    getBooksData,
    getBookData,
};
