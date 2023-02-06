// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvgsCFEOzUAy4lc8lqG1Q9s_dB5VFFWEI",
  authDomain: "first-proyect-6398f.firebaseapp.com",
  projectId: "first-proyect-6398f",
  storageBucket: "first-proyect-6398f.appspot.com",
  messagingSenderId: "703696481086",
  appId: "1:703696481086:web:1a58c15f626940ef415a6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); //Esta función conecta con firebase
const db = getFirestore(app)

const userCollection = collection(db, "users")

export const getData = async () => {
  //snapshot empaqueta los datos
  const snapshot = await getDocs(userCollection)
  const data = []

  snapshot.forEach((d) => {
    const user = d.data()
    user.id = d.id
    data.push(user)
  })

  return { data }
}

export const createUser = async ({username, name, age}) => {
  await addDoc(userCollection, {username, name, age})
  
}

export const deleteUser = async (id) =>{
  await deleteDoc(doc(userCollection, id))
}