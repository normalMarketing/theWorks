// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvzluD6XL82ynkzpuOPBgiFf79KY0vmps',
  authDomain: 'work-852ba.firebaseapp.com',
  projectId: 'work-852ba',
  storageBucket: 'work-852ba.appspot.com',
  messagingSenderId: '393823500110',
  appId: '1:393823500110:web:2674ac07331f2620e9901f',
  measurementId: 'G-94Q1M1N88W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
