import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3WN0oFFCMJ1oNnXn_4ISFGGguYRIobqY",
  authDomain: "react-native-register-85025.firebaseapp.com",
  projectId: "react-native-register-85025",
  storageBucket: "react-native-register-85025.firebasestorage.app",
  messagingSenderId: "335893806016",
  appId: "1:335893806016:web:c0ce53f85b13f74f0d6625",
};

let auth;
if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  auth = getAuth();
}

export default auth;
