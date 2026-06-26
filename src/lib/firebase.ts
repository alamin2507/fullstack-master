import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// These configuration values are safe to expose on the client side.
// They are protected on the server side by Firestore Security Rules.
const firebaseConfig = {
  apiKey: "AIzaSyAmhs3H0G5ClPkzQRMYNlFOl4CIO7_exN0",
  authDomain: "solar-pact-l74w7.firebaseapp.com",
  projectId: "solar-pact-l74w7",
  storageBucket: "solar-pact-l74w7.firebasestorage.app",
  messagingSenderId: "892261992585",
  appId: "1:892261992585:web:fbfb1e383ff943ca561e58",
  firestoreDatabaseId: "ai-studio-fullstackwebdeve-b24b94e2-3643-4dd9-ac6a-9673c25ab8a5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
