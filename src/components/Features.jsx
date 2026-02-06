
import React from 'react';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Claridad Mental",
            desc: "Elimina la neblina mental y alcanza un enfoque láser durante todo el día.",
            icon: "/icon-brain.png"
        },
        {
            id: 2,
            title: "Energía Ilimitada",
            desc: "Combustible celular puro que no genera picos ni caídas de glucosa.",
            icon: "/icon-energy.png"
        },
        {
            id: 3,
            title: "Quema de Grasa",
            desc: "Optimiza tu metabolismo para usar la grasa como fuente primaria de energía.",
            icon: "/icon-fire.png"
        },
        {
            id: 4,
            title: "Balance Hormonal",
            desc: "Regulación natural del ciclo femenino y apoyo en perimenopausia.",
            icon: "/doctor-silhouette.png" // Reusing abstract for hormone for now or generic
        }
    ];

    return (
        <section className="section-padding features-section">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="subtitle">Beneficios Científicos</span>
                    <h2>Tecnología Bio-idéntica</h2>
                </div>

                <div className="features-grid">
                    {features.map(f => (
                        <div className="feature-card" key={f.id}>
                            <div className="icon-wrapper">
                                <img src={f.icon} alt={f.title} />
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .features-section {
            background-color: var(--white);
        }
        .mb-5 { margin-bottom: 3rem; }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background: #F8FAFB;
            padding: 2.5rem 2rem;
            border-radius: var(--radius-md);
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .feature-card:hover {
            background: var(--white);
            box-shadow: var(--shadow-lg);
            border-color: rgba(42, 157, 143, 0.2);
            transform: translateY(-5px);
        }

        .icon-wrapper {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .icon-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }

        .feature-card h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--dark);
        }

        .feature-card p {
            font-size: 0.95rem;
            color: var(--text-light);
            line-height: 1.6;
        }
      `}</style>
        </section>
    );
}

export default Features;
