import Navbar from "@/components/navbar/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ComicI } from "@/interfaces/comics";
import "@/styles/globals.css";
import { ContextProvider } from "@/utils/context";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  );
}
