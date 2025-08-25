import React, { useState } from 'react';
import { User, Heart, ShoppingBag, Settings, LogOut, Edit, Plus, Trash2, Star } from 'lucide-react';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface Order {
  id: string;
  date: string;
  status: 'delivered' | 'shipped' | 'processing' | 'cancelled';
  total: number;
  items: number;
}

const mockWishlistItems: WishlistItem[] = [
  {
    id: 1,
    name: "Diamond Tennis Bracelet",
    price: 2499,
    image: "/placeholder-bracelet-1.jpg",
    category: "Bracelets",
    rating: 4.9,
    reviews: 189
  },
  {
    id: 2,
    name: "Sapphire Pendant Necklace",
    price: 899,
    image: "/placeholder-necklace-1.jpg",
    category: "Necklaces",
    rating: 4.7,
    reviews: 234
  },
  {
    id: 3,
    name: "Rose Gold Ring",
    price: 1299,
    image: "/placeholder-ring-1.jpg",
    category: "Rings",
    rating: 4.8,
    reviews: 156
  }
];

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: 3498,
    items: 2
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "shipped",
    total: 899,
    items: 1
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "processing",
    total: 1899,
    items: 1
  }
];

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist' | 'settings'>('profile');
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(mockWishlistItems);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    console.log('Adding to cart:', id);
    removeFromWishlist(id);
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return 'bg-emerald-100 text-emerald-600';
      case 'shipped':
        return 'bg-blue-100 text-blue-600';
      case 'processing':
        return 'bg-amber-100 text-amber-600';
      case 'cancelled':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  const getStatusText = (status: Order['status']) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
            My Account
          </h1>
          <p className="text-slate-600">
            Manage your profile, orders, and preferences
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-[100px]">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === 'profile'
                      ? 'bg-amber-400 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === 'orders'
                      ? 'bg-amber-400 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Orders</span>
                </button>

                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === 'wishlist'
                      ? 'bg-amber-400 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === 'settings'
                      ? 'bg-amber-400 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </button>

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-all duration-200">
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">Profile Information</h2>
                  <button className="flex items-center gap-2 px-4 py-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors duration-200">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value="John"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value="Doe"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      value="john.doe@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      readOnly
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                    <textarea
                      value="123 Main Street, New York, NY 10001"
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Order History</h2>
                
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <span className="font-semibold text-slate-800">{order.id}</span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                              {getStatusText(order.status)}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm">
                            {new Date(order.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-slate-800">
                            ${order.total.toLocaleString()}
                          </div>
                          <p className="text-sm text-slate-500">
                            {order.items} item{order.items !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">My Wishlist</h2>
                
                {wishlistItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="group bg-slate-50 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                        <div className="relative mb-4">
                          <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="absolute top-2 right-2 w-8 h-8 bg-white/90 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="mb-4">
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
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-slate-800">
                            ${item.price.toLocaleString()}
                          </span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-12 h-12 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Your wishlist is empty
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Start adding items to your wishlist to save them for later
                    </p>
                    <button className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                      Start Shopping
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" defaultChecked />
                        <span className="text-slate-700">Order updates and tracking</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" defaultChecked />
                        <span className="text-slate-700">New product announcements</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" />
                        <span className="text-slate-700">Promotional offers</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Privacy</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" defaultChecked />
                        <span className="text-slate-700">Share purchase history for recommendations</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400" />
                        <span className="text-slate-700">Allow personalized advertising</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
