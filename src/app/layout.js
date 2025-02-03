import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";


export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <body className="layout-body">
        <NavBar />

        <main className="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
