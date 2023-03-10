import { useSession } from "next-auth/react";
import Link from "next/link";
import style from "../styles/dashboard.module.css";

const Admin = () => {
  const { data: session } = useSession();
  return (
    <main className={style.main}>
      <div>
        <h1> Admin Dashboard Page</h1>
        <span>My name is {session?.user.name}</span> <br /> <br />
        <Link href={"/"}>Go Home</Link>
      </div>
    </main>
  );
};
// Admin.auth = true;
Admin.auth = {
  role: "admin",
};
// Admin.auth = {
//   role: "admin",
//   loading: <AdminLoadingSkeleton />,
//   unauthorized: "/login-with-different-user", // redirect to this url
// };

export default Admin;
