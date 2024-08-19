import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'antd';
import ProductCard from '../components/ProductCard';
import CategoryMenu from '../components/CategoryMenu'; // Import CategoryMenu
import PromotionCarousel from '../components/PromotionCarousel'; // Import PromotionCarousel
import { generateFakeProducts } from '../utils/fakeProducts';
import '../styles/ProductList.css'; // Import CSS

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fakeProducts = generateFakeProducts(40);
        setProducts(fakeProducts);
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.key);
        // Logic to filter products by category
    };

    return (
        <div className="product-list">
            <PromotionCarousel /> {/* Thêm slider khuyến mại */}
            <Row gutter={16} style={{ marginTop: '16px' }}>
                <Col span={4} className="category-menu"> {/* CategoryMenu chiếm 1/5 chiều ngang */}
                    <CategoryMenu onCategoryChange={handleCategoryChange} />
                </Col>
                <Col span={20}> {/* ProductList chiếm 4/5 chiều ngang */}
                    <Row gutter={[16, 24]}>
                        {currentProducts.map(product => (
                            <Col span={6} key={product.id} style={{ marginBottom: '20px' }}> {/* Hiển thị 4 sản phẩm mỗi hàng */}
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                    <div className="pagination-container" style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Pagination
                            current={currentPage}
                            pageSize={productsPerPage}
                            total={products.length}
                            onChange={handlePageChange}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductList;
