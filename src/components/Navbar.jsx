
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="brand-logo-nav" style={{ textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
                    {/* Logo Image */}
                    <img src="/brand-logo.png" alt="Dra. Nadia Logo" className="nav-logo-img" />
                    <div className="nav-brand-text">
                        <span className="brand-title">Dra. Nadia</span>
                        <span className="brand-subtitle">Sánchez Cano</span>
                    </div>
                </Link>

                <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    <div className={`bar ${mobileOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${mobileOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${mobileOpen ? 'open' : ''}`}></div>
                </div>

                <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    <li><a href="/#inicio" onClick={() => setMobileOpen(false)}>Inicio</a></li>
                    <li><a href="/#sobre-mi" onClick={() => setMobileOpen(false)}>Sobre Mí</a></li>
                    <li><Link to="/valores" onClick={() => setMobileOpen(false)}>Valores</Link></li>
                    <li><Link to="/tienda" onClick={() => setMobileOpen(false)}>Tienda</Link></li>
                    <li><a href="/#testimonios" onClick={() => setMobileOpen(false)}>Testimonios</a></li>
                    <li><a href="/#contacto" className="btn btn-outline-light nav-btn" onClick={() => setMobileOpen(false)}>Contacto</a></li>
                    <li>
                        <button className="cart-icon-btn" aria-label="Ver Carrito" onClick={(e) => { e.preventDefault(); toggleCart(); setMobileOpen(false); }}>
                            <div className="icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                            </div>
                        </button>
                    </li>
                </ul>
                <style jsx>{`
                    .cart-icon-btn {
                        background: none;
                        border: none;
                        color: white !important;
                        display: flex;
                        align-items: center;
                        padding: 0 10px;
                        cursor: pointer;
                        transition: transform 0.2s;
                        position: relative;
                    }
                    .icon-wrap { position: relative; display: flex; align-items: center; }
                    .cart-icon-btn:hover {
                        transform: scale(1.1);
                        color: var(--secondary) !important;
                    }
                    .cart-badge {
                        position: absolute;
                        top: -8px;
                        right: -8px;
                        background: var(--secondary);
                        color: var(--dark);
                        font-size: 0.7rem;
                        font-weight: bold;
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}</style>
            </div>
        </nav>
    );
};

export default Navbar;
