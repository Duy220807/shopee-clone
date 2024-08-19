import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Row, Col, Divider, notification, InputNumber } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetail.css';

const { Meta } = Card;

const ProductDetail = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Lấy dữ liệu sản phẩm từ state
    const { addToCart } = useCart(); // Sử dụng hook để lấy addToCart

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    const price = parseFloat(product.price) || 0;

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        if (quantity <= 0) {
            notification.error({
                message: 'Invalid Quantity',
                description: 'Please enter a valid quantity.',
                placement: 'topRight',
                duration: 2.5,
            });
            return;
        }
        addToCart({ ...product, quantity });
        notification.success({
            message: 'Product Added',
            description: `${product.name} has been added to your cart.`,
            placement: 'topRight',
            duration: 2.5,
        });
    };

    return (
        <div className="product-detail">
            <Row gutter={16}>
                <Col span={12}>
                    <Card
                        cover={<img alt={product.name} src={product.image} />}
                        className="product-image-card"
                    />
                </Col>
                <Col span={12}>
                    <Card className="product-info-card">
                        <Meta
                            title={product.name}
                            description={`$${price.toFixed(2)}`}
                        />
                        <Divider />
                        <p>{product.description}</p>
                        <InputNumber
                            min={1}
                            defaultValue={1}
                            onChange={handleQuantityChange}
                            style={{ marginBottom: '16px' }}
                        />
                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            size="large"
                            onClick={handleAddToCart}
                        >
                            Add {quantity > 1 ? `${quantity} Items` : 'to Cart'}
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ProductDetail;
