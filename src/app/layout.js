import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./componants/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body style={{color:"black"}} className={inter.className}><NavBar/>{children}</body>
    </html>
  );
}
