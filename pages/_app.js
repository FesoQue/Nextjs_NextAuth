import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Navbar from "@/components/sharedlayout/Navbar";
import Auth from "@/components/auth/Auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      {Component.auth ? (
        <Auth role={Component.auth.role}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
