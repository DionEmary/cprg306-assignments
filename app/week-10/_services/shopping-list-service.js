import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
        if (!userId) {
          throw new Error("User ID is required.");
        }
    
        // Reference to the items subcollection inside the users collection
        const itemsRef = collection(db, `users/${userId}/items`);
    
        // Fetch documents from Firestore
        const querySnapshot = await getDocs(itemsRef);
    
        // Map over the documents to create an array of items
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
    
        return items;
      } catch (error) {
        console.error("Error fetching items:", error);
        return [];
      }
}

export const addItem = async (userId, item) => {
    try {
      if (!userId) {
        throw new Error("Valid User is required.");
      }
  
      const itemsRef = collection(db, `users/${userId}/items`);
  
      // Add item to Firestore
      const docRef = await addDoc(itemsRef, item);
  
      console.log("Item added with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      return null;
    }
};

export const deleteItem = async (userId, itemId) => {
    try {
        if (!userId || !itemId) {
            throw new Error("User ID and Item ID are required.");
        }

        const itemRef = doc(db, `users/${userId}/items`, itemId);
        await deleteDoc(itemRef);

        console.log("Item deleted with ID:", itemId);
    } catch (error) {
        console.error("Error deleting item:", error);
    }
};