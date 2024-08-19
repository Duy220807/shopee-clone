// src/pages/PaymentPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Typography, Button, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const PaymentPage = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    // Tính tổng giá trị đơn hàng
    const totalAmount = cart.reduce((acc, item) => acc + (Number(item.price) || 0), 0);

    const handleBackToCart = () => {
        navigate('/cart');
    };

    const handleConfirmPayment = () => {
        // Xử lý thanh toán ở đây
        alert('Payment successful!');
        navigate('/');
    };

    const pageStyle = {
        padding: '20px',
        backgroundColor: '#f5f5f5',
    };

    const totalAmountStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '20px',
    };

    const buttonStyle = {
        marginTop: '10px',
    };

    return (
        <div style={pageStyle}>
            <Title level={2}>Payment</Title>
            <Text>Review your order and proceed with payment.</Text>
            <Divider />
            <Space direction="vertical" style={{ width: '100%' }}>
                <Text style={totalAmountStyle}>Total Amount: ${Number(totalAmount).toFixed(2)}</Text>
                <Button type="default" size="large" onClick={handleBackToCart} style={buttonStyle}>
                    Back to Cart
                </Button>
                <Button type="primary" size="large" onClick={handleConfirmPayment} style={buttonStyle}>
                    Confirm Payment
                </Button>
            </Space>
        </div>
    );
};

export default PaymentPage;
