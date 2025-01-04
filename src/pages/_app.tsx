import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/context/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <Navbar />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
