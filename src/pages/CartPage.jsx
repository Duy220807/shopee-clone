// src/pages/CartPage.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { List, Card, Button, Typography, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const CartPage = () => {
    const { cart, removeFromCart } = useCart();
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate(); // Hook để chuyển hướng

    // Tính tổng giá trị đơn hàng cho các sản phẩm được chọn
    const totalAmount = selectedItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity || 0), 0);

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const handleCheckout = () => {
        navigate('/payment', { state: { selectedItems } }); // Chuyển hướng đến trang thanh toán với các sản phẩm đã chọn
    };

    const handleProductClick = (item) => {
        setSelectedItems(prevSelected =>
            prevSelected.find(p => p.id === item.id)
                ? prevSelected.filter(i => i.id !== item.id)
                : [...prevSelected, item]
        );
    };

    const pageStyle = {
        padding: '40px',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
    };

    const titleStyle = {
        marginBottom: '30px',
        color: '#333',
        fontSize: '28px',
        fontWeight: '600',
        textAlign: 'center',
    };

    const listStyle = {
        marginTop: '30px',
    };

    const cardStyle = {
        borderRadius: '8px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        cursor: 'pointer',
    };

    const selectedCardStyle = {
        ...cardStyle,
        border: '2px solid #007bff', // Đổi màu viền cho sản phẩm được chọn
    };

    const cardCoverStyle = {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        marginBottom: '12px',
    };

    const buttonStyle = {
        backgroundColor: '#ff4d4f',
        borderColor: '#ff4d4f',
        color: '#fff',
        borderRadius: '4px',
        padding: '8px 16px',
        marginTop: '10px',
        width: '100%',
    };

    const totalAmountStyle = {
        fontSize: '20px',
        fontWeight: '600',
        marginTop: '30px',
        textAlign: 'right',
        color: '#333',
    };

    const checkoutButtonStyle = {
        borderColor: '#007bff',
        color: '#007bff',
        borderRadius: '8px',
        padding: '24px 24px',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '600',
        width: 'auto',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: '2px',
        backgroundColor: 'transparent',
    };

    if (cart.length === 0) {
        return (
            <div style={pageStyle}>
                <Empty description="Your cart is empty" />
            </div>
        );
    }

    return (
        <div style={pageStyle}>
            <Title level={2} style={titleStyle}>Your Cart</Title>
            <List
                grid={{ gutter: 16, column: 5 }}
                dataSource={cart}
                style={listStyle}
                renderItem={item => (
                    <List.Item>
                        <Card
                            title={item.name}
                            cover={<img alt={item.name} src={item.image} style={cardCoverStyle} />}
                            extra={<span>${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>}
                            style={selectedItems.some(p => p.id === item.id) ? selectedCardStyle : cardStyle}
                            onClick={() => handleProductClick(item)}
                        >
                            <div>
                                Quantity: {item.quantity}
                            </div>
                            <Button type="primary" onClick={() => handleRemove(item.id)} style={buttonStyle}>
                                Remove from Cart
                            </Button>
                        </Card>
                    </List.Item>
                )}
            />
            <div style={totalAmountStyle}>
                Total Amount: ${totalAmount.toFixed(2)}
            </div>
            <Button type="primary" ghost style={checkoutButtonStyle} onClick={handleCheckout}>
                Proceed to Checkout
            </Button>
        </div>
    );
};

export default CartPage;
