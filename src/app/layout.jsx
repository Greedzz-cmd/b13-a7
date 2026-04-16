import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Suspense } from "react";
import FriendsProvider, { FriendsContext } from "@/context/FriendsContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Your personal shelf of meaningful connections.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        <FriendsProvider>
          <Header></Header>
          <main className="bg-slate-100 flex-1">{children}</main>
          <Footer></Footer>
        </FriendsProvider>
        <ToastContainer position="top-center"></ToastContainer>
      </body>
    </html>
  );
}
