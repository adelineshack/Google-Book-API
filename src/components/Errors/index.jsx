import React from "react";
import "./style.scss";

function Error({ responseMessage }) {
    return (
        <>
            <div className="error">{responseMessage}</div>
        </>
    );
}

export default Error;
