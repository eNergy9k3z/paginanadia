import React from 'react';
import './ProductSection.css';

const products = [
    {
        id: 1,
        name: "KETO//OS NAT®",
        description: "Cetonas exógenas puras para energía inmediata y enfoque mental.",
        price: "Consultar",
        image: "/product-mockup.png",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "NAT20 Starter Pack",
        description: "Tu kit de inicio con 20 sobres de diferentes sabores para probar.",
        price: "Consultar",
        image: "/product-mockup.png",
        tag: "Popular"
    },
    {
        id: 3,
        name: "MitoPlex",
        description: "Electrolitos mejorados para potenciar tu hidratación y mitocondrias.",
        price: "Consultar",
        image: "/product-mockup.png",
        tag: "Essential"
    },
    {
        id: 4,
        name: "Better Bundle",
        description: "El paquete completo para una transformación total.",
        price: "Consultar",
        image: "/product-mockup.png",
        tag: "Value"
    },
    {
        id: 5,
        name: "KETO//KREME®",
        description: "Potenciador funcional para tu café. Colágeno y grasas saludables.",
        price: "Consultar",
        image: "/product-mockup.png",
        tag: "Novedad"
    },
    {
        id: 6,
        name: "PROVIT®",
        description: "Proteína premium infusionada con cetonas para recuperación muscular.",
        price: "Consultar",
        image: "/product-mockup.png",
        tag: "Fitness"
    }
];

const ProductSection = () => {
    return (
        <section className="section-padding" id="productos">
            <div className="container">
                <div className="text-center">
                    <span className="subtitle" style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase' }}>Nuestros Productos</span>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Potencia Tu Salud</h2>
                </div>

                <div className="product-grid">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="card-image">
                                <span className="tag">{product.tag}</span>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="card-body">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="card-footer">
                                    <span className="price">{product.price}</span>
                                    <button className="btn btn-sm btn-outline">Ver Detalles</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
