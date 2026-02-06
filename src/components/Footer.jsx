
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    {/* Column 1: Brand */}
                    <div className="footer-col brand-col">
                        <div className="brand-logo">
                            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/brand-logo.png" alt="Dra. Nadia Logo" style={{ height: '60px', width: 'auto' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.1rem', lineHeight: '1.1', textTransform: 'uppercase' }}>Dra. Nadia</span>
                                    <span style={{ color: 'var(--secondary)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '2px' }}>Sánchez Cano</span>
                                </div>
                            </a>
                        </div>
                        <p className="brand-desc">
                            Soluciones integrales de salud hormonal y medicina regenerativa para recuperar tu vitalidad.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h4>ENLACES RÁPIDOS</h4>
                        <ul className="footer-links">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#productos">Productos</a></li>
                            <li><a href="#sobre-mi">Sobre Mí</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="footer-col">
                        <h4>CONTACTO</h4>
                        <ul className="contact-info-list">
                            <li>Ciudad de México, México</li>
                            <li>contacto@dranadia.com</li>
                            <li>+52 55 1234 5678</li>
                        </ul>
                    </div>

                    {/* Column 4: Socials */}
                    <div className="footer-col">
                        <h4>SÍGUENOS</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon instagram" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className="social-icon x-twitter" aria-label="X (Twitter)">
                                {/* X logo approximation */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" className="social-icon tiktok" aria-label="TikTok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                            </a>
                            <a href="#" className="social-icon facebook" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="social-icon whatsapp" aria-label="WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dra. Nadia Sanchez Cano. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
