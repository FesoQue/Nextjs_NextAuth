import { useSession, signOut } from "next-auth/react";

const useSessionData = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;
  const userAvatar = session?.user.image;
  const userName = session?.user.name;
  const loading = status === "loading";
  const authenticated = status === "authenticated";

  return {
    userEmail,
    userAvatar,
    userName,
    session,
    loading,
    authenticated,
    signOut,
  };
};

export default useSessionData;
