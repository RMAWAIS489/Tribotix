import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(180deg, #020B13 0%, #0A2C3E 100%)",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
