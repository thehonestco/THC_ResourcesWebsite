import "./globals.css";
import Navbar from "../components/Navbar";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow", // custom CSS variable
});

export const metadata = {
  title: "My App",
  description: "Using Barlow font everywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable}`}>
      <body className="font-barlow">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
