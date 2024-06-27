// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjiWiz2p8pKjBnExonedDhM05ZENf-jAc",
  authDomain: "loginformtask.firebaseapp.com",
  projectId: "loginformtask",
  storageBucket: "loginformtask.appspot.com",
  messagingSenderId: "179267408158",
  appId: "1:179267408158:web:3f81f2d39a7c8dcbae390f",
  measurementId: "G-HRRF0MMGBN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
