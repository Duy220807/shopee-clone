import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
    return (
        <Input
            placeholder="Search for products..."
            prefix={<SearchOutlined />}
        />
    );
};

export default SearchBar;
