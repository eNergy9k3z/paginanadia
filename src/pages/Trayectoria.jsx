
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Trayectoria = () => {
    return (
        <>
            <Navbar />
            <div className="trayectoria-page">
                <div className="header-trayectoria">
                    <div className="container">
                        <h1>Mi Trayectoria</h1>
                        <p>15 Años de Experiencia en Salud y Bienestar</p>
                    </div>
                </div>

                <div className="container section-padding">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="year">2009</div>
                            <div className="content">
                                <h3>Inicio de la Carrera Médica</h3>
                                <p>Graduada con honores, la Dra. Nadia comenzó su práctica enfocándose en medicina general, donde notó por primera vez las limitaciones de los tratamientos convencionales para enfermedades crónicas.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="year">2013</div>
                            <div className="content">
                                <h3>Especialización en Hormonas</h3>
                                <p>Profundizó sus estudios en endocrinología y salud femenina, buscando respuestas para pacientes con desequilibrios hormonales persistentes.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="year">2018</div>
                            <div className="content">
                                <h3>Descubrimiento de Cetonas Exógenas</h3>
                                <p>Tras años de investigación, integró la suplementación con cetonas bio-idénticas, observando resultados transformadores en sus pacientes: más energía, mejor enfoque y regulación metabólica.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="year">Actualidad</div>
                            <div className="content">
                                <h3>Líder en Bio-Hacking Femenino</h3>
                                <p>Hoy, la Dra. Nadia es referente en el uso de herramientas metabólicas avanzadas, ayudando a miles de mujeres a recuperar su vitalidad a través de un enfoque integral.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <style jsx>{`
         .header-trayectoria {
             background: var(--dark);
             color: var(--white);
             padding: 150px 0 80px;
             text-align: center;
         }
         .header-trayectoria h1 { font-size: 3.5rem; margin-bottom: 1rem; color: var(--secondary); }
         .header-trayectoria p { font-size: 1.5rem; opacity: 0.8; }

         .timeline {
             max-width: 800px;
             margin: 0 auto;
             position: relative;
             padding: 2rem 0;
         }
         
         .timeline::before {
             content: '';
             position: absolute;
             left: 20px;
             top: 0;
             bottom: 0;
             width: 4px;
             background: #eee;
         }

         .timeline-item {
             margin-bottom: 4rem;
             position: relative;
             padding-left: 60px;
         }

         .timeline-item .year {
             position: absolute;
             left: 5px;
             top: 0;
             background: var(--secondary);
             color: var(--dark);
             font-weight: 700;
             padding: 5px 10px;
             border-radius: 4px;
             font-size: 0.9rem;
             transform: translateX(-40%);
             z-index: 2;
             box-shadow: 0 4px 6px rgba(0,0,0,0.1);
         }

         .timeline-item .content h3 {
             color: var(--dark);
             margin-bottom: 1rem;
             font-size: 1.5rem;
         }

         .timeline-item .content p {
             font-size: 1.1rem;
             color: var(--text-light);
             line-height: 1.6;
         }

         @media (min-width: 768px) {
             .timeline::before { left: 50%; transform: translateX(-50%); }
             .timeline-item { padding-left: 0; width: 50%; margin-left: auto; padding-left: 40px; }
             .timeline-item:nth-child(odd) { margin-left: 0; text-align: right; padding-right: 40px; padding-left: 0; }
             .timeline-item:nth-child(odd) .year { left: auto; right: -20px; }
             .timeline-item:nth-child(even) .year { left: -20px; }
         }
       `}</style>
        </>
    );
};

export default Trayectoria;
