import {Package, Heart, Settings, LogOut, Edit3} from 'lucide-react';
import './account.css';
import { Link } from 'react-router-dom';

// Mock user data - replace with Firebase auth data
const user = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main Street, New York, NY 10001',
  joinDate: 'January 2023',
  avatar: '/placeholder-avatar.jpg'
};

// Mock order history
const orders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 1899.99,
    items: ['Diamond Eternity Ring', 'Pearl Drop Necklace']
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipped',
    total: 899.99,
    items: ['Sapphire Stud Earrings']
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'processing',
    total: 1299.99,
    items: ['Gold Link Bracelet']
  }
];

// Mock wishlist
const wishlist = [
  {
    id: '1',
    name: 'Emerald Cut Diamond Ring',
    price: 3299.99,
    image: '/placeholder-ring-4.jpg'
  },
  {
    id: '2',
    name: 'Vintage Style Watch',
    price: 799.99,
    image: '/placeholder-watch-5.jpg'
  },
  {
    id: '3',
    name: 'Sapphire Necklace',
    price: 599.99,
    image: '/placeholder-necklace-4.jpg'
  },
  {
    id: '4',
    name: '41mm Rolex Watch',
    price: 10000,
    image: '/placeholder-necklace-4.jpg'
  },
];

const Account = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="account-page">

      <title>MTJ Account Page</title>
      <meta name="description" content="MTJ Account Page" />
      <link rel="canonical" href="http://localhost:5173/account" />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">My Account</h1>
          <p className="page-subtitle">Manage your profile, orders, and preferences</p>
        </div>
      </section>

      <div className="container">
        <div className="account-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-header">
              <div className="profile-avatar">
                {user.name.charAt(0)}
              </div>
              <h2 className="profile-name">{user.name}</h2>
              <p className="profile-email">{user.email}</p>
            </div>

            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-number">{orders.length}</div>
                <div className="stat-label">Orders</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{wishlist.length}</div>
                <div className="stat-label">Wishlist</div>
              </div>
            </div>

            <div className="profile-actions">
              <button className="profile-btn primary">
                <Edit3 size={16} />
                Edit Profile
              </button>
              <button className="profile-btn">
                <Settings size={16} />
                Account Settings
              </button>
              <button className="profile-btn">
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="main-content-section">
            {/* Order History */}
            <div className="content-card">
              <div className="card-header">
                <h2 className="card-title">Recent Orders</h2>
                <Link to="/orders" className="view-all-link">View All</Link>
              </div>
              
              <div className="orders-list">
                {orders.map((order) => (
                  <div key={order.id} className="order-item">
                    <div className="order-info">
                      <div className="order-id">{order.id}</div>
                      <div className="order-date">{formatDate(order.date)}</div>
                    </div>
                    <div className="order-total">{formatPrice(order.total)}</div>
                    <div className={`order-status ${order.status}`}>
                      {getStatusText(order.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist */}
            <div className="content-card">
              <div className="card-header">
                <h2 className="card-title">My Wishlist</h2>
                <Link to="/wishlist" className="view-all-link">View All</Link>
              </div>
              
              <div className="wishlist-grid">
                {wishlist.map((item) => (
                  <div key={item.id} className="wishlist-item">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="wishlist-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <h3 className="wishlist-name">{item.name}</h3>
                    <div className="wishlist-price">{formatPrice(item.price)}</div>
                    <div className="wishlist-actions">
                      <button className="wishlist-btn primary">
                        <Package size={16} />
                        Add to Cart
                      </button>
                      <button className="wishlist-btn secondary">
                        <Heart size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Settings */}
            <div className="content-card">
              <div className="card-header">
                <h2 className="card-title">Account Settings</h2>
              </div>
              
              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-label">Email Notifications</div>
                    <div className="setting-description">Receive updates about orders and promotions</div>
                  </div>
                  <div className="setting-toggle active"></div>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-label">SMS Notifications</div>
                    <div className="setting-description">Get order updates via text message</div>
                  </div>
                  <div className="setting-toggle"></div>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-label">Two-Factor Authentication</div>
                    <div className="setting-description">Add an extra layer of security</div>
                  </div>
                  <div className="setting-toggle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
