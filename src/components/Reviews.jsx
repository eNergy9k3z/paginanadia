
import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Mariana G.",
            role: "Mamá y Emprendedora",
            image: "/review1.png",
            text: "Desde que empecé con las cetonas, mi niebla mental desapareció. Puedo manejar mi negocio y mis hijos sin sentir que me voy a desmayar a las 3pm. ¡Es un cambio de vida total!",
            stars: 5
        },
        {
            id: 2,
            name: "Claudia R.",
            role: "Practicante de Yoga",
            image: "/review2.png",
            text: "Siempre pensé que mi falta de energía era 'normal' por la edad. La Dra. Nadia me enseñó que no es así. He recuperado la vitalidad que tenía a los 20 años. 100% recomendado.",
            stars: 5
        },
        {
            id: 3,
            name: "Sofia L.",
            role: "Abogada",
            image: null, // Fallback initial
            text: "Lo que más valoro es la base científica. No es otro producto milagro, hay ciencia real detrás. Mi digestión mejoró y mi ciclo hormonal por fin es regular.",
            stars: 5
        }
    ];

    return (
        <section className="section-padding reviews-section" id="testimonios">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <span className="subtitle">Historias Reales</span>
                    <h2>Lo que dicen nuestras pacientes</h2>
                    <p className="lead-text">Resultados tangibles en mujeres reales.</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-img">
                                    {review.image ?
                                        <img src={review.image} alt={review.name} /> :
                                        <div className="initial-avatar">{review.name.charAt(0)}</div>
                                    }
                                </div>
                                <div className="reviewer-info">
                                    <h4>{review.name}</h4>
                                    <span>{review.role}</span>
                                    <div className="stars">
                                        {[...Array(review.stars)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="review-body">
                                <p>"{review.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
            .reviews-section {
                background: linear-gradient(to bottom, #fff, #f9fbfd);
            }
            .reviews-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
            }
            .review-card {
                background: white;
                padding: 2rem;
                border-radius: 16px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                transition: transform 0.3s ease;
                border: 1px solid #eee;
            }
            .review-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .review-header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            .reviewer-img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                overflow: hidden;
                border: 2px solid var(--secondary);
                flex-shrink: 0;
            }
            .reviewer-img img {
                width: 100%; height: 100%; object-fit: cover;
            }
            .initial-avatar {
                width: 100%; height: 100%;
                background: var(--dark);
                color: var(--secondary);
                display: flex; align-items: center; justify-content: center;
                font-size: 1.5rem; font-weight: bold;
            }
            .reviewer-info h4 { margin: 0; font-size: 1.1rem; color: var(--dark); }
            .reviewer-info span { font-size: 0.85rem; color: #777; display: block; margin-bottom: 2px; }
            .stars { color: #FFD700; font-size: 1rem; display: flex; gap: 2px; }
            
            .review-body p {
                font-style: italic;
                color: var(--text-color);
                line-height: 1.6;
                font-size: 1.05rem;
            }
        `}</style>
        </section>
    );
};

export default Reviews;
