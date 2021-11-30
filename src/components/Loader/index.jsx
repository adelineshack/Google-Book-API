import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

function Spinner() {
    const isLoading = useSelector((state) => state.store.isLoading);

    return (
        <>
            {isLoading && (
                <div className="spinner">
                    <Spin size="large" />
                </div>
            )}
        </>
    );
}

export default Spinner;
