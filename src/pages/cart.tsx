import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
  rating: number;
  reviews: number;
}

const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2999,
    image: "/placeholder-ring-1.jpg",
    quantity: 1,
    category: "Rings",
    rating: 4.9,
    reviews: 127
  },
  {
    id: 2,
    name: "Pearl Drop Necklace",
    price: 599,
    image: "/placeholder-necklace-1.jpg",
    quantity: 2,
    category: "Necklaces",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "Gold Hoop Earrings",
    price: 449,
    image: "/placeholder-earring-1.jpg",
    quantity: 1,
    category: "Earrings",
    rating: 4.8,
    reviews: 156
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const moveToWishlist = (id: number) => {
    console.log('Moving item to wishlist:', id);
    removeItem(id);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 29.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
          </div>
          
          <div className="mt-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
              Shopping Cart
            </h1>
            <p className="text-slate-600">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex gap-4 sm:gap-6">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="mb-2">
                              <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                                {item.category}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                              {item.name}
                            </h3>
                            
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(item.rating)
                                        ? 'text-amber-400 fill-current'
                                        : 'text-slate-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-slate-500">
                                ({item.reviews})
                              </span>
                            </div>

                            <div className="text-2xl font-bold text-slate-800">
                              ${item.price.toLocaleString()}
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-4">
                            <div className="flex items-center border border-slate-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:bg-slate-50 transition-colors duration-200"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-12 text-center font-medium text-slate-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:bg-slate-50 transition-colors duration-200"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="text-right">
                              <div className="text-lg font-semibold text-slate-800">
                                ${(item.price * item.quantity).toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3 mt-4 pt-4 border-t border-slate-200">
                          <button
                            onClick={() => moveToWishlist(item.id)}
                            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors duration-200"
                          >
                            <Heart className="w-4 h-4" />
                            Move to Wishlist
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-[100px]">
                <h2 className="text-xl font-bold text-slate-800 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="flex justify-between text-slate-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                      Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between text-lg font-bold text-slate-800">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                  Proceed to Checkout
                </button>

                <div className="text-center">
                  <p className="text-sm text-slate-500 mb-2">
                    Secure checkout powered by Stripe
                  </p>
                  <div className="flex justify-center gap-2">
                    <div className="w-8 h-5 bg-slate-200 rounded"></div>
                    <div className="w-8 h-5 bg-slate-200 rounded"></div>
                    <div className="w-8 h-5 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Your cart is empty
            </h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any jewelry to your cart yet. Start shopping to discover our beautiful collection.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
