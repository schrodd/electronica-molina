// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNNdU7TCpR78ALeE4reb2ho4Uf9Jt2DfA",
  authDomain: "electronica-molina.firebaseapp.com",
  projectId: "electronica-molina",
  storageBucket: "electronica-molina.appspot.com",
  messagingSenderId: "289694069791",
  appId: "1:289694069791:web:d6fc8a406f5949554e912a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// Bring products

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

export const getProductBySku = (productSku, setLoading, setProd) => {
  const collectionRef = query(collection(db, 'products'), where('sku', '==', productSku))
  getDocs(collectionRef)
  .then(response => {
      const productFormatted = response.docs.map(doc => {
          return { id: doc.id, ...doc.data()}
        })
        setProd(productFormatted[0])
  }).catch(e => console.log(e))
  .finally(() => setLoading(false))
}