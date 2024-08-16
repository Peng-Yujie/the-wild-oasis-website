import { Josefin_Sans } from "next/font/google";

import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  // title: "The Wild Oasis"
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: "A luxury cabin retreat in the heart of the wilderness."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
