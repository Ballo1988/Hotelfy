import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-14Uzk0th1X9Cx5DB1pvY9-k6o0-2FWY",
  authDomain: "hotelfy.firebaseapp.com",
  projectId: "hotelfy",
  storageBucket: "hotelfy.appspot.com",
  messagingSenderId: "871069289853",
  appId: "1:871069289853:web:767df69c72c9a9604cd014"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const colRef = collection(firestore, 'Clients');
getDocs(colRef).then((snapshot) => {
  let clients = []
  snapshot.docs.forEach((doc) => {
    clients.push({...doc.data(), id: doc.id})
  });
console.log(clients);
}).catch(err => {
  console.log(err.message );
}); 