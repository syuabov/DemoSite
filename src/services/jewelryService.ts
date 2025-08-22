// import { 
//   collection, 
//   doc, 
//   getDocs, 
//   getDoc, 
//   addDoc, 
//   updateDoc, 
//   deleteDoc, 
//   query, 
//   where, 
//   orderBy, 
//   limit,
//   Timestamp 
// } from 'firebase/firestore';
// import { 
//   ref, 
//   uploadBytes, 
//   getDownloadURL, 
//   deleteObject 
// } from 'firebase/storage';
// import { db, storage } from '../firebase/config';
// import { JewelryItem } from '../types';

// const COLLECTION_NAME = 'jewelry_items';

// export class JewelryService {
//   // Get all jewelry items
//   static async getAllItems(): Promise<JewelryItem[]> {
//     try {
//       const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
//       return querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         createdAt: doc.data().createdAt?.toDate() || new Date(),
//         updatedAt: doc.data().updatedAt?.toDate() || new Date()
//       })) as JewelryItem[];
//     } catch (error) {
//       console.error('Error getting jewelry items:', error);
//       throw error;
//     }
//   }

//   // Get featured items
//   static async getFeaturedItems(limitCount: number = 8): Promise<JewelryItem[]> {
//     try {
//       const q = query(
//         collection(db, COLLECTION_NAME),
//         where('featured', '==', true),
//         orderBy('createdAt', 'desc'),
//         limit(limitCount)
//       );
      
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         createdAt: doc.data().createdAt?.toDate() || new Date(),
//         updatedAt: doc.data().updatedAt?.toDate() || new Date()
//       })) as JewelryItem[];
//     } catch (error) {
//       console.error('Error getting featured items:', error);
//       throw error;
//     }
//   }

//   // Get items by category
//   static async getItemsByCategory(category: string): Promise<JewelryItem[]> {
//     try {
//       const q = query(
//         collection(db, COLLECTION_NAME),
//         where('category', '==', category),
//         orderBy('createdAt', 'desc')
//       );
      
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         createdAt: doc.data().createdAt?.toDate() || new Date(),
//         updatedAt: doc.data().updatedAt?.toDate() || new Date()
//       })) as JewelryItem[];
//     } catch (error) {
//       console.error('Error getting items by category:', error);
//       throw error;
//     }
//   }

//   // Get single item by ID
//   static async getItemById(id: string): Promise<JewelryItem | null> {
//     try {
//       const docRef = doc(db, COLLECTION_NAME, id);
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         return {
//           id: docSnap.id,
//           ...data,
//           createdAt: data.createdAt?.toDate() || new Date(),
//           updatedAt: data.updatedAt?.toDate() || new Date()
//         } as JewelryItem;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.error('Error getting item by ID:', error);
//       throw error;
//     }
//   }

//   // Add new jewelry item
//   static async addItem(item: Omit<JewelryItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
//     try {
//       const docRef = await addDoc(collection(db, COLLECTION_NAME), {
//         ...item,
//         createdAt: Timestamp.now(),
//         updatedAt: Timestamp.now()
//       });
//       return docRef.id;
//     } catch (error) {
//       console.error('Error adding jewelry item:', error);
//       throw error;
//     }
//   }

//   // Update jewelry item
//   static async updateItem(id: string, updates: Partial<JewelryItem>): Promise<void> {
//     try {
//       const docRef = doc(db, COLLECTION_NAME, id);
//       await updateDoc(docRef, {
//         ...updates,
//         updatedAt: Timestamp.now()
//       });
//     } catch (error) {
//       console.error('Error updating jewelry item:', error);
//       throw error;
//     }
//   }

//   // Delete jewelry item
//   static async deleteItem(id: string): Promise<void> {
//     try {
//       const docRef = doc(db, COLLECTION_NAME, id);
//       await deleteDoc(docRef);
//     } catch (error) {
//       console.error('Error deleting jewelry item:', error);
//       throw error;
//     }
//   }

//   // Upload image to Firebase Storage
//   static async uploadImage(file: File, itemId: string): Promise<string> {
//     try {
//       const storageRef = ref(storage, `jewelry/${itemId}/${file.name}`);
//       const snapshot = await uploadBytes(storageRef, file);
//       const downloadURL = await getDownloadURL(snapshot.ref);
//       return downloadURL;
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       throw error;
//     }
//   }

//   // Delete image from Firebase Storage
//   static async deleteImage(imageUrl: string): Promise<void> {
//     try {
//       const imageRef = ref(storage, imageUrl);
//       await deleteObject(imageRef);
//     } catch (error) {
//       console.error('Error deleting image:', error);
//       throw error;
//     }
//   }

//   // Search items by name or description
//   static async searchItems(searchTerm: string): Promise<JewelryItem[]> {
//     try {
//       // Note: Firestore doesn't support full-text search natively
//       // This is a simple implementation - consider using Algolia or similar for production
//       const allItems = await this.getAllItems();
//       const searchLower = searchTerm.toLowerCase();
      
//       return allItems.filter(item => 
//         item.name.toLowerCase().includes(searchLower) ||
//         item.description.toLowerCase().includes(searchLower) ||
//         item.material.toLowerCase().includes(searchLower)
//       );
//     } catch (error) {
//       console.error('Error searching items:', error);
//       throw error;
//     }
//   }

//   // Get items in price range
//   static async getItemsByPriceRange(minPrice: number, maxPrice: number): Promise<JewelryItem[]> {
//     try {
//       const q = query(
//         collection(db, COLLECTION_NAME),
//         where('price', '>=', minPrice),
//         where('price', '<=', maxPrice),
//         orderBy('price', 'asc')
//       );
      
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         createdAt: doc.data().createdAt?.toDate() || new Date(),
//         updatedAt: doc.data().updatedAt?.toDate() || new Date()
//       })) as JewelryItem[];
//     } catch (error) {
//       console.error('Error getting items by price range:', error);
//       throw error;
//     }
//   }
// }
