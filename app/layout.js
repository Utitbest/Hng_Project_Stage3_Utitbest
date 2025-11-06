import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConvexClientProvider from "./ConvexClientProvider";
import {CartProvider} from "@/app/context/CartContext"
import Head from "next/head";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
});

export const metadata = {
  title: "Utitbest-Audiophile E-Commerce ",
  description: "Audiophile E-Commerce: Shop premium headphones and audio accessories with a seamless, responsive, and modern online shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://ecommerce-utitbest.netlify.app/utitbestsiteIcon.png" type="image/png"/>
      </Head>
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


