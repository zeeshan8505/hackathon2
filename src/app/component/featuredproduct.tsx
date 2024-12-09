import Image from "next/image";

const FeaturedProducts = () => {
    const products = [
        { id: 1, name: 'Library Stool Chair', oldPrice: 39, newPrice: 20, image: '/Image.png' },
        { id: 2, name: 'Library Stool Chair', oldPrice: 39, newPrice: 20, image: '/images/library-stool.jpg' },
        { id: 3, name: 'Library Stool Chair', oldPrice: 39, newPrice: 20, image: '/images/library-stool.jpg' },
        { id: 4, name: 'Library Stool Chair', oldPrice: 39, newPrice: 20, image: '/images/library-stool.jpg' },
    ];

    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-center mb-4">{product.name}</h3>
                        <p className="text-green-500 text-sm text-center mb-4">New</p>
                        <Image src={product.image} alt={product.name} width={100} height={100} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <p className="text-red-600 text-lg font-bold text-center">
                            ${product.newPrice} <span className="text-gray-500 line-through">${product.oldPrice}</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
