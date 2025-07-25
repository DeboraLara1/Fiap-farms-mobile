import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1nwm87wXu0z6dyJuMSVUnz7kqrONu7J0",
  authDomain: "fiap-7a2b2.firebaseapp.com",
  projectId: "fiap-7a2b2",
  storageBucket: "fiap-7a2b2.appspot.com",
  messagingSenderId: "144374054580",
  appId: "1:144374054580:android:e99272dc164afbbc1061e1",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
//debora.lara@fiap.com
