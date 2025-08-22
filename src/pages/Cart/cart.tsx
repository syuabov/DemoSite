import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './cart.css';

// Mock cart data - replace with Firebase/context data
const cartItems = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    price: 2499.99,
    material: '18k White Gold',
    image: '/placeholder-ring-1.jpg',
    quantity: 1
  },
  {
    id: '2',
    name: 'Pearl Drop Necklace',
    price: 299.99,
    material: 'Sterling Silver',
    image: '/placeholder-necklace-1.jpg',
    quantity: 2
  },
  {
    id: '3',
    name: 'Sapphire Stud Earrings',
    price: 899.99,
    material: '14k Yellow Gold',
    image: '/placeholder-earrings-1.jpg',
    quantity: 1
  }
];

const Cart = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 500 ? 0 : 25; // Free shipping over $500
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    // Update quantity logic here
    console.log(`Update quantity for item ${id} to ${newQuantity}`);
  };

  const removeItem = (id: string) => {
    // Remove item logic here
    console.log(`Remove item ${id}`);
  };

  if (cartItems.length === 0) {
    return (

      <div className="cart-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title">Shopping Cart</h1>
            <p className="page-subtitle">Your jewelry collection awaits</p>
          </div>
        </div>
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag className="empty-cart-icon" />
            <h2 className="empty-cart-title">Your Cart is Empty</h2>
            <p className="empty-cart-text">Looks like you haven't added any jewelry to your cart yet.</p>
            <Link to="/" className="shop-now-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <title>MTJ Cart</title>
      <meta name="description" content="MTJ Shopping Cart" />
      <link rel="canonical" href="http://localhost:5173/cart" />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
          <p className="page-subtitle">Review your items and proceed to checkout</p>
        </div>
      </section>

      <div className="container">
        <div className="cart-content">
          {/* Cart Items Section */}
          <div className="cart-items">
            <h2 className="section-title">Cart Items ({cartItems.length})</h2>
            
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="item-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-category">{item.material}</span>
                  <div className="item-price">{formatPrice(item.price)}</div>
                </div>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">{formatPrice(calculateSubtotal())}</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label">Tax (8%)</span>
              <span className="summary-value">{formatPrice(calculateTax())}</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label">Shipping</span>
              <span className="summary-value">
                {calculateShipping() === 0 ? 'Free' : formatPrice(calculateShipping())}
              </span>
            </div>
            
            <div className="summary-row total">
              <span className="summary-label">Total</span>
              <span className="summary-value">{formatPrice(calculateTotal())}</span>
            </div>

            <button className="checkout-btn">
              <CreditCard size={18} />
              Proceed to Checkout
            </button>

            <div className="secure-checkout">
              <Lock size={16} />
              <span>Secure checkout powered by Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
