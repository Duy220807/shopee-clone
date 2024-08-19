// src/components/CategoryMenu.jsx
import React from 'react';
import { Menu } from 'antd';
import '../styles/CategoryMenu.css'

const CategoryMenu = ({ onCategoryChange }) => {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['all']}
            onClick={onCategoryChange}
        >
            <Menu.Item key="all">All</Menu.Item>
            <Menu.Item key="electronics">Electronics</Menu.Item>
            <Menu.Item key="clothing">Clothing</Menu.Item>
            <Menu.Item key="home">Home</Menu.Item>
            {/* Thêm các danh mục khác nếu cần */}
        </Menu>
    );
};

export default CategoryMenu;
