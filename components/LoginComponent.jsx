import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("log in");
    setLoading(true);
    console.log(email, password);
    if (email && password) {
      try {
        // Creating user's account
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("user", user);
        if (user) {
          console.log(user);
          router.push("/");
        }

        //Saving user's details
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();
        console.log("userData", userData);
        toast.success("logged in successfully");
        setLoading(false);
      } catch (e) {
        console.log("error", e);
        toast.error(e.message);
        setLoading(false);
      }
    } else {
      toast.error("Make sure email and passoword are not empty");
    }
  };
  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginComponent;
