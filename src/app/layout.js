//src/app/layout.js
// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-100">
        <ThemeProvider>
  <Navbar />
  <main className="pt-8">{children}</main>
</ThemeProvider>

      </body>
    </html>
  );
}
