import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where, addDoc, updateDoc } from 'firebase/firestore'

// SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Bring products by category
export const getProductsByCategory = (productCat, setLoading, setProducts) => {
  const collectionRef = productCat ? query(collection(db, 'products'), where('category', '==', productCat)) : collection(db, 'products')
  getDocs(collectionRef)
  .then(response => {
      const productsFormatted = response.docs.map(doc => {
          return { id: doc.id, ...doc.data()}
        })
        setProducts(productsFormatted)
  }).catch(e => console.log(e))
  .finally(() => setLoading(false))
}
 
// Bring product by id
export const getProductById = (productId, setLoading, setProd) => {
  const docRef = doc(db, 'products', productId)
  getDoc(docRef)
  .then(doc => {
      const productFormatted = { id: doc.id, ...doc.data() }
      setProd(productFormatted)
  }).catch(e => console.log(e))
  .finally(() => setLoading(false))
}

// Check stock of a product
export const checkStock = (productId) => {
  const docRef = doc(db, 'products', productId)
  getDoc(docRef)
  .then(doc => {
      const stock = { id: doc.id, ...doc.data() }
      return stock.stock
  }).catch(e => console.log(e))
}

// Submit an order
export const newOrder = (buyer, items, total, setId, setLoading, clearCart, setError) => {
  setLoading(true)
  const ordersRef = collection(db, 'orders')
  const newOrder = {
    buyer: buyer,
    items: items, // Array [{{prod1}, qty1}, {{prod2}, qty2}]
    total: total,
  }
  
  if (newOrder.items.every(e => e.qty <= checkStock(e.prod.id))) { // Valida si los items en carrito son menos o igual que la cantidad que hay actualmente en stock
    addDoc(ordersRef, newOrder)
    .then((res) => {
      setId(res.id)
      newOrder.items.forEach(e => updateStock(e.prod.stock, e.prod.id, e.qty)) // Actualiza el stock de todos los ítems del carrito
      clearCart()
      console.log('Success')
    })
    .catch((e) => {
      console.log('Failed: ' + e)
    })
    .finally(() => {
      setLoading(false)
    })
  } else {
    setError(true)
    setLoading(false)
    clearCart()
  }
}

// Update stock of a single product
const updateStock = (stock, id, qty) => {
  const docRef = doc(db, 'products', id)
  updateDoc(docRef, {stock: stock - qty}).catch(e => console.log(e))
}
