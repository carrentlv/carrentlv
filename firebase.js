import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "IDE JÖN",
  authDomain: "IDE JÖN",
  projectId: "IDE JÖN",
  storageBucket: "IDE JÖN",
  messagingSenderId: "IDE JÖN",
  appId: "IDE JÖN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
