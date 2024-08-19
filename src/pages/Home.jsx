import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>

            <main className="main-content">
                <ProductList />
            </main>

        </div>
    );
};

export default Home;
