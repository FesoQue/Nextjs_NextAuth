import React, { useEffect, useState } from "react";
import styles from "../../styles/signin.module.css";
import {
  AiFillGithub,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { signIn, useSession } from "next-auth/react";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";

const providers = [
  {
    id: 1,
    provider: "github",
    icon: <AiFillGithub />,
  },
  {
    id: 2,
    provider: "google",
    icon: <AiOutlineGoogle />,
  },
  {
    id: 3,
    provider: "twitter",
    icon: <AiOutlineTwitter />,
  },
];

const Signin = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session) {
      setTimeout(() => {
        push("/");
      }, 3000);
    }
  }, [session, push]);

  const handleOauthSignin = (provider) => () =>
    signIn(provider, { callbackUrl: "http://localhost:3000/" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return false;

    signIn("email", { email, redirect: false });
  };

  return (
    <main className={styles.main}>
      {status === "loading" ? (
        <div>
          <ClipLoader
            color={"#555"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      ) : session ? (
        <h1>You are already signed in</h1>
      ) : (
        <div className={styles.providers}>
          <div>
            <form className={styles.form} onSubmit={handleLogin}>
              <input
                type="email"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button disabled={loading}>Login</button>
            </form>
          </div>
          {providers.map((name) => {
            return (
              <div key={name.id}>
                <button
                  className={styles.loginBtn}
                  onClick={handleOauthSignin(name.provider)}
                >
                  <span>{name.icon}</span> {`Sign in with ${name.provider}`}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Signin;
