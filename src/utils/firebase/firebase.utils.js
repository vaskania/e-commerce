import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqY3bwJlRzB-iwQqcvS6KXe3WnUX1ZVfo",
  authDomain: "e-commerce-db-d12ac.firebaseapp.com",
  projectId: "e-commerce-db-d12ac",
  storageBucket: "e-commerce-db-d12ac.appspot.com",
  messagingSenderId: "482800457855",
  appId: "1:482800457855:web:639e803766aa465d0d874a"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef

}