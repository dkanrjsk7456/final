// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCkY4z5GVzdCx4cff40Qo6MC6QWbbYB4II',
  authDomain: 'last-f3028.firebaseapp.com',
  projectId: 'last-f3028',
  storageBucket: 'last-f3028.appspot.com',
  messagingSenderId: '1:11110938934:web:b83f7b9dc6f2754a3b5b97',
  appId: '1:11110938934:web:b83f7b9dc6f2754a3b5b97' 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; // auth와 db를 export
