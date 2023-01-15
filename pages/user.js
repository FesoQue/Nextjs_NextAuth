import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import style from "../styles/dashboard.module.css";

const User = () => {
  const { data: session } = useSession();
  return (
    <main className={style.main}>
      <div>
        <h1> User Dashboard Page</h1>
        <span>My name is {session?.user.name}</span> <br /> <br />
        <Link href={"/"}>Go Home</Link>
      </div>
    </main>
  );
};

User.auth = {
  role: "user",
};

export default User;
