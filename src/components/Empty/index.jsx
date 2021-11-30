import React from "react";
import { Empty } from "antd";

function Empty() {
    return (
        <>
            <div className="empty">
                <Empty />
            </div>
        </>
    );
}

export default Empty;
