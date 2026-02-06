import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contacto">
            <div className="container">
                <div className="contact-wrapper">
                    {/* Left Column: Info & Quote */}
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <h4>Ubicación</h4>
                                <p>Consulta Online & Presencial</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>contacto@dranadia.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <h4>Teléfono</h4>
                                <p>+52 55 1234 5678</p>
                            </div>
                        </div>

                        <div className="quote-box">
                            <p>"Tu bienestar es mi prioridad. Juntas lograremos el equilibrio que tu cuerpo necesita para brillar."</p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">NOMBRE</label>
                                    <input type="text" id="nombre" placeholder="Su nombre" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="email" id="email" placeholder="correo@ejemplo.com" />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="telefono">TELÉFONO</label>
                                    <input type="tel" id="telefono" placeholder="+52 55..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="asunto">ASUNTO / INTERÉS</label>
                                    <input type="text" id="asunto" placeholder="Interés en productos..." />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">MENSAJE</label>
                                <textarea id="mensaje" rows="4" placeholder="Describa su consulta..."></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                ENVIAR MENSAJE
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
