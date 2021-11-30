import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./pages/BookPage";
import Spinner from "./components/Loader";

ReactDOM.render(
    <Provider store={store}>
        <Spinner />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path=":bookId" element={<BookPage />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "5%", fontSize: "32px" }}>
                            <p>Такой страницы нет существует! Прям совсем нет!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
