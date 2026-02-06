import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
    const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();
    const whatsappNumber = "525512345678"; // Using the number from FloatingControls

    const handleWhatsAppOrder = () => {
        let message = "Hola Dra. Nadia, me gustaría realizar el siguiente pedido:%0A%0A";

        cart.forEach(item => {
            message += `- ${item.name} (${item.quantity}) - $${item.price * item.quantity}%0A`;
        });

        message += `%0A*Total: $${cartTotal.toLocaleString()} MXN*`;
        message += "%0A%0AQuedo atento/a para los detalles de pago y envío.";

        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="checkout-page">
            <Navbar />

            <div className="container section-padding checkout-container">
                <h1>Finalizar Compra</h1>

                {cart.length === 0 ? (
                    <div className="empty-cart-msg">
                        <p>Tu carrito está vacío.</p>
                        <a href="/tienda" className="btn btn-primary">Ir a la Tienda</a>
                    </div>
                ) : (
                    <div className="checkout-grid">
                        <div className="order-summary">
                            <h2>Tu Pedido</h2>
                            <div className="order-items">
                                {cart.map(item => (
                                    <div key={item.id} className="order-item">
                                        <div className="item-info">
                                            <h3>{item.name}</h3>
                                            <p>${item.price} x {item.quantity}</p>
                                        </div>
                                        <div className="item-total">
                                            ${(item.price * item.quantity).toLocaleString()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="order-total">
                                <span>Total a Pagar:</span>
                                <span>${cartTotal.toLocaleString()} MXN</span>
                            </div>
                        </div>

                        <div className="payment-actions">
                            <h2>Confirmación</h2>
                            <p>Por el momento, los pedidos se gestionan directamente vía WhatsApp para una atención personalizada.</p>

                            <button onClick={handleWhatsAppOrder} className="btn-whatsapp-order">
                                <span className="icon">📱</span> Confirmar Pedido por WhatsApp
                            </button>

                            <p className="secure-note">
                                <small>🔒 Tu pedido será revisado personalmente por nuestro equipo.</small>
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <Footer />

            <style jsx>{`
                .checkout-container {
                    padding-top: 120px;
                    min-height: 80vh;
                }
                h1 {
                    font-family: var(--font-heading);
                    color: var(--dark);
                    margin-bottom: 2rem;
                    text-align: center;
                }
                .checkout-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 3rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                
                .order-summary, .payment-actions {
                    background: white;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                }

                .order-item {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #eee;
                    padding: 1rem 0;
                }
                .item-info h3 { font-size: 1rem; margin: 0; color: var(--dark); }
                .item-total { font-weight: bold; color: var(--primary); }
                
                .order-total {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top: 2px solid #eee;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--dark);
                }

                .btn-whatsapp-order {
                    display: block;
                    width: 100%;
                    padding: 1rem;
                    background: #25D366;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    margin-top: 1.5rem;
                    transition: background 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }
                .btn-whatsapp-order:hover {
                    background: #1ebc57;
                }

                .empty-cart-msg {
                    text-align: center;
                    padding: 3rem;
                }

                @media (max-width: 768px) {
                    .checkout-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Checkout;
