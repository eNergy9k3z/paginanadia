
import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
    {
        id: 1,
        image: '/hero-slide-1.png',
        subtitle: 'TRANSFORMACIÓN METABÓLICA & SALUD INTEGRAL',
        title: 'Recupera tu Vitalidad, Potencia tu Mente',
        desc: 'Asesoría especializada en cetosis terapéutica y suplementación inteligente para mujeres que buscan su mejor versión.'
    },
    {
        id: 2,
        image: '/hero-slide-2-final.png',
        subtitle: 'CIENCIA AVANZADA & BIO-IDÉNTICA',
        title: 'El Combustible Premium para tus Células',
        desc: 'Experimenta la claridad mental y la energía sostenida con nuestra tecnología de cetonas exógenas patentada.'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-slider" id="inicio">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide-item ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="overlay"></div>
                    <div className="container hero-content-center">
                        <span className="hero-subtitle animate-slide-up">{slide.subtitle}</span>
                        <h1 className="hero-title animate-slide-up delay-100">{slide.title}</h1>
                        <p className="hero-desc animate-slide-up delay-200">{slide.desc}</p>

                        <div className="hero-buttons animate-slide-up delay-300">
                            <a href="#contacto" className="btn btn-hero-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                Agendar Asesoría
                            </a>
                            <a href="#productos" className="btn btn-hero-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Ver Productos
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slider Indicators (Dots) */}
            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
