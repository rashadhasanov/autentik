import "./globals.css";
import ContactInfo from "@/components/ContactInfo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ContactInfo />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
