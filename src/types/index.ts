export interface JewelryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'watches' | 'other';
  material: string;
  imageUrls: string[];
  inStock: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  item: JewelryItem;
  quantity: number;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  cart: CartItem[];
  wishlist: string[];
  orders: Order[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
