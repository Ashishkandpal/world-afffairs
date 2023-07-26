"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@lib/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Nav = () => {
  const pathName = usePathname();
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  useEffect(() => {
    if (user) {
      router.push("/personalized");
    }
  }, [loading, user]);

  const handleLogout = async () => {
    try {
      await signOut(auth)
        .then(() => {
          //sign out successful
          console.log("logged out");
          router.push("/");
        })
        .catch((error) => {
          //an error happened
          console.log(error.message);
        });
    } catch (e) {
      console.log(error.message);
    }
  };

  return (
    <nav className="nav-head">
      <Link href="/" className="nav-child logo">
        World Affairs
      </Link>
      {user ? (
        <button onClick={handleLogout} className="nav-child sign-in">
          Sign Out
        </button>
      ) : (
        <Link href="/signup" className="nav-child sign-in">
          {pathName !== "/signup" && "Sign In"}
        </Link>
      )}
    </nav>
  );
};

export default Nav;
