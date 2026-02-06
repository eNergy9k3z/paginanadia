import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Ciencia = () => {
    return (
        <div className="ciencia-page">
            <Navbar />

            <header className="science-hero">
                <div className="container">
                    <h1>La Ciencia detrás de las Cetonas</h1>
                    <p>Entiende cómo la tecnología de Fermentación Natural transforma tu metabolismo.</p>
                </div>
            </header>

            <section className="section-padding container">
                <div className="science-block">
                    <h2>¿Qué son las Cetonas Exógenas?</h2>
                    <p>
                        Las cetonas son una fuente de energía primitiva y eficiente que nuestro cuerpo produce naturalmente
                        en periodos de ayuno o restricción de carbohidratos. Sin embargo, alcanzar este estado (cetosis)
                        puede ser difícil y tardado.
                    </p>
                    <p>
                        Las <strong>Cetonas Exógenas Bio-Idénticas (R-BHB)</strong> son idénticas a las que produce tu hígado,
                        permitiéndote entrar en estado de cetosis en menos de 60 minutos, sin necesidad de dietas estrictas.
                    </p>
                </div>

                <div className="science-grid">
                    <div className="card">
                        <h3>🧪 Fermentación Natural</h3>
                        <p>
                            Nuestras cetonas se obtienen mediante un proceso de fermentación natural patentado,
                            lo que garantiza que sean 100% bio-disponibles y absorbibles por tu cuerpo.
                        </p>
                    </div>
                    <div className="card">
                        <h3>⚡ Energía Dual</h3>
                        <p>
                            Al combinar cetonas con una dieta equilibrada, tu cerebro y músculos aprenden a usar
                            tanto glucosa como grasa (cetonas) como combustible (Flexibilidad Metabólica).
                        </p>
                    </div>
                    <div className="card">
                        <h3>🧠 Salud Cognitiva</h3>
                        <p>
                            Las cetonas atraviesan la barrera hematoencefálica, proporcionando energía limpia e instantánea
                            a tus neuronas, eliminando la neblina mental y mejorando el enfoque.
                        </p>
                    </div>
                </div>

                <div className="science-details">
                    <div className="detail-row">
                        <div className="detail-text">
                            <h3>R-BHB vs. Mezclas Racémicas</h3>
                            <p>
                                Muchas cetonas en el mercado son sintéticas (mezcla L y R). Tu cuerpo solo reconoce la forma R-BHB.
                                Nuestra fórmula utiliza únicamente la isometría R, asegurando máxima absorción y cero carga tóxica.
                            </p>
                        </div>
                        <div className="detail-img">
                            {/* Placeholder schematic or molecule if available, using CSS box for now */}
                            <div className="molecule-box">R-BHB</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container text-center">
                    <h2>Prueba la Tecnología</h2>
                    <p>Siente la diferencia en 60 minutos.</p>
                    <a href="/tienda" className="btn btn-secondary">Ir a la Tienda</a>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                .science-hero {
                    background: linear-gradient(135deg, var(--dark) 0%, #2c3e50 100%);
                    color: white;
                    padding: 150px 0 80px;
                    text-align: center;
                }
                .science-hero h1 { font-family: var(--font-heading); font-size: 2.5rem; margin-bottom: 1rem; color: var(--secondary); }
                .science-hero p { font-size: 1.2rem; max-width: 600px; margin: 0 auto; opacity: 0.9; }

                .science-block {
                    max-width: 800px;
                    margin: 0 auto 4rem;
                    text-align: center;
                }
                .science-block h2 { color: var(--primary); margin-bottom: 1.5rem; }
                .science-block p { font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 1rem; }

                .science-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 4rem;
                }
                .card {
                    background: #f8fafb;
                    padding: 2rem;
                    border-radius: 12px;
                    transition: transform 0.3s ease;
                }
                .card:hover { transform: translateY(-5px); }
                .card h3 { color: var(--dark); margin-bottom: 1rem; }

                .science-details {
                    margin: 4rem 0;
                }
                .detail-row {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    flex-wrap: wrap;
                }
                .detail-text { flex: 1; min-width: 300px; }
                .detail-img { flex: 1; display: flex; justify-content: center; }
                .molecule-box {
                    width: 200px;
                    height: 200px;
                    background: linear-gradient(45deg, var(--secondary), var(--primary));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 1.5rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .cta-section {
                    background: var(--primary);
                    color: white;
                    padding: 4rem 0;
                }
                .cta-section h2 { color: white; margin-bottom: 1rem; }
                .btn-secondary {
                    background: white;
                    color: var(--primary);
                    padding: 12px 30px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                    margin-top: 1rem;
                    transition: all 0.3s;
                }
                .btn-secondary:hover {
                    transform: scale(1.05);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
            `}</style>
        </div>
    );
};

export default Ciencia;
