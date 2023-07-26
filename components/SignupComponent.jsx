"use client";

import React, { useState } from "react";
import { auth, db } from "@lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import Category from "./Category";

const SignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favourite, setFavourite] = useState();
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user", user);

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email,
        uid: user.uid,
        favourite: favourite,
      });
      console.log(favourite);
      router.push("/");
      // User successfully signed up
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="signup-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <Category favourite={setFavourite} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupComponent;
