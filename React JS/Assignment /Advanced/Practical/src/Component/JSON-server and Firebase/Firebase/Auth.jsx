import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../../../firebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Register done....");
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login done.....");
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
    alert("Google login done");
  };

  const logout = async () => {
    await signOut(auth);
    alert("logout done....");
  };

  return (
    <div>
      <h1>Authentication</h1>

      <input
        type="email"
        placeholder="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={googleLogin}>Google Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
