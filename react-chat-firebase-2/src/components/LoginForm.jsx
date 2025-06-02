import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const auth = getAuth();

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Account created successfully!");
      }
    } catch (err) {
      setError(err.message);
    }
//  Login = async () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       alert("Logged in with Google!");
//     } catch (err) {
//       setError(err.message);
//     }
  }; // ✅ This was the missing closing brace


  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      {/* <button type="button" onClick={handleGoogleLogin}>
        Continue with Google
      </button> */}
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </form>
  );
};

export default AuthForm;
