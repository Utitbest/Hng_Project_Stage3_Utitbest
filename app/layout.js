import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConvexClientProvider from "./ConvexClientProvider";
import {CartProvider} from "@/app/context/CartContext"
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
});

export const metadata = {
  title: "Audiophile E-Commerce",
  description: "Stage 3 HNG Task - Next.js + Convex + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-gray-50 text-gray-800 flex flex-col min-h-screen`}>
        <ConvexClientProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </CartProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}


