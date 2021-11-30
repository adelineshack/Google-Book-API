import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Error from "../../components/Errors";
import { getBookData } from "../../redux/actions";
// import Spinner from "../../components/Loader";
import "./style.scss";

function BookPage() {
    const dispatch = useDispatch();
    let { bookId } = useParams();
    const currentBook = useSelector(
        (state) => state?.store?.currentBook?.volumeInfo
    );
    const erorrMessage = useSelector((state) => state?.store?.errorMessage);

    useEffect(() => {
        dispatch(getBookData(bookId));
    }, [bookId]);

    return (
        <div className="book-page">
            {/* <Spinner /> */}
            {erorrMessage ? (
                <Error responseMessage={erorrMessage} />
            ) : (
                <>
                    <div className="book-page__image">
                        <img src={currentBook?.imageLinks.small} alt="" />
                    </div>
                    <div className="book-page__wrapper">
                        <div className="book-page__title">{currentBook?.title}</div>
                        <div className="book-page__author">
                            {currentBook?.authors?.[0]}
                        </div>
                        <div className="book-page__subtitle">
                            {currentBook?.subtitle}
                        </div>
                        <div className="book-page__lang">
                            Язык: {currentBook?.language}
                        </div>
                        <div
                            className="book-page__description"
                            dangerouslySetInnerHTML={{
                                __html: currentBook?.description,
                            }}
                        ></div>

                        <div className="book-shelf__categories">
                            Категории:
                            {currentBook?.categories?.map((item, i) => (
                                <div className="book-shelf__category" key={i}>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <a
                            href={currentBook?.infoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Подробнее
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}

export default BookPage;
