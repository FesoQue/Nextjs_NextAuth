import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;

  if (status === "loading") {
    return <button>Hang on there...</button>;
  }

  return (
    <nav>
      {status == "authenticated" ? (
        <>
          <p>Signed in as {userEmail}</p>
          {/* signOut({ callbackUrl: 'http://localhost:3000/foo' }) */}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        //By default, when calling the signIn() method with no arguments, you will be redirected to the NextAuth.js sign-in page. If you want to skip that and get redirected to your provider's page immediately, call the signIn() method with the provider's id.
        <button
          onClick={() =>
            signIn("github", { callbackUrl: "http://localhost:3000/admin" })
          }
        >
          Sign in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
