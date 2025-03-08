import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "PlotXpert - Land Verification Made Easy",
  description: "Verify land validity effortlessly with trusted records.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="bg-softCreamy text-dark font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
