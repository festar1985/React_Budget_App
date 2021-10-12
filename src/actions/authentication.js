import { googleProvider } from "../firebase/firebase";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return () => signInWithPopup(getAuth(), googleProvider);
};

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogOut = () => {
  return () => signOut(getAuth());
};
