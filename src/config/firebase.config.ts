// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBh7g2BCN8XJYJ-bGcOWDqVS48aEqjTBd0',
  authDomain: 'grid-grow-skills.firebaseapp.com',
  databaseURL: 'https://grid-grow-skills.firebaseio.com',
  projectId: 'grid-grow-skills',
  storageBucket: 'grid-grow-skills.appspot.com',
  messagingSenderId: '397416974506',
  appId: '1:397416974506:web:0af6f312e4475ae85e68d3',
  measurementId: 'G-JNMYS3L7K1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
