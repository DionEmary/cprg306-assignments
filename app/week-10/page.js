"use client";

// Import necessary hooks
import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const UserProfile = () => {
  // Use the useUserAuth hook to get the user object and the login/logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // State to handle loading, errors, and sign-in status
  const [error, setError] = useState(null);
  const [signingIn, setSigningIn] = useState(false);

  // Sign in with GitHub when the component mounts or when clicking the sign-in button
  const handleGitHubSignIn = async () => {
    setSigningIn(true);
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in");
    } finally {
      setSigningIn(false);
    }
  };

  // Sign out function
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      setError("Failed to sign out");
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Shopping List App</h1>
      {user ? (
        <div>
          <p className="mt-6">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button className="bg-red-500 rounded-sm my-6 mx-1 p-1 text-white hover:bg-red-900 w-40" onClick={handleSignOut}>Sign Out</button>
          <br/>
          <Link className="font-semibold" href="week-10/shopping-list">
            Link to Shopping List
          </Link>
        </div>
      ) : (
        <div className="mt-6">
          <button onClick={handleGitHubSignIn} disabled={signingIn}>
            {signingIn ? "Signing in..." : "Sign in with GitHub"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
