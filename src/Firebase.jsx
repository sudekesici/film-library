
import { initializeApp } from 'firebase/app';
import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCwOVhRVm5J-yalsBqZdY2sQcLTWiSZIEQ",
  authDomain: "film-library-23f13.firebaseapp.com",
  projectId: "film-library-23f13",
  storageBucket: "film-library-23f13.appspot.com",
  messagingSenderId: "455879656143",
  appId: "1:455879656143:web:35a16eed73f0fa9b932dba"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

export const signOut = firebaseSignOut;
