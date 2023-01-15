import Link from "next/link";
import React from "react";
import style from "../styles/dashboard.module.css";

const AccessDenied = () => {
  return (
    <main
      style={{ display: "grid", placeItems: "center" }}
      className={style.main}
    >
      <div>
        <h1>Access Denied! 😞 </h1>
        <Link href={"/"}>Go back to homepage</Link>
      </div>
    </main>
  );
};

export default AccessDenied;
