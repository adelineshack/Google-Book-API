import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { Link } from "react-router-dom";
import Error from "../Errors";
// import Spinner from "../Loader";

function BooksShelf() {
    const [responseMessage, setResponseMessage] = useState("");
    const message = useSelector((state) => state?.store?.errorMessage);
    const booksArr = useSelector((state) => state?.store?.data?.items);
    const isEmpty = useSelector((state) => state?.store?.data?.totalItems);

    useEffect(() => {
        if (message) {
            setResponseMessage(message);
        } else if (isEmpty === 0) {
            setResponseMessage("Жаль, что таких книг у Google API нет :(");
        } else {
            setResponseMessage("");
        }
    }, [message, isEmpty]);

    return (
        <div className="book-shelf">
            {/* <Spinner /> */}
            {responseMessage !== "" ? (
                <Error responseMessage={responseMessage} />
            ) : (
                booksArr?.map((item) => (
                    <Link className="book-shelf__item" key={item?.id} to={item?.id}>
                        <div className="book-shelf__img">
                            <img
                                src={item?.volumeInfo?.imageLinks?.smallThumbnail}
                            />
                        </div>
                        <div className="book-shelf__title">
                            {item?.volumeInfo?.title}
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
}

export default BooksShelf;
