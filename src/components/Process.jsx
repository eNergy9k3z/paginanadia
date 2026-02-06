
import React from 'react';

const Process = () => {
    const steps = [
        { num: "01", title: "Mezcla", desc: "Disuelve un sobre en 500-700ml de agua fría." },
        { num: "02", title: "Agita", desc: "Bate vigorosamente hasta que el polvo se disuelva." },
        { num: "03", title: "Disfruta", desc: "Tómalo en 20-30 minutos y siente el efecto." },
        { num: "04", title: "Transforma", desc: "Entra en cetosis metabólica en menos de una hora." }
    ];

    return (
        <section className="section-padding process-section">
            <div className="container">
                <div className="process-header">
                    <span className="subtitle">Método Simple</span>
                    <h2>Tu Rutina Diaria</h2>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            <div className="step-number">{step.num}</div>
                            <div className="step-content">
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .process-section {
            background: linear-gradient(to right, #2A9D8F, #264653);
            color: var(--white);
        }

        .subtitle { color: var(--secondary) !important; }
        
        .process-header h2 { color: var(--white); margin-bottom: 4rem; text-align: center;}
        .process-header .subtitle { display: block; text-align: center; }

        .process-steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            position: relative;
        }

        .step-item {
            position: relative;
            z-index: 1;
        }

        .step-number {
            font-size: 4rem;
            font-weight: 700;
            color: rgba(255,255,255,0.15);
            margin-bottom: -1rem;
            font-family: var(--font-heading);
            position: relative;
        }

        .step-content h4 {
            color: var(--secondary);
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .step-content p {
            color: rgba(255,255,255,0.8);
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            .process-steps {
                grid-template-columns: 1fr;
                gap: 3rem;
                text-align: center;
            }
        }
      `}</style>
        </section>
    );
}

export default Process;
