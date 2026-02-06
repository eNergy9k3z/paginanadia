
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tienda = () => {
    // Extended Product Database with categories and benefits
    const products = [
        {
            id: 1,
            name: "Ketones Nat - Fruit Punch",
            price: 2500,
            image: "/product-ketones.png",
            description: "Caja con 20 sobres. Energía inmediata, quema de grasa y claridad mental.",
            badge: "Best Seller",
            category: "Cetonas Líquidas",
            benefits: ["Energía", "Pérdida de Grasa", "Enfoque"]
        },
        {
            id: 2,
            name: "Ketones Nat - Lima Limón",
            price: 2500,
            image: "/product-ketones.png",
            description: "Sabor refrescante. Ideal para tomar por la mañana antes de entrenar.",
            badge: null,
            category: "Cetonas Líquidas",
            benefits: ["Energía", "Rendimiento Deportivo"]
        },
        {
            id: 3,
            name: "Pack Inicial (5 Sabores)",
            price: 850,
            image: "/product-ketones.png",
            description: "Prueba la variedad de sabores antes de comprometerte con una caja completa.",
            badge: "Ideal Principiantes",
            category: "Kits de Inicio",
            benefits: ["Energía", "Prueba"]
        },
        {
            id: 4,
            name: "MitoPlex Electrolitos",
            price: 1200,
            image: "/product-ketones.png",
            description: "Hidratación profunda a nivel mitocondrial. Potencia el efecto de las cetonas.",
            badge: "Esencial",
            category: "Electrolitos",
            benefits: ["Hidratación", "Recuperación"]
        },
        {
            id: 5,
            name: "KETO//KREME®",
            price: 1800,
            image: "/product-ketones.png",
            description: "El compañero perfecto para tu café. Colágeno, MCT y vitaminas para la piel.",
            badge: "Funcional",
            category: "Suplementos",
            benefits: ["Piel y Cabello", "Energía", "Digestión"]
        },
        {
            id: 6,
            name: "PROVIT® Proteína",
            price: 2100,
            image: "/product-ketones.png",
            description: "Proteína de suero de alta calidad infusionada con energía cetónica.",
            badge: "Sport",
            category: "Suplementos",
            benefits: ["Músculo", "Recuperación"]
        },
        { // NEW
            id: 7,
            name: "Ketones Nat - Frambuesa Negra",
            price: 2500,
            image: "/product-ketones.png",
            description: "Un toque dulce y ácido. Favorito de muchos por su sabor intenso.",
            badge: "Nuevo",
            category: "Cetonas Líquidas",
            benefits: ["Energía", "Pérdida de Grasa"]
        },
        { // NEW
            id: 8,
            name: "Keto Kick - Chill",
            price: 1500,
            image: "/product-ketones.png",
            description: "Shot de cetonas listo para beber. Versión Chill para relajación sin perder foco.",
            badge: "On-the-go",
            category: "Cetonas Líquidas",
            benefits: ["Enfoque", "Relajación"]
        },
        { // NEW
            id: 9,
            name: "Signal//OS",
            price: 1600,
            image: "/product-ketones.png",
            description: "Cápsulas para reparación del ADN y mejora de la comunicación celular.",
            badge: "Anti-Aging",
            category: "Suplementos",
            benefits: ["Anti-Aging", "Inmunidad"]
        },
        { // NEW
            id: 10,
            name: "Better Broth - Tomillo",
            price: 1900,
            image: "/product-ketones.png",
            description: "Caldo de hueso keto con cetonas. Nutrición reconfortante.",
            badge: null,
            category: "Suplementos",
            benefits: ["Digestión", "Inmunidad"]
        },
        { // NEW
            id: 11,
            name: "Reto 10 Días",
            price: 3500,
            image: "/product-ketones.png",
            description: "Kit completo de transformación: 20 Cetonas + Guía de Alimentación.",
            badge: "Reto",
            category: "Kits de Inicio",
            benefits: ["Pérdida de Grasa", "Energía"]
        },
        { // NEW
            id: 12,
            name: "Shaker Premium",
            price: 300,
            image: "/product-ketones.png",
            description: "Botella mezcladora libre de BPA con el logo de la marca.",
            badge: "Accesorio",
            category: "Accesorios",
            benefits: []
        }
    ];

    const [activeCategory, setActiveCategory] = useState("Todos");
    const [activeBenefit, setActiveBenefit] = useState(null);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} agregado al carrito (Simulación)`);
    };

    // Filter Logic
    const filteredProducts = products.filter(product => {
        // If sorting by category
        if (activeCategory !== "Todos" && product.category !== activeCategory) {
            return false;
        }
        // If sorting by benefit
        if (activeBenefit && !product.benefits.includes(activeBenefit)) {
            return false;
        }
        return true;
    });

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        setActiveBenefit(null); // Reset benefit filter when changing category for clarity
    };

    const handleBenefitClick = (benefit) => {
        setActiveBenefit(benefit === activeBenefit ? null : benefit); // Toggle
        setActiveCategory("Todos"); // Reset category to search across all for this benefit
    };

    return (
        <div className="tienda-page">
            <Navbar />

            {/* Header */}
            <header className="shop-header">
                <div className="container">
                    <h1>Tienda Oficial</h1>
                    <p>Suplementación Bio-Idéntica de Calidad Farmacéutica</p>
                </div>
            </header>

            <div className="container section-padding">
                <div className="shop-grid">
                    {/* Filters Sidebar */}
                    <aside className="shop-sidebar">
                        <h3>Categorías</h3>
                        <ul>
                            <li
                                className={activeCategory === "Todos" ? "active" : ""}
                                onClick={() => handleCategoryClick("Todos")}
                            >Todos</li>
                            <li
                                className={activeCategory === "Cetonas Líquidas" ? "active" : ""}
                                onClick={() => handleCategoryClick("Cetonas Líquidas")}
                            >Cetonas Líquidas</li>
                            <li
                                className={activeCategory === "Electrolitos" ? "active" : ""}
                                onClick={() => handleCategoryClick("Electrolitos")}
                            >Electrolitos</li>
                            <li
                                className={activeCategory === "Suplementos" ? "active" : ""}
                                onClick={() => handleCategoryClick("Suplementos")}
                            >Suplementos</li>
                            <li
                                className={activeCategory === "Kits de Inicio" ? "active" : ""}
                                onClick={() => handleCategoryClick("Kits de Inicio")}
                            >Kits de Inicio</li>
                            <li
                                className={activeCategory === "Accesorios" ? "active" : ""}
                                onClick={() => handleCategoryClick("Accesorios")}
                            >Accesorios</li>
                        </ul>

                        <h3 className="mt-4">Beneficios</h3>
                        <ul>
                            {["Energía", "Pérdida de Grasa", "Enfoque", "Hidratación", "Recuperación", "Anti-Aging", "Digestión"].map(benefit => (
                                <li
                                    key={benefit}
                                    className={activeBenefit === benefit ? "active" : ""}
                                    onClick={() => handleBenefitClick(benefit)}
                                >
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Product List */}
                    <div className="products-list">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div className="shop-card" key={product.id}>
                                    <div className="shop-card-img">
                                        {product.badge && <span className="shop-badge">{product.badge}</span>}
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="shop-card-body">
                                        <h3>{product.name}</h3>
                                        <p className="desc">{product.description}</p>
                                        <div className="price-row">
                                            <span className="price">${product.price} MXN</span>
                                            <button className="btn btn-sm btn-primary" onClick={() => addToCart(product)}>
                                                Agregar +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No se encontraron productos con estos filtros.</p>
                                <button className="btn btn-outline" onClick={() => { setActiveCategory("Todos"); setActiveBenefit(null) }}>Ver Todos</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
            <style jsx>{`
                .shop-header {
                    background: var(--dark);
                    color: white;
                    padding: 120px 0 60px;
                    text-align: center;
                }
                .shop-header h1 { font-family: var(--font-heading); color: var(--secondary); margin-bottom: 0.5rem; }
                
                .shop-grid {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                    gap: 3rem;
                }

                .shop-sidebar h3 { font-size: 1.1rem; margin-bottom: 1rem; color: var(--dark); border-bottom: 2px solid var(--secondary); padding-bottom: 0.5rem; display: inline-block; }
                .shop-sidebar ul { list-style: none; padding: 0; }
                .shop-sidebar li { margin-bottom: 0.5rem; cursor: pointer; color: #666; transition: 0.3s; padding: 5px 10px; border-radius: 4px; }
                .shop-sidebar li:hover { background: #f0f0f0; color: var(--primary); }
                .shop-sidebar li.active { background: var(--secondary); color: var(--dark); font-weight: 600; }

                .products-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .shop-card {
                    background: white;
                    border: 1px solid #eee;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .shop-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }

                .shop-card-img {
                    height: 250px;
                    background: #f9f9f9;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                }
                .shop-card-img img {
                    max-height: 100%;
                    max-width: 100%;
                    object-fit: contain;
                    transition: transform 0.3s ease;
                }
                .shop-card:hover .shop-card-img img { transform: scale(1.05); }

                .shop-badge {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: var(--secondary);
                    color: var(--dark);
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .shop-card-body {
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .shop-card-body h3 { font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--dark); }
                .desc { font-size: 0.9rem; color: #777; margin-bottom: 1rem; line-height: 1.5; min-height: 40px; }
                
                .price-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                }
                .price { font-weight: 700; font-size: 1.1rem; color: var(--primary); }
                
                .no-results {
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 3rem;
                    background: #f9f9f9;
                    border-radius: 8px;
                }

                @media (max-width: 768px) {
                    .shop-grid { grid-template-columns: 1fr; }
                    .shop-sidebar { display: none; } /* Could implement a mobile filter drawer later */
                }
            `}</style>
        </div>
    );
};

export default Tienda;
