import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "next/font/google";
const mont = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${mont.className} flex min-h-screen flex-col overflow-x-hidden bg-[#F8EDE3]`}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
