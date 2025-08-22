# MTJ Jewelry - Modern E-commerce Website

A beautiful, modern jewelry e-commerce website built with React, TypeScript, and Firebase. Features smooth animations, responsive design, and a comprehensive product management system.

## ✨ Features

- **Modern UI/UX**: Beautiful design with glassmorphism effects and smooth animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Firebase Integration**: 
  - Firestore database for product data
  - Firebase Storage for product images
  - Authentication system (ready to implement)
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern utility-first CSS framework
- **Product Management**: Complete CRUD operations for jewelry items
- **Category System**: Organized product browsing by jewelry type
- **Search & Filter**: Advanced product discovery features

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Firebase (Firestore + Storage)
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-business-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database and Storage
   - Get your Firebase configuration

4. **Configure Firebase**
   - Update `src/firebase/config.ts` with your Firebase credentials:
   ```typescript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero/           # Hero section with animations
│   ├── FeaturedProducts/ # Product showcase grid
│   ├── CategoryShowcase/ # Category browsing
│   ├── Navbar/         # Navigation header
│   └── Footer/         # Site footer
├── pages/              # Page components
│   └── Home/           # Homepage
├── services/           # Firebase services
│   └── jewelryService.ts # Product CRUD operations
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── firebase/           # Firebase configuration
│   └── config.ts       # Firebase setup
└── assets/             # Images and static files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like UI elements
- **Gradients**: Beautiful color transitions throughout
- **Animations**: Smooth hover effects and page transitions
- **Typography**: Modern, readable font hierarchy
- **Color Scheme**: Professional jewelry-focused palette

## 🛍️ E-commerce Features

- **Product Catalog**: Browse jewelry by category
- **Featured Items**: Highlight special products
- **Product Details**: Comprehensive item information
- **Shopping Cart**: Ready for cart functionality
- **User Accounts**: Authentication system ready
- **Admin Panel**: Product management interface ready

## 🔒 Security

- Firebase Security Rules for data protection
- Type-safe API calls
- Secure image upload handling
- Input validation and sanitization

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred hosting service**
   - Vercel (recommended)
   - Netlify
   - Firebase Hosting
   - AWS S3 + CloudFront

## 📝 Environment Variables

Create a `.env.local` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: info@mtjjewelry.com

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Shopping cart functionality
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search and filters
- [ ] Multi-language support
- [ ] PWA capabilities

---

Built with ❤️ for jewelry lovers everywhere
