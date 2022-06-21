import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCim86nGo1Fc6Zn8tspx4XG5nrfDvJrw54',
  authDomain: 'crwn-clothing-db-6ea08.firebaseapp.com',
  projectId: 'crwn-clothing-db-6ea08',
  storageBucket: 'crwn-clothing-db-6ea08.appspot.com',
  messagingSenderId: '935066635686',
  appId: '1:935066635686:web:2732a180826e2605319367',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
