
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Process from '../components/Process';
import ProductSection from '../components/ProductSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingControls from '../components/FloatingControls';
import Reviews from '../components/Reviews';

const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <section className="section-padding bg-white">
                <div className="container text-center">
                    <h2 className="section-title">Imagina que tu cuerpo trabaja contigo, no en tu contra</h2>
                    <div className="grid-3-col">
                        <div className="benefit-item">
                            <h3>Despierta con Energía</h3>
                            <p>Olvídate de posponer la alarma. Siente vitalidad real desde el primer momento del día.</p>
                        </div>
                        <div className="benefit-item">
                            <h3>Claridad Mental</h3>
                            <p>Adiós a la neblina mental. Recupera tu enfoque y agudeza cognitiva.</p>
                        </div>
                        <div className="benefit-item">
                            <h3>Ciclo en Balance</h3>
                            <p>Reconoce patrones en tu ciclo en lugar de dejarte arrollar por el SPM o cambios de humor.</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="lead-text">
                            Muchas mujeres intentan equilibrarse con dieta o suplementos, pero si el metabolismo está bloqueado, nada funciona.
                            Aquí es donde entran las <strong>Cetonas Bio-idénticas</strong>.
                        </p>
                    </div>
                </div>
                <style jsx>{`
            .grid-3-col {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 3rem;
            }
            .benefit-item {
                padding: 2rem;
                background: #F8FAFB;
                border-radius: 16px;
                transition: transform 0.3s ease;
            }
            .benefit-item:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            }
            .benefit-item h3 { color: var(--primary); margin-bottom: 1rem; }
            .lead-text { max-width: 800px; margin: 3rem auto 0; font-size: 1.1rem; color: var(--text-light); }
            .mt-4 { margin-top: 2rem; }
        `}</style>
            </section>
            <Features />
            <About />
            <Process />
            <Reviews />
            <div className="text-center section-padding" style={{ background: '#f4f4f4' }}>
                <h2>¿Te identificas con esto?</h2>
                <div className="container" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
                    <div className="accordion">
                        {[
                            {
                                title: "✨ Te sientes agotada aunque \"haces todo bien\".",
                                content: "A menudo, la fatiga crónica no es falta de sueño, sino falta de eficiencia metabólica. Tus células pueden haber olvidado cómo usar la grasa como combustible. Las cetonas reactivan esta vía natural de energía."
                            },
                            {
                                title: "✨ Sufres de SPM, antojos o cambios de humor.",
                                content: "Los picos de glucosa e insulina desestabilizan tus hormonas. Las cetonas proporcionan una energía estable que calma la ansiedad por dulce y ayuda a regular el ciclo hormonal."
                            },
                            {
                                title: "✨ Luchas con Endometriosis, SOP o resistencia a la insulina.",
                                content: "La inflamación crónica es la raíz de estos problemas. El beta-hidroxibutirato (R-BHB) es un potente antiinflamatorio natural que ayuda a reducir la inflamación sistémica y mejorar la sensibilidad a la insulina."
                            },
                            {
                                title: "✨ Sientes que tu cuerpo está en \"modo ahorro\" o bajo estrés.",
                                content: "El estrés eleva el cortisol, lo que bloquea la quema de grasa. Las cetonas envían una señal de seguridad metabólica a tu cuerpo, permitiéndole salir del modo supervivencia y liberar reservas."
                            },
                            {
                                title: "✨ Quieres pensar con claridad pero te sientes nublada.",
                                content: "El cerebro ama las cetonas. A diferencia de la glucosa, atraviesan la barrera hematoencefálica fácilmente, eliminando la neblina mental y mejorando el foco y la concentración inmediatamente."
                            }
                        ].map((item, index) => (
                            <div key={index} className={`accordion-item ${openIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                                <div className="accordion-header">
                                    <h3>{item.title}</h3>
                                    <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
                                </div>
                                <div className="accordion-content" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <a href="/ciencia" className="btn btn-primary">Descubre la Ciencia detrás</a>
                    </div>
                </div>
                <style jsx>{`
            .accordion {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .accordion-item {
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                overflow: hidden;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .accordion-item:hover {
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }
            .accordion-item.active {
                border-left: 4px solid var(--primary);
            }
            .accordion-header {
                padding: 1.25rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .accordion-header h3 {
                margin: 0;
                font-size: 1.1rem;
                font-weight: 500;
                color: var(--dark);
            }
            .toggle-icon {
                font-size: 1.5rem;
                color: var(--primary);
                font-weight: bold;
                line-height: 1;
            }
            .accordion-content {
                height: auto;
                overflow: hidden;
                transition: max-height 0.4s ease;
                background: #fafafa;
            }
            .accordion-content p {
                padding: 0 1.25rem 1.25rem;
                margin: 0;
                color: var(--text-light);
                font-size: 0.95rem;
                line-height: 1.6;
            }
        `}</style>
            </div>
            <ProductSection />
            <Contact />
            <Footer />
            <FloatingControls />
        </div>
    );
};

export default Home;
