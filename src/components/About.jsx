import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section-padding bg-light" id="sobre-mi">
            <div className="container about-wrapper">
                <div className="about-text">
                    <span className="subtitle" style={{ color: 'var(--primary)', fontWeight: '600' }}>Conoce a tu experta</span>
                    <h2>Dra. Nadia Sanchez Cano</h2>
                    <p className="lead">Especialista en salud hormonal y medicina regenerativa.</p>
                    <p>
                        Mi misión es ayudar a las mujeres a recuperar su vitalidad y equilibrio a través de soluciones científicamente probadas.
                        Con las cetonas exógenas, proporcionamos a tu cuerpo el combustible preferido por tus células, permitiéndote
                        vivir con más energía, claridad mental y bienestar emocional.
                    </p>
                    <p>
                        En mi práctica clínica, he observado cómo el estrés moderno y la alimentación deficiente impactan negativamente en nuestro sistema endocrino.
                        Por eso, defiendo un enfoque integral que combina la suplementación inteligente con cambios de hábitos sostenibles.
                    </p>
                    <p>
                        No se trata solo de suplementos, se trata de una transformación integral respaldada por la ciencia y diseñada para tu estilo de vida.
                        Juntas podemos reprogramar tu metabolismo para que trabaje a tu favor, no en tu contra.
                    </p>
                    <a href="/trayectoria" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem 2rem', fontSize: '1.1rem' }}>Ver Mi Trayectoria</a>
                </div>
                <div className="about-image">
                    <div className="image-wrapper-about">
                        <img src="/doctor-silhouette.png" alt="Dra. Nadia Sanchez Cano" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
