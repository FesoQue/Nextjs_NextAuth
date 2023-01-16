import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Navbar from "@/components/sharedlayout/Navbar";
import Auth from "@/components/auth/Auth";
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
