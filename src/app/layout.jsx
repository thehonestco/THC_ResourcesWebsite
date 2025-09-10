import "./globals.css";
import Navbar from "../components/Navbar";
import { Barlow } from "next/font/google";

export const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
