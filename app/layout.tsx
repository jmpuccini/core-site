import "../public/output.css";
import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import TawkScript from "../components/TawkScript";

export const metadata = {
  title: "Corevolve",
  description: "Align leadership, culture, and purpose to evolve without losing your core",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
       {/* <TawkScript /> */}
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

