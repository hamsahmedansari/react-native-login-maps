import { auth, firestore } from "../utils/firebase";
import { getAllUsers } from "../api/helper";

export const registerUser = async (email, fullname, password, gender) =>
  auth.createUserWithEmailAndPassword(email, password).then(({ user }) =>
    firestore
      .collection("users")
      .doc(user.uid)
      .set({
        fullname,
        gender,
        location: {}
      })
      .then(d => {
        return user.uid;
      })
  );

export const loginUser = async (email, password) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => getUserData(user.uid).get());

export const getUserData = uid => firestore.collection("users").doc(uid);

export const logout = async () => auth.signOut();
