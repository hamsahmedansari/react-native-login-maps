import { auth, firestore } from "../utils/firebase";

export const updateUserLocation = async (location, uid) =>
  firestore
    .collection("users")
    .doc(uid)
    .update({
      location
    });

export const getAllUsers = () => firestore.collection("users");
