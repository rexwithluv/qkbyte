import UserProvider from "@/app/context/user";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <body className="layout-body">
        <UserProvider>
          <NavBar />

          <main className="main-content">
            {children}
          </main>

          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
