import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Badge } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useCart } from '../context/CartContext';
import '../styles/Header.css'; // Nhập CSS cho Header

const Header = () => {
    const { getTotalQuantity } = useCart(); // Lấy số lượng sản phẩm từ context
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Shopee Clone</Link>
            </div>
            <div className="search-bar">
                <Input
                    placeholder="Search for products..."
                    prefix={<SearchOutlined />}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress} // Xử lý sự kiện nhấn phím
                />
            </div>
            <div className="auth-links">
                <Link to="/login">
                    <Button icon={<UserOutlined />}>Login</Button>
                </Link>
                <Link to="/register">
                    <Button type="primary">Register</Button>
                </Link>
            </div>
            <div className="cart">
                <Link to="/cart" className="cart-link">
                    <Badge count={getTotalQuantity()} overflowCount={99}>
                        <ShoppingCartOutlined className="cart-icon" />
                    </Badge>
                </Link>
            </div>
        </header>
    );
};

export default Header;
