import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Auth = ({ children, role }) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const hasUser = !!session?.user;
  const router = useRouter();
  const hasAccess = session && role;

  useEffect(() => {
    if (!loading && !hasUser) {
      router.push("/");
    } else if (!hasAccess) {
      router.push("/access-denied");
    }
  }, [loading, hasUser, router]);

  if (loading || !hasUser) {
    return (
      <main style={{ display: "grid", placeItems: "center" }}>
        <ClipLoader
          color={"#ddd"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
        />
      </main>
    );
  }
  return children;
};

export default Auth;
