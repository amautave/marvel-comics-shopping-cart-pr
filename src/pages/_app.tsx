import Navbar from "@/components/navbar/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
