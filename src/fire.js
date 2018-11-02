import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDxDbHDqkstYbrNIGJnVnKTI8vbUICbj7Y",
  authDomain: "carrito-de-compras-9ccd6.firebaseapp.com",
  databaseURL: "https://carrito-de-compras-9ccd6.firebaseio.com",
  projectId: "carrito-de-compras-9ccd6",
  storageBucket: "carrito-de-compras-9ccd6.appspot.com",
  messagingSenderId: "787501379181"
});

export default app;
