// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmGutVZ-PcZzsw7av_dHvkglug4Ux6J9s",
  authDomain: "rami-lanita.firebaseapp.com",
  projectId: "rami-lanita",
  storageBucket: "rami-lanita.appspot.com",
  messagingSenderId: "380396886310",
  appId: "1:380396886310:web:6e71a6b8039ffc1e5309e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getProductosFormateados = (productosFirebase) => {
  const productosFormateados = productosFirebase.docs.map((prod) => {
    return { id: prod.id, ...prod.data() };
  });
  // console.log(productosFormateados);
  return productosFormateados;
};

export const getProductos = () => {
  return getDocs(collection(db, "productos")).then((response) => {
    return getProductosFormateados(response);
  });
};

export const getProductosPorCategoria = (categoria) => {
  return getDocs(
    query(collection(db, "productos"), where("categoria", "==", categoria))
  )
    .then((response) => {
      const prods = getProductosFormateados(response);
      // console.log(prods);
      return prods;
    })
    .catch((error) => {
      console.log("el error es en el getDocs por categoria es: " + error);
    });
};

export const getProductosPorId = (idProducto) => {
  return getDoc(doc(db, "productos", idProducto))
    .then((response) => {
      return { id: response.id, ...response.data() };
    })
    .catch((error) => {
      console.log("el articulo no existe: " + error);
    });
};
