import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;
  const loading = status === "loading";

  return (
    <nav>
      {status == "authenticated" ? (
        <>
          <p>Signed in as {userEmail}</p>
          {/* signOut({ callbackUrl: 'http://localhost:3000/foo' }) */}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : //By default, when calling the signIn() method with no arguments, you will be redirected to the NextAuth.js sign-in page. If you want to skip that and get redirected to your provider's page immediately, call the signIn() method with the provider's id.
      loading ? (
        <button disabled={loading}>
          <BeatLoader
            color={"#ddd"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
          />
        </button>
      ) : (
        <button
          onClick={
            // () => signIn()
            signIn("github", { callbackUrl: "http://localhost:3000/" })
          }
        >
          Sign in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
