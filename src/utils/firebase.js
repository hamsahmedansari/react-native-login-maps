import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {};
firebase.initializeApp(config);
// export const initializeApp = () => ;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
