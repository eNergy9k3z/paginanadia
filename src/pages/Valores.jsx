
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Valores = () => {
    return (
        <>
            <Navbar />
            <div className="valores-page">
                {/* Hero Header for Values */}
                <div className="values-hero" style={{ backgroundImage: "url('/values-bg.png')" }}>
                    <div className="overlay-light"></div>
                    <div className="container values-content">
                        <h1 className="animate-slide-up">Nuestra Esencia y Propósito</h1>
                        <p className="animate-slide-up delay-100">Más que una marca, somos un movimiento de salud consciente.</p>
                    </div>
                </div>

                <div className="container section-padding">
                    <div className="mission-vision-grid">
                        <div className="mv-card mission">
                            <span className="icon">🌱</span>
                            <h2>Nuestra Misión</h2>
                            <p>Democratizar el acceso a la salud metabólica real. Queremos que cada mujer entienda que no está "rota", simplemente necesita el combustible correcto. Buscamos erradicar la fatiga crónica y el desbalance hormonal a través de educación, ciencia y suplementación de vanguardia.</p>
                        </div>
                        <div className="mv-card vision">
                            <span className="icon">👁️</span>
                            <h2>Nuestra Visión</h2>
                            <p>Un mundo donde la salud preventiva sea la norma, no la excepción. Visualizamos una comunidad de mujeres empoderadas, llenas de vitalidad, que toman decisiones informadas sobre su cuerpo y envejecen con dignidad y fuerza.</p>
                        </div>
                    </div>

                    <div className="core-values mt-5">
                        <h2 className="text-center" style={{ marginBottom: '4rem' }}>Valores que nos Guían</h2>
                        <div className="values-grid">
                            <div className="value-item">
                                <div className="value-icon">🔬</div>
                                <h3>Ciencia Integritiva</h3>
                                <p>No creemos en modas, creemos en evidencia. Todo lo que recomendamos está respaldado por estudios y práctica clínica real.</p>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">❤️</div>
                                <h3>Empatía Radical</h3>
                                <p>Entendemos tu dolor porque lo hemos visto y vivido. No juzgamos, acompañamos tu proceso con compasión.</p>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">🧠</div>
                                <h3>Educación Constante</h3>
                                <p>El conocimiento es poder. Nos esforzamos por traducir conceptos médicos complejos en herramientas prácticas para ti.</p>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">✨</div>
                                <h3>Excelencia y Calidad</h3>
                                <p>Solo ofrecemos lo mejor. Desde la pureza de nuestros ingredientes hasta la atención que recibes, buscamos la excelencia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <style jsx>{`
        .values-hero {
            height: 60vh;
            background-size: cover;
            background-position: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--dark); 
        }
        .overlay-light {
            position: absolute;
            top:0; left:0; width:100%; height:100%;
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(2px);
        }
        .values-content {
            position: relative;
            z-index: 2;
        }
        .values-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            color: var(--dark);
            text-shadow: 0 2px 10px rgba(255,255,255,0.5);
        }
        .values-content p {
            font-size: 1.5rem;
            font-weight: 500;
        }

        .mission-vision-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 4rem;
        }
        .mv-card {
            padding: 3rem;
            border-radius: 20px;
            background: #fff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
            position: relative;
            overflow: hidden;
            border: 1px solid #f0f0f0;
        }
        .mv-card:hover { transform: translateY(-5px); }
        .mv-card::before {
            content:'';
            position: absolute;
            top:0; left:0; width: 6px; height: 100%;
            background: var(--secondary);
        }
        .mv-card.vision::before { background: var(--primary); }
        
        .mv-card .icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
        .mv-card h2 { margin-bottom: 1rem; color: var(--dark); }
        .mv-card p { font-size: 1.1rem; line-height: 1.7; color: var(--text-light); }

        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        .value-item {
            text-align: center;
            padding: 2rem;
            background: #fdfdfd;
            border-radius: 16px;
            border: 1px solid #eee;
        }
        .value-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: var(--light-bg);
            width: 80px;
            height: 80px;
            line-height: 80px;
            border-radius: 50%;
            margin: 0 auto 1rem;
        }
        .value-item h3 { margin-bottom: 0.5rem; color: var(--primary); }

        @media(max-width: 768px) {
            .mission-vision-grid { grid-template-columns: 1fr; }
            .values-hero h1 { font-size: 2.5rem; }
        }
      `}</style>
        </>
    );
};

export default Valores;
