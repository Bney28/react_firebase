// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

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
export const auth = getAuth(app)

//Login and Logout
const authProvider = new GoogleAuthProvider()

export const login = async () => {
  authProvider.setCustomParameters({ prompt: "select_account" })
  const res = await signInWithPopup(auth, authProvider)
  return res.user
}

export const logout = async () => await signOut(auth)

//Otras funciones
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

export const createUser = async ({ username, name, age }) => {
  await addDoc(userCollection, { username, name, age })

}

export const deleteUser = async (id) => {
  await deleteDoc(doc(userCollection, id))
}

export const updateUser = async (id, { username, name, age }) => {
  await setDoc(doc(userCollection, id), { username, name, age })
}

export const getUserDetails = async (id) => {

  const snapshot = await getDoc(doc(userCollection, id))
  const user = snapshot.data()
  user.id = snapshot.id

  return { data: user }
}