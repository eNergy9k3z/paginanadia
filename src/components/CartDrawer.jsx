import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay">
            <div className="cart-backdrop" onClick={() => setIsCartOpen(false)}></div>
            <div className="cart-drawer">
                <div className="cart-header">
                    <h3>Tu Carrito ({cart.length})</h3>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Tu carrito está vacío 😔</p>
                            <button className="btn-shop" onClick={() => setIsCartOpen(false)}>Seguir Navegando</button>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="item-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p className="item-price">${item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-row">
                            <span>Subtotal:</span>
                            <span className="total-amount">${cartTotal.toLocaleString()} MXN</span>
                        </div>
                        <Link to="/checkout" className="checkout-btn" onClick={() => setIsCartOpen(false)}>
                            Ir a Pagar
                        </Link>
                    </div>
                )}
            </div>

            <style jsx>{`
                .cart-overlay {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 2000;
                    display: flex;
                    justify-content: flex-end;
                }
                .cart-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    backdrop-filter: blur(2px);
                }
                .cart-drawer {
                    position: relative;
                    width: 100%;
                    max-width: 400px;
                    height: 100%;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
                    animation: slideIn 0.3s ease-out;
                }
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }

                .cart-header {
                    padding: 20px;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: var(--white);
                }
                .cart-header h3 { margin: 0; font-family: var(--font-heading); color: var(--dark); }
                .close-btn { background: none; border: none; font-size: 2rem; cursor: pointer; line-height: 1; }

                .cart-items {
                    flex: 1;
                    overflow-y: auto;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .empty-cart {
                    text-align: center;
                    padding-top: 50px;
                    color: #888;
                }
                .btn-shop {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background: var(--dark);
                    color: var(--secondary);
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .cart-item {
                    display: flex;
                    gap: 15px;
                    border-bottom: 1px solid #f0f0f0;
                    padding-bottom: 15px;
                    align-items: center;
                }
                .item-img { width: 60px; height: 60px; background: #f9f9f9; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
                .item-img img { max-width: 100%; max-height: 100%; }
                
                .item-details { flex: 1; }
                .item-details h4 { margin: 0 0 5px; font-size: 0.95rem; color: var(--dark); }
                .item-price { margin: 0 0 5px; font-weight: 600; color: var(--primary); }
                
                .quantity-controls {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: #f0f0f0;
                    width: fit-content;
                    padding: 2px 8px;
                    border-radius: 4px;
                }
                .quantity-controls button { background: none; border: none; cursor: pointer; font-weight: bold; width: 20px; }
                
                .remove-btn { background: none; border: none; cursor: pointer; }

                .cart-footer {
                    padding: 20px;
                    border-top: 1px solid #eee;
                    background: #f9f9f9;
                }
                .total-row {
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: var(--dark);
                }
                .checkout-btn {
                    display: block;
                    width: 100%;
                    padding: 15px;
                    background: var(--dark);
                    color: var(--secondary);
                    text-align: center;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 8px;
                    text-transform: uppercase;
                    transition: all 0.2s;
                }
                .checkout-btn:hover {
                    background: #000;
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default CartDrawer;
