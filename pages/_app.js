import { SessionProvider } from "next-auth/react";
import "@/styles/index.css";
import Auth from "@/auth-role/Auth";
import Navbar from "@/components/Navbar";
import { Provider } from "react-wrap-balancer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider>
        <Navbar />
        {Component.auth ? (
          <Auth role={Component.auth.role}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </SessionProvider>
  );
}
