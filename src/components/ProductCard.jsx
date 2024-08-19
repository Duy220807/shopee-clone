import React from 'react';
import { Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css'

const { Meta } = Card;

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    return (
        <Card
            hoverable
            cover={<img alt={product.name} src={product.image} />}
            actions={[
                <ShoppingCartOutlined key="add-to-cart" />,
            ]}
            onClick={handleCardClick} // Điều hướng khi người dùng click vào sản phẩm
        >
            <Meta title={product.name} description={`$${product.price}`} />
        </Card>
    );
};

export default ProductCard;
