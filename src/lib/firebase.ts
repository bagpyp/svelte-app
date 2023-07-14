import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyDwjWoSomDrJLzPr37N_8w-h3y5lfbMTxw",
  authDomain: "bagpyp-9de3b.firebaseapp.com",
  projectId: "bagpyp-9de3b",
  storageBucket: "bagpyp-9de3b.appspot.com",
  messagingSenderId: "973506498249",
  appId: "1:973506498249:web:4bfd39b9a3d975f682c718",
  measurementId: "G-0CVF7ERZQW"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();



function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();