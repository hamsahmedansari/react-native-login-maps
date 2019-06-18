import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCi2s9iijA32T8PIS1TLafPp7_A2_B2nzY",
  authDomain: "react-native-login-map.firebaseapp.com",
  databaseURL: "https://react-native-login-map.firebaseio.com",
  projectId: "react-native-login-map",
  storageBucket: "react-native-login-map.appspot.com",
  messagingSenderId: "39486846337",
  appId: "1:39486846337:web:67835ac07759fafb"
};
firebase.initializeApp(config);
// export const initializeApp = () => ;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
