
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
    return (
        <>
            <Navbar />
            <div className="checkout-page section-padding" style={{ marginTop: '80px', minHeight: '60vh' }}>
                <div className="container text-center">
                    <h1>Carrito de Compras</h1>
                    <p className="lead-text mt-4">Estamos procesando tu solicitud de pago...</p>

                    <div className="placeholder-cart mt-5">
                        <div className="spinner"></div>
                        <p className="mt-3">Conectando con pasarela de pago segura...</p>
                    </div>

                    <div className="mt-5">
                        <a href="/tienda" className="btn btn-outline">Seguir Comprando</a>
                    </div>
                </div>
                <style jsx>{`
            .checkout-page {
                background: #f9fbfd;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
            .spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border-left-color: var(--primary);
                animation: spin 1s linear infinite;
                margin: 0 auto;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
          `}</style>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
