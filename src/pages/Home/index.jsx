import React from "react";
// import "antd/dist/antd.css";
import "./style.scss";
import SearchForm from "../../components/SearchForm";
import BooksShelf from "../../components/BookShelf";

function Home() {
    return (
        <div className="home">
            <SearchForm />
            <BooksShelf />
        </div>
    );
}

export default Home;
