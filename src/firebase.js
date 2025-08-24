import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// DUMMY CONFIG - ganti dengan config milikmu sebelum produksi
const firebaseConfig = {
  apiKey: "AIzaSyDUMMY-KEY-CHANGE-ME",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:dummyreplace"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
