import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

//元来秘匿すべきものだが今回の学習目的(Next.js)とは逸れるため公開 bunにも関わらずnpmを使用したのも同じ理由
const firebaseConfig = {
  apiKey: "AIzaSyCjkeyr5b5wCaUPmrjItT73wY32y5cN5Vg",
  authDomain: "intro-app-51116.firebaseapp.com",
  projectId: "intro-app-51116",
  storageBucket: "intro-app-51116.firebasestorage.app",
  messagingSenderId: "495652929579",
  appId: "1:495652929579:web:2a938fdabd4a26ef8dea6e",
  measurementId: "G-34M8D9F0RE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
