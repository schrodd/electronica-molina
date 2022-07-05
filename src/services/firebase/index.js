import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where, addDoc } from 'firebase/firestore'

// SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNNdU7TCpR78ALeE4reb2ho4Uf9Jt2DfA",
  authDomain: "electronica-molina.firebaseapp.com",
  projectId: "electronica-molina",
  storageBucket: "electronica-molina.appspot.com",
  messagingSenderId: "289694069791",
  appId: "1:289694069791:web:d6fc8a406f5949554e912a"
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

// Submit an order
export const newOrder = (buyer, items, total, setId, setLoading) => {
  setLoading(true)
  const ordersRef = collection(db, 'orders')
  const newOrder = {
    buyer: buyer,
    items: items, // Array [{id1, title1, price1, qty1}, {id2, title2, price2, qty2}]
    total: total,
  }
  addDoc(ordersRef, newOrder)
    .then((res) => {
      setId(res.id)
    })
    .catch((e) => {
      console.log(e)
    })
    .finally(() => {
      setLoading(false)
    });
};