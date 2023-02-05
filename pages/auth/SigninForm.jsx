import styles from "../../styles/signin.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

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
  {
    id: 4,
    provider: "facebook",
    icon: <FaFacebookF />,
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
    // uncomment when sengrid approves account
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
                placeholder="hello@me.com"
              />

              {/* <button>Sign in with Email</button> */}
              <span className="text-center text-sm text-red-400">
                Coming soon...
              </span>
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
