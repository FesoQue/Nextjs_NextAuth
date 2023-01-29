import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import style from "../styles/dashboard.module.css";

export default function Dashboard() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return router.push("/");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <main style={{ minHeight: "100vh" }} className={style.main}>
      <div>
        <h1>This is the dashboard</h1>
        <Link href={"/"}>Go Home</Link>
      </div>
    </main>
  );
}
