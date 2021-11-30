import React, { useCallback } from "react";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import "./style.scss";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/actions";
const { Search } = Input;

function SearchForm() {
    const dispatch = useDispatch();

    const onSearch = useCallback((value) => {
        dispatch(getData(value));
    }, []);

    return (
        <div className="search-form">
            <Space>
                <Search
                    placeholder="JavaScript для чайников"
                    allowClear
                    onSearch={onSearch}
                    size="large"
                    style={{ width: 600 }}
                />
            </Space>
        </div>
    );
}

export default SearchForm;
