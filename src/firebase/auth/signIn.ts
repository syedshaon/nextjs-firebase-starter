import firebase_app from "../config";
import { signInWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebase_app);

// Function to sign in with email and password
export default async function signIn(email: string, password: string) {
  let result = null, // Variable to store the sign-in result
    error = null; // Variable to store any error that occurs

  try {
    result = await signInWithEmailAndPassword(auth, email, password); // Sign in with email and password
  } catch (e) {
    error = e; // Catch and store any error that occurs during sign-in
  }

  return { result, error }; // Return the sign-in result and error (if any)
}

export async function signInWithGoogle() {
  let result = null, // Variable to store the sign-in result
    error = null; // Variable to store any error that occurs

  try {
    // result = await signInWithEmailAndPassword(auth, email, password); // Sign in with email and password
    const provider = new GoogleAuthProvider();
    result = await signInWithPopup(auth, provider); // Sign in with google
  } catch (e) {
    error = e; // Catch and store any error that occurs during sign-in
  }

  return { result, error }; // Return the sign-in result and error (if any)
}
