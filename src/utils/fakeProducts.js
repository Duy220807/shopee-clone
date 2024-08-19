// Tạo sản phẩm giả với hình ảnh từ picsum.photos
export const generateFakeProducts = (num) => {
    const products = [];
    for (let i = 1; i <= num; i++) {
        products.push({
            id: i.toString(),
            name: `Product ${i}`,
            image: `https://picsum.photos/500/300?random=${i}`, // Sử dụng picsum.photos với tham số random để đảm bảo hình ảnh độc đáo
            price: (Math.random() * 100).toFixed(2), // Giá ngẫu nhiên từ 0 đến 100
            description: `This is a description for Product ${i}. It has many great features and benefits.`,
        });
    }
    return products;
};
